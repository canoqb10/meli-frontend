FROM node:alpine

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Build and run the app
RUN npm run build
EXPOSE ${PORT}
CMD npm run start
