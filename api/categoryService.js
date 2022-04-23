import { BaseService } from './baseService'
class CategoryService extends BaseService {
  constructor() {
    super('category')
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

  async create(data) {
    const result = super.post('/', data)
    return result
  }

  async delete(id) {
    const result = super.delete(`/${id}`)
    return result
  }

  async update({ data, id }) {
    const result = super.put(`/${id}`, data)
    return result
  }
}

const categoryService = new CategoryService()

export { categoryService }
