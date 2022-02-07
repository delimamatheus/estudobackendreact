import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';
import clientRoutes from './client';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => { return response.json({ message: "Hello World!"}) })

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/clients`, clientRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);

export default routes;