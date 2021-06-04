
export type CustomPage = {
    id: string,
    topic: string,
    title: string,
    createdAt: Date
}


export type CustomBlock = {
    elementType: string,
    content: any
}

export enum BlockType {
    paragraph = "paragraph",
    heading_1 = "heading_1",
    heading_2 = "heading_2",
    heading_3 = "heading_3",
    bulleted_list_item = "bulleted_list_item",
    numbered_list_item = "numbered_list_item",
    to_do = "to_do",
    toggle = "toggle",
    child_page = "child_page"
}

export enum PropertyType {
    richText = "rich_text",
    createdTime = "created_time",
    title = "title",
    // NOTE: The unsupported field is because the current API only supports text blocks
    unsupported = "unsupported"
}

// NOTE: Notions API currently only displays supports the text based blocks
export type TextObject = {
    text: TextContent;
    annotations: TextAnnotations;
}

export type TextAnnotations = {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: false;
    colort: string;
}

export type TextContent = {
    content: string;
    link: string | null;
}