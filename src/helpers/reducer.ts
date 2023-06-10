"use client";
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
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, name: actions.payload })
      );

      return { ...state, name: actions.payload };
    }
    case "email": {
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, email: actions.payload })
      );

      return { ...state, email: actions.payload };
    }
    case "phone": {
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, phone: actions.payload })
      );

      return { ...state, phone: actions.payload };
    }
    case "adress": {
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, adress: actions.payload })
      );

      return { ...state, adress: actions.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
