const error = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  let status;

  switch (err.message) {
    case '404':
      status = 404;
      res.locals.title = 'Page Not Found';
      res.locals.error = `404 - "${req.path}" not found`;
      break;
    default:
      status = 500;
      res.locals.title = '500 Error';
      res.locals.error = err.message;
  }

  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(status).render('error', { layout: false });
};

export default error;
