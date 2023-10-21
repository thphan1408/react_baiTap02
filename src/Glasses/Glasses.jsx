import React from 'react'
import { useState } from 'react'
import './style.css'
import data from './data.json'

export const Glasses = () => {
  // console.log(data)
  const [glasses, setGlasses] = useState({
    id: 1,
    price: 30,
    name: 'GUCCI G8850U',
    url: './images/v1.png',
    desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
  })

  const handleChangeGlasses = (id) => {
    const newGlasses = data.find((item) => item.id === id)
    setGlasses(newGlasses)
  }

  return (
    <>
      <div className="tilte bg-dark text-center p-4">
        <h1 className="text-white">TRY GLASSES APP ONLINE</h1>
      </div>

      <div className="container-lg ">
        <div className="row d-flex justify-content-evenly mt-3">
          <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
              <div className="glassesChange">
                <img src={glasses.url} alt="..." />
              </div>
              <img
                style={{ width: 380, height: 380 }}
                src="./images/model.jpg"
                className="img-fluid card-img m-auto "
                alt="..."
              />

              <div
                className="card-body card-img-overlay"
                style={{
                  top: 'auto',
                  backgroundColor: 'rgba(248, 172, 120, 0.3)',
                }}
              >
                <h5 className="card-title text-primary">{glasses.name}</h5>
                <p className="card-text fw-bold text-white">{glasses.desc}</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="testGlasses">
              <div className="glasses">
                <img src={glasses.url} className="" alt="..." />
              </div>
              <img
                style={{ width: 380, height: 380 }}
                src="./images/model.jpg"
                className="img-fluid m-auto "
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="glassItem mt-5">
          <div className="row">
            {
              // eslint-disable-next-line array-callback-return
              data.map((item, index) => {
                return (
                  <div className="col-md-2" key={item.id}>
                    <div
                      className="glassItem__item"
                      onClick={() => handleChangeGlasses(item.id)}
                    >
                      <img
                        src={item.url}
                        className="img-fluid"
                        style={{ width: 500, height: 100 }}
                        alt=""
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
