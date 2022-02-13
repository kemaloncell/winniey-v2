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

  const getCurrency = (currency: string) => {
    return currencies[currency] || {}
  }

  return {
    getCurrency,
  }
}
