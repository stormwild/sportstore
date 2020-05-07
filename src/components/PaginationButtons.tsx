import React from 'react';

const PaginationButtons = (props: any) => {
  return (
    <>
      <button
        // onClick={() => navigate(current - 1)}
        // disabled={current === 1}
        className='btn btn-secondary mx-1'
      >
        Previous
      </button>
    </>
  );
};

export default PaginationButtons;
