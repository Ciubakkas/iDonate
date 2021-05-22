// const client = require('http')

export const syncConfig: producer = async ({
  // isReady = update.config.isReady,
  configuration = update.config
}) => {
  const hostname = window.location.hostname
  let url: string = ''
  if(process.env.NODE_ENV == 'local_config') url = 'http://localhost:5001/klp-project-dev/europe-west2/serveConfig'
  if(hostname.includes('klp-project-dev') || process.env.NODE_ENV == 'development') url = 'https://europe-west2-klp-project-dev.cloudfunctions.net/serveConfig'
  if(hostname.includes('klp-staging-cdd41')) url = 'https://europe-west2-klp-staging-cdd41.cloudfunctions.net/serveConfig'
  if(hostname.includes('klp-contracts')) url = 'https://europe-west2-klp-contracts.cloudfunctions.net/serveConfig'
  if(!url) return
  try {
    const resp = await fetch(url)
    const config = await resp.json()
    configuration.merge(config)
  } catch (err) {
    console.error('ERROR LOADING CONFIG', err)
  }
};
