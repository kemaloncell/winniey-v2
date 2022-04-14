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

  async update(tableId, data) {
    return super.put(`/${tableId}`, data)
  }
}

const tableService = new TableService()

export { tableService }
