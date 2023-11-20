import {NextApiRequest, NextApiResponse} from "next";

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>)  {
  console.log(process.env.JIRA_URL);
  res.status(200).json({ pokemon: {
      name: '꼬부기'
    } })
}