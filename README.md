# Welcome to Round 3 of your React Interview

> This round is to test your practical knowledge of using React in real world applications.
> The repo serves as a boilerplate for the React application you are going to build.
> The boilerplate is created using `create-react-app`.

> **_Please read the below instructions carefully_**

---

### **Before starting keep in mind the below points**

- The repo is configured with **ESlint** to check the code quality of your javascript code.
- Failing the rules set by the above linters will _prevent you from committing to this repo_
- The Project will show some VS Code plugins as recommendations, that help you regarding these linter, ESLint, Editorconfig, etc. Install these plugins for better experience.
- Has bootstrap 5, react-router 6, many other libraries which you might need pre-installed.
- You can install other npm packages if you want
- Upon completing the problem, commit to your forked github repo and share the github repo url with us for review
- Writing inline CSS is discouraged, utilise bootstrap or write your custom CSS in separate CSS files or CSS modules.
- Create a `.env` by copying `.env.example` which contains your environment variables
- UI must be responsive
- Can use any online resources to solve the problem
- Must use [`fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make API calls instead of `axios`. Use `JSON.stringify` to convert the body to string when doing any POST request. Don't pass any headers like `Content-Type` or `Accept` in the request.
- You have a total of **2 hrs** to complete the task

---

## Installation

### There are two ways in which you can run this repo.

<details>
   <summary>Open it in CodeSandbox</summary>
   
   1. Open the repo in CodeSandbox by clicking on: [![Edit codebuddy-react-round-3-boilerplate](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/red-cookies-kgeqd2?fontsize=14&hidenavigation=1&theme=dark)
   
   2. Click on the GitHub icon and sign in
   
   ![image](https://user-images.githubusercontent.com/86043613/161898147-f96e1430-7856-4bea-a26e-64d1369fa4c3.png)
   
   ![image](https://user-images.githubusercontent.com/86043613/161897628-00ab4b27-faa8-441b-841d-7cc3df869a7c.png)
   
   3. Once you're done with the problem statement, write **codebuddy-react-interview-3** in the *Repository name...* input field and click on **Create new repository on GitHub**
   
   ![image](https://user-images.githubusercontent.com/86043613/161897821-088ccfe5-4154-4d30-8cea-0fd7f2025b83.png)
   
   ![image](https://user-images.githubusercontent.com/86043613/161897786-bee7fe0b-dbd0-4aba-bbff-ee22b2975a08.png)
   
   4. Share the GitHub repo link with us



</details>

<details>
   <summary>Set it up in your local machine by following the below steps</summary>


   > **_Please read the below instructions carefully. Complete all the steps sequentially_**.

   1. **_FORK_** this repo to your own GitHub account. **_DON'T CLONE THIS REPO_**. Fork button is the top right corner of the page.
   2. Clone it to your local machine.
   3. Open the project folder in VS Code
   4. Install the recommended plugins
      - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
      - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
      - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   5. Install `node_modules` using `npm` or `yarn`.

      ```sh
      npm install
      ```

      OR

      ```sh
      yarn install
      ```

   6. Create a `.env` by copying `.env.example` at the root of the project.
   7. Run `npm run start` or `yarn start` to run the project.
   8. Project will start at http://localhost:3000

   > If you are on Windows and getting lot of ESLint errors due end of line characters CRLF please run the below command to fix it.

   ```sh
   npm run lint:fix
   ```

   > **NOTE**: If you face issue installing with `npm` trying using `yarn v1.22.*`

   > If you are unable to push to your repo due to lint errors, please run `npm run lint` or `yarn lint` to check the code quality. If unable to solve the lint errors, commit using `git commit -m "YOUR COMMIT MESSAGE" --no-verify` and share the link with us for review.

   ---

</details>

> In case of any queries feel free to contact us
