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

## Deploying

We recommend using [Fly.io](https://fly.io/) for deployment.

As a fair warning, this will require a credit card. However, you shouldn't get charged for it, as Fly.io has a generous free tier.

1. Make an account on [Fly.io](https://fly.io/)

2. Install [flyctl](https://fly.io/docs/hands-on/install-flyctl/)

3. Run `flyctl auth login`

    You may be prompted to add a credit card at this stage. We recommend doing so in order to proceed.

4. Run `flyctl launch`

    When asked for a region, select one close to you (I'd recommend Boston).
    When asked if you would "like to set up a Postgresql database now". Enter "N".
    Similarly, they may ask about setting up "an Upstash Redis database". Enter "N".
    When asked if you'd like to deploy now, enter "y".

    After launching, the terminal should print the URL at which your app is publicly available.

5. Modify the `BACKEND_BASE_PATH` variable.

    If you haven't already, go to `/frontend/src/constants/Navigation.tsx` and read the `TODO` instructions left there. Then, make the changes accordingly.

6. Run `flyctl deploy` to re-deploy changes to your app to the same URL.

### Debugging
If your deployment launch name gets too long. Try going into your (fly.io)[https://fly.io] dashboard and go to `Apps` then delete any current apps you may currently have. Then go back to the console and run `flyctl launch` when asked "Do you want to tweak these settings before proceeding?" type "y" and then change the name to your desired name.