import React from 'react';
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell
} from '@coreui/react';

const ProductTable = ({ products }) => {
  return (
    <CTable striped hover responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>Tên sản phẩm</CTableHeaderCell>
          <CTableHeaderCell>Giá</CTableHeaderCell>
          <CTableHeaderCell>Số lượng</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {products.map((product) => (
          <CTableRow key={product.id}>
            <CTableDataCell>{product.id}</CTableDataCell>
            <CTableDataCell>{product.name}</CTableDataCell>
            <CTableDataCell>{product.price}</CTableDataCell>
            <CTableDataCell>{product.stock}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};
export default ProductTable;
