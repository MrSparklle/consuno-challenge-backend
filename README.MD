# Consuno Coding Challenge - Backend (Joel Darós)

Create a simple API based on Node.js that returns the list of companies to the frontend. The API can read the data from a simple JSON source, no database setup is required.

---

## Steps to run:

From the main root of the project (the same folder that this file is located) run the commands bellow:
1. `npm install` 
2. `npm start`
4. Open [http://localhost:3333/api-docs](http://localhost:3333/api-docs) in appropriate browser to see available swagger endpoints
3. Folow README instructions in the frontend folder

# Features:
- Node.js / Express backend for Consuno Codding Challenge
- The data provided by this service is loaded from `src/data/constructors.data.ts` file
- Log files are generated on every request. We have specific debug and error logs.

--- 

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

### `npm start`

Runs the app in the production mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The server will reload if you make edits.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder.

