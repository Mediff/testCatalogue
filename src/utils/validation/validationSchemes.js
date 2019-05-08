const { object, string, number, ref } = require('yup');

export const loginScheme = object({
    username: string()
        .min(6, 'Username must contain at least 6 symbols')
        .required('Email required'),
    password: string()
        .min(6, 'Password must contain at least 6 symbols')
        .required('Username required'),
});

export const regScheme = object({
    username: string()
        .min(6, 'Username must contain at least 6 symbols')
        .required('Email required'),
    password: string()
        .min(6, 'Password must contain at least 6 symbols')
        .required('Password required'),
    passConfirm: string()
        .oneOf([ref('password'), null], 'Passwords dont match')
        .required('Password confirm is required'),
});

export const reviewScheme = object({
    review: string()
        .max(100, 'Review cannot be more then 100 sybmols')
        .required('Review required'),
    starCount: number()
        .min(1, 'You must rate this product')
        .max(5, 'Max rate is 5')
});
