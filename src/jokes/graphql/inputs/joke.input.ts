import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class JokeInput {
    @Field()
    category?: string

    @Field(() => [String])
    blacklistFlags?: string[]

    @Field()
    type: string

    @Field()
    amount: number
}
