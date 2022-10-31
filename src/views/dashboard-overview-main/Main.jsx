import {
  Lucide,
  Tippy,
  TinySlider,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
import ReportDonutChart from "@/components/report-donut-chart/Main";
// import ReportMap from "@/components/report-map/Main";
import { useRef, useState } from "react";
import Test from "./Test";
import { useDispatch, useSelector } from "react-redux";
import CandleChart from "../../components/candleChart/CandleChart";
import PricePanel from "../../components/PricePanel";
import { useEffect } from "react";
import ChangeLabel from "./ChangeLabel";

function Main() {
  const dispatch = useDispatch();
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice);
  const candles = useSelector((state) => state.coinReducer.candles);
  const [coin, setCoin] = useState({});
  const [change, setChange] = useState("");

  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };

  useEffect(() => {
    setCoin(coinsPrice[0]);
  }, [coinsPrice[0]]);

  useEffect(() => {
    // console.log(coin);
  }, [coin]);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 xl:col-span-9 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5 ">메인페이지</h2>
              </div>
              <div className="report-box-2 intro-y mt-5">
                <div className="box grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-4 px-8 py-12 flex flex-col justify-center">
                    <Lucide
                      icon="PieChart"
                      className="w-10 h-10 text-pending"
                    />
                    <div className="justify-start flex items-center text-green-700 dark:text-slate-300 mt-8 text-3xl ">
                      ♻ 그린코인
                      {/* <Lucide
                        icon="AlertCircle"
                        className="tooltip w-4 h-4 ml-1.5"
                        title="Total value of your sales: $158.409.416"
                      /> */}
                    </div>
                    <div className="flex items-center justify-start mt-4">
                      <div className="relative text-xl font-medium pl-3 ml-0.5">
                        1,413,100,000 원
                      </div>
                      <div
                        className="text-red-600 flex text-xs font-medium tooltip cursor-pointer ml-2"
                        title="52% Higher than last month"
                      >
                        180%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                    <div className=" mt-4 text-slate-500 text-xs mx-auto">
                      18초전
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-8 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-darkmode-300 border-dashed">
                    <TabGroup>
                      <TabList
                        className="nav-pills w-60 border border-slate-300 dark:border-darkmode-300 border-dashed rounded-md mx-auto p-1 mb-8"
                        role="tablist"
                      >
                        <Tab className="w-full py-1.5 px-2" tag="button">
                          보유현황
                        </Tab>
                        <Tab className="w-full py-1.5 px-2" tag="button">
                          통계
                        </Tab>
                      </TabList>
                      <TabPanels className="px-5 pb-5">
                        <TabPanel className="grid grid-cols-12 gap-y-8 gap-x-10">
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black ">
                              ESG 포인트
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">606</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              압축PET
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">18 kg</div>
                              <div
                                className="flex text-xs font-medium tooltip cursor-pointer ml-2 text-red-600"
                                title="52% Higher than last month"
                              >
                                52%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5 text-red-600"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              청색 유리컬릿
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">8 kg</div>
                              <div
                                className="text-red flex text-xs font-medium tooltip cursor-pointer ml-2 text-blue-600"
                                title="52% Higher than last month"
                              >
                                18%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5 text-blue-600"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              폐타이어 파우더
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">36 kg</div>
                              <div
                                className="text-red flex text-xs font-medium tooltip cursor-pointer ml-2 text-blue-600"
                                title="52% Higher than last month"
                              >
                                18%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5 text-blue-600"
                                />
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      </TabPanels>
                      <TabPanels className="px-5 pb-5">
                        <TabPanel className="grid grid-cols-12 gap-y-8 gap-x-10">
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black ">
                              ESG 포인트
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">606</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              압축PET
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">18 kg</div>
                              <div
                                className="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                                title="52% Higher than last month"
                              >
                                52%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              청색 유리컬릿
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">8 kg</div>
                              <div
                                className="text-red flex text-xs font-medium tooltip cursor-pointer ml-2 text-blue-600"
                                title="52% Higher than last month"
                              >
                                18%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5 text-blue-600"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500 font-black">
                              폐타이어 파우더
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">36 kg</div>
                              <div
                                className="text-red flex text-xs font-medium tooltip cursor-pointer ml-2 text-blue-600"
                                title="52% Higher than last month"
                              >
                                18%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5 text-blue-600"
                                />
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}
            {/* BEGIN: Sales Report */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 row-start-4 lg:row-start-3 xl:row-start-auto mt-6 xl:mt-8">
              <div className="intro-y flex items-center h-10">
                {/* <h2 className="text-lg font-medium truncate mr-5">
                  Sales Report
                </h2> */}
              </div>
              <div className="report-box-2 before:hidden xl:before:block intro-y mt-5">
                <div className="box p-5">
                  <div className="text-slate-500 font-black">
                    보유 폐기물 현황
                  </div>
                  <div className="mt-3">
                    <ReportDonutChart height={95} />
                  </div>
                  <div className="w-52 sm:w-auto mx-auto mt-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="truncate text-slate-500 font-black">
                        유리컬릿
                      </span>
                      <span className="font-medium ml-auto">12%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                      <span className="truncate text-slate-500 font-black">
                        압축 플라스틱
                      </span>
                      <span className="font-medium ml-auto">29%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                      <span className="truncate text-slate-500 font-black">
                        폐타이어 파우더
                      </span>
                      <span className="font-medium ml-auto">59%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Sales Report */}
            {/* BEGIN: Official Store */}
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-bold truncate mr-5 ">
                  거래소 가이드 맵
                </h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Lucide
                    icon="MapPin"
                    className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                  />
                  <input
                    type="text"
                    className="form-control sm:w-56 box pl-10"
                    placeholder="거래소 검색"
                  />
                </div>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <Test className="report-maps mt-5 bg-slate-200 rounded-md" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-3">
          <div className="2xl:border-l -mb-10 pb-10">
            <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Transactions */}
              <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                <div className="intro-x flex items-center h-10 mt-6">
                  <h2 className="text-lg font-medium truncate mr-5">
                    그린코인
                  </h2>
                  <div className="mt-1.5 flex items-center">
                    <ChangeLabel coin={coin} text={"text-2xl"}></ChangeLabel>
                  </div>
                </div>
                <div className="">
                  <CandleChart
                    candles={candles}
                    exchange={"서울거래소"}
                    code={"KRW-BTC"}
                  ></CandleChart>
                </div>
              </div>
              {/* END: Transactions */}
              {/* BEGIN: Transactions */}
              <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">거래소</h2>
                </div>
                <div className="mt-5">
                  {coinsPrice.map((coin) => (
                    <PricePanel
                      coinsPrice={coinsPrice}
                      key={coin.code}
                      coin={coin}
                      setIsSelect={false}
                      isSelect={false}
                    />
                  ))}
                </div>
              </div>
              {/* END: Transactions */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
