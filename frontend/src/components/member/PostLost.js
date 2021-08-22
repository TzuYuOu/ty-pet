import React from 'react'

const PostLost = () => {
  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col-md-8 mb-2">
            <div className="card">
              <div className="card-header card-header-lg bg-danger rounded-top">
                <h4 className="text-center font-weight-medium text-white">走失協尋資訊</h4>
              </div>
              <div className="card-body pt-5">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="name">動物暱稱</label>
                    <input type="text" className="form-control border-dark" name="animal_name" id="animal_name" required/>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="name">品種</label>
                    <input type="text" className="form-control border-dark" name="animal_brand" id="animal_brand" placeholder="如：柴犬" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="name">動物種類</label>
                    <select className="form-control border-warning" name="animal_cate" id="animal_cate" required>
                      <option value>請選擇</option>
                      <option value="狗">狗</option>
                      <option value="貓">貓</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">動物性別</label>
                    <select className="form-control border-danger" name="animal_sex" id="animal_sex" required>
                      <option value>請選擇</option>
                      <option value="公">公</option>
                      <option value="母">母</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">體型</label>
                    <select className="form-control border-success" name="animal_body" id="animal_body" required>
                      <option value>請選擇</option>
                      <option value="小型">小型</option>
                      <option value="中型">中型</option>
                      <option value="大型">大型</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="name">毛色描述</label>
                    <input type="text" className="form-control border-secondary" name="animal_color" id="animal_color" placeholder="如：咖啡色" required/>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">年紀</label>
                    <select className="form-control border-primary" name="animal_age" id="animal_age" required>
                      <option value>請選擇</option>
                      <option value="幼年">幼年</option>
                      <option value="成年">成年</option>
                      <option value="老年">老年</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">走失時間</label>
                    <input type="date" className="form-control border-info" name="date" id="date" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="">走失地區</label>
                    <div className="row">
                      <div className="form-group col-6">
                        <select className="form-control border-success" name="county" id="county">
                          <option value>選擇縣市</option>
                          <option value="台北市">台北市</option>
                        </select>
                      </div>
                      <div className="form-group col-6">
                        <select className="form-control border-warning" name="district" id="district">
                          <option value>選擇地區</option>
                          <option value="信義區">信義區</option>
                        </select>  
                      </div>
                      <div className="form-group">
                        <input className="form-control border-dark" type="text" placeholder="如:中正路附近"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="name">其他說明</label>
                    <textarea className="form-control" name="animal_remark" id="animal_remark"  rows="8"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="name">聯絡人名稱</label>
                    <input type="text" className="form-control border-dark" name="owner_name" id="owner_name" required></input>
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="name">聯絡人手機號碼</label>
                    <input type="tel" className="form-control border-info" name="owner_phone" id="owner_phone" required></input>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header card-header-lg bg-danger rounded-top">
                <h4 className="text-center font-weight-medium text-white">刊登條款</h4>
              </div>
              <div className="card-body pt-5">
                <p>刊登人使用由 TYPET 寵物資訊平台(以下簡稱「TYPET」)所提供之送養資訊刊登服務(以下簡稱「本服務」)時，均受到本「刊登條款」規範。</p>
                <p>1.此為測試版本</p>
                <div className="row">
                  <div className="form-group col-md-12">
                    
                    <input type="checkbox" id="agree" name="agree" required/>
                    <span> 我已詳閱且同意本刊登條款</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 pb-5 mt-2">
            <button type="submit" className="btn btn-success btn-md  text-white">送出</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PostLost
