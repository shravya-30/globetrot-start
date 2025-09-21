// Currency conversion and formatting utilities for Indian Rupees

const USD_TO_INR_RATE = 83;

export function convertUsdToInr(usdAmount: number): number {
  return usdAmount * USD_TO_INR_RATE;
}

export function formatInrPrice(amount: number): string {
  // Format with Indian numbering system (lakhs and crores)
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(amount);
}

export function formatInrRange(minUsd: number, maxUsd: number): string {
  const minInr = convertUsdToInr(minUsd);
  const maxInr = convertUsdToInr(maxUsd);
  
  return `${formatInrPrice(minInr)} - ${formatInrPrice(maxInr)}`;
}