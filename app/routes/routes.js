module.exports = (app) => {
  const { api } = app;

  app.get('/api/companies', api.company.getList);
}