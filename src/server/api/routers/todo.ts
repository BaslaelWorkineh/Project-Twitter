import { todo } from "node:test";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { todoInputSchema } from "~/types";


export const todoRouter = createTRPCRouter({
    all: protectedProcedure .input(todoInputSchema).query(async ({ctx}) => {
      const todos = await ctx.db.todo.findMany({
        where:{
          userId: ctx.session.user.id
        },
      });

      return [
        {
        id: 'fake',
        text:'fake text',
        done:false, 
      }
    ]
    })
});
