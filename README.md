# Wollywoggler Source Repository

This repository contains the source code for the Wollywoggler project.

To build the project, you will need to install the following software:

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

Once you have installed the above software, you can build the project by running the following command:

    docker-compose build

To run the project, you can run the following command:

    docker-compose up

To run the project in the background, you can run the following command:

    docker-compose up -d

To stop the project, you can run the following command:

    docker-compose down

The default port for the project is 80. You can change this by editing the `docker-compose.yml` file.