import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import dom from "@left4code/tw-starter/dist/js/dom";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { useCallback, useEffect, useState } from "react";
import InfinityLogo from "../../components/top-bar/img/인피니티.png";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../../middleware/loginAction";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie"; // useCookies import

function Main() {
  useEffect(() => {
    dom("body").removeClass("main").removeClass("error-page").addClass("login");
  }, []);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cookieUserKey"]);

  const [registerEmailInput, setRegisterEmailInput] = useState("");
  const [registerPwInput, setregisterPwInput] = useState("");
  const [registerNameInput, setregisterNameInput] = useState("");

  const onRegisterEmailInput = useCallback(
    (e) => {
      setRegisterEmailInput(e.target.value);
    },
    [setRegisterEmailInput]
  );

  const onRegisterPwInput = useCallback(
    (e) => {
      setregisterPwInput(e.target.value);
    },
    [setregisterPwInput]
  );

  const onRegisterNameInput = useCallback(
    (e) => {
      setregisterNameInput(e.target.value);
    },
    [setregisterNameInput]
  );

  const onSignUp = useCallback(
    (e) => {
      dispatch(
        loginAction.signUp(
          registerEmailInput,
          registerPwInput,
          registerNameInput,
          nav
        )
      );
      e.preventDefault();
    },
    [
      dispatch,
      registerEmailInput,
      registerPwInput,
      registerNameInput,
      setCookie,
      nav,
    ]
  );
  return (
    <>
      <div>
        <DarkModeSwitcher />
        <div className="container sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Register Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <a href="" className="flex items-center pt-5 -intro-x">
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
              </a>
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
            {/* END: Register Info */}
            {/* BEGIN: Register Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  회원가입
                </h2>
                <div className="mt-2 text-center intro-x text-slate-400 dark:text-slate-400 xl:hidden">
                  사이트를 이용하고 싶다면 회원가입을 해주세요
                </div>
                <form onSubmit={onSignUp}>
                  <div className="mt-8 intro-x">
                    <input
                      type="text"
                      className="block px-4 py-3 intro-x login__input form-control"
                      placeholder="이름을 입력하세요"
                      value={registerNameInput}
                      onChange={onRegisterNameInput}
                    />
                    {/* <input
                    type="text"
                    className="block px-4 py-3 mt-4 intro-x login__input form-control"
                    placeholder="Last Name"
                  /> */}
                    <input
                      type="text"
                      className="block px-4 py-3 mt-4 intro-x login__input form-control"
                      placeholder="이메일을 입력하세요"
                      value={registerEmailInput}
                      onChange={onRegisterEmailInput}
                    />
                    <input
                      type="text"
                      className="block px-4 py-3 mt-4 intro-x login__input form-control"
                      placeholder="페스워드를 입력하세요"
                      value={registerPwInput}
                      onChange={onRegisterPwInput}
                    />
                    {/* <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3 intro-x">
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                  </div> */}
                    {/* <a
                    href=""
                    className="block mt-2 text-xs intro-x text-slate-500 sm:text-sm"
                  >
                    What is a secure password?
                  </a>
                  <input
                    type="text"
                    className="block px-4 py-3 mt-4 intro-x login__input form-control"
                    placeholder="Password Confirmation"
                  /> */}
                  </div>
                  <div className="flex items-center mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    {/* <input
                    id="remember-me"
                    type="checkbox"
                    className="mr-2 border form-check-input"
                  />
                  <label
                    className="cursor-pointer select-none"
                    htmlFor="remember-me"
                  >
                    I agree to the Envato
                  </label>
                  <a className="ml-1 text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                  . */}
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                    <button
                      className="w-full px-4 py-3 align-top btn btn-primary xl:w-32 xl:mr-3"
                      type="submit"
                    >
                      회원가입
                    </button>
                    <Link to={"/login"}>
                      <button className="w-full px-4 py-3 mt-3 align-top btn btn-outline-secondary xl:w-32 xl:mt-0">
                        로그인
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* END: Register Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
