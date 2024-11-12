const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController.js');

router.use(express.json());

/**
 * @swagger
 * /estudiantes:
 *   get:
 *     summary: Obtiene todos los estudiantes
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   matricula:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   semestre:
 *                     type: string
 *                   creditos:
 *                     type: integer
 */
router.get('/estudiantes', estudiantesController.getAllEstudiantes);

/**
 * @swagger
 * /estudiantes/{id}:
 *   get:
 *     summary: Obtiene un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *       404:
 *         description: Estudiante no encontrado
 */
router.get('/estudiantes/:id', estudiantesController.getEstudiante);

/**
 * @swagger
 * /estudiantes/matricula/{matricula}:
 *   get:
 *     summary: Obtiene un estudiante por matrícula
 *     parameters:
 *       - in: path
 *         name: matricula
 *         schema:
 *           type: string
 *         required: true
 *         description: Matrícula del estudiante
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *       404:
 *         description: Estudiante no encontrado
 */
router.get('/estudiantes/matricula/:matricula', estudiantesController.getEstudianteByMatricula);

/**
 * @swagger
 * /estudiantes:
 *   post:
 *     summary: Crea un nuevo estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               semestre:
 *                 type: string
 *               creditos:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 */
router.post('/estudiantes', estudiantesController.createEstudiante);

/**
 * @swagger
 * /estudiantes/{id}:
 *   put:
 *     summary: Actualiza un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               semestre:
 *                 type: string
 *               creditos:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estudiante actualizado exitosamente
 *       404:
 *         description: Estudiante no encontrado
 */
router.put('/estudiantes/:id', estudiantesController.updateEstudiante);

/**
 * @swagger
 * /estudiantes/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               semestre:
 *                 type: string
 *               creditos:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estudiante actualizado parcialmente
 *       404:
 *         description: Estudiante no encontrado
 */
router.patch('/estudiantes/:id', estudiantesController.updateEstudiante);

/**
 * @swagger
 * /estudiantes/{id}:
 *   delete:
 *     summary: Elimina un estudiante por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante eliminado exitosamente
 *       404:
 *         description: Estudiante no encontrado
 */
router.delete('/estudiantes/:id', estudiantesController.deleteEstudiante);

module.exports = router;
