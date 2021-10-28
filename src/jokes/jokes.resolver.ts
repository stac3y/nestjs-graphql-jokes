import { UseGuards } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'

import { AuthGuard } from '../auth/guards/auth.guard'

import { JokeInput } from './graphql/inputs/joke.input'
import { JokesType } from './graphql/types/joke.type'
import { JokesService } from './jokes.service'

@Resolver(() => String)
export class JokesResolver {
    constructor(private readonly _jokesService: JokesService) {}

    @UseGuards(AuthGuard)
    @Query(() => JokesType)
    async getJoke(@Args('input') input: JokeInput): Promise<JokesType> {
        const response = await this._jokesService.getJokeWithAsync(input)

        return response
    }
}
