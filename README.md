# Welcome to Remix!

#### Hat tip to [@ascorbic](https://github.com/ascorbic/remix-on-netlify/) for his Netlify Template and to [@anthonychu](https://github.com/anthonychu) for his support getting this to work on Azure Static Web Apps.

## Documents

- [Remix Docs](https://docs.remix.run)
- [Customer Dashboard](https://remix.run/dashboard)

## Publishing

You will need to set the following secrets in your repo:

- REMIX_LICENSE_KEY: Get this from your [Remix Dashboard](https://remix.run/dashboard)
- AZURE_STATIC_WEB_APPS_TOKEN: Get this from your [Azure Portal](https://portal.azure.com). On the overview screen for your static web app, there is a button at the top that says **Manage Token**. That should be your secret value.

## Future

In the future, I would like to add a **Deploy to Azure** button to this page, but that requires an Azure Resource Management (ARM) template and right now Static Web Apps with functions aren't supported for ARM templates.
