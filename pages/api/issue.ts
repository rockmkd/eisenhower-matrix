import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>)  {
  console.log( process.env.JIRA_USER_TOKEN);
  axios.all([
    axios.get(process.env.JIRA_URL + '/rest/api/2/search', {
      headers:{'Authorization': 'Bearer '+ process.env.JIRA_USER_TOKEN }}),
    // axios.get(process.env.NEXT_PUBLIC_JIRA_URL + '', {
    //   headers:{'Authorization': 'Bearer ' + process.env.JIRA_TOKEN }})
  ]).then(axios.spread((res1, res2) => {
    console.log(res1.data);
    console.log(res2.data);
  }));
  res.status(200).json({ pokemon: {
      name: '꼬부기'
    } })
}