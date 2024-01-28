const materiasRouter = require('./materiasRouter');
const alumnoRouter = require('./alumnosRouter');
const alumnoMateriaRouter = require('./alumnos-materiasRouter');

function routerApi(app) {
  app.use('/materias', materiasRouter);
  app.use('/alumnos', alumnoRouter);
  app.use('/alumnosMateria', alumnoMateriaRouter);
}

module.exports = routerApi;
