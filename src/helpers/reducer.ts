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
      return { ...state, name: actions.payload };
    }
    case "email": {
      return { ...state, email: actions.payload };
    }
    case "phone": {
      return { ...state, phone: actions.payload };
    }
    case "adress": {
      return { ...state, adress: actions.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
