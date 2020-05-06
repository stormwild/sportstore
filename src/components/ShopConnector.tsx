import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { DataTypes, Product, CartPayload } from '../data/Types';
import Shop from './Shop';
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from '../data/CartActionCreators';
import CartDetails from './CartDetails';

const mapStateToProps = (dataStore: any) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
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
  cartItems: number;
  cart: CartPayload[];
  cartPrice: number;
  addToCart: Function;
  updateCartQuantity: Function;
  removeFromCart: Function;
  history: string[];
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
              addToCart={this.props.addToCart}
              history={this.props.history}
            />
          )}
        />
        <Route
          path='/shop/cart'
          render={(routeProps) => (
            <CartDetails
              cartItems={this.props.cartItems}
              cart={this.props.cart}
              cartPrice={this.props.cartPrice}
              updateCartQuantity={this.props.updateCartQuantity}
              removeFromCart={this.props.removeFromCart}
              {...this.props}
              {...routeProps}
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
