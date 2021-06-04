import { getDatabasePages, getSinglePage } from "../notion";

export const resolvers = {
    Query: {
        articles: async (parent, args, context) => {
            return await getDatabasePages()
        },
        findPage: async (parent, { data }, context) => {
            return await getSinglePage(data.id);
        }
    },
}