import TextboxComponent from "../component/TextboxComponent"
import ClientCaptcha from "react-client-captcha";
import ButtonComponent from "../component/ButtonComponent"
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
// import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';

function Register() {
  const [data, setData] = useState({
    username: "",
    password: "",
    confPassword: ""
  });
  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  return (
    <>
      <div className="logincontainer">
        <form className="form-container" action="">
          <div className="form-content">
            <h2 className="headding main-txt">Register</h2>
            <div className="space"></div>
            <div className="flex-row">
            </div>
            <TextboxComponent label="E-mail/Phone no" placeholder="E-mail/Phone no" type="text" name="username"
              func={handleValue} value={data.username} />

            <div className="flex-row">
              <div className="half-width">
                <TextboxComponent label="Password" placeholder="password" type="password" name="password"
                 func={handleValue} value={data.password} />
              </div>
              <div className="half-width">
                <TextboxComponent label="Confirm Passsword" placeholder="conform password" type="password" name="confPassword"
                 func={handleValue} value={data.confPassword} />
              </div>
            </div>
            <div className="flex-row">
              <div className="half-width">
                <div className="captcha-div">
                  {/* <div className="captchalabel">Captcha</div> */}
                  <ClientCaptcha width="150" height="30" fontColor="green" charsCount="6" retryIcon="./image/refresh.png" captchaCode={code => console.log(code)} />
                </div>
              </div>
              <div className="half-width">
                <TextboxComponent placeholder="Enter CAptcha" type="text" name="email" />

              </div>
            </div>

            <div className="space"></div>
            <div className="loginbtn">
              <ButtonComponent classs="comonbtn" text="Register" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register