import { RichText } from "@notionhq/client/build/src/api-types";
import { BlockType } from "../types";

enum AnnotationHelper {
    bold = "bold",
    italic = "italic",
    strikethrough = "strikethrough",
    underline = "underline",
    // NOTE: code not currently supported in Notion API
    code = "code",
    defaultColor = "default"
}


export const textToMarkdownConverter = (blockType: string, blockText: RichText[]): string => {
    let content = "";
    blockText.forEach(textElement => {

        let currentTextElement = textElement.plain_text;
        if (textElement.annotations[AnnotationHelper.bold]) {
            currentTextElement = `**${currentTextElement}**`
        }
        if (textElement.annotations[AnnotationHelper.italic]) {
            currentTextElement = `_${currentTextElement}_`
        }
        if (textElement.annotations[AnnotationHelper.strikethrough]) {
            currentTextElement = `~~${currentTextElement}~~`
        }
        if (textElement.annotations[AnnotationHelper.underline]) {
            currentTextElement = `<u>${currentTextElement}</u>`
        }
        if (textElement.annotations.color !== AnnotationHelper.defaultColor) {
            currentTextElement = `<span style="color:${textElement.annotations.color}">${currentTextElement}</span>`
        }
        content += currentTextElement;
    })

    // TODO: Complete implementations for other Block types
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
