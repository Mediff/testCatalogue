import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import Product from '../Product/Product';
import Header from '../../components/Header/Header';

const Main = () => (
    <div>
        <Header />
        <Switch>
            <Redirect exact from='/' to='/products' />
            <Route exact path='/products' component={props => <ProductList {...props} />} />
            <Route path='/products/product/:id' component={props => <Product {...props} />} />
        </Switch>
    </div>
);


export default Main;
