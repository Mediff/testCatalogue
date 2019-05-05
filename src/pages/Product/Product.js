import React, {Component} from 'react';
import styles from './Product.module.sass';
import { login } from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';

class Product extends Component {
    render(){
        return (
            <div className={styles.mainContainer}>
                Hello from Product
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.userReducers.isFetching,
        authError: state.userReducers.authError,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);