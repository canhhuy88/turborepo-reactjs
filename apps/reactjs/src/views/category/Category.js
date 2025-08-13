import { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CContainer, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter,
  CForm, CFormLabel, CFormInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

import CategoryTable from 'src/components/category/CategoryTable';
import PaginationControls from 'src/components/PaginationControls';
import { fetchCategories } from 'src/services/categoryService';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '' })
  const [editItem, setEditItem] = useState(null)

  const handleOpenModal = (item = null) => {
    setEditItem(item)
    setFormData(item ? { name: item.name, id: item.id } : { name: '', id: '' })
    setVisible(true)
  };

  const handleCloseModal = () => {
    setEditItem(null)
    setFormData({ name: '' })
    setVisible(false)
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xoá?')) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
  };

  const fetchProducts = async (currentPage) => {
    const data = await fetchCategories(page, 5, '');
    if (data) {
      setProducts(data.items || []);
      setTotalPages(data.totalPages || 1);
    }
  };

  const handleSave = () => {
    if (editItem) {
      console.log(`editItem: ${JSON.stringify(formData)}`);
      //call api save to db
    } else {
      // Add
      const newItem = {
        id: '',
        name: formData.name,
      }
      console.log(`newItem: ${JSON.stringify(newItem)}`);
      //call api save to db
    }
    fetchProducts(page);
    handleCloseModal()
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Quản lý danh mục sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            <CContainer className="px-4">
              <CForm className="row gy-2 gx-3 align-items-center">
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                    Tên danh mục
                  </CFormLabel>
                  <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
                </CCol>
                <CCol xs="auto">
                  <CButton color="primary" type="submit">
                    Submit
                  </CButton>
                </CCol>
                <CCol>
                  <CButton
                    color="success"
                    variant="outline"  onClick={() => handleOpenModal()}
                  >
                    <CIcon icon={cilPlus} className="me-2"  />
                    Thêm  mới
                  </CButton>
                </CCol>
              </CForm>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CategoryTable items={products} handleOpenModal={handleOpenModal} handleDelete={handleDelete} />
            <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
          </CCardBody>
        </CCard>
      </CCol>

      {/* Modal Thêm/Sửa */}
      <CModal visible={visible} onClose={handleCloseModal}>
        <CModalHeader>
          <CModalTitle>{editItem ? 'Sửa' : 'Thêm'} danh mục</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormLabel htmlFor="name">Tên danh mục</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập tên..."
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleCloseModal}>
            Huỷ
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Lưu
          </CButton>
        </CModalFooter>
      </CModal>

    </CRow>
  )
}

export default Category

