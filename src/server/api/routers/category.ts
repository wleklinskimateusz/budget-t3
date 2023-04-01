import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.category.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  add: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input: { name }, ctx: { session, prisma } }) => {
      const user = session?.user;
      const categoryNames = await prisma.category
        .findMany({
          where: {
            user: {
              id: session?.user?.id,
            },
          },
        })
        .then((categories) => categories.map(({ name }) => name));
      console.error(categoryNames);
      if (categoryNames.includes(name)) {
        throw new Error("This category already exists");
      }

      return prisma.category.create({
        data: {
          name,
          user: {
            connect: {
              id: user?.id,
            },
          },
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ input: { name, id }, ctx: { session, prisma } }) => {
      const categoryNames = await prisma.category
        .findMany({
          where: {
            user: {
              id: session?.user?.id,
            },
          },
        })
        .then((categories) => categories.map(({ name }) => name));
      console.error(categoryNames);
      if (categoryNames.includes(name)) {
        throw new Error("This category already exists");
      }

      return prisma.category.update({
        where: { id },
        data: { name },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input: { id }, ctx: { prisma } }) => {
      return prisma.category.delete({ where: { id } });
    }),
});
