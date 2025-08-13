import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead, CFormSelect, CFormCheck, CButton, CPagination,
  CTableHeaderCell, CContainer, CPaginationItem,
  CTableRow, CForm, CFormLabel, CFormInput, CInputGroup, CInputGroupText
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilBell, cilPlus } from '@coreui/icons'

import CategoryTable from 'src/components/category/CategoryTable';
import PaginationControls from 'src/components/PaginationControls';


const CategoryBackup = () => {
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
                    variant="outline"
                  >
                    <CIcon icon={cilPlus} className="me-2" />
                    Thêm
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

            <CTable striped hover small>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tên danh mục</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>

            <CPagination aria-label="Page navigation example" className="justify-content-end">
              <CPaginationItem aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}
