# Contributions 🌍

ThinkTech is open to contributions, however, before contributing please create an issue and add it to the NotionBlogDevelopment board.

## **Guide to contributing**

### **Notion**

1. Create a integration on notion
2. Create a notion table with the following properties:
    ![Example table image](https://user-images.githubusercontent.com/63555633/120673141-899f0b80-c458-11eb-9386-4509b12f7a0c.png)
    - remove → **Checkbox**
    - title → **Text**
    - topic → **Text**
    - tags → **Multiselect**
    - created_at → **Created Time**
    - updated_at → **Last edited Time**
    - deleted_at → **Formula**

        ```
        if(prop("remove"), formatDate(now(), "MMMM D YYYY, HH:mm"), "")
        ```

3. Share notion table with integration 

For assistance with respect to notion click [here](https://developers.notion.com/docs).

### **ThinkTech**
1. Clone repo
2. Duplicate **.env.sample** and rename it to **.env**
3. Insert integration secrets into the **.env** file
4. Install project dependencies

    ```
    npm i
    ```

5. Run the project

    ```
    npm run dev
    ```