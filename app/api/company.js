const mockCompany = require('./__mocks__/mockCompanies.json')

module.exports = (app) => {
  const api = {};

  api.getList = (req, res) => {
    res.json(mockCompany)
  }

  return api;
}