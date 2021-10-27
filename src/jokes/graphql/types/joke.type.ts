import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Joke')
export class JokeType {
    @Field(() => String)
    joke: string
}
