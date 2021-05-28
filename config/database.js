const database = {
  getItems() {
    return localStorage.getItem('companies') ? JSON.parse(localStorage.getItem('companies')) : null;
  },
  setItemToDatabase(items) {
    return localStorage.setItem('companies', JSON.stringify(items));
  },
};
export default database;
