import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import styles from './ProductCard.module.sass';
import { staticURL } from '../../api/baseURL';

const ProductCard = ({ product, buttonClick }) => (
    <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
            <div>{product.title}</div>
        </div>
        <div className={styles.bodyContainer}>
            <div className={styles.imgContainer}>
                <img src={`${staticURL}${product.img}`} alt='Product Card' />
            </div>
            <div className={styles.descContainer}>
                <div>Product description: </div>
                <div>{product.text}</div>
                <button className={styles.button} type='button' onClick={() => buttonClick(product)}>Leave Review</button>
            </div>
        </div>
    </div>
);

ProductCard.defaultProps = {
    product: null,
    buttonClick: noop,
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        img: PropTypes.string,
    }),
    buttonClick: PropTypes.func,
};

export default ProductCard;
