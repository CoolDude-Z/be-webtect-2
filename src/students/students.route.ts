// import { Hono } from 'hono';
// import { createOneStudent, deleteOneStudent, getAllStudents, updateOneStudent } from './students.controller';

// const app = new Hono();

// app.get('/students', getAllStudents);

// app.post('/students', createOneStudent);

// app.delete('/students/:id', deleteOneStudent);

// app.put('/students/:id', updateOneStudent);

// export default app;
import { Hono } from 'hono';
import { createStudent, getStudents, updateStudent, deleteStudent } from './students.controller.js';

const studentsRoute = new Hono();

studentsRoute.get('/', getStudents);
studentsRoute.post('/', createStudent);
studentsRoute.put('/:id', updateStudent);
studentsRoute.delete('/:id', deleteStudent);

export default studentsRoute;