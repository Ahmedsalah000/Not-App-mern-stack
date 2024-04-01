import slugify from 'slugify';
import { check } from 'express-validator';
import validatorMiddleware from '../../middlewares/validatorMiddleware.js';
import User from '../../models/userModel.js';

export const signupValidator = [
  // check('name')
  //   .notEmpty()
  //   .withMessage('User required')
  //   .isLength({ min: 3 })
  //   .withMessage('Too short User name')
  //   .custom((val, { req }) => {
  //     req.body.slug = slugify(val);
  //     return true;
  //   }),

  check('email')
    .notEmpty()
    .withMessage('Email required')
    .isEmail()
    .withMessage('Invalid email address')
    .custom((val) =>//to ensure is this email exist  in database  if it exists so there a user 
      User.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error('E-mail already in user'));
        }
      })
    ),

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
    .custom((password, { req }) => {
      if (password !== req.body.passwordConfirm) {
        throw new Error('Password Confirmation incorrect');
      }
      return true;
    }),

  check('passwordConfirm')
    .notEmpty()
    .withMessage('Password confirmation required'),

  validatorMiddleware,
];

export const loginValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email required')
    .isEmail()
    .withMessage('Invalid email address'),

  check('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  validatorMiddleware,
];
