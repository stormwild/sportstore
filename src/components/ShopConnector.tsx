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
  loadData: Function;
};

class ShopConnectorComponent extends Component<ShopConnectorComponentProps> {
  render() {
    return (
      <Switch>
        <Route
          path='/shop/products/:category?'
          render={(routeProps) => (
            <Shop
              {...this.props}
              {...routeProps}
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
  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }
}

const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: any) => <ShopConnectorComponent {...props} />);

export default ShopConnector;

/*
  const {
    products,
    loadData,
  }: { products: Product[]; loadData: Function } = props;

  useEffect(() => {
    loadData(DataTypes.PRODUCTS);
    console.log(JSON.stringify(props));
  }, []);

  return (
    <Switch>
      <Route
        path='/shop/products/:category?'
        render={(routeProps) => (
          <Shop
            {...props}
            {...routeProps}
            products={filterProducts(
              products,
              routeProps.match.params.category
            )}
          />
        )}
      />
      <Redirect to='/shop/products' />
    </Switch>
  );
*/
