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

const reducer = (state: State, actions: ActionsType): State => {
  switch (actions.type) {
    case "name": {
      setValueLocalStorage("state", { ...state, name: actions.payload });

      return { ...state, name: actions.payload };
    }
    case "email": {
      setValueLocalStorage("state", { ...state, email: actions.payload });

      return { ...state, email: actions.payload };
    }
    case "phone": {
      setValueLocalStorage("state", { ...state, phone: actions.payload });

      return { ...state, phone: actions.payload };
    }
    case "adress": {
      setValueLocalStorage("state", { ...state, adress: actions.payload });

      return { ...state, adress: actions.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
