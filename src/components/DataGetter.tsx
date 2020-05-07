import React, { ReactNode, useEffect } from 'react';
import { DataTypes } from '../data/Types';

type StringIndexed = {
  [index: string]: any;
};

type Params = {
  page: number;
  category: string;
};

type Match = {
  params: Params;
};

type ProductParams = {
  _limit?: number;
  _sort?: string;
  _page?: number;
  category_like?: string;
};

type DataGetterProps = {
  children: ReactNode;
  products_params?: ProductParams;
  pageSize?: number;
  sortKey?: string;
  match: Match;
  loadData: Function;
};

const DataGetter = ({
  children,
  products_params = {},
  pageSize = 5,
  sortKey = 'name',
  match: {
    params: { page = 1, category },
  },
  loadData,
}: DataGetterProps) => {
  useEffect(() => {
    const dsData: StringIndexed = products_params;
    const rtData: StringIndexed = {
      _limit: pageSize,
      _sort: sortKey,
      _page: page,
      category_like: (category || '') === 'all' ? '' : category,
    };

    if (
      Object.keys(rtData).find((key: string) => dsData[key] !== rtData[key])
    ) {
      loadData(DataTypes.PRODUCTS, rtData);
    }
  });

  return <>{children}</>;
};

export default DataGetter;
