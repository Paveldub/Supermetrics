import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginInput } from './../../Components/LoginForm/LoginInput/LoginInput'
import { SubmitButton } from '../../Components/SubmitButton/SubmitButton'
import { createTriggerValidationFunction } from './../../utils/index'
import { FIELDS } from './../../Pages/Login/loginFields'
import { useHistory } from 'react-router-dom'
import { Loading } from './../../Layout/Loader/Loader'
import './styles.scss'

export const Login = () => {
  const { register, handleSubmit, errors, trigger } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUnregister: true,
  })

  const triggerValidation = createTriggerValidationFunction(errors, trigger)
  const baseURL = 'https://api.supermetrics.com/assignment/register'
  const history = useHistory()
  const [spinner, setSpinner] = useState(false)

  const handleData = (data: any) => {
    setSpinner(true)
    const client_id = 'ju16a6m81mhid5ue1z3v2g0uh'
    const { name, email } = data

    fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, client_id }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log('Success:', data)
        localStorage.setItem('sl_token', data.data.sl_token)
        history.push('/posts')
      })
      .catch((error) => {
        console.error('Error:', error.code)
      })
      .finally(() => {
        setSpinner(false)
      })
  }

  useEffect(() => {
    handleData
  })

  return (
    <>
      <div className="login-page">
        <div className="login-page__box">
          {spinner && <Loading />}
          <h1>Login</h1>
          <form
            className="login-page__form"
            onSubmit={handleSubmit(handleData)}
          >
            <LoginInput
              {...FIELDS.name}
              label={'Name'}
              error={errors.name}
              register={register(FIELDS.name.register)}
              onChange={() => {
                triggerValidation(FIELDS.name.name)
              }}
            />
            <LoginInput
              {...FIELDS.email}
              label={'Email'}
              error={errors.email}
              register={register(FIELDS.email.register)}
              onChange={() => {
                triggerValidation(FIELDS.email.name)
              }}
            />
            <SubmitButton label={'Go'} />
          </form>
        </div>
      </div>
    </>
  )
}
