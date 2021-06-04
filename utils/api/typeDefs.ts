import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        articles: [Article]
        findPage(data: FindPageInput): String
    }

    type Article {
        id: String
        title: String
        topic: String
        createdAt: String
    }

    input FindPageInput {
        id: String
    }
`