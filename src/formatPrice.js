const fmtPrice = (number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumSignificantDigits: 4,
  }).format(number)

export default fmtPrice
