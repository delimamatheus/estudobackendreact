import { hash } from "bcryptjs";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";
import User from "../Models/User"

interface Request {
    id: string;
}

class EnableUserService{
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }
    
    public async execute({ id }: Request): Promise<User> {
        const user = await this.userRepository.findByID(id);

        if(!user){
            throw new AppError('Usuário não encontrado', 400);
        }

        use.active = !use.active;

        await this.userRepository.save(user);

        return user;
    }

}

export default EnableUserService;