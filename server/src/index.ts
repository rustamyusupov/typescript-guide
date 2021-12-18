import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/login';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['aso;ifjweqmr239'] }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
