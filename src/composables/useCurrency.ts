export const useCurrency = () => {
  const currencies = {
    TRY: {
      value: 'TL',
      symbol: '₺',
    },
    USD: {
      value: 'USD',
      symbol: '$',
    },
    EUR: {
      value: 'EUR',
      symbol: '€',
    },
    ROUBLE: {
      value: 'RUB',
      symbol: '₽',
    },
  }

  const getCurrency = (menuItemData) => {
    return menuItemData.customPriceSymbol
      ? {
        value: menuItemData.customPriceSymbol, symbol: menuItemData.customPriceSymbol,
      }
      : currencies[menuItemData.currency] || {}
  }

  return {
    getCurrency,
  }
}
