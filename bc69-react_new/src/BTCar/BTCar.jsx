// rafc

import React, { useState } from 'react'

export const BTCar = () => {
    const [imgSrc, setImgSrc] = useState('./images/black-car.jpg')

    const handleImgSrc = (colorCar) => {
        setImgSrc(`./images/${colorCar}-car.jpg`)
    }

    return (
        <div className="container mt-5">
            <h1>BTCar</h1>

            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={imgSrc} alt="..." />
                </div>
                <div className="col-4 d-flex flex-column gap-5">
                    <button
                        className="btn btn-dark"
                        // onClick={() => {
                        //     setImgSrc('./images/black-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('black')}
                    >
                        Black
                    </button>
                    <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //     setImgSrc('./images/red-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('red')}
                    >
                        Red
                    </button>
                    <button
                        className="btn btn-secondary"
                        // onClick={() => {
                        //     setImgSrc('./images/silver-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('silver')}
                    >
                        Silver
                    </button>
                    <button
                        className="btn btn-dark"
                        style={{
                            backgroundColor: 'grey',
                        }}
                        // onClick={() => {
                        //     setImgSrc('./images/steel-car.jpg')
                        // }}
                        onClick={() => handleImgSrc('steel')}
                    >
                        Steel
                    </button>
                </div>
            </div>
        </div>
    )
}
