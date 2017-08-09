const mockState = {
  auth: {
    status: 'authenticated' || 'unauthenticated',
    jwt: null, 
    user: null, 
    aws: null, 
    originalQuery: null,
    impersonator: null, 
    slackCreds: null, 
    contextineCreds: null, 
    contextineRefreshTimeout: null, 
  }
}