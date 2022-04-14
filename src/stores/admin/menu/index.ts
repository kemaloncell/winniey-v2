import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { menuService } from '~/../api/menuService'
import { categoryService } from '~/../api/categoryService'
import { itemService } from '~/../api/itemService'
import { useAuthStore } from '~/stores/auth'
export const useAdminMenu2 = defineStore({
  id: 'adminMenu2',

  state: () => ({
    menu: {},
    menus: [],
    filteredMenu: [],
    selectedMenu: null,
    businessInfo: null,
  }),
  getters: {
    getMenu: state => state.menu,
    getFilteredMenu: state => state.filteredMenu,
    getMenus: state => state.menus,
    getSelectedMenu: state => state.selectedMenu,
    getBusinessInfo: state => state.businessInfo,
  },
  actions: {
    setDraggedMenuCategory(menu) {
      menu.forEach((item) => {
        const currentItem = this.menu.find(
          menuItem => menuItem.category.id === item.category.id,
        )
        if (currentItem) {
          const { category } = currentItem
          const categoryIndex = menu.findIndex(
            menuItem => menuItem.category.id === category.id,
          )
          if (categoryIndex !== -1 && category.order !== categoryIndex) {
            this.updateCategory({
              category,
              update: {
                order: categoryIndex,
              },
            })
          }
        }
      })
      this.menu = menu
    },
    search(searchText) {
      const query = searchText.trim().toLowerCase()
      if (!query || query.length < 2) {
        this.filteredMenu = []
        return
      }

      const filteredMenu = []

      this.menu.forEach((menuCategory) => {
        const filteredItems = menuCategory.items.filter((item) => {
          return (
            item.name.toLowerCase().includes(query)
                        || item.description.toLowerCase().includes(query)
          )
        })

        if (filteredItems.length > 0) {
          filteredMenu.push({
            category: menuCategory.category,
            items: filteredItems,
          })
        }
      })

      this.filteredMenu = filteredMenu
    },
    setSelectedMenu(menuID) {
      this.selectedMenu = this.menus.find(menu => menu.id === menuID)
    },
    async setImage(payload) {
      const result = await Storage.put(
        `${payload.menuItem.id}.jpg`,
        payload.file,
        {
          level: 'public',
          contentType: 'image/jpeg',
        },
      )

      const { key } = result
      await this.updateMenuItem({
        menuItem: payload.menuItem,
        update: {
          image: key,
        },
      })
    },
    async setBusinessLogo(payload) {
      const result = await Storage.put(
        'logo.jpg',
        payload.file,
        {
          level: 'public',
          contentType: 'image/jpeg',
        },
      )

      const { key } = result
      const authStore = useAuthStore()
      await authStore.updateBusiness({
        businessInfo: authStore.currentBusiness,
        update: {
          logo: key,
        },
      })
    },

    async fetchAllInfo() {
      try {
        NProgress.start()
        const route = useRoute()
        const businessUsername = route.params.businessUsername
        const allInfo = await menuService.getAll(businessUsername)
        const { menu, menus, business } = allInfo.data
        this.menu = menu.Categories
        this.menus = menus
        this.businessInfo = business
        NProgress.done()
        return this.menu
      }
      catch (error) {
        NProgress.done()
        console.log(error)
      }
    },

    async fetchSelectedMenu(menuID) {
      try {
        NProgress.start()
        const { data } = await menuService.getById(menuID)
        this.menu = data.Categories
        NProgress.done()
        return this.menu
      }
      catch (error) {
        NProgress.done()
        console.log(error)
      }
    },

    async addMenu(payload) {
      try {
        NProgress.start()
        const businessUsername = this.businessInfo?.username
        const result = await menuService.create({
          ...payload,
          businessUsername,
        })
        NProgress.done()
        if (result)
          this.menus.push(result.data)
      }
      catch (error) {
        console.log(error)
      }
    },

    async updateMenu(payload) {
      try {
        NProgress.start()
        const result = await menuService.update({
          id: payload.menu.id,
          data: payload.update,
        })
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const menu = state.menus.find(menu => menu.id === payload.menu.id)
            menu.name = payload.update.name
            menu.description = payload.update.description
          })
        }
      }
      catch (error) {
        console.log(error)
      }
    },
    async deleteMenu(payload) {
      try {
        NProgress.start()
        const result = await menuService.delete(payload.menu.id)
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const menu = state.menus.find(
              menuObject => menuObject.id === payload.menu.id,
            )
            state.menus.splice(state.menu.indexOf(menu), 1)
            if (state.menus.length === 0)
              state.selectedMenu = {}
            else
              state.selectedMenu = state.menus[0]
          })
        }
      }
      catch (error) {
        console.log(error)
      }
    },

    async postCategory(payload) {
      const businessUsername = this.businessInfo?.username
      try {
        const result = await categoryService.create({
          menuId: this.selectedMenu.id,
          name: payload.name,
          businessUsername,
        })
        if (result) {
          this.$patch((state) => {
            state.menu.push({
              category: JSON.parse(JSON.stringify(result)),
              items: [],
            })
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }
    },

    async postMenuItem(payload) {
      const businessUsername = this.businessInfo?.username
      try {
        const result = await itemService.create({
          categoryId: payload.id,
          name: payload.fields.name,
          description: payload.fields.description,
          businessUsername,
        })
        if (result) {
          this.$patch((state) => {
            const category = state.menu.find(
              f => f.category.id === payload.category.id,
            )
            if (!category?.items)
              category.items = []

            category.items.push(JSON.parse(JSON.stringify(result)))
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }
    },

    async updateCategory(payload) {
      try {
        NProgress.start()
        const result = await categoryService.update({
          id: payload.categoryId,
          data: payload.update,
        })
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const categoryItem = state.menu.find(
              f => f.category.id === payload.category.id,
            )
            Object.entries(payload.update).forEach(([key, value]) => {
              categoryItem.category[key] = value
            })
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }
    },

    async updateMenuItem(payload) {
      try {
        NProgress.start()
        const result = await itemService.update({
          id: payload.itemId,
          data: payload.update,
        })
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const categoryItem = state.menu.find(
              f => f.category.id === payload.category.id,
            )
            const item = categoryItem.items.find(
              f => f.id === payload.item.id,
            )
            Object.entries(payload.update).forEach(([key, value]) => {
              item[key] = value
            })
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }
    },

    async deleteCategory(payload) {
      try {
        NProgress.start()
        const result = await categoryService.delete(payload.id)
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const category = state.menu.find(
              f => f.category.id === payload.category.id,
            )
            state.menu.splice(state.menu.indexOf(category), 1)
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }
    },

    async deleteMenuItem(payload) {
      try {
        NProgress.start()
        const result = await itemService.delete(payload.id)
        NProgress.done()
        if (result) {
          this.$patch((state) => {
            const category = state.menu.find(
              f => f.category.id === payload.category.id,
            )
            const item = category.items.find(
              f => f.id === payload.item.id,
            )
            category.items.splice(category.items.indexOf(item), 1)
          })
        }
        return result
      }
      catch (error) {
        console.log(error)
      }

      /*
      const result = await DataStore.delete(deleteItem)
      if (deleteItem?.image)
        await Storage.remove(deleteItem.image)

      if (result) {
        this.$patch((state) => {
          const category = state.menu.find(
            f => f.category.id === payload.menucategoryID,
          )
          const item = category.items.find(f => f.id === payload.id)
          category.items.splice(category.items.indexOf(item), 1)
        })
      }

      return result */
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminMenu2, import.meta.hot))
