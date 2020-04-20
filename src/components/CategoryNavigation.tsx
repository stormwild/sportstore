import React from 'react';
import ToggleLink from './ToggleLink';

const CategoryNavigation = ({
  baseUrl,
  categories,
}: {
  baseUrl: string;
  categories: string[];
}) => {
  return (
    <>
      <ToggleLink className='btn btn-block' to={baseUrl} exact={true}>
        All
      </ToggleLink>
      {categories &&
        categories.map((category) => (
          <ToggleLink
            className='btn btn-block'
            key={category}
            to={`${baseUrl}/${category.toLowerCase()}`}
          >
            {category}
          </ToggleLink>
        ))}
    </>
  );
};

export default CategoryNavigation;
