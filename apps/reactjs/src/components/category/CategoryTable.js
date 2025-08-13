import React from 'react';
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,CButton 
} from '@coreui/react';

const CategoryTable = ({ items,handleOpenModal,handleDelete }) => {
  if (!items || items.length === 0) {
    return <div>Không có dữ liệu.</div>
  }
  return (
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>#</CTableHeaderCell>
          <CTableHeaderCell>Tên</CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {items && items.map((item,index) => (
          <CTableRow key={item.id}>
            <CTableDataCell>{index+1}</CTableDataCell>
            <CTableDataCell>{item.name}</CTableDataCell>
              <CTableDataCell>
                    <CButton
                      size="sm"
                      color="primary"
                      className="me-2"
                      onClick={() => handleOpenModal(item)}
                    >
                      Sửa
                    </CButton>
                    <CButton
                      size="sm"
                      color="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Xoá
                    </CButton>
                  </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default CategoryTable;
