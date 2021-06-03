import { config } from "dotenv";
import { Client } from "@notionhq/client";
import { BlocksChildrenListResponse, DatabasesQueryResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_KEY })
const db_id = process.env.NOTION_DATABASE_ID

export default async (req, res) => {

  const page_result: DatabasesQueryResponse = await notion.databases.query({
    database_id: db_id,
  })

  let page_id: string;

  if (page_result.results[0].object === "page") {
    page_id = page_result.results[0].id
  } else {
    console.log("Not page")
  }

  const page_blocks: BlocksChildrenListResponse = await notion.blocks.children.list({
    block_id: page_id,
    page_size: 100
  })


  console.log(page_blocks)

  res.status(200).json(page_blocks)
}
