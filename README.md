# Welcome to Remix!

- [Remix Docs](https://docs.remix.run)
- [Customer Dashboard](https://remix.run/dashboard)

## Before development

You'll need to be setup for Azure Function development. Most importantly, install the Azure Functions Core Tools. Follow the steps here: [Install the Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#install-the-azure-functions-core-tools)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### Running as an Azure Function locally

Once you've run `npm run build` you can run `func start`

At this point your app should be available at `http://localhost:7071`

### Deploying to Azure Functions

Follow the instructions for deploying any other Azure function. Just make sure all the contents of the **azure** folder and **public** folder get deployed as well.
