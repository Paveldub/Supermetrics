import React from 'react'

interface ErrorMessageProp {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProp) => {
  return (
    <div className="error error--active">
      <span>{message}</span>
    </div>
  )
}
