import React from 'react'

function CarouselFoodModal() {
    return (
        <div id="userFoodCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#userFoodCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#userFoodCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    
    )
}

export default CarouselFoodModal
