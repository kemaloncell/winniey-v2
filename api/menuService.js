import { BaseService } from './baseService'

class MenuService extends BaseService {
  constructor() {
    const baseAPIUrl = process.env.VUE_APP_BASE_API
    super(`${baseAPIUrl}/menu`)
  }

  async getAll(businessId) {
    const result = super.get(`/business-menu-list/${businessId}`)
    return result
  }

  async getById(menuId) {
    const result = super.get(`/${menuId}`)
    return result
  }

  async create(data) {
    const result = super.post('/', data)
    return result
  }

  async delete(menuId) {
    const result = super.delete(`/${menuId}`)
    return result
  }

  async update({ data, menuId }) {
    const result = super.put(`/${menuId}`, data)
    return result
  }
}

const menuService = new MenuService()

export { menuService }
