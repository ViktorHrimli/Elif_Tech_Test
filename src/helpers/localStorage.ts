"use client";

const setValueLocalStorage = (event: string, payload: any) => {
  if (typeof window !== "undefined") {
    const value = localStorage.setItem(event, JSON.stringify(payload));
    return value;
  }
};

const getValueLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem(key)!);
    return value;
  }
};

const clearValueLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { setValueLocalStorage, getValueLocalStorage, clearValueLocalStorage };
