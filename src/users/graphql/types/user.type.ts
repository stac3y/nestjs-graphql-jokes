import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('User')
export class UserType {
    @Field(() => String)
    username: string

    @Field(() => String)
    email: string
}
