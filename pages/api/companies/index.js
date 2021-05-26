import database from '../../../config/database';
import companies from '../../../data';

export default function handler(req, res) {
  if (typeof window !== 'undefined') {
    if (!database.getItems()) {
      database.setItemToDatabase(companies);
    }
    res.status(200).json(database.getItems());
  } else {
    res.status(200).json(companies);
  }
}
