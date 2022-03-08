import React from 'react'
import { ErrorMessage } from '../../Common/ErrorMessage/ErrorMessage'
import classnames from 'classnames'
import './styles.scss'

interface LoginProps {
  label: string
  name: string
  register: any
  error: string
  type: string
  onChange: () => void
  onBlur?: () => void
}

export const LoginInput = (props: LoginProps) => {
  const { label, name, register, error, type, onChange, onBlur } = props

  const formInputClassName = classnames('login-page__input', {
    'login-page__input--active': error,
  })

  return (
    <div className={formInputClassName}>
      <label>
        {label}

        <input
          type={type}
          name={name}
          ref={register}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>

      {error && <ErrorMessage message={error?.message as string} />}
    </div>
  )
}
