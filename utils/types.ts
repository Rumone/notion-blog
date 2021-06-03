
export type CustomPage = {
    id: string,
    topic: string,
    title: string,
    createdAt: Date
}


export enum PropertyType {
    richText = "rich_text",
    createdTime = "created_time",
    title = "title",
}