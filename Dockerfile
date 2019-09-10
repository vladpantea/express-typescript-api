#---Installer stage
FROM mhart/alpine-node:12 as builder

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app
# TypeScript
RUN npm run build 
RUN npm prune --production

# Start
CMD [ "node", "lib/index.js" ]
EXPOSE 4000