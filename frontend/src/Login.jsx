import './Login.css'

import user_icon from './Components/assets/person.png'
import email_icon from './Components/assets/email.png'
import password_icon from './Components/assets/password.png'
export default function Login(){
  return (

    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
        
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container"></div>
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
    </div>

  )
}

    
