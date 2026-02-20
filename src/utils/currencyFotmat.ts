/**
 * Format currency for product price
 *
 * @param {number} amount
 * @returns {string}
 */
export const formatCopCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount);
};
