import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
function Search() {

    const [search, setSearch] = useState('')
    const searchHandler = () => {
        alert(search)
    }
    return (
        <div className="col-md-12 col-sm-12">
            <div class="input-group mt-3">
                <input type="text" class="form-control" placeholder="Cari resep ..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="search" aria-describedby="search" />
                <div class="input-group-append">
                    <button class="input-group-text" id="search" onClick={searchHandler}>
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
