const initState = {
  isLogin: false,
  loginedUser: {
    userId: "테스트용id18",
    uid: "테스트용uid18",
    email: "테스트18@test.com",
    pwd: "$2b$08$SHqWBDxEgdvxRtSu0udOBuiog93YoctPuEJz9vksEycc5ttcsiJaq",
    name: "관리자유저0",
    role: "관리자",
    recycleWalletId: "000000000000000000000018",
    walletId: "000000000000000000000018",
    createdAt: {
      $date: "1666697717725",
    },
    updatedAt: "1666697717725",
  },
};

const loginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_USER":
      return { ...state };

    default:
      return state;
  }
};

export default loginReducer;
