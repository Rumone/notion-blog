import { RichText } from "@notionhq/client/build/src/api-types";
import { BlockType } from "../types";

export const textToMarkdownConverter = (blockType: string, blockText: RichText[]): string => {
    let content = "";
    blockText.forEach(textElement => {
        content += textElement.plain_text;
    })

    switch (blockType) {
        case BlockType.heading_1:
            content = createMardownHeadingOne(content);
            break;
        case BlockType.heading_2:
            content = createMardownHeadingTwo(content);
            break;
        case BlockType.heading_3:
            content = createMardownHeadingThree(content);
            break;
        case BlockType.bulleted_list_item:
            content = createMarkdownBulletList(content);
            break;
        default:
            content += "\\n"
            break;
    }

    return content;
}

const createMardownHeadingOne = (content: string): string => `# ${content}`
const createMardownHeadingTwo = (content: string): string => `## ${content}`
const createMardownHeadingThree = (content: string): string => `### ${content}`
const createMarkdownBulletList = (content: string): string => `- ${content}`
