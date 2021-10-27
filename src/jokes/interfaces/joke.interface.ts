export interface JokeInterface {
    error: boolean
    category: string
    type: string
    joke: string
    flags: FlagsInterface
    id: number
    safe: boolean
    lang: string
}

interface FlagsInterface {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
}