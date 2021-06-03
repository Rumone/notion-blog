import Cors from "micro-cors";
import { ApolloServer, makeExecutableSchema } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { applyMiddleware } from "graphql-middleware";
import { typeDefs } from "../../utils/api/typeDefs";
import { resolvers } from "../../utils/api/resolvers";

const cors = Cors()


export const config = {
    api: {
        bodyParser: false
    }
}


const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))

const handler = new ApolloServer({
    schema
}).createHandler({
    path: '/api/graphql'
})


export default cors((req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "OPTION") {
        return res.status(200).send({})
    }
    return handler(req, res)
})