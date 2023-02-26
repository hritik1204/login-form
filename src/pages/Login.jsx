import React from 'react'
import Form from '../components/Form'
import './login.css'

const Login = ({users, username, password, setUsername, setPassword }) => {
  return (
    <div className='login-page'>
        <div className='content'>
           <h1 className='heading'>Log in</h1>
           <div className='form-content'>
             <Form users={users} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
           </div>
        </div>
    </div>
  )
}

export default Login