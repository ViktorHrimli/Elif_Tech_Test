"use client";

import { setValueLocalStorage } from "./localStorage";

type ActionsType = {
  type: "name" | "email" | "phone" | "adress";
  payload: string;
};

interface State {
  name: string;
  email: string;
  phone: string;
  adress: string;
}

const STORAGE_KEY = "state";

const reducer = (state: State, actions: ActionsType): State => {
  switch (actions.type) {
    case "name": {
      setValueLocalStorage(STORAGE_KEY, { ...state, name: actions.payload });

      return { ...state, name: actions.payload };
    }
    case "email": {
      setValueLocalStorage(STORAGE_KEY, { ...state, email: actions.payload });

      return { ...state, email: actions.payload };
    }
    case "phone": {
      setValueLocalStorage(STORAGE_KEY, { ...state, phone: actions.payload });

      return { ...state, phone: actions.payload };
    }
    case "adress": {
      setValueLocalStorage(STORAGE_KEY, { ...state, adress: actions.payload });

      return { ...state, adress: actions.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
