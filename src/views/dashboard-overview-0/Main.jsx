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
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PricePanelRecycle from '../../components/PricePanelRecycle'

function Main() {
  const dispatch = useDispatch()
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice)
  const recyclePrice = useSelector((state) => state.coinReducer.recyclePrice)
  const candles = useSelector((state) => state.coinReducer.candles)

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
            <Link to={'/dashboard-overview-1'} className="col-span-4">
              <div className="intro-y col-span-4 box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">서울거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'서울거래소'}
                  code={'KRW-BTC'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-2'} className="col-span-4">
              <div className="intro-y col-span-4 box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">인천거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'인천거래소'}
                  code={'KRW-ETH'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-3'} className="col-span-4">
              <div className="intro-y col-span-4 box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">세종거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'세종거래소'}
                  code={'KRW-XRP'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-4'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">대전거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'대전거래소'}
                  code={'KRW-ADA'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-5'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">강원거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'강원거래소'}
                  code={'KRW-DOGE'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-7'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">광주거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'광주거래소'}
                  code={'KRW-ATOM'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-8'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">부산거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'부산거래소'}
                  code={'KRW-SOL'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-9'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">울산거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'울산거래소'}
                  code={'KRW-ETC'}
                ></CandleChart>
              </div>
            </Link>
            <Link to={'/dashboard-overview-6'} className="col-span-4">
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="font-bold text-lg">대구거래소</div>
                <CandleChart
                  candles={candles}
                  exchange={'대구거래소'}
                  code={'KRW-MATIC'}
                ></CandleChart>
              </div>
            </Link>
            {/* END: Weekly Top Products */}
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-3">
          <div className="2xl:border-l -mb-10 pb-10">
            <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Important Notes */}
              <div className="mt-5 col-span-12">
                {coinsPrice.map((coin) => (
                  <PricePanelRecycle
                    recyclePrice={recyclePrice[coin.exchange]}
                    coinsPrice={coinsPrice}
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
