import { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../config/database';
import companies from '../../../data';

type Data = {

}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (typeof window !== 'undefined') {
    if (!database.getItems()) {
      database.setItemToDatabase(companies);
    }
    res.status(200).json(JSON.stringify(database.getItems()));
  } else {
    res.status(200).json(JSON.stringify(companies));
  }
}
