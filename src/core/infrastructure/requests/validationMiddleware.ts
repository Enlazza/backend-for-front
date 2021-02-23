import { Request, Response, NextFunction } from 'express';
import { validationResult, checkSchema } from 'express-validator';

const objectsHaveSameKeys = (obj1: any, obj2: any) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const union = new Set([...obj1Keys, ...obj2Keys]);
  return union.size === obj1Keys.length && union.size === obj2Keys.length;
};

const filterBodyValidation = (obj: any) => {
  const otherProperties = Object.keys(obj).filter((key) => obj[key].in.includes('body'));
  return otherProperties.reduce((res: any, key: string) => ({ ...res, [key]: obj[key] }), {});
};

export default (scheme: any) => async (req: Request, res: Response, next: NextFunction) => {
  await Promise.all(checkSchema(scheme).map((validation) => validation.run(req)));
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().reduce((result, err) => ({ ...result, [err.param]: err.msg }), {}),
    });
  }

  const schemeBody = filterBodyValidation(scheme);
  if (!objectsHaveSameKeys(req.body, schemeBody)) {
    return res.status(400).json({
      errors: {
        body: `Expected ${Object.keys(schemeBody).length} parameters, received ${Object.keys(req.body).length}`,
      },
    });
  }

  return next();
};
