import IClientsRepository from '../repositories/IClientRepository'
import Client from '../models/Client'

interface IRequest{
    name: string,
    email: string,
    telephone: string,
    cpf: string;
}

class CreateClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository;){
        this.clientRepository = clientRepository;
    }

    public async execute({ name, email, telephone, cpf }): Promise<Client>{
    const verifyClient = this.clientRepository.findByEmail(email);

    if(verifyClient){
        throw new AppError('Client already exists', 400);
    }

        const client = this.clientRepository.create({
            name,
            email,
            telephone,
            cpf,
        })

        return client;
    }

}

export default CreateclientService