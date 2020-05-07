import React, { useEffect } from 'react';
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
import DataGetter from './DataGetter';

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

const ShopConnectorComponent = (props: ShopConnectorComponentProps) => {
  const { loadData, categories, cart, cartItems, cartPrice, history } = props;

  useEffect(() => {
    loadData(DataTypes.CATEGORIES);
  }, []);

  return (
    <Switch>
      <Redirect
        from='/shop/products/:category'
        to='/shop/products/:category/1'
        exact={true}
      />
      <Route
        path='/shop/products/:category/:page'
        render={(routeProps) => (
          <DataGetter {...props} {...routeProps}>
            <Shop
              {...props}
              {...routeProps}
              categories={categories}
              addToCart={addToCart}
              history={history}
            />
          </DataGetter>
        )}
      />
      <Route
        path='/shop/cart'
        render={(routeProps) => (
          <CartDetails
            cartItems={cartItems}
            cart={cart}
            cartPrice={cartPrice}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            {...props}
            {...routeProps}
          />
        )}
      />
      <Redirect to='/shop/products/all/1' />
    </Switch>
  );
};

const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: any) => <ShopConnectorComponent {...props} />);

export default ShopConnector;
