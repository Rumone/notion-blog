import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        articles: [Article]
        findPage(data: FindPageInput): Page
    }

    type Article {
        id: String
        title: String
        topic: String
        createdAt: String
        page: Page
    }

    type Page {
        content: [String]
    }

    input FindPageInput {
        id: String
    }
`