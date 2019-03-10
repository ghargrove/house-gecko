import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../web/components/App';

export default (req: any, res: any) => {
  const app = ReactDOMServer.renderToString(<App text="this workd" />);

  res.send(`
    <!doctype html>
    <html>
      <head><title>Test SSR</title></head>
      <body>
        ${app}
      </body>
    </html>
  `);
};
