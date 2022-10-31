import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangeLabel from '../views/dashboard-overview-main/ChangeLabel'
import PricePanel from './PricePanel'
import PricePanelSmall from './PricePanelSmall'

const PricePanelRecycle = (props) => {
  // console.log("랜더링횟수");
  const { isSelect, setIsSelect, coinsPrice, coin, recyclePrice } = props
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name,
    exchange,
  } = coin

  const upDown = change === 'RISE' ? '+' : '-'
  const changeRate = `${upDown} ${(change_rate * 100).toFixed(2)} %`
  const panelRef = useRef()

 // useEffect(() => {
  //  upDown === '+'
 //     ? panelRef.current.classList.add('animate-blink-border-red')
  //    : panelRef.current.classList.add('animate-blink-border-blue')
  //}, [trade_price])

  const anmatieEndHandler = () => {
    //panelRef.current.classList.remove('animate-wiggle-once')
    panelRef.current.classList.remove('animate-blink-border-red')
    panelRef.current.classList.remove('animate-blink-border-blue')
  }


  return (
    <div>
      {exchange}
      <div
        className="p-2 z-0 bg-white rounded-lg font-bold text-[5px] w-full cursor-pointer  mb-2 border-2 flex flex-wrap gap-2 justify-between"
        onAnimationEnd={anmatieEndHandler}
        ref={panelRef}
      >
        {recyclePrice &&
          recyclePrice.map((val) => (
            <PricePanelSmall
              key={val.name}
              coin={val}
              setIsSelect={false}
              isSelect={false}
            />
          ))}
      </div>
    </div>
  )
}

export default React.memo(PricePanelRecycle)
