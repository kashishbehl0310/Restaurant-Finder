const axios = require('axios')

function searchResultsHTML(stores) {
    return stores.map()
}


function typeAhead(search) {
    if(!search) return;
    const searchInput = search.querySelector('input[name="search"]')
    const searchResults = search.querySelector('.search__results')
    searchInput.on('input', function() {
        if(!this.value){
            searchResults.style.display = 'none'
            return
        }
        searchResults.style.display = 'block'

        axios
        .get(`/api/search?q=${this.value}`)
        .then(res => {
            if(res.data.length){

            }
        })
    })
}

export default typeAhead