import React from 'react'
import Rating from './Rating'
import Author from './Author'
import CommentSection from './CommentSection'
import Description from './Description'
function Food() {
    return (
        <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="card my-3 food-list">
                <div className="card-header">
                    <img src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" className="img-fluid" />
                </div>
                <div className="card-body">
                    <Author />
                    <Description />
                    <Rating />
                    <CommentSection />
                    <p className="show-more" data-toggle="modal" data-target=".modal-detail-food" data-backdrop="static" data-keyboard="false">
                        <span className="line">--</span>Lihat detail<span className="line">--</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Food
