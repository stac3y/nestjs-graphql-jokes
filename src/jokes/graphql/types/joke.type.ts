import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Flags')
class FlagsType {
    @Field()
    nsfw: boolean

    @Field()
    religious: boolean

    @Field()
    political: boolean

    @Field()
    racist: boolean

    @Field()
    sexist: boolean

    @Field()
    explicit: boolean
}
@ObjectType('Joke')
export class JokeType {
    @Field(() => String, { nullable: true })
    category: string

    @Field(() => String, { nullable: true })
    type: string

    @Field(() => String, { nullable: true })
    joke: string

    @Field(() => String, { nullable: true })
    setup: string

    @Field(() => String, { nullable: true })
    delivery: string

    @Field(() => FlagsType, { nullable: true })
    flags: FlagsType

    @Field(() => Number)
    id: number

    @Field(() => Boolean)
    safe: boolean

    @Field(() => String)
    lang: string
}

@ObjectType('Jokes')
export class JokesType {
    @Field(() => Boolean)
    error: boolean

    @Field(() => String, { nullable: true })
    message: string

    @Field(() => Number, { nullable: true })
    amount: number

    @Field(() => [JokeType], { nullable: true })
    jokes: [JokeType]

    @Field(() => String, { nullable: true })
    category: string

    @Field(() => String, { nullable: true })
    type: string

    @Field(() => String, { nullable: true })
    joke: string

    @Field(() => String, { nullable: true })
    setup: string

    @Field(() => String, { nullable: true })
    delivery: string

    @Field(() => FlagsType, { nullable: true })
    flags: FlagsType

    @Field(() => Number, { nullable: true })
    id: number

    @Field(() => Boolean, { nullable: true })
    safe: boolean

    @Field(() => String, { nullable: true })
    lang: string
}
