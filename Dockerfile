## Specifies the base image we're extending
FROM node:8

## Create base directory
RUN mkdir /src

## Specify the "working directory" for the rest of the Dockerfile
WORKDIR /src

## Install packages using NPM 5 (bundled with the node:8 image)
ADD ./*.json /src/
RUN npm install --silent

## Add application code
ADD ./*.js /src/

## Allows port 3000 to be publicly available
EXPOSE 3000

CMD ["node", "index.js"]