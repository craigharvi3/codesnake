/* eslint-disable no-console */

import app from './app';

const port = 8080;

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Process started listening on port ${port}`);
});
