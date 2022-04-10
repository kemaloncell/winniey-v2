import { BaseService } from './baseService'

class OrderService extends BaseService {
  constructor() {
    super('order')
  }

  async getAllList(parameters) {
    const result = super.post('/list', parameters)
    return result
  }

  async create(data) {
    const result = super.post('/', data)
    return result
  }

  async delete(id) {
    const result = super.delete(`/?id=${id}`)
    return result
  }

  async update({ data, id }) {
    const result = super.put(`/?id=${id}`, data)
    return result
  }

  async getById(id) {
    const result = await super.get(`/?id=${id}`)
    return result
  }
}

const bankService = new OrderService()

export { bankService }
