import React, { useState } from 'react'

const PublicAdopt = () => {

  const [pets, setPets] = useState([1,2,3,4,5,6])

  return (
    <div>
      <section>
        <div className="container">
          <form action="">
            <div className="row">
              <div className="col-md-4 form-group mb-2">
                <select className="form-control" name="shelter" id="shelter">
                  <option value>所有收容所</option>
                  <option value="南投縣公立動物收容所">南投縣公立動物收容所</option>
                </select>
              </div>
              <div className="col-md-2 form-group mb-2">
                <select className="form-control" name="animal" id="animal">
                  <option value>不限種類</option>
                  <option value="狗">狗</option>
                  <option value="貓">貓</option>
                </select>
              </div>
              <div className="col-md-2 form-group mb-2">
                <button className="btn btn-sm btn-info text-white">搜尋</button>
              </div>
            </div>
          </form>
          <div className="row">
            {
              pets.map((pet,index) => {
                return (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="card">
                      <img className="card-img-top" src="https://wepet.tw/storage/opendata/218815.jpg" alt=""/>
                    
                      <div className="card-body">
                        <h5 className="card-title">大型黃色公犬</h5>
                        <ul className="list-unstyled mb-2">
                          <li><i class="bi bi-house"></i> 雲林縣流浪動物收容所</li>
                          <li><i class="bi bi-bookmark"></i> 05-5523300</li>
                          <li><i class="bi bi-geo"></i> 雲林縣斗六市雲林路二段517號</li>
                          
                        </ul>
                        
                      </div>
                    </div>
                  </div>

                )
              })
            }
            
          </div>
        
        </div>
      </section>
    </div>
  )
}

export default PublicAdopt
