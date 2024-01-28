const express = require('express');
const materiasServicios = require('../service/materiasService');

const router = express.Router();
const servicios = new materiasServicios();

router.get('/', async (req, res) => {
  const materias = await servicios.buscar();
  res.json(materias);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const materias = await servicios.buscarUno(id);
  res.json(materias);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const nuevaMateria = await servicios.crear(body);
  res.status(201).json(nuevaMateria);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const materias = await servicios.actualizar(id, body);
    res.json(materias);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const materiaBorrada = await servicios.borrar(id);
    res.json(materiaBorrada);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
