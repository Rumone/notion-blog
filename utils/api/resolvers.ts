import { getDatabasePages } from "../notion";

const tempDb = {
    firstname: "josh",
    lastname: "brown",
    email: "joshbrown@gmail.com"
}


const tempResolve = (param: string) => tempDb[param];


export const resolvers = {
    Query: {
        articles: async (parent, args, context) => {
            return await getDatabasePages()
        }
    },
}