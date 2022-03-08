import classnames from 'classnames'
import { Spinner } from './../../Components/Common/Spinner/Spinner'
import React from 'react'

export function Loading({ className = '' }) {
  return (
    <div className={classnames('loading', className)}>
      <Spinner />
    </div>
  )
}
