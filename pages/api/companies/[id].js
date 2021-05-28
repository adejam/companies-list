import companies from '../../../data';

export default function handler({ query: { id } }, res) {
  const company = companies.filter(company => company.id === id);

  if (company.length > 0) {
    res.status(200).json(company[0]);
  } else {
    res.status(404).json({ message: `Company with the id of ${id} is not found` });
  }
}
