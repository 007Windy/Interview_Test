/**
 * koa2 洋葱模型的实现和原理
 */
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 'hello world'
    console.log('first before next');
    next()
    console.log('first after next');
    console.log('------------ turn first end ---------')
    
});

app.use(async (ctx, next) => {
    console.log('second before next');
    next()
    console.log('second after next');
    
    ctx.body = 'use next';
})

app.listen(3000, () => {
    console.log('server is running at http://127.0.0.1:3000');
})
