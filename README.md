# REACT-BOOKLYB

> Companies list is an project that documents a list of companies and their informations.

![screenshot](./app_screenshot.png)

The project demonstrates the use of Next-js and typescript in building a web application.

## Features

- View companies List
- Add a company
- Delete a company
- View single company

## Fetch data from external API

Due to using `localStorage` which would not work in `getStaticPaths` since `getStaticPaths` works on the server side, `useRouter` hook was used to get the `id` parameter which was then used to get the required data to show individual company.

In case an external API was integrated to the project, we can then use `getStaticPaths` to define a list of paths that have to be rendered to HTML at build time since the page uses a dynamic route. The code below would be used to achieve this.

```js
import server from '../../config';

export const getStaticPaths = async () => {
  const response = await fetch('API LINK TO FETCH ALL LIST OF COMPANIES');
  const data = await response.json();
  
  const paths = data.map((company) => ({
    params: { id: company.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch('API LINK TO FETCH SINGLE COMPANY DATA BASED ON ID PARAMETER');
  const data = await response.json();
  return {
    props: { company: data },
  };
};
```

## Technology Used

- HTML

  - Semantic HTML

- CSS

  - CSS Flexbox

- [Nextjs](https://nextjs.org/)

- Typescript

- Javascript

  - Arrow function.
  - Destructuring assignment.
  - Object literal
  - Template literal
  - `.filter()` method
  - Ternary Operator.

- [Webpack](https://webpack.js.org/)

- [stylint](https://stylelint.io/)

- [Eslint](https://eslint.org/)

- [NPM](https://www.npmjs.com/)

## Live Demo

[Live demo](https://companies-list.vercel.app/)

### Development (Running locally)

- Clone the project

```bash
git clone https://github.com/adejam/react-booklyb.git

```

- Install Dependencies

```bash
npm install
```

To run StyleLint by itself, you may run the lint task:

```bash
npm run lint:check
```

Or to automatically fix issues found (where possible):

```bash
npm run lint
```

You can also check against Prettier:

```bash
npm run format:check
```

and to have it actually fix (to the best of its ability) any format issues, run:

```bash
npm run format
```

You can also check against HTML Validator:

```bash
npm run html-validator
```

To run the App

```bash
npm run dev
```

## Style Guides

- [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Style Guide](https://udacity.github.io/git-styleguide/)

## 👤 Author

### Adeleye Jamiu

- Github: [@adejam](http://github.com/adejam)
- Twitter: [@adeleye_oj](https://twitter.com/Adeleye_oj)
- LinkedIn: [@adeleye-jamiu](https://linkedin.com/in/adeleye-jamiu)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Nextjs](https://nextjs.org/)

## 📝 License

[MIT licensed](./LICENSE).
