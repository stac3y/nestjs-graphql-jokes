import { Args, Query, Resolver } from '@nestjs/graphql'

// import { JokeInput } from './graphql/inputs/joke.input'
// import { JokeType } from './graphql/types/joke.type'
import { JokesService } from './jokes.service'

@Resolver(() => String)
export class JokesResolver {
    constructor(private readonly _jokesService: JokesService) {}

    @Query(() => String, {
        description: 'Returns pong',
    })
    async ping(): Promise<string> {
        return 'pong'
    }

    @Query(() => String, {
        description: 'Returns joke by category',
    })
    async getJoke(@Args('input') input: string): Promise<string> {
        const response = await this._jokesService.getJokeWithAsync(input)

        return response
    }
}
