# Cosmic Cat Cafe
A simple and elegant cosmic cat cafe project. 
This project is intended to showcase Rust and React knowledge to develop a fast and simple application. 

The project's backend is written in Rust using the Rocket library. 
The project's frontend is a simple React application using the React Router Dom framework.  

## Preview
### First page: 
![First Page](./assets/1.png)
### Cats:
![Cats section](./assets/2.png)
### Manu and Game: 
![Menu and game](./assets/3.png)
### Sam...?
![Sam the insumergable](./assets/4.png)


## Build and run everything with docker: 
```console
docker-compose up --build

```

## Stop Services: 
```console
docker-compose down

```

## Need to set ENV variable for url mapping to port 8000:
This is an example when deploying to Koyab
```console
REACT_APP_BACKEND_URL=https://{{ KOYEB_PUBLIC_DOMAIN }}/v1/api
```