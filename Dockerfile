# FROM ubuntu
# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_current.x | bash -
# RUN apt-get upgrade -y
# RUN apt-get install -y nodejs
# WORKDIR /my_node_app
# COPY . .
# RUN npm install
# CMD [ "npm", "run", "dev" ]