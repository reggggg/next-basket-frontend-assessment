// Format the number with toLocaleString and 2 decimal places
export function formatPrice(price: number) {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function capitalizeString(str: string): string {
  // Check if the string is empty or null
  if (!str) return str;

  // Capitalize the first letter and concatenate the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
