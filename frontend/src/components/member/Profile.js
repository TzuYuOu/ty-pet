import React from 'react'

const Profile = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2">
            <div className="card">
              <div className="card-header bg-danger rounded-top"></div>
              <div className="card-body pt-5">
                <form className="sky-form" action="">
                  <div className="row">
                    <div className="form-group col-md-12 mb-2">
                      <label htmlFor="name">會員暱稱</label>
                      <input type="text" className="form-control border-warning" name="name" id="name" required/>
                    </div>
                    <div className="form-group col-md-12 mb-2">
                      <label htmlFor="phone">行動電話</label>
                      <input type="tel" className="form-control border-danger" name="phone" id="phone" required/>
                    </div>
                    <div className="form-group col-md-12 mb-2">
                      <label htmlFor="email">電子信箱</label>
                      <input type="email" className="form-control border-purple" name="email" id="email" required/>
                    </div>
                    <div className="form-group col-md-12 mb-2">
                      <button type="submit" className="btn btn-md w-100 btn-success">確認修改</button>
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
