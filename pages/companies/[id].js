export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((company) => {
    return {
      params: { id: company.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await response.json();

  return {
    props: { company: data },
  };
};

const Company = ({company}) => {
  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.email}</p>
      <p>{company.website}</p>
      <p>{company.address.city}</p>
    </div>
  );
};

export default Company;
