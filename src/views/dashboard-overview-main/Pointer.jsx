import React, { useEffect, useRef } from 'react'

const Pointer = (props) => {
  const {
    code,
    trade_price,
    change,
    change_rate,
    change_price,
    acc_trade_price_24h,
    name,
    exchange,
  } = props.coinsPrice

  const upDown = change === 'RISE' ? '+' : '-'
  const changeRate = `${upDown} ${(change_rate * 100).toFixed(2)} %`
  const pointerRef = useRef()
  const waveRef = useRef()

  useEffect(() => {
    upDown === '+'
      ? waveRef.current.classList.add('bg-red-600')
      : waveRef.current.classList.add('bg-blue-600')
    waveRef.current.classList.add('animate-ping-once')
  }, [trade_price])

  const anmatieEndHandler = () => {
    waveRef.current.classList.remove('animate-ping-once')
    waveRef.current.classList.remove('bg-red-600')
    waveRef.current.classList.remove('bg-blue-600')
  }

  return (
    <div className="relative w-8 h-8 rounded-full group">
      <div className="absolute -top-9 label text-black font-bold text-[15px] w-[88px] z-30 bg-white p-1 rounded-lg transition-all opacity-0 group-hover:opacity-100">
        {exchange}
      </div>
      <div
        className="opacity-80 w-8 h-8 bg-green-600 rounded-full group transition-all"
        ref={pointerRef}
      >
        <div
          className="opacity-0 w-8 h-8 rounded-full transition-all -z-10"
          onAnimationEnd={anmatieEndHandler}
          ref={waveRef}
        ></div>
      </div>
    </div>
  )
}

export default React.memo(Pointer)
