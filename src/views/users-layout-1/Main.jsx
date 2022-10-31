import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Tippy,
} from '@/base-components'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

const USER_LIMIT = 50

function Main() {
  const nav = useNavigate()
  const location = useLocation()
  const users = useSelector((state) => state.userReducer.users)
  const [viewContents, setViewContents] = useState([])
  const [pagenation, setPagenation] = useState(0)
  const [startPage, setStartPage] = useState(0)
  const listRef = useRef([])

  const searchParams = new URLSearchParams(location.search)
  // 쿼리 취득
  const name = searchParams.get('name') // id 취득

  const navToUser = (name) => {

    nav({
      pathname: '/profile-overview-1',
      search: createSearchParams({
        uid:name,
      }).toString(),
    })
  }

  useEffect(() => {
    if (listRef.current.children?.length !== 0) {
      listRef.current.children?.forEach((el) => listRef.current.removeChild(el))
    }

    setViewContents(users.slice(pagenation, pagenation + USER_LIMIT))
  }, [pagenation])

  const pagenationHandler = (e) => setPagenation(e.target.name)
  const selectHandler = (e) => setPagenation(e.target.value)

  useEffect(() => {}, [])

  // {pathname: '/query', search: '?id=10&count=2022', hash: '', state: null, key: 'default'}

  // search 부분을 URLSearchParams 객체로 생성
  // const searchParams = new URLSearchParams(useLocation().search); // 이것도 가능

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">유저 관리창</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: top Bar */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div className="hidden md:block mx-auto text-slate-500">
            {`${users.length} 유저 중 ${USER_LIMIT}명 조회 `}
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
        {viewContents.map((user, idx) => (
          <div
            key={user.uid}
            className="intro-y col-span-3 h-36 cursor-pointer "
            onClick={() => navToUser(user.walletId)}
          >
            <div className="box h-full p-3 flex flex-col justify-between transition-all hover:bg-green-600/20 hover:scale-105">
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

              {Array(10)
                .fill(1)
                .map((_, idx) => (
                  <li className="page-item">
                    <a
                      className="page-link"
                      name={idx + 1}
                      onClick={pagenationHandler}
                    >
                      {idx + 1}
                    </a>
                  </li>
                ))}

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
          <select
            className="w-20 form-select box mt-3 sm:mt-0"
            onChange={selectHandler}
          >
            {Array(10)
              .fill(1)
              .map((_, idx) => (
                <option value={idx * 50}>{idx * 50}</option>
              ))}
          </select>
        </div>
        {/* END: Pagination */}
      </div>
    </>
  )
}

export default Main
