import Client from '../models/Client'
import CreateClientDTO from '../dtos/CreateClientDTO'

export default interface IClientRepository{
    findAll(): Promise<Client[]>;
    findAllPaginated(page: number): Promise<[Client[], number]>;
    findAllByName(name: string): Promise<Client[]>;
    findByID(id: string): Promise<Client | undefined>;
    findByEmail(email: string): Promise<Client | undefined>;
    create(createClientDTO: CreateClientDTO): promisse<Client>;
    save(client: Client): Promise<Client>;
    delete(id: string): Promise<void>;
}