import React from 'react';
import { renderToString } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';

// const loadPages = (pageName) => {
//   return () => import(`@/pages/${pageName}`);
// }

export default (pageName) => {

  let str = '';
  let Page = require(`@/pages/${pageName}`);
  console.dir(Page);
  console.log(str);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id=app>${Page}</div>
  </body>
  </html>
`
}
