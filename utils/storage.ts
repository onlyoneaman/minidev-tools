const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}

const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
}

const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
}

const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
}

export {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
}
