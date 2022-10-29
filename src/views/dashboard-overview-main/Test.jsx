import React from 'react'
import { useEffect } from 'react'
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk' // 준우야 이거 import 추가했당
import { useSelector } from 'react-redux'
// import EventMarkerContainer from "./EventMarkerContainer";
import greenData from './green.json'
import Pointer from './pointer'
//[{ lng, lat },{ lng, lat },{ lng, lat },{ lng, lat },{ lng, lat }]
const test11 = greenData.DATA.map(({ lng, lat, tree_name }) => {
  return { lng, lat, tree_name }
})
const data = [
  {
    content: <div style={{ color: '#000' }}>카카오</div>,
    latlng: { lat: 33.450705, lng: 126.570677 },
  },
  {
    content: <div style={{ color: '#000' }}>생태연못</div>,
    latlng: { lat: 33.450936, lng: 126.569477 },
  },
  {
    content: <div style={{ color: '#000' }}>텃밭</div>,
    latlng: { lat: 33.450879, lng: 126.56994 },
  },
  {
    content: <div style={{ color: '#000' }}>근린공원</div>,
    latlng: { lat: 33.451393, lng: 126.570738 },
  },
]

const greenFund = [
  {
    // index : 0
    greenFundId: '그린펀드1',
    state: '펀딩중', // 검토, 펀딩중, 펀딩완료, 사업진행중
    name: <div style={{ color: '#000' }}>양천구 공원참나무심기 #12</div>,
    organizer: '테스트용uid1',
    basePoint: { lat: 33.450705, lng: 126.570677 },
    section: { type: 'svg', path: '' },
    treeType: '참나무',
    age: { avr: 15, min: 12, max: 18, unit: 'year' }, // 년
    height: { avr: 5, min: 4, max: 6, unit: 'meter' }, // 미터
    createdAt: '2022.11.11',
    endDate: '2023.12.11',
    targetAmount: 150000,
    currAmount: 150000,
    fundHistories: [{ userId: '테스트용uid1', coin: 'green', amount: 150000 }],
  },
  {
    // index : 1
    greenFundId: '그린펀드2',
    name: <div style={{ color: '#000' }}>천호 공원은행나무심기 #33</div>,
    state: '펀딩중', // 검토, 펀딩중, 펀딩완료, 사업진행중
    organizer: '테스트용uid2',
    basePoint: { lat: 33.450936, lng: 126.569477 },
    section: { type: 'svg', path: '' },
    treeType: '은행나무',
    age: { avr: 15, min: 12, max: 18, unit: 'year' }, // 년
    height: { avr: 5, min: 4, max: 6, unit: 'meter' }, // 미터
    createdAt: '2022.10.18',
    endDate: '2022.12.18',
    targetAmount: 2200000,
    currAmount: 500000,
    fundHistories: [
      { userId: '테스트용uid2', coin: 'green', amount: 200000 },
      { userId: '테스트용uid3', coin: 'green', amount: 100000 },
      { userId: '테스트용uid4', coin: 'green', amount: 200000 },
    ],
  },
]

const techFund = [
  {
    techFundId: '테크펀드id1',
    name: '플라스틱 유전 #12',
    state: '펀딩중', // 검토, 펀딩중, 펀딩완료, 사업진행중
    organizer: '테스트용uid1',
    basePoint: { lat: 11.111, lng: 11.111 },
    techType: '가공', // 가공, 처리,
    rationales: [
      { type: 'url', name: '근거이론1', content: 'https://naver.com' },
    ],
    mileStone: [
      {
        Title: '달성목표11',
        content: '달성목표내용11',
        targetDate: '2022.11.11',
      },
      {
        Title: '달성목표12',
        content: '달성목표내용12',
        targetDate: '2023.05.22',
      },
      {
        Title: '달성목표13',
        content: '달성목표내용13',
        targetDate: '2023.12.11',
      },
    ],
    createdAt: '2022.11.11',
    endDate: '2023.12.11',
    targetAmount: 150000,
    currAmount: 100000,
    fundHistories: [{ userId: '테스트용uid1', coin: 'green', amount: 100000 }],
  },
  {
    techFundId: '테크펀드id2',
    name: '플라스틱벽돌 #12',
    state: '펀딩완료', // 검토, 펀딩중, 펀딩완료, 사업진행중
    organizer: '테스트용uid2',
    basePoint: { lat: 11.111, lng: 11.111 },
    techType: '제품', // 가공, 처리, 제품
    rationales: [
      { type: 'url', name: '근거이론2', content: 'https://naver.com' },
    ],
    mileStones: [
      {
        Title: '달성목표21',
        content: '달성목표내용21',
        targetDate: '2022.11.11',
      },
      {
        Title: '달성목표22',
        content: '달성목표내용22',
        targetDate: '2023.05.22',
      },
      {
        Title: '달성목표23',
        content: '달성목표내용23',
        targetDate: '2023.12.11',
      },
    ],
    createdAt: '2022.11.11',
    endDate: '2023.12.11',
    targetAmount: 220000,
    currAmount: 220000,
    fundHistories: [{ userId: '테스트용uid2', coin: 'green', amount: 220000 }],
  },
]

const Test = () => {
  const coinsPrice = useSelector((state) => state.coinReducer.coinsPrice)

  useEffect(() => {
    //console.log(coinsPrice)
  }, [coinsPrice])

  return (
    <div className="mapDiv">
      <Map
        className="mapApi"
        center={{ lat: 36.62110233414021, lng: 127.96746184031142 }}
        level={13}
        style={{ width: '100%', height: '400px' }}
      >
        {/* {greenFund.map((value) => (
          // value는 여러개의 방들중 하나의 방의 값들
          // index는 여러개의 방들
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.basePoint.lat}-${value.basePoint.lng}`}
            position={value.latlng}
            content={value.content}
          />
        ))} */}
        {/* {test11.map(({ lat, lng, tree_name }) => (
          // value는 여러개의 방들중 하나의 방의 값들
          // index는 여러개의 방들
          <EventMarkerContainer
            key={`EventMarkerContainer-${lat}-${lng}`}
            position={{ lat, lng }}
            content={<div> {tree_name} </div>}
          />
        ))} */}

        {/* 준우야 여기 추가한거 START */}
        {test11.map(({ lat, lng, tree_name }, key) => (
          // value는 여러개의 방들중 하나의 방의 값들
          // index는 여러개의 방들
          <CustomOverlayMap key={key} position={{ lat, lng }}>
            <Pointer coinsPrice={coinsPrice[key]} tree_name={tree_name} />
          </CustomOverlayMap>
          // 준우야 여기가 END
        ))}
      </Map>
    </div>
  )
}

export default Test
