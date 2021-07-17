import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static';
import router from './router';

const app = new Koa();

app.use(koaStatic(path.join(__dirname, '../public')));

app.use(router.routes());

app.listen('8090', () => {
  console.log('server start at 127.0.0.1:8090 ...');
})
