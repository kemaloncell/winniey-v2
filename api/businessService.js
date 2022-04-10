import { BaseService } from './baseService'

class BusinessService extends BaseService {
  constructor() {
    const baseAPIUrl = process.env.VUE_APP_BASE_API || 'https://winniey-backend.herokuapp.com/api'
    super(`${baseAPIUrl}/business`)
  }

  async getByUsername(username) {
    return super.get(`/username/${username}`)
  }
}

const businessService = new BusinessService()

export { businessService }
