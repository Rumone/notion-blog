import { getDatabasePages } from "../../utils/notion"

export default async (req, res) => {
  const pages = await getDatabasePages();

  res.status(200).json(pages)
}
