<h1 align="center">Social Network Post Schedule</h1>

<h1 align="center"><img src="./screenshots/labs.png" /></h1>

## ✨ Technologies

This project was developed using the following technologies:

- [React](https://pt-br.reactjs.org/)
- [React-DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [styled-components](https://www.styled-components.com/)
- [date-fns](https://date-fns.org/)
- [uuid](https://www.uuidgenerator.net/)
- [react-hot-toast](https://react-hot-toast.com/)
- [emoji-picker-react](https://github.com/missive/emoji-mart)
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Project

### Preview the project [here](https://vigilant-tesla-40af37.netlify.app/)

React application which you can create schedule posts to social networks: you can set the post text, date and hour, post image and which social network you might want to schedule it to. When a schedule is created the user is moved to a list from all schedules, in the list the user can order by date and by status, also preview the posts by clicking on "Preview". All schedules data is saved in Local Storage to persist the data, the user may face some issues by reloading the site and trying to see the post preview image.

## 🔧 Technologies choice

Project developed using the React library to make it a Single Page Application, which guarantees the best performance when running directly in the client's browser, Vite and Babel to compile and create the native code bundle which enable the browser to run the project, TypeScript as the language to guarantee props and state values accordingly as expected from the contract, Axios to fetch data from the API as JavaScript objects, Styled Components to avoid unnecessary and conflicting component styles and keep component styles in scopes, Atomic Design as the design pattern to promote clean maintenance and good coding practices according to ESLint and EditorConfig. Jest and React Testing Library to ensure the unitary test to the components.

 ## 🔨 Project Architecture

 ```
├──db
└─src
  ├──assets
  │   ├──images
  │   └──styles
  ├──components
  │   ├──atoms
  │   ├──molecules
  │   ├──organisms
  │   └──templates
  ├──contexts
  ├──hooks
  ├──pages
  ├──routes
  └──utils
 ```

 ## 🧪 Components Architecture

 ```
 Component
  ├──interfaces
  ├──utils
  ├──Component.test.tsx
  ├──Component.tsx
  ├──styles.ts
  └──index.ts
 ```

  ## 👷‍♀️ Tests Coverage

 <h1 align="center"><img src="./screenshots/coverage.png" /></h1>

## 🚀 How to run

- You will need to have Node installed at your computer.
You can download [here](https://nodejs.org/en/)

- You will need to have some package manager installed at your computer too. (npm, yarn)

- Then clone this repository.

- On You project folder, open the CLI and type:
```bash
# Run to install dependencies.
$ yarn
# or
$ npm install

# Run to start the project in development mode.
$ yarn dev
# or
$ npm run dev
```

## 🚧 How to build

Clone this repository.
```bash
# Run to install dependencies.
$ yarn
# or
$ npm install

# Run to start building the project.
$ yarn build
# or
$ npm run build

# Builded project it´s now available at folder `root/dist`
```

## 👷‍♀️ How to test

- You will need to have Node installed at your computer.
You can download [here](https://nodejs.org/en/)

- You will need to have some package manager installed at your computer. (npm, yarn)

- Then clone this repository.

- On You project folder, open the CLI and type:
```bash
# Run to install dependencies.
$ yarn
# or
$ npm install

# Run to test the project in development mode.
$ yarn test
# or
$ npm run test
```

## 💎 To Be Published

Before this project be published it will be great to have an API to ensure more performance when fetching data and saving data, a monolith made with Next.js also solves the problem, and last but not lest an integration with the respective social networks to be a fully active application.
