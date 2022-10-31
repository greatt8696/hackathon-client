import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangeLabel from '../views/dashboard-overview-main/ChangeLabel'
import ChangeLabelRecycle from '../views/dashboard-overview-main/ChangeLabelRecycle'

const PricePanelSmall = (props) => {
  // console.log("랜더링횟수");
  const dispatch = useDispatch()
  const { isSelect, setIsSelect, coinsPrice, coin } = props
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name,
    data,
    exchange,basedData
  } = coin

  const upDown = change === 'RISE' ? '+' : '-'
  const changeRate = `${upDown} ${(change_rate * 100).toFixed(2)} %`
  const panelRef = useRef()

  const clickHandler = () => {
    if (coinsPrice?.code === code) {
      setIsSelect(!isSelect)
    } else if (coinsPrice?.code !== code) {
      setIsSelect(true)
    } else {
      setIsSelect(!isSelect)
    }
    dispatch({
      type: 'SELECT_COIN',
      payload: {
        code,
        trade_price,
        change,
        changeRate,
        change_price,
        acc_trade_price_24h,
        name,
        exchange,
      },
    })
  }

  useEffect(() => {
    //panelRef.current.classList.add('animate-wiggle-once')
    setTimeout(() => {
      upDown === '+'
        ? panelRef.current.classList.add('animate-blink-red')
        : panelRef.current.classList.add('animate-blink-blue')
    }, 500 * (1 + Math.random()))
  }, [basedData])

  const anmatieEndHandler = () => {
    //panelRef.current.classList.remove('animate-wiggle-once')
    panelRef.current.classList.remove('animate-blink-red')
    panelRef.current.classList.remove('animate-blink-blue')
  }

  return (
    <div
      className="p-2 z-0 bg-white rounded-lg font-bold text-[5px]  w-36 cursor-pointer hover:scale-110 mb-2 border-2"
      onAnimationEnd={anmatieEndHandler}
      onClick={clickHandler}
      ref={panelRef}
    >
      <div className="pointer-events-none z-0">{name}</div>
      {/* <img src={imgUrl}></img> */}

      <ChangeLabelRecycle coin={coin} text={'text-lg'}></ChangeLabelRecycle>
    </div>
  )
}

export default React.memo(PricePanelSmall)
