import {
  Lucide,
  Tippy,
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
  Alert,
  TinySlider,
} from '@/base-components'
import { faker as $f } from '@/utils'
import * as $_ from 'lodash'
import classnames from 'classnames'
import ReportDonutChart from '@/components/report-donut-chart/Main'
import ReportBarChart from '@/components/report-bar-chart/Main'
import ReportMap from '@/components/report-map/Main'
import { useRef } from 'react'
import womanIllustrationUrl from '@/assets/images/woman-illustration.svg'
import phoneIllustrationUrl from '@/assets/images/phone-illustration.svg'
import CandleChart from '../../components/candleChart/CandleChart'
import { useDispatch, useSelector } from 'react-redux'
import PricePanel from '../../components/PricePanel'

function Main() {
  const dispatch = useDispatch()
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice)
  const importantNotesRef = useRef()
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo('prev')
  }
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo('next')
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Notification */}
            <div className="col-span-12 mt-6 -mb-6 intro-y">
              <Alert className="box bg-primary text-white flex items-center mb-6">
                {({ dismiss }) => (
                  <>
                    <span>인피니티팀-시연 페이지입니다.</span>
                    <button
                      type="button"
                      className="btn-close text-white"
                      onClick={dismiss}
                      aria-label="Close"
                    >
                      <Lucide icon="X" className="w-4 h-4" />
                    </button>
                  </>
                )}
              </Alert>
            </div>
            {/* BEGIN: Notification */}
            {/* BEGIN: Official Store */}
            <div className="intro-y col-span-6 box p-5 mt-12 sm:mt-5">
              <div>서울거래소</div>
              <CandleChart
                className="col-span-6"
                exchange={'서울거래소'}
                code={'KRW-BTC'}
              ></CandleChart>
            </div>
            <div className="intro-y col-span-6 box p-5 mt-12 sm:mt-5">
              <div>인천거래소</div>
              <CandleChart
                className="col-span-6"
                exchange={'인천거래소'}
                code={'KRW-ETH'}
              ></CandleChart>
            </div>
            <div className="intro-y col-span-6 box p-5 mt-12 sm:mt-5">
              <div>세종거래소</div>
              <CandleChart
                className="col-span-6"
                exchange={'세종거래소'}
                code={'KRW-XRP'}
              ></CandleChart>
            </div>
            <div className="intro-y col-span-6 box p-5 mt-12 sm:mt-5">
              <div>대전거래소</div>
              <CandleChart
                className="col-span-6"
                exchange={'대전거래소'}
                code={'KRW-ADA'}
              ></CandleChart>
            </div>
            {/* END: Weekly Top Products */}
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-3">
          <div className="2xl:border-l -mb-10 pb-10">
            <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Important Notes */}
              <div className="mt-5 col-span-12">
                {coinsPrice.map((coin) => (
                  <PricePanel
                    key={coin.code}
                    coin={coin}
                    setIsSelect={false}
                    isSelect={false}
                  />
                ))}
              </div>
              {/* END: Important Notes */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
