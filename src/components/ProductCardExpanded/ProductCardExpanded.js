import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCardExpanded.module.sass';
import { staticURL } from '../../api/baseURL';

const ProductCardExpanded = ({ product }) => (
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
            </div>
        </div>
    </div>
);

ProductCardExpanded.defaultProps = {
    product: null,
};

ProductCardExpanded.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        img: PropTypes.string,
    }),
};

export default ProductCardExpanded;
