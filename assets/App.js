fetch('assets/data.json')
.then(res => res.json())
.then(json => {
    let data = json;
    const btn = document.getElementsByClassName('addtocart');
    for(i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click' ,(e) => {
            let btnClicked = (e.currentTarget.parentElement.parentElement);
            let hello = btnClicked.childNodes;
            let span = hello[12].innerText
            // cart(span)
            // cartItems(span);
            checkItems(span);
        })
    }
})
function cart (span) {
    productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber)
    if(productNumber) {
        document.getElementById('value').innerText = productNumber + 1;
        localStorage.setItem('cartNumber' ,productNumber +1);
    }
    else{
        document.getElementById('value').innerText = 1;
        localStorage.setItem('cartNumber' , 1);
    }
    // checkItems(span);
    // cartItems(span);
}
   function checkItems(span) {
    let products = localStorage.getItem('cartItems');
    if(products != null) {
        if(products.includes('"id":'+span)){
            products = '['+products+']';
            products = JSON.parse(products);
            let cartItems = localStorage.getItem('cartItems')
            cartItems = '['+cartItems+']';
            cartItems = JSON.parse(cartItems)
            for(i = 0; i < products.length; i++) {
                let product = cartItems[i];
                let incart = cartItems[i]
                product = JSON.stringify(product)
                if(product.includes('"id":'+span)) {
                    product = JSON.parse(product);
                    product.incart++;
                    incart = JSON.stringify(incart)
                    products = JSON.stringify(products)
                    product = JSON.stringify(product)
                    products = products.replace(incart , product)
                    products = products.replace('[' , "")
                    products = products.replace(']' , "")
                    localStorage.setItem('cartItems' , products)
                    if(1 == 1) {
                         break;
                    }
                }
            }
        } else{
            span = JSON.parse(span)
            cart(span);
            cartItems(span);
        }
    } else{
        cart(span);
        cartItems(span);
    }
   }
function cartItems(span) {
    fetch('assets/data.json')
    .then(res => res.json())
    .then(json => {
        let cartItem = localStorage.getItem('cartItems');
        if(cartItem != null){
            number = span;
            let items = cartItem +','+ JSON.stringify(json[number]);
            // items = JSON.stringify(items)
            localStorage.setItem('cartItems' ,items)

        } else{
            number = span;
            let items = json[number];
            items = JSON.stringify(items)
            localStorage.setItem('cartItems' , items)
        }
       
    })
}
function onloadCart() {
    productNumber = localStorage.getItem('cartNumber');
    document.getElementById('value').innerText = productNumber
}
onloadCart();