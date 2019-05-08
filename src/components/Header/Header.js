import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noop from 'lodash/noop';
import connect from 'react-redux/es/connect/connect';
import { logoutAction } from '../../actions/actionCreator';
import styles from './Header.module.sass';
import menuIcon from '../../images/menu.png';

class Header extends Component {
    userLinks = () => {
        const { user, logout } = this.props;
        return (
            <div>
                <p className={styles.links}>
                    {`Hello, ${user.username}`}
                </p>
                <Link className={styles.links} to='/' onClick={() => logout()}>Logout</Link>
            </div>
        );
    };

    guestLinks = () => (
        <div>
            <Link to='/login' className={styles.links}>Sign In</Link>
            <Link to='/register' className={styles.links}> Sign Up</Link>
        </div>
    );

    render() {
        const { user } = this.props;
        return (
            <div className={styles.mainContainer}>
                <div />
                <div className={styles.buttonsContainer}>
                    {user ? this.userLinks() : this.guestLinks()}
                </div>
                <button className={styles.dropdown}
                    id='dropdownMenuLink'
                    data-toggle='dropdown'
                    data-hover='dropdown'
                    type='button'
                >
                    <img src={menuIcon} alt='Responsive menu' />
                </button>
                <div className={`dropdown-menu ${styles.dropdownList}`} aria-labelledby='dropdownMenuLink'>
                    {user ? this.userLinks() : this.guestLinks()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducers.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
});

Header.defaultProps = {
    user: null,
    logout: noop,
};

Header.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
    }),
    logout: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
