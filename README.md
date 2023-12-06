# Welcome to Round 3 of your React Interview

> This round is to test your practical knowledge of using React in real world applications.
> The repo serves as a boilerplate for the React application you are going to build.
> The boilerplate is created using `vite`.

> **_Please read the below instructions carefully_**

---

### **Before starting keep in mind the below points**

- The repo is configured with **ESlint** to check the code quality of your javascript code.
- Failing the rules set by the above linters will **prevent you from committing to this repo**
- The Project will show some VS Code plugins as recommendations, that help you regarding these linter, ESLint, Prettier, etc. Install these plugins for better experience. You can open `.vscode/extensions.json` to see the list of recommended plugins.
- This repo is pre-installed with Tailwind CSS. You can use it to style your components.
- This repo is pre-installed with React Router v6.4. You can use it to create routes in your application.
- You can install other npm packages if you want
- Upon completing the problem, commit to your **FORKED** github repo and share the github repo url with us for review
- Writing inline CSS is discouraged, utilize Tailwind or write your custom CSS in separate CSS files or CSS modules. You are free to use any other CSS or Component library like Bootstrap, Material UI, etc.
- UI must be **responsive**
- Can use any online resources to solve the problem
- Must use [`fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make API calls instead of `axios`. Use `JSON.stringify` to convert the body to string when doing any POST request. Don't pass any headers like `Content-Type` or `Accept` in the request.
- You have a total of **2 hrs** to complete the task

---

## Pre-requisites

1. You must have NodeJS (v18+) installed on your machine
2. You must have a basic understanding of React, React Router, Tailwind CSS, etc.
3. You must have a basic understanding of Git and GitHub
4. You must have VS Code installed on your machine

## Installation

> **_Please read the below instructions carefully. Complete all the steps sequentially_**.

1. **_FORK_** this repo to your own GitHub account. **_DON'T CLONE THIS REPO_**. Fork button is the top right corner of the GitHub page.
2. Clone the **FORKED** repo to your local machine.
3. Open the project folder in VS Code
4. Install the recommended plugins
   - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - or open `.vscode/extensions.json` to see the list of recommended plugins and install them manually
5. Install `node_modules` using `npm` or `yarn` or `pnpm`.

   ```sh
   npm install
   ```

   OR

   ```sh
   yarn install
   ```

   OR

   ```sh
   pnpm install
   ```

6. Run `npm run dev` or `yarn dev` to run the project.
7. Project will start at http://localhost:5173

> If you are on Windows and getting lot of ESLint errors due end of line characters CRLF please run the below command to fix it.

```sh
npm run format
```

> **NOTE**: If you face issue installing with `npm` trying using `yarn v1.22.*`

> **NOTE**: You might be asked to do HTTP calls to https://codebuddy.review , the API mentioned in the Question Set will only work if you do a fetch request from the application as it served using MSW (Mock Service Worker) https://mswjs.io/. **So it won't work if you try to do a fetch request from Postman or any other tool**. Check for message `[MSW] Mocking enabled` in the browser console to confirm that the API is working.

---

> In case of any queries feel free to contact us
