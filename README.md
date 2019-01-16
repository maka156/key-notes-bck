# Key Notes - Backend Service
Simple API you can use to create, update or delete your Notes.

Project codebase: Node.js + MongoDB + Express.js

Container: Docker

## Installation

Make sure you have installed [Docker + Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04).

After cloning the project please run the following commands:

```bash
docker-compose build
```

```bash
docker-compose run --service-ports backend
```

## Basic Usage

`GET` request to `{HOST:8080}`

`POST` request to `{HOST:8080/notes}`

`PUT` request to `{HOST:8080/notes/:id}`

`DELETE` request to `{HOST:8080/notes/:id}`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)