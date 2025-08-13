import React from 'react';
import { CButton, CRow, CCol } from '@coreui/react';

const PaginationControls = ({ page, totalPages, setPage }) => {
  return (
    <CRow className="mt-3 justify-content-center">
      <CCol xs="auto">
        <CButton color="secondary" onClick={() => setPage(page - 1)} disabled={page === 1}>
          ← Trước
        </CButton>
      </CCol>
      <CCol xs="auto" className="align-self-center">
        Trang {page} / {totalPages}
      </CCol>
      <CCol xs="auto">
        <CButton color="secondary" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Tiếp →
        </CButton>
      </CCol>
    </CRow>
  );
};

export default PaginationControls;
