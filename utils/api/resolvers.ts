import { getDatabasePages, getSinglePage } from "../notion";

export const resolvers = {
    Page: {
        content: async ({ id }, args, context) => {
            return await getSinglePage(id);
        }
    },
    Query: {
        articles: async (parent, args, context) => {
            return await getDatabasePages()
        },
        findPage: async (parent, { data }, context) => {
            return await getSinglePage(data.id);
        }
    },
}