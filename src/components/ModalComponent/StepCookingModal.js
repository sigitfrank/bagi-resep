import React from 'react'

function StepCooking() {
    return (<>
        {/* Cara Membuat */}
        <section>
            <p className="modal-resep">Cara membuat:</p>
            <ul className="list-resep">
                <li> - Ceplok telur lalu orak-arik rata, masukkan bumbu yang sudah dihaluskan, tumis sampai harum.</li>
                <li>- Masukkan mi, nasi, kaldu, garam dan kecap manis secukupnya. Aduk rata, koreksi rasa</li>
            </ul>
        </section>
        <hr className="my-4" style={{ width: '10rem', backgroundColor: '#0000001c' }} />
    </>
    )
}

export default StepCooking
