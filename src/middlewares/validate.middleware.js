export const validate = (schema, property = 'body') => {
  return (req, _res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true
    });

    if (error) {
      const err = new Error(
        error.details.map(d => d.message).join(', ')
      );
      err.statusCode = 400;
      return next(err);
    }

    req[property] = value; // sanitized data
    next();
  };
};
