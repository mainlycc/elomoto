
export const saveImage = async (key: string, base64: string): Promise<void> => {
  localStorage.setItem(`elomoto_img_${key}`, base64);
};

export const getImage = (key: string, fallback: string): string => {
  return localStorage.getItem(`elomoto_img_${key}`) || fallback;
};

export const clearImages = (): void => {
  Object.keys(localStorage)
    .filter(key => key.startsWith('elomoto_img_'))
    .forEach(key => localStorage.removeItem(key));
};
