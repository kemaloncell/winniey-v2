import { BaseService } from './baseService'

class TableService extends BaseService {
  constructor() {
    super('table-info')
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
