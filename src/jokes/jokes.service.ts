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
        const { category = 'Any', blacklistFlags = [], type, amount = 1 } = input

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
