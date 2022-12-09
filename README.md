<h1 align="center">REMO</h1>

###

<p align="center">Rental Motor : A web application for renting motorbikes</p>

###
<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#setting-up-project">Setting Up Project</a>
      <ul>
        <li><a href="#install-required-dependencies">Install required dependencies</a></li>
        <li><a href="#run-the-program">Run the program</a></li>
      </ul>
    </li>
    <li><a href="#design-ui">Design UI</a></li>
    <li><a href="#contribution-guide">Contribution guide</a>
      <ul>
        <li><a href="#branch-naming">Branch naming</a></li>
        <li><a href="#commit-messages">Commit messages</a></li>
      </ul>
    </li>
  </ol>
</details>
<br>

## Authors

- [@mhmd-arif](https://github.com/mhmd-arif)
- [@akbarsigit](https://github.com/akbarsigit)
- [@vallentinawf](https://github.com/vallentinawf)
- [@Banendra17](https://github.com/Banendra17)
- [@ranggarahman](https://github.com/ranggarahman)


## Prerequisites

- [Download](https://nodejs.org/en/download/) and install **Node.js** version `16.15` or higher.

## Dependencies

### Backend
  ```
  - bcryptj
  - body-parser
  - cookie-parser
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - mongoose
  - morgan
  - nodemailer
  - validator
  ```
### Frontend
  ```
  - React
  - tailwindcss
  ```

## Setting Up Project

### Install required dependencies

  - **Frontend**
    - change directory to Frontend directory
      - open terminal
      - `cd ./frontend`
    - `npm install`

  - **Backend**
    - change directory to Backend directory
      - open terminal
      - `cd ./backend`
    - `npm install`

### Run the program

  - **Frontend**
    - change directory to Frontend directory
      - open terminal
      - `cd ./frontend`
    - `npm start`

  - **Backend**
    - change directory to Backend directory
      - open terminal
      - `cd ./backend`
    - `npm start`

## Design UI

- [Project Design](https://www.figma.com/file/nePn8DYvwP9pmw85Q0Gzv9/ReMo?node-id=0%3A1)

## Contribution guide

### Branch naming

`<type>/<short_description>`

  - example :
    - **add new feature**
      - `feature/the-feature`
    - **fixing a feature**
      - `fix/the-feature`

  - [Learn More about branch naming ](https://nvie.com/posts/a-successful-git-branching-model/)
  <br/>

### Commit messages
`<type>(<scope>): <subject>`

"scope" is optional

  - example :
    - **add new feature**
      - `feat: add rental get method`
      <br>or
      - `feat(get-method): add rental get method`
    - **fixing a feature**
      - `fix(get-method): missing variable`
    - **refactoring code**
      - `refactor(get-method): rental get method`

  - [Learn More about Commit messages](https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709)
  <br/>
