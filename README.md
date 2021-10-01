![Node version](https://img.shields.io/badge/node-14.17.5-green?style=plastic)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/JairMoralesNovoa/FulltimeforceTask/blob/main/README.ms">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Commit Visualization using Github API</h1>

  <p align="center">
    Fulltime Force Task
    <br />
    <a href="https://github.com/JairMoralesNovoa/FulltimeforceTask"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/JairMoralesNovoa/FulltimeforceTask/issues">Report Bug</a>
    ·
    <a href="https://github.com/JairMoralesNovoa/FulltimeforceTask/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About the proyect

This proytec is a task from Fulltime Force for a Full Stack developer position. The App shows the commits made in this repo and linked to each one.

### Built With

The main frameworks used iun this proyect are:
* [Node](https://nodejs.org/)
* [React](https://reactjs.org)
* [Express](https://expressjs.com)
* [Material-UI](https://mui.com)


<!-- GETTING STARTED -->
## Getting Started

Please be aware of the following recomendations and steps to deploy the proyect localy.

### Prerequisites

* The Node version used and required is 14.17. Make sure you have it before installation. 
* Clone the repo onto your local storage.

### Instalation

To use the App for ***development***, please follow the next steps:

1. Open command line in the cloned folder.
2. Instal dependencies using yarn or npm:
    ```sh
    yarn 
    ```
    ```sh
    npm install
    ```
3. If you want to choose the port of render go to the root folder of the proyect and create a .env file to change the enviroment PORT, by default the port number is 3000:
    PORT = < YOUR_PORT_NUMBER >
4. Execute the app in dev mode using the following command:
    ```sh
        yarn development 
    ```
    ```sh
        npm run development
    ```
5. Open [localhost:3000](http://localhost:3000/) in the browser or use the port you choose before.


#### Production Mode

To deploy the app in production follow the previous steps 1-2-3 if you haven't done it before and continue from here:

1. Edit the file ./server/server.js commenting the lines:
    ```js
    import devBundle from "./devBundle.js";
    devBundle.compile(app);
    ```
2. Build the proyect using the command:
    ```sh
        yarn build 
    ```
    ```sh
        npm run build
    ```
3. Run the App with the command:
    ```sh
        yarn start 
    ```
    ```sh
        npm run start
    ```


<!-- Observations -->
## Observations

The model of commits is as follows:
```js
TITLE OF COMMIT
- Commit datail 
- Commit datail 
- Commit datail 
- Commit datail 
```