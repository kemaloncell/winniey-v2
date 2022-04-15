import { BaseService } from './baseService'

class OrderService extends BaseService {
  constructor() {
    super('order')
  }

  async getOrderList(parameters) {
    const result = await super.get('/list', parameters)
    return result
  }

  async create(data) {
    const result = await super.post('/', data)
    return result
  }

  async delete(id) {
    const result = await super.delete(`/?id=${id}`)
    return result
  }

  async update({ data, id }) {
    const result = await super.put(`/?id=${id}`, data)
    return result
  }

  async getById(id) {
    const result = await super.get(`/?id=${id}`)
    return result
  }
}

const orderService = new OrderService()

export { orderService }
