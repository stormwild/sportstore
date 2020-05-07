import React from 'react';
import PaginationButtons from './PaginationButtons';

const PaginationControls = ({
  sizes = [5, 10, 25, 100],
  keys = ['Name', 'Price'],
}) => {
  return (
    <>
      <div className='row mb-3'>
        <div className='col-12 text-center'>
          <PaginationButtons
          // currentPage={this.props.currentPage}
          // pageCount={this.props.pageCount}
          // navigate={this.props.navigateToPage}
          />
        </div>
      </div>
      <div className='form-inline justify-content-center mb-3'>
        <select name='' id='' className='form-control mr-3'>
          <option value=''>per page</option>
        </select>
        <select name='' id='' className='form-control'>
          <option value=''>Sort by</option>
        </select>
      </div>
    </>
  );
};

export default PaginationControls;
