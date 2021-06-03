import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        articles: [Article]
    }

    type Article {
        id: String
        title: String
        topic: String
        createdAt: String
    }
`