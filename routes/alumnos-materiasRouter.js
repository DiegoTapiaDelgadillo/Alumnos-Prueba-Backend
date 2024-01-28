const express = require('express');
const alumnosMateriaServicios = require('../service/alumno-materiasService');

const router = express.Router();
const servicios = new alumnosMateriaServicios();

router.get('/', async (req, res) => {
  const alumno = await servicios.buscar();
  res.json(alumno);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const alumno = await servicios.buscarUno(id);
  res.json(alumno);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const nuevaAlumno = await servicios.crear(body);
  res.status(201).json(nuevaAlumno);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const alumno = await servicios.actualizar(id, body);
    res.json(alumno);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const alumnoBorrado = await servicios.borrar(id);
    res.json(alumnoBorrado);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
