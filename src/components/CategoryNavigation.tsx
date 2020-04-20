import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryNavigation = ({
  baseUrl,
  categories,
}: {
  baseUrl: string;
  categories: string[];
}) => {
  return (
    <>
      <Link className='btn btn-secondary btn-block' to={baseUrl}>
        All
      </Link>
      {categories &&
        categories.map((category) => (
          <Link
            className='btn btn-secondary btn-block'
            key={category}
            to={`${baseUrl}/${category.toLowerCase()}`}
          >
            {category}
          </Link>
        ))}
    </>
  );
};

export default CategoryNavigation;
