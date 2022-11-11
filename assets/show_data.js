
fetch('assets/data.json')
.then(res => res.json())
.then(json => {
    for (i = 0; i<json.length; i++) {
        let name = json[i];
        let container = document.getElementById('add_Items').innerHTML += `
        <div class="col-md-3 mt-3">
                        <div class="card"><img class="img-fluid card-img w-100 d-block" src=${name.img}>
                            <div class="text-center">
                                <h1>${name.name}</h1>
                                <p class="cap">${name.description}</p><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
                                <div><button class="btn addtocart btn-dark my-3 add" type="button">Add To Cart</button></div>
                                <span id = "hidden" hidden>${name.id}</span>
                                <span id = "hidden" hidden>${name.price}</span>
                            </div>
                        </div>
        `
    }
    })