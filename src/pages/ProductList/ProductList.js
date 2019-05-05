import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { getProductsAction } from '../../actions/actionCreator';
import styles from './ProductList.module.sass';

class ProductList extends Component {
    componentDidMount() {
        const { products, getProducts } = this.props;
        if (!products) {
            getProducts();
        }
    }

    render(){
        console.log(this.props.products);
        return (
            <div className={styles.mainContainer}>
                Hello from Catalogue
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.productReducers.isFetching,
    productError: state.productReducers.productError,
    products: state.productReducers.products,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductsAction()),
});

ProductList.defaultProps = {
    products: [],
    getProducts: noop,
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    getProducts: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
