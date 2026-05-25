# CityHub ISP Login App

A Node.js/Express web application serving the CityHub ISP login and sign-up page, with CI/CD configured for automated deployment to **Azure App Service** via GitHub Actions.

## Project Structure

```
├── server.js                  # Express server entry point
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Locked dependency tree
├── Public/                    # Static assets served by Express
│   ├── index.html             # Login & sign-up UI
│   └── style.css              # Stylesheet
├── .azure/                    # Azure configuration
└── .github/
    └── workflows/             # GitHub Actions CI/CD pipelines
```

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm (bundled with Node.js)
- An Azure subscription (for deployment)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pleromacity/azuretest2.git
cd azuretest2

# Install dependencies
npm install

# Start the server
npm start
```

The app will be available at **http://localhost:3000**.

## Configuration

| Environment Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the server listens on |

Azure App Service sets `PORT` automatically at runtime.

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `express` | `^4.18.2` | HTTP server and static file serving |

## Deployment

This repository is configured for continuous deployment to **Azure App Service** using GitHub Actions (`.github/workflows/`).

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `AZURE_WEBAPP_PUBLISH_PROFILE` | Publish profile downloaded from the Azure App Service resource |

### Manual Deployment via Azure CLI

```bash
# Login to Azure
az login

# Deploy to an existing App Service
az webapp up \
  --name <app-service-name> \
  --resource-group <resource-group> \
  --runtime "NODE:20-lts"
```

### CI/CD Flow

1. Push to `main` triggers the GitHub Actions workflow.
2. The workflow installs dependencies and deploys to Azure App Service.
3. Azure App Service starts the app with `npm start`.

## ⚠️ Notes

- `node_modules/` is committed to the repository. For cleaner deployments, add it to `.gitignore` and let the CI pipeline run `npm install` instead.
- Ensure the `Public/` directory (capital P) matches the path referenced in `server.js` (`public/` lowercase). Mismatches will cause static files to 404 on case-sensitive Linux hosts.
