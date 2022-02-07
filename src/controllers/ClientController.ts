import { Request, Response } from 'express';
import ClientRepository from '../repositories/ClientRepository'
import PaginatedClientService from '../services/PaginatedClientService'

class ClientController {
    public async index(request: Request, response: Response): Promise<Response>{
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.findAll();

        return response.json(clients);
    }

    public async paginated(request: Request, response: Response): Promise<Response>{
        const { page } = request.query;

        const clientRepository = new ClientRepository();

        const clientsPaginated = new PaginatedClientService(clientRepository);

        const clients = await clientsPaginated.execute({
            page: page != undefined ? parseInt(page.toString(), 10) : 0,
        })

        return response.json(clients);
    }

    public async search(request: Request, response: Response): Promise<Response>{
        const { name } = request.query;
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.findAllByName(name?.toString() || '');

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

    public async destroy(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        
        const clientRepository = new ClientRepository();

        const destroyClient = new DeleteClientService(clientRepository);

        await destroyClient.execute({ id })

        return response.status(284).send();
    }
}

export default ClientController;