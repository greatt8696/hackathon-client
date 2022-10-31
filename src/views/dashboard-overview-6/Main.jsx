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
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportBarChart from "@/components/report-bar-chart/Main";
import ReportMap from "@/components/report-map/Main";
import { useRef } from "react";
import womanIllustrationUrl from "@/assets/images/woman-illustration.svg";
import phoneIllustrationUrl from "@/assets/images/phone-illustration.svg";
import CandleChart from "../../components/candleChart/CandleChart";
import { useSelector } from "react-redux";
import "./img/Order.css"
import "./img/Orderbook.css"
import "./img/Trade.css"
import "./img/TradingSimulator.css"
import PricePanel from "../../components/PricePanel";
import PricePanelRecycle from "../../components/PricePanelRecycle";
function Main() {
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice);
  const candles = useSelector((state) => state.coinReducer.candles);
  const recyclePrice = useSelector((state) => state.coinReducer.recyclePrice)

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
                    <span>K-Digital Training Hackathon INFINITY/TEAM </span>
                    <button
                      type="button"
                      className="btn-close text-white"
                      onClick={dismiss}
                      aria-label="Close">
                      <Lucide icon="X" className="w-4 h-4" />
                    </button>
                  </>
                )}
              </Alert>
            </div>
   
            {/* 부산거래소부분 */}
            <div className="intro-y col-span-12 box p-5 mt-12 sm:mt-12">
              <div className="font-bold text-lg">대구거래소</div>
              <CandleChart
                candles={candles}
                className="col-span-6"
                exchange={"대구거래소"}
                code={"KRW-MATIC"}></CandleChart>
            </div>
 
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-12 ">
              <div className="mt-9">
              <div className="Order__Box Section">
    <div className="Order__Inner">
        <div className="Orderbook__Wrap">
            <div className="Orderbook__Head">
                <div className="Orderbook__Div">
                    <p>매수량</p>
                </div>
                <div className="Orderbook__Div">
                    <p>가격</p>
                </div>
                <div className="Orderbook__Div">
                    <p>매도량</p>
                </div>
            </div>
            <div className="Orderbook">
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>1.1598
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,800,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.0500
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,798,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>1.1350
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,796,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.0175
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,792,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>1.1300
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,789,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.7140
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,788,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.1380
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,784,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.9740
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,782,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>2.4880
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,779,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>1.6710
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,776,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>1.3634
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,772,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.6000
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,771,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.5735
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,757,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.1597
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,738,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size">
                        <p>0.2563
                            <span>BTC</span>
                        </p>
                    </div>
                    <div className="Orderbook__Price">
                        <p>28,736,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size"></div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,736,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.4491
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,738,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.5621
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,757,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.4626
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,771,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.1537
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,772,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.7415
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,776,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>1.4305
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,779,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.0267
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,782,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.1139
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,784,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.0361
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,788,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.0060
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,789,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.2707
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,792,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.0253
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,796,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>2.5441
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,798,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>1.0733
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
                <div className="Orderbook__List">
                    <div className="Orderbook__Size"></div>
                    <div className="Orderbook__Price">
                        <p>28,800,000
                            <span>KRW</span>
                        </p>
                    </div>
                    <div className="Orderbook__Size">
                        <p>0.0894
                            <span>BTC</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Trade__Box">
            <div className="Trade__Head">
                <div className="Trade__Method">
                    <p className="on">매수</p>
                </div>
                <div className="Trade__Method">
                    <p>매도</p>
                </div>
            </div>
            <div className="Trade__Form">
                <div className="Form__List">
                    <div className="Form__Title">
                        <p>보유 원화</p>
                    </div>
                    <div className="Form__Des">
                        <p>100,000,000<span>KRW</span>
                        </p>
                    </div>
                </div>
                <div className="Form__List">
                    <div className="Form__Title">
                        <p>매수 가격</p>
                    </div>
                    <div className="Form__Des">
                        <input type="text" readonly="" value="0"/>
                            <label>KRW</label>
                        </div>
                    </div>
                    <div className="Form__List">
                        <div className="Form__Title">
                            <p>매수 수량</p>
                        </div>
                        <div className="Form__Des">
                            <input type="text" value="0"/>
                                <label>BTC</label>
                            </div>
                        </div>
                        <div className="Form__List">
                            <div className="Form__Title">
                                <p>매수 총액</p>
                            </div>
                            <div className="Form__Des">
                                <p>0<span>KRW</span>
                                </p>
                            </div>
                        </div>
                        <div className="Form__Submit">
                            <button type="submit" style={{backgroundColor:"rgb(249,79,79)"}}>매수</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              </div>
            </div>
      
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
  );
}

export default Main;
