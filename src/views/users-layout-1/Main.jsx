import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Tippy,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate();
  const users = useSelector((state) => state.userReducer.users);
  const [sliceUser, setSliceUser] = useState(users.slice(0, 49));

  const navToUser = (name) => {
    nav({
      pathname: "/profile-overview-1",
      search: createSearchParams({
        name,
      }).toString(),
    });
  };

  useEffect(() => {
    console.log(sliceUser);
    setSliceUser(users.slice(0, 49));
  }, [users]);

  const location = useLocation();
  console.log(location);
  // {pathname: '/query', search: '?id=10&count=2022', hash: '', state: null, key: 'default'}

  // search 부분을 URLSearchParams 객체로 생성
  const searchParams = new URLSearchParams(location.search);
  // const searchParams = new URLSearchParams(useLocation().search); // 이것도 가능

  // 쿼리 취득
  const id = searchParams.get("id"); // id 취득
  const count = searchParams.get("count"); // count 취득
  console.log("id: ", id); // id: 10
  console.log("count: ", count); // count: 2022

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Users Layout</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: top Bar */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button className="btn btn-primary shadow-md mr-2">
            Add New User
          </button>
          <Dropdown>
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Users" className="w-4 h-4 mr-2" /> Add Group
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="MessageCircle" className="w-4 h-4 mr-2" /> Send
                  Message
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        {/* END: top Bar */}
        {/* BEGIN: Users Layout */}
        {sliceUser.map((user) => (
          <div
            key={user.uid}
            className="intro-y col-span-3 h-36"
            onClick={() => navToUser(user.uid)}
          >
            <div className="box h-full">
              <div>{`아이디 : ${user.userId}`}</div>
              <div>{`이름 : ${user.name}`}</div>
              <div>{`업무 : ${user.role}`}</div>
              <div>{`지갑주소 : ${user.walletId}`}</div>
            </div>
          </div>
        ))}
        {/* {sliceUser.map(
          ({ userId, name, email, role, uid, userId, walletId }) => (
            <div key={uid} className="intro-y col-span-3 h-36">
              <div className="box h-full">
                <div>아이디 : {userId}</div>
                <div>이름 : {name}</div>
                <div>업무 : {role}</div>
                <div>지갑주소 : {walletId}</div>
              </div>
            </div>
          )
        )} */}
        {/* END: Users Layout */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination */}
      </div>
    </>
  );
}

export default Main;
