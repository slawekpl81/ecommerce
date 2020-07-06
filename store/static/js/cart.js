var updateBtns = document.getElementsByClassName('update-cart')

for (let i=0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product;
        var action = this.dataset.action;
        console.log('productId:', productId, 'Action:', action );
        
        console.log('USER:', user);
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated')
        }else {
                console.log('User OK');
                updateUserOrder(productId, action);
            }
    })
}

function updateUserOrder(productId, action){
    console.log('update OK');

    let url = '/update_item/';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Tyoe': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productId':productId, 'action':action})
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            location.reload();
        })
}