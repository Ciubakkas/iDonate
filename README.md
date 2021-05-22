# KLP Contracts

## Running on local:

- `cd app` and `npm run start`

- `cd function` and `npm run serve` and `npm run watch`

## Depoyment:

### App/Hosting deployment

- `cd app` and `npm run deploy-dev` or `npm run deploy-prod`

### Functions deployment

`cd functions` and `npm run deploy-dev` or `npm run deploy-prod`

### Firebase storage config

[https://firebase.google.com/docs/storage/web/download-files#cors_configuration]

- run `gsutil cors set cors.json gs://<your-cloud-storage-bucket>`
