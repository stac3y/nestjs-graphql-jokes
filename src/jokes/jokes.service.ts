import { Injectable } from '@nestjs/common'
import axios from 'axios'

import { JokeInput } from './graphql/inputs/joke.input'
import { JokesInterface } from './interfaces/joke.interface'

@Injectable()
export class JokesService {
    /**
     * Function for geting a joke by category with async/await
     *
     * @param category - category of a joke
     * @returns promise with a joke
     */
    async getJokeWithAsync(input: JokeInput): Promise<JokesInterface> {
        const { type } = input
        let { category, blacklistFlags, amount } = input
        if (!category) {
            category = 'Any'
        }
        if (!amount) {
            amount = 1
        }
        if (!blacklistFlags) {
            blacklistFlags = []
        }
        try {
            const res = await axios.get(
                `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=${blacklistFlags}&type=${type}&amount=${amount}`,
            )
            return res.data
        } catch (err) {
            throw new Error(err)
        }
    }
}
