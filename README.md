# SportsStore

## Prerequisites
* [NodeJS](https://nodejs.org/) Javascript runtime
* [Docker](https://www.docker.com/) Docker containers

## Checkout project

Run `git clone https://github.com/Harukine/sportsStore-angular12.git` to pull source code.\
Run `cd /sportsStore-angular12` to change into the work directory.

## Build application 

Run `npm install` to get all the required dependencies.\
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build docker image

Run `docker build . -t sportsstore -f Dockerfile` to build the Docker image.\
Docker will grab the build in `dist\` and package a ready to deploy image.

## Start docker container

Run `docker run -p 80:80 sportsstore` to start the application in a container,\
open http://localhost in the browser to test the application.
