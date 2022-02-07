import IClientsRepository from '../repositories/IClientRepository'
import Client from '../models/Client'

interface IRequest{
    name: string,
    email: string,
    telephone: string,
    cpf: string;
}

class DeleteClientService {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository;){
        this.clientRepository = clientRepository;
    }

    public async execute({ id: string }): Promise<void>{
        const client = await this.clientRepository.findById(id);

        if(!client){
            throw new AppError('Client not found', 400);
        }
        await this.clientRepository.delete(id);
    }

}

export default DeleteClientService;