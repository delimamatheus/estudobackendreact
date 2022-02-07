import { Request, Response } from 'express';
import ClientRepository from '../repositories//ClientRepository'

class ClientController {
    public async index(request: Request, response: Response): Promise<Response>{
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.findAll();

        return response.json(clients);
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const { name, email, telephone, cpf } = request.body;
        
        const clientRepository = new ClientRepository();

        const createClient = new CreateClientService(clientRepository);

        const client = await createClient.execute({
            name,
            email,
            telephone,
            cpf,
        })

        const clients = await clientRepository.findAll();

        return response.status(201).json(clients);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const { name, email, telephone, cpf } = request.body;
        
        const clientRepository = new ClientRepository();

        const updateClient = new UpdateClientService(clientRepository);

        const client = await updateClient.execute({
            id,
            name,
            email,
            telephone,
            cpf,
        })

        const clients = await clientRepository.findAll();

        return response.json(clients);
    }
}

export default ClientController;