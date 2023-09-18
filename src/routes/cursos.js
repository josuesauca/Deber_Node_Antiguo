const express = require('express');
const CursoController = require('../controllers/CursoController');

const router = express.Router();

router.get('/cursos', CursoController.index);
router.get('/create', CursoController.create);
router.post('/create', CursoController.store);
router.post('/cursos/delete', CursoController.destroy);
router.get('/cursos/edit/:id', CursoController.edit);
router.post('/cursos/edit/:id', CursoController.update);

module.exports = router;