import * as express from 'express';
const app: express.Express = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('top');
});

app.listen(8080, () => {
  console.log('Start on port 8080.');
});
