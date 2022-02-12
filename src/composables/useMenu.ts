
import { DataStore, SortDirection } from '@aws-amplify/datastore'
import { Menu, MenuCategory, MenuItem } from '~/models'

export const useMenu = () => {
  const selectedMenu = ref({})
  const allMenus = ref([])

  const fetchMenu = async(businessID) => {
    const menu = []

    if (!businessID)
      return

    const menus = await DataStore.query(Menu, menuItem =>
      menuItem.businessID('eq', businessID),
    )

    allMenus.value = JSON.parse(JSON.stringify(menus))

    selectedMenu.value = menus[0]?.id

    const currentSelectedMenu = selectedMenu.value || menus[0] || null

    if (selectedMenu) {
      const menuCategories = await DataStore.query(
        MenuCategory,
        category => category.menuID('eq', currentSelectedMenu.id),
        {
          sort: s => s.createdAt(SortDirection.ASCENDING),
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
    }
  }

  return {
    fetchMenu,
    allMenus,
    selectedMenu,
  }
}
