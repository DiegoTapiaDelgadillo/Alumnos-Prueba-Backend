const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log('Escuchando al puerto ' + port);
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
