import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserInput {
    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string
}
