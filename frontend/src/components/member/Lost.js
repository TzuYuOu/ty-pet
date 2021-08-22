import React from 'react'

const Lost = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 pt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link " href="/member/list">送養資訊</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/member/lost">協尋資訊</a>
            </li>
          </ul>
          <div className="tab-content card border-left border-right">
            <div className="card-body">
              <a className="btn btn-success text-white mb-3" href="/member/post/lost">刊登走失協尋</a>
              <div className="table-responsive">
                <table className="table table-bordered bg-white">
                  <thead>
                    <tr>
                      <th className="bg-success">狀態</th>
                      <th className="bg-info">暱稱</th>
                      <th className="bg-danger">品種</th>
                      <th className="bg-warning">種類</th>
                      <th className="bg-success">性別</th>
                      <th className="bg-info">體型</th>
                      <th className="bg-danger">走失時間</th>
                      <th className="bg-warning">走失地</th>
                      <th className="bg-secondary">管理</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="9">目前沒有刊登協尋訊息</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lost
