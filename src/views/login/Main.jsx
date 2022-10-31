import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InfinityLogo from "../../components/top-bar/img/인피니티.png";

function Main() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cookieUserKey"]);

  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  }, []);

  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPwInput, setLoginPwInput] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const onloginEmailInput = useCallback(
    (e) => {
      setLoginEmailInput(e.target.value);
    },
    [loginEmailInput, setLoginEmailInput]
  );

  const onSetLoginPwInput = useCallback(
    (e) => {
      setLoginPwInput(e.target.value);
    },
    [loginPwInput, setLoginPwInput]
  );

  const onSignIn = useCallback(
    (e) => {
      dispatch(
        loginAction.login(
          loginEmailInput,
          loginPwInput,
          isLogin,
          setCookie,
          nav
        )
      );
      // dispatch({
      //   type: "LOGIN_USER",
      //   payload: { loginEmailInput, loginPwInput, isLogin },
      // })
      e.preventDefault();
    },
    [dispatch, loginEmailInput, loginPwInput, setCookie, nav]
  );

  return (
    <>
      <div>
        <DarkModeSwitcher />
        <div className="container sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <Link
                to="/"
                className="logo -intro-x w-50 whitespace-nowrap md:flex xl:w-[180px] block"
              >
                <img
                  alt="Enigma Tailwind HTML Admin Template"
                  className="w-24 h-24 mb-1 logo__image min-w-24"
                  src={InfinityLogo}
                />
                <div className="mt-8 text-2xl font-bold text-white logo__text w-60">
                  INFINITY TEAM
                </div>
              </Link>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  당신의 계정을 만드세요. <br />
                  계정완료 후 메인으로 이동합니다.
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  거래에 필요한 유저의 정보생성을 도와드립니다.
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  로그인
                </h2>
                <div className="mt-2 text-center intro-x text-slate-400 xl:hidden">
                  A few more clicks to sign in to your account. Manage all your
                  e-commerce accounts in one place
                </div>
                <form onSubmit={onSignIn}>
                  <div className="mt-8 intro-x">
                    <input
                      type="text"
                      className="block px-4 py-3 intro-x login__input form-control"
                      placeholder="Email"
                      value={loginEmailInput}
                      onChange={onloginEmailInput}
                    />
                    <input
                      type="password"
                      className="block px-4 py-3 mt-4 intro-x login__input form-control"
                      placeholder="Password"
                      value={loginPwInput}
                      onChange={onSetLoginPwInput}
                    />
                  </div>
                  <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    <div className="flex items-center mr-auto">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="mr-2 border form-check-input"
                      />
                      <label
                        className="cursor-pointer select-none"
                        htmlFor="remember-me"
                      >
                        날 기억해줘
                      </label>
                    </div>
                    <a href="">비밀번호를 잊으셨습니까?</a>
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                    <button
                      className="w-full px-4 py-3 align-top btn btn-primary xl:w-32 xl:mr-3"
                      type="submit"
                    >
                      로그인
                    </button>
                    <Link to={"/register"}>
                      <button className="w-full px-4 py-3 mt-3 align-top btn btn-outline-secondary xl:w-32 xl:mt-0">
                        회원가입
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
