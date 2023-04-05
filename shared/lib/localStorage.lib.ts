import { LocalStorageKeys } from '../enums/common.enum';

export const getAuthToken = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
};

export const clearLocalStorage = () => {
  localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
  localStorage.removeItem(LocalStorageKeys.REFRESH_TOKEN);
};

export const addAuthToLocalStorage = (token: string, refreshToken: string) => {
  localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token);
  localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, refreshToken);
};

export const getCurrentTheme = () => {
  return localStorage.getItem('theme');
};
