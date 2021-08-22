import React from 'react'

const Login = () => {

  const handleLogin = () => {
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-lg-2 col-lg-4">
          <div className="mb-4 mb-sm-0">
            <div className="bg-info rounded-top p-2">
              <h3 className="text-white font-weighted-bold mb-0 ml-2">註冊成為會員</h3>
            </div>
            <div className="border rounded-bottom border-top-0">
              <div className="p-3">
                <form action="">
                  <div className="form-group mb-2">
                    <input type="email" name="email" id="email" className="form-control border" placeholder="Email帳號" required/>
                  </div>
                  <div className="form-group mb-2">
                    <input type="text" name="name" id="name" className="form-control border" placeholder="姓名/暱稱" required/>
                  </div>
                  <div className="form-group mb-2">
                    <input type="tel" name="phone" id="phone" className="form-control border" placeholder="行動電話" required/>
                  </div>
                  <div className="form-group mb-2">
                    <input type="password" name="password" id="password" className="form-control border" placeholder="密碼" required/>
                  </div>
                  <div className="form-group mb-2">
                    <input type="password" name="cpassword" id="cpassword" className="form-control border" placeholder="確認密碼" required/>
                  </div>
                  <div className="form-group mb-2 text-center">
                    <button className="btn btn-info text-white w-100">送出</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="mb-4 mb-sm-0">
            <div className="bg-success rounded-top p-2">
              <h3 className="text-white font-weighted-bold mb-0 ml-2">會員登入</h3>
            </div>
            <div className="border rounded-bottom border-top-0">
              <div className="p-3">
                <form action="">
                  <div className="form-group mb-2">
                    <input type="email" name="uid" id="uid" className="form-control border" placeholder="Email帳號" required/>
                  </div>
                  <div className="form-group mb-2">
                    <input type="password" name="upassword" id="upassword" className="form-control border" placeholder="密碼" required/>
                  </div>
                  <div className="form-group mb-2 text-center">
                    <button type="submit" onClick={handleLogin} className="btn btn-success text-white w-100">送出</button>
                  </div>
                  <div className="form-group text-center">
                    <a className="text-danger" href="/forgotpassword">忘記密碼</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="pt-5 text-center">
              <div className="text-black-50 pb-3">- 使用其他方式登入 -</div>
              <a className="btn btn-block btn-warning border-0" href="/fblogin">
                <i></i>
                <span>使用Facebook帳號登入</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
