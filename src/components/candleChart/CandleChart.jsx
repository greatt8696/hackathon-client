import { useEffect } from 'react'
import React from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const CandleChart = (props) => {
  const {exchange, code, candles} = props
  const initData = {
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
        id: 'candles',
        toolbar: {
          autoSelected: 'pan',
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#DF7D46',
            downward: '#3C90EB',
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },

      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    seriesBar: [
      {
        name: 'volume',
        data: [],
      },
    ],
    optionsBar: {
      chart: {
        height: 120,
        type: 'bar',
        brush: {
          enabled: true,
          target: 'candles',
        },
        selection: {
          enabled: false,
          fill: {
            color: '#ccc',
            opacity: 0.4,
          },
          stroke: {
            color: '#0D47A1',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: '#F15B46',
              },
              {
                from: 1,
                to: 10000,
                color: '#FEB019',
              },
            ],
          },
        },
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  }
  const [data, setData] = useState(initData)
  const [ohlc, setOhlc] = useState([{ data: [{}] }])
  const [volume, setVolume] = useState([{ data: [{}] }])

  useEffect(() => {
    const candle = candles[code]
    if (candle !== undefined) {
      const ohlc = candle.ohlc.map(({ x, y }) => {
        return { y, x: new Date(x) }
      })
      const volume = candle.volume.map(({ x, y }) => {
        return { y, x: new Date(x) }
      })
      setOhlc([{ data: ohlc }])
      setVolume([{ data: volume }])
    }
  }, [candles])

  return (
    <div className="chart-box">
      <div id="chart-candlestick">
        <Chart
          options={data.options}
          series={ohlc}
          type="candlestick"
          height={250}
        />
      </div>
      <div id="chart-bar">
        <Chart
          options={data.optionsBar}
          series={volume}
          type="bar"
          height={100}
        />
      </div>
    </div>
  )
}

export default React.memo(CandleChart)
