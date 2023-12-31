# full-stack

A "standard" yet modern full-stack TypeScript web-application template using React/Vite on the frontend and Express on the backend, bundled with Turborepo.

## Using this example

Run the following command:

```sh
pnpm install
pnpm build
pnpm dev
```

The server will be available at `http://localhost:8080`.
The client will be available at `http://localhost:5173`.

## What's inside?

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [Turborepo](https://turbo.build/repo) for monorepo management

On the frontend:

-   [Vite](https://vitejs.dev/) for frontend development
-   [React](https://reactjs.org/) for frontend UI
-   [React Router](https://reactrouter.com/) for frontend routing
-   [Mantine](https://mantine.dev/) for frontend UI components
-   [Lucide](https://lucide.dev/) for frontend icons

On the backend:

-   [Express](https://expressjs.com/) for backend development

## Making Edits

To edit the frontend, `cd` into `frontend` and make changes as you would normally in a standard React app.

To edit the backend, `cd` into `backend` and make changes as you would normally in a standard Express server.

To edit types that are _shared_ between the frontend and backend, `cd` into `lib/types`, and put your types in `index.ts`. You can put miscellaneous types here that you want to share between the frontend and backend in the `src` directory within. Don't forget to export them!
