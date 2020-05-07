import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setPageSize, setSortKey } from '../data/ActionCreators';
import { PageStore, SortStore } from '../data/Types';
import { ComponentType } from 'react';

const mapStateToProps = (store: PageStore | SortStore): PageStore | SortStore =>
  store;

const mapDispatchToProps = { setPageSize, setSortKey };

const mergeProps = (
  store: PageStore | SortStore,
  actionCreators: any,
  router: any
) => ({
  ...store,
  ...router,
  ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil(
    ((store as PageStore).products_total | (store as PageStore).pageSize || 5) /
      ((store as PageStore).pageSize || 5)
  ),
  navigateToPage: (page: number) =>
    router.history.push(
      `/shop/products/${router.match.params.category}/${page}`
    ),
});

export const ProductConnector = (PageComponent: any) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );
