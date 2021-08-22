import React, { useState } from 'react'

const MissingPet = () => {

  const [pets, setPets] = useState([1,2,3,4,5,6]);

  return (
    <div>
      <section>
        <div className="container">
          <form className="" action="">
            <div className="row">
              <div className="col-md-2 form-group mb-2">
                <a className="btn btn-sm btn-block btn-success text-white" href="/member/post/lost">刊登走失協尋</a>
              </div>
              <div className="col-md-2 form-group mb-2">
                <select className="form-control" name="area" id="area">
                  <option value>不限區域</option>
                  <option value="北部地區">北部地區</option>
                  <option value="中部地區">中部地區</option>
                  <option value="南部地區">南部地區</option>
                  <option value="東部地區">東部地區</option>
                </select>
              </div>
              <div className="col col-md-2 form-group mb-2">
                <select className="form-control" name="sex" id="sex">
                  <option value>不限性別</option>
                  <option value="公">公</option>
                  <option value="母">母</option>
                </select>
              </div>
              <div className="col-md-2 form-group mb-2">
                <select className="form-control" name="animal" id="animal">
                  <option value>不限種類</option>
                  <option value="貓">貓</option>
                  <option value="狗">狗</option>
                </select>
              </div>
              <div className="col-md-2 form-group mb-2">
                <button className="btn btn-sm btn-info">搜尋</button>
              </div>
            </div>
          </form>
          <div className="row">
            {
              pets.map((pet,index) => {
                return (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="card">
                      <img className="card-img-top" src="https://wepet.tw/storage/lost/lost_210820013844420711160_8450394724.jpeg" alt=""/>
                    
                      <div className="card-body">
                        <h5 className="card-title">巧克力</h5>
                        <ul className="list-unstyled mb-2">
                          <li><i class="bi bi-person-badge"></i> 狗</li>
                          <li><i class="bi bi-bookmark"></i> 母</li>
                          <li><i class="bi bi-geo"></i> 新北市</li>
                          <li><i class="bi bi-info-circle"></i> 成年中型米克斯</li>
                        </ul>
                        <p className="card-text">右耳有點萎縮像木耳一樣皺皺的，有點害羞怕人</p>
                      </div>
                    </div>
                  </div>

                )
              })
            }
            
          </div>
        
        </div>
      </section>
      
      {/* pagination */}
      <section>

      </section>
    </div>
  )
}

export default MissingPet
