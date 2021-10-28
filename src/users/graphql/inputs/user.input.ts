import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, Length } from 'class-validator'

const minLength = 8

@InputType()
export class UserInput {
    @IsEmail()
    @Field()
    email: string

    @Length(minLength)
    @Field()
    password: string
}
