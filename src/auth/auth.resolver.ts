import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { UserInput } from '../users/graphql/inputs/user.input'
import { UserType } from '../users/graphql/types/user.type'

import { AuthService } from './auth.service'
import { AuthType } from './graphql/types/auth.type'

@Resolver(() => String)
export class AuthResolver {
    constructor(private readonly _authService: AuthService) {}

    @Mutation(() => UserType)
    async signUp(@Args('input') input: UserInput): Promise<UserType> {
        const response = await this._authService.signUp(input)

        return response
    }

    @Query(() => AuthType)
    async signIn(@Args('input') input: UserInput): Promise<AuthType> {
        const response = await this._authService.signIn(input)

        return response
    }

    @Mutation(() => AuthType)
    async refreshToken(
        @Args('refreshToken') refreshToken: string,
        @Args('accessToken') accessToken: string,
    ): Promise<AuthType> {
        return await this._authService.getAccessTokenFromRefreshToken(
            refreshToken,
            accessToken,
        )
    }
}
