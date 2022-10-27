
import ScrollToTop from '@/base-components/scroll-to-top/Main'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from './router'

import { getUserSocket, getTradeSocket } from './socket'

function App() {
  const dispatch = useDispatch()

  getUserSocket(dispatch)
  getTradeSocket(dispatch)

  return (
      <RecoilRoot>
        <BrowserRouter>
          <Router />
          <ScrollToTop />
        </BrowserRouter>
      </RecoilRoot>
  );
}

export default App
