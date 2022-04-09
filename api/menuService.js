import { BaseService } from './baseService'

class MenuService extends BaseService {
  constructor() {
    const baseAPIUrl = process.env.VUE_APP_BASE_API || "https://winniey-backend.herokuapp.com/api"
    super(`${baseAPIUrl}/menu`)
  }

  async getMenuList(businessId) {
    return super.get(`/business-menu-list/${businessId}`)
  }

  async getAll(businessUsername) {
    return super.get(`/all/${businessUsername}`)
  }

  async getById(menuId) {
    const result = super.get(`/${menuId}`)
    return result
  }

  async createMenu(data) {
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
