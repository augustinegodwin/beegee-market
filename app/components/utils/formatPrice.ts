export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    // style: 'currency',
    // currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};