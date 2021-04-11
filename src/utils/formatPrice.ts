import dinero from 'dinero.js';

export function formatPrice(price: number): string {
  return dinero({ amount: price * 100, currency: 'USD' }).toFormat();
}
