import Head from 'next/head';

const About = () => (
  <section className="bg-white p-10 ta-center">
    <Head>
      <title>Companies List | About</title>
    </Head>
    <h1>About Companies List</h1>
    <article className="mt-10">Companies list is an project that documents a list of companies and their informations.
    <br />
      The project demonstrates the use of Next-js and typescript in building a web application.
    </article>
    <article className="my-10">
      <h2 className="my-10">Features</h2>
      <div className="mt-10">
        <ul>
          <li>View companies List</li>
          <li>Add a company</li>
          <li>Delete a company</li>
          <li>View single company</li>
          <li>Update company Information</li>
        </ul>
      </div>
    </article>
    <article className="my-10">
      <h2 className="my-10">Major Technologies used</h2>
      <div className="mt-10">
        <ul>
          <li>Next js</li>
          <li>Typescript</li>
          <li>Local Storage</li>
        </ul>
      </div>
    </article>
  </section>
);

export default About;
