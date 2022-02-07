import { Router } from 'express'
import ClientController from '../controllers/clientController'

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/', clientController.index);
clientRoutes.post('/', clientController.create);
clientRoutes.put('/:id', clientController.update);


export default clientRoutes;