import { config } from "dotenv"
import { Client } from "@notionhq/client";
import { DatabasesQueryResponse } from "@notionhq/client/build/src/api-endpoints";
import { CustomPage, PropertyType } from "./types";
import { Page } from "@notionhq/client/build/src/api-types";

const notion = new Client({ auth: process.env.NOTION_KEY })
const db_id = process.env.NOTION_DATABASE_ID

config()
// TODO: Function type is not explicitly written
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
