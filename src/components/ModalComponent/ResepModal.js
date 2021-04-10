import React from 'react'

function ResepModal() {
    return (
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

    )
}

export default ResepModal
