import { BaseService } from './baseService'

class BusinessService extends BaseService {
  constructor() {
    super('business')
  }

  async getByUsername(username) {
    return super.get(`/username/${username}`)
  }
}

const businessService = new BusinessService()

export { businessService }
