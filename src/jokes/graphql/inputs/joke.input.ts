import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class JokeInput {
    @Field({ nullable: true })
    category: string

    @Field(() => [String], { nullable: true })
    blacklistFlags: string[]

    @Field({ nullable: true })
    type: string

    @Field({ nullable: true })
    amount: number
}
