import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Category from './Category'
function Search() {

    const [search, setSearch] = useState('')
    const searchHandler = () => {
        alert(search)
        setSearch('')
    }
    return (<>
        <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Cari resep ..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="search" aria-describedby="search" />
                <div className="input-group-append">
                    <button className="input-group-text" style={{cursor: "pointer"}} id="search" onClick={searchHandler}>
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
        <Category/>
        </>
    )
}

export default Search
