import { BaseService } from './baseService'

class MenuService extends BaseService {
  constructor() {
    super('menu')
  }

  async getMenuList(businessId) {
    return super.get(`/business-menu-list/${businessId}`)
  }

  async getAll(businessUsername) {
    return super.get(`/all/${businessUsername}`)
  }

  async getById(menuId) {
    return super.get(`/${menuId}`)
  }

  async create(data) {
    return super.post('/', data)
  }

  async delete(menuId) {
    return super.delete(`/${menuId}`)
  }

  async update({ data, id }) {
    return super.put(`/${id}`, data)
  }
}

const menuService = new MenuService()

export { menuService }
