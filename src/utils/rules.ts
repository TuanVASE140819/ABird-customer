import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 150,
      message: 'Email từ 5 đến 150 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email từ 5 đến 150 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 150,
      message: 'Password từ 6 đến 150 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password từ 6 đến 150 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 150,
      message: 'Password từ 6 đến 150 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password từ 6 đến 150 ký tự'
    },
    validate:
      typeof getValues === 'function' ? (value) => value === getValues('password') || 'Password không khớp' : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Email từ 5 đến 150 ký tự')
    .max(150, 'Email từ 5 đến 150 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Password từ 6 đến 150 ký tự')
    .max(150, 'Password từ 6 đến 150 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Password từ 6 đến 150 ký tự')
    .max(150, 'Password từ 6 đến 150 ký tự')
    .oneOf([yup.ref('password')], 'Password không khớp')
})

const LoginSchema = schema.omit(['confirm_password'])

export type Schema = yup.InferType<typeof schema>
