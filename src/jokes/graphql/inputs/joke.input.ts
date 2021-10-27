import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class JokeInput {
    @Field()
    category: string
}
