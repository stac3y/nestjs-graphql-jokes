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
    @Field(() => Boolean, { nullable: true })
    error: boolean

    @Field(() => String)
    category: string

    @Field(() => String)
    type: string

    @Field(() => String, { nullable: true })
    joke: string

    @Field(() => String, { nullable: true })
    setup: string

    @Field(() => String, { nullable: true })
    delivery: string

    @Field(() => FlagsType)
    flags: FlagsType
}
