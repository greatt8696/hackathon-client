import ScrollToTop from '@/base-components/scroll-to-top/Main'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { initAllUsers, initChart, initCoinsPrice } from './redux/apiActions'
import Router from './router'

import { getUserSocket, getTradeSocket } from './socket'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    getUserSocket(dispatch)
    getTradeSocket(dispatch)
    initChart(dispatch)
    initCoinsPrice(dispatch)
    initAllUsers(dispatch)
  },[])

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
