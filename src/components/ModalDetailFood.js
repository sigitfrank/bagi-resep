import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import '../css/modal.css';
import Rating from './HomeComponent/Food/Rating';
function ModalDetailFood() {
    return (
        <div className="modal fade modal-detail-food" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img src="https://www.denpasarkota.go.id/uploads/datang/datang_192709040901_5WarungNasiGorengLezatdenganHargayangBersahabat.jpg" alt="user-food" className="img-fluid" />
                    <div className="p-3">
                        {/* Author */}
                        <section>
                            <div className="row">
                                <div className="col-6">
                                    <p className="modal-author mb-2">Sigit Tunggul Waskito</p>
                                    <q>Your taste is ours</q>
                                </div>
                                <div className="col-6 text-right">
                                    <span className="modal-date badge badge-pill badge-secondary">2021-4-09</span>
                                    <div className="modal-ratings mt-2">
                                        <Rating />
                                    </div>
                                </div>
                            </div>
                            <div class="like-container">
                                <BsFillHeartFill className="like-indicator" /> : 99
                            </div>
                            <hr />
                            <p className="modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum iusto! Dignissimos voluptas possimus facere rem, nemo architecto incidunt vero!</p>
                        </section>

                        <hr />

                        {/* Resep */}
                        <section>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="modal-resep">Bahan-bahan:</p>
                                    <ul className="list-resep">
                                        <li>nasi putih dingin</li>
                                        <li>1 keping mi, kemudian rebus dan tiriskan</li>
                                        <li>2 buah telur</li>
                                        <li>kaldu jamur</li>
                                        <li>garam</li>
                                        <li>kecap manis secukupnya</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <p className="modal-resep">Bumbu halus:</p>
                                    <ul className="list-resep">
                                        <li>6 buah bawang merah</li>
                                        <li>3 buah bawang putih</li>
                                        <li>1 buah kemiri</li>
                                        <li>5 buah cabai merah besar</li>
                                        <li>2 buah cabai rawit</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Cara Membuat */}
                        <section>
                            <p className="modal-resep">Cara membuat:</p>
                            <ul className="list-resep">
                                <li> - Ceplok telur lalu orak-arik rata, masukkan bumbu yang sudah dihaluskan, tumis sampai harum.</li>
                                <li>- Masukkan mi, nasi, kaldu, garam dan kecap manis secukupnya. Aduk rata, koreksi rasa</li>
                            </ul>
                        </section>
                        <hr className="my-4" style={{ width: '10rem', backgroundColor: '#0000001c' }} />
                        {/* Comment */}
                        <section>
                            <ul>
                                <li>
                                    <div className="d-flex align-items-center my-3">
                                        <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-profile" className="modal-user-profile" />
                                        <p className="modal-comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque asperiores nesciunt officiis, recusandae repudiandae natus aliquam quia assumenda dignissimos quasi atque est eligendi at modi magni? Aut necessitatibus cumque labore, nobis excepturi a fugiat repudiandae rerum explicabo at eos sapiente temporibus aspernatur quos vero impedit odio dolor veritatis nam eligendi, accusantium natus! Debitis eaque delectus doloribus et, eveniet magni error.</p>
                                    </div>
                                    <div className="d-flex align-items-center my-3">
                                        <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user-profile" className="modal-user-profile" />
                                        <p className="modal-comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quos.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetailFood
