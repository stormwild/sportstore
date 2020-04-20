import React, { useEffect, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { DataTypes, Product } from '../data/Types';
import Shop from './Shop';

const mapStateToProps = (dataStore: any) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
};

const filterProducts = (products: Product[] = [], category: any) =>
  !category || category === 'All'
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );

type ShopConnectorComponentProps = {
  products: Product[];
  categories: string[];
  loadData: Function;
};

class ShopConnectorComponent extends Component<ShopConnectorComponentProps> {
  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }

  render() {
    return (
      <Switch>
        <Route
          path='/shop/products/:category?'
          render={(routeProps) => (
            <Shop
              {...this.props}
              {...routeProps}
              categories={this.props.categories}
              products={filterProducts(
                this.props.products,
                routeProps.match.params.category
              )}
            />
          )}
        />
        <Redirect to='/shop/products' />
      </Switch>
    );
  }
}

const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: any) => <ShopConnectorComponent {...props} />);

export default ShopConnector;
