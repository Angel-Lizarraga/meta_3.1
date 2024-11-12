const modelo = require('../models/estudiantesModel.js'); // Asegúrate de que la ruta sea correcta

const getAllEstudiantes = (req, res) => {
    const estudiantes = modelo.findAll();
    res.status(200).json(estudiantes);
};

const getEstudiante = (req, res) => {
    const estudiante = modelo.findById(req.params.id);
    if (estudiante) {
        res.status(200).json(estudiante);
    } else {
        res.status(404).json({ error: `Estudiante con id ${req.params.id} no encontrado` });
    }
};

const createEstudiante = (req, res) => {
    const newEstudiante = req.body; 
    newEstudiante.id = String(modelo.findAll().length + 1); 
    modelo.add(newEstudiante); 
    res.status(201).json(newEstudiante);
};


const updateEstudiante = (req, res) => {
    const updatedEstudiante = modelo.save(req.params.id, req.body);
    if (updatedEstudiante) {
        res.status(200).json(updatedEstudiante);
    } else {
        res.status(404).json({ error: `Estudiante con id ${req.params.id} no encontrado` });
    }
};

const deleteEstudiante = (req, res) => {
    if (modelo.erase(req.params.id)) {
        res.status(200).json({ msg: `id: ${req.params.id} eliminado exitosamente` });
    } else {
        res.status(500).json({ error: `No se pudo eliminar id: ${req.params.id}` });
    }
};

const getEstudianteByMatricula = (req, res) => {
    const estudiante = modelo.findByMatricula(req.params.matricula);
    if (estudiante) {
        res.status(200).json(estudiante);
    } else {
        res.status(404).json({ error: `Estudiante con matrícula ${req.params.matricula} no encontrado` });
    }
};

exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;
exports.getEstudianteByMatricula = getEstudianteByMatricula;