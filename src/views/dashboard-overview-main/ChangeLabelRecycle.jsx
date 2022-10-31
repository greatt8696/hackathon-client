import React, { useEffect, useRef, useState } from 'react'
import { Lucide } from '@/base-components'

const ChangeLabelRecycle = (props) => {
  const { coin, text } = props
  const [tempCoin, setTempCoin] = useState()
  const [changeLabel, setchangeLabel] = useState('')
  const [isup, setUp] = useState(true)
  const [icon, setIcon] = useState('ChevronUp')
  const priceRef = useRef()
  const changeRef = useRef()

  useEffect(() => {
    if (coin !== undefined) setTempCoin(coin)
  }, [coin])

  useEffect(() => {
      if (coin !== undefined) {
        if (coin.change === 'RISE') {
          setUp(true)
          setIcon('ChevronUp')
          priceRef.current.classList.add('text-white')
        } else {
          setUp(false)
          setIcon('ChevronDown')
          priceRef.current.classList.add('text-white')
        }
        setchangeLabel(`${(coin.basedchange_rate * 100).toFixed(2)} %`)
      }
  }, [coin.data])

  const animationEndHandler = () => {
    priceRef.current.classList.remove('animate-blink-blue')
    priceRef.current.classList.remove('animate-blink-red')
    priceRef.current.classList.remove('text-white')
    changeRef.current.classList.remove('animate-blink-blue')
    changeRef.current.classList.remove('animate-blink-blue')
    changeRef.current.classList.remove('text-white')
  }

  return (
    <div className="flex" ref={priceRef} onAnimationEnd={animationEndHandler}>
      <div
        ref={priceRef}
        className={`
        ${isup ? 'text-red-500' : 'text-blue-500'} ${text} font-medium ml-2`}
        onAnimationEnd={animationEndHandler}
      >
        {coin.data}
      </div>
      <div
        ref={changeRef}
        onAnimationEnd={animationEndHandler}
        className={`${
          isup ? 'text-red-500' : 'text-blue-500'
        }  text-xs font-medium ml-2 flex mt-3`}
      >
        {changeLabel}
        <Lucide
          icon={icon}
          className={`w-4 h-4 ml-0.5 ${
            isup ? 'text-red-500' : 'text-blue-500'
          }`}
        />
      </div>
    </div>
  )
}

export default React.memo(ChangeLabelRecycle)
