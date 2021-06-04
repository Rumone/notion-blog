import { config } from "dotenv"
import { Client } from "@notionhq/client";
import { BlocksChildrenListResponse, DatabasesQueryResponse } from "@notionhq/client/build/src/api-endpoints";
import { CustomPage, PropertyType, CustomBlock } from "./types";
import { Page } from "@notionhq/client/build/src/api-types";

const notion = new Client({ auth: process.env.NOTION_KEY })
const db_id = process.env.NOTION_DATABASE_ID

config()
// REVIEW: Function return type type is not explicitly written
export const getDatabasePages = async () => {
    try {
        const record_list: DatabasesQueryResponse = await notion.databases.query({
            database_id: db_id,
        })

        const pages: Page[] = record_list.results

        const pagesMap: CustomPage[] = pages.map((page) => ({
            id: page.id,
            topic: page.properties["topic"][PropertyType.richText][0].plain_text,
            title: page.properties["title"][PropertyType.title][0].plain_text,
            createdAt: new Date(page.properties["created_at"][PropertyType.createdTime]),
        }))

        return pagesMap;

    } catch (error) {
        return null;
    }
}


export const getSinglePage = async (id: string) => {
    try {
        const pageBlock: BlocksChildrenListResponse = await notion.blocks.children.list({
            block_id: id,
        })

        const customPageElement: CustomBlock[] = pageBlock.results.map(block => {
            if (block.type !== PropertyType.unsupported) {
                return {
                    elementType: block['type'],
                    content: block[block['type']].text[0]
                }
            }
        })

        console.log(customPageElement)

        return "test complete"
    } catch (e) {
        throw new Error();
        return null
    }
}