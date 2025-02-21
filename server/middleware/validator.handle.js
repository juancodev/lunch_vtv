import boom from "@hapi/boom";

export function validatorHandler(schema, property, method) {
  return async (req, res, next) => {
    try {
      const data = req[property];
      if (method === 'save') {
        const response = await schema.pre(method, {
          document: data
        });
        next(response);
      } else {
        const response = await schema.pre(method, (test) => {
          console.log("test", test)
          next(response);
        });
        next(response);
      }
    } catch (err) {
      next(boom.badRequest(err));
    }
  }
}