import { Injectable } from '@nestjs/common'
import axios from 'axios'

// import { JokeInput } from './graphql/inputs/joke.input'

@Injectable()
export class JokesService {
    /**
     * Function for geting a joke by category with async/await
     *
     * @param category - category of a joke
     * @returns promise with a joke
     */
    async getJokeWithAsync(category: string): Promise<string> {
        // const {category}  = input
        try {
            const res = await axios.get(
                `https://v2.jokeapi.dev/joke/${category}`,
            )
            return res.data.type === 'single'
                ? res.data.joke
                : `${res.data.setup} \n${res.data.delivery}`
        } catch (err) {
            throw new Error(err)
        }
    }

    /**
     * Function to check if a category matches the possible categories
     *
     * @param category - category of a joke
     * @returns true if category exists or false if don't
     */
    static checkCategory(category: string): boolean {
        const categories = [
            'Any',
            'Programming',
            'Misc',
            'Dark',
            'Pun',
            'Spooky',
            'Christmas',
        ]
        const index = categories.indexOf(category)
        if (index === -1) {
            console.log(
                `There is no such category. Possible categories: ${categories}`,
            )
            return false
        }
        return true
    }
}
