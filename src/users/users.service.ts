import {
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { compare, genSalt, hash } from 'bcryptjs'
import { Repository } from 'typeorm'

import { UserEntity } from './entities/user.entity'
import { UserInterface } from './interfaces/user.interface'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly _usersRepository: Repository<UserEntity>,
    ) {}

    async createUser(input: UserInterface): Promise<UserEntity> {
        try {
            const { email, password } = input
            const hashedPassword = await this.hashPassword(password)

            const user = this._usersRepository.create({
                password: hashedPassword,
                email,
            })

            return await this._usersRepository.save(user)
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    protected async hashPassword(password: string): Promise<string> {
        const ROUNDS = 12
        const salt = await genSalt(ROUNDS)
        const hashedPassword = await hash(password, salt)

        return hashedPassword
    }

    async login(input: UserInterface): Promise<UserEntity> {
        const { email, password } = input

        const user = await this._usersRepository.findOne({
            email,
        })

        if (!user) {
            throw new Error('User not found')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error('Invalid credentials')
        }

        return user
    }
}
