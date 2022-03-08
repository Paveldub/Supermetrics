import React from 'react'

interface LabelValue {
  label: string
}

export const SubmitButton = ({ label }: LabelValue) => {
  return (
    <div className="login-page__button">
      <button type="submit">{label}</button>
    </div>
  )
}
