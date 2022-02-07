import User from '../Models/User'
import CreateUserDTO from '../dtos/CreateUserDTO'

export default interface IUserRepository{
    findByEmail(email: string): Promise<User | undefined>; 
    create(CreateUserDTO: CreateUserDTO): Promise<User>;
}