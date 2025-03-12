# Frontend - Cosmic Cat Café

This is the React frontend for the Cosmic Cat Café project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Docker

A Dockerfile is provided to build and serve the production build of the frontend.

### Build the Docker image

```console
docker build -t frontend:latest .
```
### Run 
```console
docker run -d -p 3000:3000 --name frontend frontend:latest

```