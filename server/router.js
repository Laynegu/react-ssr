import fs from 'fs';
import Router from 'koa-router';
import getHtml from './html';

const router = new Router();

const getRouteConf = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./routes.conf.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString('utf-8'));
      }
    })
  })
}

const getRouteMap = async () => {
  try {
    const data = await getRouteConf();
    return JSON.parse(data);
  } catch (error) {
    throw new Error('get the routes config error: ' + error);
  }
}

const setRoutes = async () => {
  const routeMap = await getRouteMap();
  Object.keys(routeMap).forEach(path => {
    router.get(path, ctx => {
      ctx.body = getHtml(routeMap[path]);
    })
  })
}

(async function () {
  await setRoutes();
})();

export default router;
