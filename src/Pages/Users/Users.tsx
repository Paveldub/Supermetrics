import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostPageAction } from '../../redux/actions/PostPageAction'
import { Loading } from '../../Layout/Loader/Loader'
import './styles.scss'
import { Tab } from '../../Components/Common/Tabs/Tabs'

export const Users = () => {
  const { items, isFetching } = useSelector((state) => state?.postPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPostPageAction())
  }, [])

  return (
    <>
      {isFetching ? <Loading /> : <Tab tabData={items?.data?.posts} />}
    </>
  )
}
