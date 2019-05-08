import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { getProductsAction, setProductAction } from '../../actions/actionCreator';
import styles from './ProductList.module.sass';
import ProductCard from '../../components/ProductCard/ProductCard';

class ProductList extends Component {
    componentDidMount() {
        const { products, getProducts } = this.props;
        if (!products) {
            getProducts();
        }
    }

    onButtonClick = (product) => {
        const { history, setProduct } = this.props;
        setProduct(product, history);
    };

    renderProducts = () => {
        const { products } = this.props;
        return products.map(product => (
            <div className={styles.itemContainer} key={product.id}>
                <ProductCard product={product} buttonClick={this.onButtonClick} />
            </div>
        ));
    };

    render() {
        const { products } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.itemsContainer}>
                    {products && this.renderProducts()}
                </div>
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
    setProduct: (product, history) => dispatch(setProductAction(product, history)),
});

ProductList.defaultProps = {
    products: [],
    getProducts: noop,
    setProduct: noop,
    history: null,
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    getProducts: PropTypes.func,
    setProduct: PropTypes.func,
    history: PropTypes.instanceOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
