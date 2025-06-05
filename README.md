# Aviation Hub Web App

This is a React web application that fetches and displays METAR data and includes other aviation-related features.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## Installation

1. **Clone or download this repository.**
2. **Open a terminal in the project folder:**
   ```
   cd aviationHub
   ```
3. **Install dependencies:**
   ```
   npm install
   ```
   or, if you prefer Yarn:
   ```
   yarn install
   ```

## Running the App

Start the development server with:

```
npm start
```
or
```
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## Important Notes

- **METAR API Status:**  
  The API used to fetch METAR data is currently **down**. As a result, the METAR lookup feature will not return live data until the API is restored.

- **Database Provided:**  
  This project includes a sample database file for demonstration and evaluation purposes, as it is part of a university project. You can find the database file in the project root or in the `db/` folder.

---

## METAR Lookup Feature

To fetch METAR data, the app uses a CORS proxy.  
**You must run a proxy server locally for this feature to work.**

### Running a CORS Proxy

1. In a new terminal, run:
   ```
   npx cors-anywhere --port 8080
   ```
2. Keep this terminal open while using the app.

## Troubleshooting

- If you see errors about missing packages, run `npm install` or `yarn install` again.
- If the METAR lookup hangs or fails, make sure the CORS proxy is running on port 8080.
- For other issues, check the browser console and terminal output for error messages.
- If yarn start doesn't work try npm start, it works often.

