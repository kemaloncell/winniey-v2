import { BaseService } from './baseService'

class TableService extends BaseService {
  constructor() {
    const baseAPIUrl = process.env.VUE_APP_BASE_API || 'https://winniey-backend.herokuapp.com/api'
    super(`${baseAPIUrl}/table-info`)
  }

  async getTables(businessId) {
    return super.get(`/${businessId}`)
  }

  async create(data) {
    return super.post('/', data)
  }
}

const tableService = new TableService()

export { tableService }
