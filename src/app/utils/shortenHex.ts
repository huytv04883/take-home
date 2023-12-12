export const shortenHex = (hexString: string) => {
  if (hexString.length <= 8) {
    return hexString;
  }

  const start = hexString.slice(0, 6);
  const end = hexString.slice(-4);
  return `${start}...${end}`;
}
