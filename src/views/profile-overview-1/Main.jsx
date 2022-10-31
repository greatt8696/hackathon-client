import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@/base-components'
import SimpleLineChart1 from '@/components/simple-line-chart-1/Main'
import SimpleLineChart2 from '@/components/simple-line-chart-2/Main'
import { faker as $f } from '@/utils'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
  getRecycleTransaction,
  getTransferTransaction,
} from '../../redux/apiActions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function Main(props) {
  const location = useLocation()
  const dispatch = useDispatch()
  const recycleTransactions = useSelector(
    (state) => state.userReducer.recycleTransactions,
  )
  const transferTransactions = useSelector(
    (state) => state.userReducer.transferTransactions,
  )

  const [transfers, setTransfers] = useState([])
  const [recycles, setRecycle] = useState([])

  useEffect(() => {
    if (recycleTransactions.length !== 0)
      setRecycle([
        ...recycleTransactions.resultFrom,
        ...recycleTransactions.resultTo,
      ])
  }, [recycleTransactions])

  useEffect(() => {
    if (transferTransactions.length !== 0)
      setTransfers([
        ...transferTransactions.resultFrom,
        ...transferTransactions.resultTo,
      ])
  }, [transferTransactions])

  const searchParams = new URLSearchParams(location.search)
  // 쿼리 취득
  const uid = searchParams.get('uid') // id 취득

  useEffect(() => {
    async function fetchDatas() {
      const result = await getRecycleTransaction(dispatch, uid)
      const result1 = await getTransferTransaction(dispatch, uid)

    }
    fetchDatas()
  }, [])

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Profile Layout</h2>
      </div>
      <TabGroup>
        {/* BEGIN: Profile Info */}
        <div className="intro-y box px-5 pt-5 mt-5">
          <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[0]}
                />
                <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2">
                  <Lucide icon="Camera" className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="ml-5">
                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                  {$f()[0].users[0].name}
                </div>
                <div className="text-slate-500">{$f()[0].jobs[0]}</div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                <div className="truncate sm:whitespace-normal flex items-center">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {$f()[0].users[0].email}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram
                  {$f()[0].users[0].name}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter
                  {$f()[0].users[0].name}
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-5">
                Sales Growth
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <div className="mr-2 w-20 flex">
                  USP:{' '}
                  <span className="ml-3 font-medium text-success">+23%</span>
                </div>
                <div className="w-3/4">
                  <SimpleLineChart1 height={55} className="-mr-5" />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-2 w-20 flex">
                  STP: <span className="ml-3 font-medium text-danger">-2%</span>
                </div>
                <div className="w-3/4">
                  <SimpleLineChart2 height={55} className="-mr-5" />
                </div>
              </div>
            </div>
          </div>
          <TabList className="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center">
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Dashboard
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Account & Profile
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Activities
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Tasks
            </Tab>
          </TabList>
        </div>
        {/* END: Profile Info */}
        <TabPanels className="intro-y mt-5">
          <TabPanel>
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: Top Categories */}
              <div className="span-cols-6">
                {recycles.map((val) => (
                  <div>{JSON.stringify(val)}</div>
                ))}
              </div>
              {/* END: General Statistic */}
              {/* BEGIN: Top Categories */}
              <div className="span-cols-6">
                {transfers.map((val) => (
                  <div>{JSON.stringify(val)}</div>
                ))}
              </div>
              {/* END: General Statistic */}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  )
}

export default Main
