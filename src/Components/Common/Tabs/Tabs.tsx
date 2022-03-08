import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment'
import './styles.scss'

export const Tab = (props) => {
  const { tabData } = props

  const [visibleTab, setVisibleTab] = useState('')

  const tabsData = () => {
    const resultArr = []

    let newTabData = tabData?.sort((a, b) =>
      a?.from_name?.localeCompare(b.from_name)
    )
    newTabData.forEach((item) => {
      const index = resultArr.findIndex((elem) => {
        return elem.from_name === item.from_name
      })
      if (index === -1) {
        resultArr.push({
          ...item,
          message: [item.message],
          created_time: [item.created_time],
        })
      } else {
        resultArr[index].message.push(item.message)
        resultArr[index].created_time.push(item.created_time)
      }
    })

    setVisibleTab(resultArr[0].id)

    return resultArr
  }

  const listTitles = useMemo(() => tabsData(), [])

  const listContent = listTitles?.map((item, index) => {
    return (
      <div
        className="tab-content"
        key={`${item}_${index}`}
        style={visibleTab === item.id ? {} : { display: 'none' }}
      >
        {item.created_time.map((elem, index) => (
          <div key={`${item}_${index}`}>
            <span>{moment(elem).format('MMMM Do, YYYY h:mm:ss')}</span>
            <p>{item.message[index]}</p>
          </div>
        ))}
      </div>
    )
  })

  return (
    <div className="tabs">
      <>
        <div className="tabs__left">
          <ul className="tabs-titles">
            {listTitles?.map((item, index) => (
              <li
                onClick={() => setVisibleTab(item.id)}
                className={
                  visibleTab === item.id
                    ? 'tab-title tab-title--active'
                    : 'tab-title'
                }
                key={`${item}_${index}`}
              >
                {item.from_name}
                <span className="tabs-quantity">{item.message.length}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="tabs__right">
          <li className="tab-content">{listContent}</li>
        </ul>
      </>
    </div>
  )
}
