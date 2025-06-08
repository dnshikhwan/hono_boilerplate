# Hono Boilerplate

This project provides a basic setup for building web APIs with the [Hono](https://hono.dev) framework using Bun.

## Requirements

- [Bun](https://bun.sh/) runtime 1.x

## Setup

Install dependencies:

```sh
bun install
```

## Running the server

Start the development server with hot reload:

```sh
bun run dev
```

By default the server listens on [http://localhost:3000](http://localhost:3000). The base API path is `/api/v<version>` defined in `src/index.ts`.

## Project Structure

- `src/config` – environment configuration
- `src/routes` – route definitions (for example the health check route)
- `src/lib` – helper utilities

## License

This boilerplate is provided as-is under the MIT license.
