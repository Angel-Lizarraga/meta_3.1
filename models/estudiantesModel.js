let estudiantes = [
    { id: '1', matricula: '12345', nombre: 'Juan Perez', semestre: '2022-1', creditos: 30, 'cursos': [] },
    { id: '2', matricula: '54321', nombre: 'Maria Gomez', semestre: '2022-2', creditos: 25, 'cursos': [] },
    { id: '3', matricula: '67890', nombre: 'Luis Martinez', semestre: '2022-1', creditos: 35, 'cursos': [] },
    { id: '4', matricula: '09876', nombre: 'Ana Torres', semestre: '2023-1', creditos: 20, 'cursos': [] },
    { id: '5', matricula: '11223', nombre: 'Carlos Sanchez', semestre: '2023-2', creditos: 15, 'cursos': [] }
];

let nextEstudianteId = estudiantes.length + 1; // Contador para el próximo ID único

const findAll = () => estudiantes;

const findById = (id) => estudiantes.find(e => e.id === id);

const findByMatricula = (matricula) => estudiantes.find(e => e.matricula === matricula);

const add = (newEstudiante) => {
    // Generar un nuevo ID único basado en el contador global
    const newId = nextEstudianteId.toString();
    newEstudiante.id = newId;
    estudiantes.push(newEstudiante);
    nextEstudianteId++; // Incrementa el contador global para el próximo estudiante
};

const save = (id, data) => {
    let index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes[index] = { ...estudiantes[index], ...data };
        return estudiantes[index];
    }
    return null;
};

const erase = (id) => {
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    findAll,
    findById,
    findByMatricula,
    add,
    save,
    erase
};