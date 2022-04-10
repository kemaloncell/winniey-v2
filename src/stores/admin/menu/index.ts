import { acceptHMRUpdate, defineStore } from 'pinia'
import NProgress from 'nprogress'
import { menuService } from '~/../api/menuService'
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
    getMenu: state =>
      state.filteredMenu.length > 0 ? state.filteredMenu : state.menu,
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
      NProgress.start()
      const route = useRoute()
      const businessUsername = route.params.businessUsername
      const allInfo = await menuService.getAll(businessUsername)
      const { menu, menus, business } = allInfo.data
      console.log(allInfo)
      this.menu = menu.Categories
      this.menus = menus
      this.businessInfo = business
      console.log(this.menus)
      NProgress.done()
      return this.menu
    },

    async addMenu(payload) {
      const authStore = useAuthStore()
      console.log(payload, 'payload')
      console.log(authStore.currentBusiness, 'authStore')
      const result = await menuService.createMenu({
        businessID: authStore.currentBusiness?.id,
        name: payload,
      })
      if (result)
        this.menus.push(result.data)
    },

    async updateMenu(payload) {
      const original = await DataStore.query(Menu, payload.menu.id)
      const result = await DataStore.save(
        Menu.copyOf(original, (updated) => {
          updated.name = payload.update.name
          updated.description = payload.update.description
        }),
      )

      if (result) {
        this.$patch((state) => {
          const menu = state.menus.find(menu => menu.id === payload.menu.id)
          menu.name = payload.update.name
          menu.description = payload.update.description
        })
      }
    },
    async deleteMenu(payload) {
      const deletedMenuObject = await DataStore.query(Menu, payload.menu.id)

      const result = await DataStore.delete(deletedMenuObject)

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
    },
    async postCategory(payload) {
      const result = await DataStore.save(
        new MenuCategory({
          menuID: this.selectedMenu.id,
          name: payload.name,
        }),
      )

      if (result) {
        this.$patch((state) => {
          state.menu.push({
            category: JSON.parse(JSON.stringify(result)),
            items: [],
          })
        })
      }

      return result
    },

    async postMenuItem(payload) {
      const result = await DataStore.save(
        new MenuItem({
          menucategoryID: payload.category.id,
          name: payload.fields.name,
          description: payload.fields.description,
        }),
      )

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
    },

    async updateCategory(payload) {
      const original = await DataStore.query(MenuCategory, payload.category.id)
      const result = await DataStore.save(
        MenuCategory.copyOf(original, (updated) => {
          Object.entries(payload.update).forEach(([key, value]) => {
            updated[key] = value
          })
        }),
      )

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
    },

    async updateMenuItem(payload) {
      const original = await DataStore.query(MenuItem, payload.menuItem.id)

      const result = await DataStore.save(
        MenuCategory.copyOf(original, (updated) => {
          Object.entries(payload.update).forEach(([key, value]) => {
            updated[key] = value
          })
        }),
      )

      if (result) {
        this.$patch((state) => {
          const category = state.menu.find(
            f => f.category.id === payload.menuItem.menucategoryID,
          )
          const item = category.items.find(f => f.id === payload.menuItem.id)
          Object.entries(payload.update).forEach(([key, value]) => {
            item[key] = value
          })
        })
      }

      return result
    },

    async deleteCategory(payload) {
      const deleteCategoryObject = await DataStore.query(
        MenuCategory,
        payload.category.id,
      )

      const result = await DataStore.delete(deleteCategoryObject)

      if (result) {
        this.$patch((state) => {
          const category = state.menu.find(
            f => f.category.id === payload.category.id,
          )
          state.menu.splice(state.menu.indexOf(category), 1)
        })
      }

      return result
    },

    async deleteMenuItem(payload) {
      const deleteItem = await DataStore.query(MenuItem, payload.id)

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

      return result
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAdminMenu2, import.meta.hot))
