// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import myData from '../data/data.json'
export default function data(req, res) {
  res.status(200).json(myData)
}
