# Welcome to Round 3 of your React Interview

> This round is to test your practical knowledge of using React in real world applications.
> The repo serves as a boilerplate for the React application you are going to build.
> The boilerplate is created using `create-react-app`.

---
### Before starting keep in mind the below points

- The repo is configured with ESlint to check the code quality of your javascript code.
- The repo is configured with Stylelint to check the code quality of CSS.
- The repo is configured with Commitlint check your commit message structure.
- Failing the rules set by the above linters will prevent you from commit to this repo
- We here in Codebuddy always try to write clean and readable code, so anyone can understand the code which has been written by anyone.
- The Project will show some VS Code plugins as recommendations, that help you regarding these linter, ESLint, Stylelint, Editorconfig, etc. Install these plugins for better experience.
- Has bootstrap, react-router, many other libraries which you might need pre-installed.
- You can install other npm packages if you want
- Upon completing the problem, commit to your forked github repo and share the github repo url with us for review
- Writing inline CSS is discouraged, utilise bootstrap or write your custom CSS in separate CSS files or CSS modules.
- Create a `.env` by copying `.env.example` which contains your environment variables
- Use `npm run cm` or `yarn cm` to create commit message
- UI must be responsive
- Can use any online resources

---

## Installation

1. Fork this repo to your own GitHub account
2. Clone it to your local machine.
3. Install `node_modules` using `npm` or `yarn`.
4. Run `npm run start` or `yarn start` to run the project.

---

## The Problem
### Part 1
Create multi-step form in React which will contain 3 forms

**Form 1** will take 2 inputs, with the below validations:
- `emailId` - Required. Must be a valid email ID
- `password` - Required. Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.

**Form 2** will take 3 inputs, with the below validations:
- `firstName` - Required. Allow only alphabets. Minimum of 2 character and maximum 50.
- `lastName` - Optional. If not empty, will only allow alphabets
- `address` - Required. Minimum length 10.

**Form 3** will take 3 inputs, with the below validations:
- `countryCode` - Required. Allow only 2 country code, India (+91) and America (+1). Must be a dropdown input
- `phoneNumber` - Required. Allow only 10 digit numeric phone number
- `acceptTermsAndCondition` - Required. Will be a checkbox input and must be selected.

Each form will have 3 button, named below:
- `Back`: Will be disabled for **Form 1**
- `Save`: Will be enabled for all forms`
- `Save and Next`: Will be disabled for **Form 3**

#### Features:
- User can `Save and Next` only if the form valid for each step.
- User can go back to previous screen to change it's values
- User will have the ability to jump back to any form if previously filled using a tabbed navigation
- Show error message to user for failed input validation

At the end of **Form 3**, when the user will click on save all the details needs to submitted through an HTTP POST request to `https://codebuddy.review/signup`

Example request body: 

```json
{
  "emailId": "john.doe@gmail.com",
  "password": "QWerty##11",
  "firstName": "John",
  "lastName": "Doe",
  "address": "22/B, Baker Street, London - 10089",
  "countryCode": "+91",
  "phoneNumber": "2225550909"
}
```

> Note: `acceptTermsAndCondition` must not be submitted to API

Upon doing a valid HTTP POST request you will get a response like below.

Sample API response:
```json
{
    "message": "Success",
    "data": {
        "emailId": "john.doe@gmail.com",
        "password": "QWerty##11",
        "firstName": "John",
        "lastName": "Doe",
        "address": "22/B, Baker Street, London - 10089",
        "countryCode": "+91",
        "phoneNumber": "2225550909"
    }
}
```

### Part 2

Upon submitting the form at the end, redirect the user to `/posts` (i.e., http://localhost:3000/posts)

Here you have to display the list of post which we get from the API using HTTP GET request at `https://codebuddy.review/posts`

This API will return a list of posts having the below details
- `id`: Unique id for each post
- `firstName`: First name of the author
- `lastName`: Last name of the author
- `writeup`: Post description / writeup
- `image`: Post image
- `avatar`: Post author image

Display the list of posts which will show the above details.

For Large Screens, show 3 post in an single row

For Medium Screens, show 2 post in an single row

For Small Screens, show 1 post in an single row

---
> In case of any queries feel free to contact us
