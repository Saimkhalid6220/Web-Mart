items = localStorage.getItem('cartItems');
items = '['+ items +']';
let products = JSON.parse(items);
for(i = 0; i < products.length; i++) {
    let name = products[i];
    // console.log(name)
    document.getElementById('items').innerHTML += `
    <div class = "row d-flex gx-2 gy-2 justify-content-between  align-items-center border-3 border-bottom">
    <div class = "col-12 col-md-3 mt-3">
    <img class = "img-fluid" src = ${name.img}>
    </div>
    <div class = "col-12 col-md-3 mt-3">
    <div><h4 class = "text-center my-3">${name.name}<h4></div>
    <div>
    <h4 class = "text-center fs-6 my-2">${name.price}</h4>
    </div>
    <div class = "text-center my-2">
    <i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i>
    </div>
    </div>  
    <div class = "col-12 d-flex justify-content-center align-items-center col-md-3">
    <div class = "bg-primary p-2 border rounded-pill my-3">
    <button class = "btn increase"><i class="fa-solid fa-plus text-white mx-2"></i></button>
    <span class = "text-white" id = "incart">${name.incart}</span>
    <button class = "btn decrease"><i class="fa-solid fa-minus text-white mx-2"></i></button>
    <span id = "hidden" hidden>${i}</span>
    </div>
    </div>
  <div class = "col-12 d-flex justify-content-center align-items-center col-md-3 my-3">
  <button class = "btn btn-dark mx-2">Checkout Now</button>
  <button class = "btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
  <span id = "hidden" hidden>${i}</span>
  </div>
    </div>
    `
}
function removeItem() {
    btn = document.getElementsByClassName('remove');
    for(i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click' , function remove(e) {
           btnClicked = e.currentTarget.parentElement;
           let number = btnClicked.childNodes[5].innerText
           let items = localStorage.getItem('cartItems');
           items = '[' + items + ']'
           let product = JSON.parse(items);
        //   console.log(product);
          let deletedItem = product[number];
        //   console.log(deletedItem)
          deletedItem = JSON.stringify(deletedItem)
          console.log(deletedItem)
          product = JSON.stringify(product)
        //   console.log(product);
          let update = product.replace(deletedItem , "");
            update = update.replace(',]' , "");
            update = update.replace('[,' , "");
            update = update.replace('[' , "");
            update = update.replace(']' , "");
            update = update.replace(',,' , ",");
          console.log(update);
          localStorage.setItem('cartItems' , update)
          let cartNumber = localStorage.getItem('cartNumber');
          localStorage.setItem('cartNumber' , cartNumber - 1)
          updatedNumber = localStorage.getItem('cartNumber');
          if(updatedNumber == 0) {
            localStorage.removeItem('cartItems')
          }

          location.reload();
        //   console.log(product.replace(deletedItem , ""))
        })
    }
}
let Increase = document.getElementsByClassName('increase');
for(i = 0; i < Increase.length; i++) {
  Increase[i].addEventListener('click' , function(e){
    btnClicked = e.currentTarget.parentElement;
    let span = btnClicked.childNodes[7].innerText;
    let products = localStorage.getItem('cartItems');
    products = '['+ products +']';
    products = JSON.parse(products);
    let product = products[span];
    product.incart++;
    Incart = product.incart;
    btnClicked.childNodes[3].innerText = Incart;
    products = JSON.stringify(products);
  products = products.replace('[' , "");
  products = products.replace(']' , "");
  localStorage.setItem('cartItems' , products)
  })
}
let Decrease = document.getElementsByClassName('decrease');
for(i = 0; i < Decrease.length; i++) {
  Decrease[i].addEventListener('click' , function(e) {
    btnClicked = e.currentTarget.parentElement;
    let span = btnClicked.childNodes[7].innerText;
    let products = localStorage.getItem('cartItems');
    products = '['+ products +']';
    products = JSON.parse(products);
    let product = products[span];
    product.incart--;
    Incart = product.incart;
    btnClicked.childNodes[3].innerText = Incart;
    products = JSON.stringify(products);
  products = products.replace('[' , "");
  products = products.replace(']' , "");
  localStorage.setItem('cartItems' , products)
  })
}

removeItem();



