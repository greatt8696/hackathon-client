const initState = {
  isLogin: false,
  loginedUser: {},
};

const loginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_USER":
      return { ...state };

    default:
      return { ...state };
  }
};

export { loginReducer };
