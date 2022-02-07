import Client from '../models/Client'
import CreateClientDTO from '../dtos/CreateClientDTO'

export default interface IClientRepository{
    findAll(): Promise[]>;
    findByID(id: string): Promise<Client | undefined>;
    findByEmail(email: string): Promise<Client | undefined>;
    create(createClientDTO: CreateClientDTO): promisse<Client>;
    save(client: Client): Promise<Client>;

}