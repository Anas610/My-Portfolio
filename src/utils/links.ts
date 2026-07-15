export const isValidUrl = (url?: string): url is string => {
  if (!url || url.trim() === '' || url === '#') return false;
  return true;
};

export const isExternalUrl = (url: string): boolean =>
  url.startsWith('http://') || url.startsWith('https://');
