import React from 'react'
import '../../css/modal.css';
import CarouselFoodModal from './CarouselFoodModal';

import AuthorModal from './AuthorModal';
import ResepModal from './ResepModal';
import StepCookingModal from './StepCookingModal';
import CommentModal from './CommentModal';
function ModalDetailFood() {
    return (
        <div className="modal fade modal-detail-food" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <CarouselFoodModal />
                    <div className="img-collection-food">
                        <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
                        <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
                        <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
                        <img className="d-block w-100" src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" />
                    </div>
                    <div className="p-3">
                        <AuthorModal />
                        <ResepModal />
                        <StepCookingModal />
                        <CommentModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetailFood
