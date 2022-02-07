import IClientsRepository from '../repositories/IClientRepository'
import Client from '../models/Client'

interface IRequest{
    id: string,
    name: string,
    email: string,
    telephone: string,
    cpf: string;
}

class UpdateClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository;){
        this.clientRepository = clientRepository;
    }

    public async execute({ id, name, email, telephone, cpf }): Promise<Client>{
        const client = await this.clientRepository.findByID(id);

        if (!client) {
            throw new AppError('Client not found', 400);
        }

        if (email != client.email){
            const verifyEmail = this.clientRepository.findByEmail(email);
        }

        if(verifyEmail){
            throw new AppError('Email already used', 400);
        }

        client.name = name;
        client.email = email;
        client.telephone = telephone;
        client.cpf = cpf;

        await this.clientRepository.save(client);

        return client;
    }

}

export default CreateclientService