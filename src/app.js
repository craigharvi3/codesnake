import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import notFound from './controllers/notFound';
import error from './controllers/error';
import status from './controllers/status';
import home from './controllers/home';

const app = express();

// setup the engine using express handlebars
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');

/*
 * This condition will be evaluated at build time by Webpack
 * and only the content of the active branch will appear in the
 */
// if (process.env.NODE_ENV === 'development') {
//   app.set('views', 'src/views');
//   app.use('/assets', express.static('assets'));
// } else {
//   app.set('views', 'dist/views');
// }

app.set('views', path.resolve('src/views'));
app.use('/assets', express.static('assets'));

// hides the header that exposes Express as a server
app.disable('x-powered-by');

app.get('/', home);
app.get('/status', status);
app.get('*', notFound);

app.use(error);

export default app;
