import User from '../Models/User'
import CreateUserDTO from '../dtos/CreateUserDTO'

export default interface IUserRepository{
    findByEmail(email: string): Promise<User | undefined>; 
    findByID(id: string): Promisse<User | undefined>;
    create(CreateUserDTO: CreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
}