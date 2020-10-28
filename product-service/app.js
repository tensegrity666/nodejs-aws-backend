const hello = (event, context, cb) => {
  const p = new Promise(resolve => {
    resolve('success');
  });

  const response = {
    statusCode: 200,
    body:
      {
        productName: 'Book',
        productCost: 99,
      },
      null,
      2
  };

  p.then(() => cb(null, response)).catch(e => cb(e));
};

export { hello };
