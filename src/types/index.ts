import {z} from 'zod'

export const todoInputSchema = z.object({
    id: z.string(),
    text: z.string(),
    done: z.string()
})