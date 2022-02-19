import { acceptHMRUpdate, defineStore } from 'pinia'
import { DataStore, SortDirection } from '@aws-amplify/datastore'
import { Storage } from '@aws-amplify/storage'
import NProgress from 'nprogress'
import { Business, Menu, MenuCategory, MenuItem } from '~/models'
import { useAuthStore } from '~/stores/auth'

export const useAdminMenu = defineStore({
  id: 'adminMenu',

  state: () => ({
    menu: [],
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
          if (categoryIndex && category.order !== categoryIndex) {
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
    async fetchMenu() {
      const menu = []

      const authStore = useAuthStore()

      if (!authStore.currentBusiness?.id)
        await authStore.setCurrentUser()

      const businessID = authStore.currentBusiness?.id

      if (!businessID)
        return

      NProgress.start()
      const menus = await DataStore.query(Menu, menuItem =>
        menuItem.businessID('eq', businessID),
      )

      this.menus = JSON.parse(JSON.stringify(menus))

      if (!this.selectedMenu)
        this.setSelectedMenu(menus[0]?.id)

      const selectedMenu = this.selectedMenu || menus[0] || null

      if (selectedMenu) {
        const menuCategories = await DataStore.query(
          MenuCategory,
          category => category.menuID('eq', selectedMenu.id),
          {
            sort: s => s.order(SortDirection.ASCENDING) && s.createdAt(SortDirection.ASCENDING),
          },
        )

        for (const category of menuCategories) {
          const menuItems = await DataStore.query(
            MenuItem,
            menuItem => menuItem.menucategoryID('eq', category.id),
            {
              sort: s => s.createdAt(SortDirection.ASCENDING),
            },
          )

          menu.push({
            category,
            items: menuItems,
          })
        }

        this.$patch((state) => {
          state.menu = JSON.parse(JSON.stringify(menu))
        })

        NProgress.done()
        return this.menu
      }
    },
    async addMenu(payload) {
      const authStore = useAuthStore()

      const result = await DataStore.save(
        new Menu({
          businessID: authStore.currentBusiness?.id,
          name: payload.name,
        }),
      )

      if (result) {
        this.$patch((state) => {
          state.selectedMenu = result
          state.menus.push(JSON.parse(JSON.stringify(result)))
        })
      }
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
  import.meta.hot.accept(acceptHMRUpdate(useAdminMenu, import.meta.hot))
