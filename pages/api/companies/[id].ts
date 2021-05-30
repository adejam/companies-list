import companies from '../../../data';
import { NextApiRequest, NextApiResponse } from 'next';

interface Company {
  id: string,
  name: string,
  ceo: string,
  about: string,
}

export default function handler({ query: { id } }: NextApiRequest, res: NextApiResponse) {
  const company: Company[] = companies.filter(company => company.id === id);

  if (company.length > 0) {
    res.status(200).json(company[0]);
  } 
  else {
    res.status(404).json({ message: `Company with the id of ${id} is not found` });
  }
}
