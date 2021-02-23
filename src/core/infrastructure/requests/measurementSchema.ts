import { ValidationSchema } from 'express-validator';

const measurementSchema: ValidationSchema = {
  a0: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a1: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a2: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a3: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a4: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a5: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a6: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a7: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a8: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a9: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a10: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a11: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a12: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a13: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a14: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  a15: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v0: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v1: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v2: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v3: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v4: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v5: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v6: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v7: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v8: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v9: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v10: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v11: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v12: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v13: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v14: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  v15: {
    in: ['body'],
    isFloat: true,
    toFloat: true,
  },
  timestamp: {
    in: ['body'],
    //isDatet: true,
  },
  MAC: {
    in: ['headers'],
    isMACAddress: true,
    isUppercase: true,
  },
  /*passphrase: {
    in: ['headers'],
    isString: true,
  },*/
};

export default measurementSchema;
