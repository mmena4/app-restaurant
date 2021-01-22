//TEST
//const test = document.querySelector('#cartContainer');

//const test2 = document.querySelector('#test');



/******* */
/*
const cart = document.querySelector('#cart');

const cartContainer = document.querySelector('#cart_Container');

const emptyCart = document.querySelector('#emptyCart');

/*BUSCO EL ID FOODLIT*/
const foodList = document.querySelector('#foodList');

//CARITO DE COMPRAS, ARRAY VACÍO QUE SE IRÁ LLENANDO/VACIANDO
let cartFood = [];





/*AÑADO UN LISTENER - AL CLICKAR SE EJECUTA addFood*/
eventListeners();
function eventListeners(){
    foodList.addEventListener('click', addFood);

    //muestra los cursos de Local Storage
    document.addEventListener('DOMContentLoaded', () => {
        cartFood = JSON.parse( localStorage.getItem('cart') ) || [];
        htmlCart();

    })
}

/**addFood DETERMINA QUE SI SE CLICA EN EL BOTON, RECUPERA LA FICHA CON PARENT ELEMENT */
function addFood (e)  {
    if(e.target.classList.contains('addBtn')) {
        const choosenFood = e.target.parentElement.parentElement;
        foodDetailsReading(choosenFood);
    }
}

//lee el contenido del curso - AL CLICKAR EN EL BOTON, COJE TODO EL HTML DE LA FICHA
function foodDetailsReading(food) {
  //  console.log(food);

    //OBJETO CON EL CONTENIDO DE LA FICHA DE LA COMIDA
    const foodInfo = {
        image: food.querySelector('img').src,
        price: food.querySelector('h1').textContent,
        title: food.querySelector('h4').textContent,
        description: food.querySelector('h5').textContent,
        addBtn: food.querySelector('addBtn'),
        quantity: 1, //food.querySelector('h5').textContent,
        removeBtn: food.querySelector('removeBtn'), 
        id: food.querySelector('button').getAttribute('data-id'),
    }

    //AGREGANDO EL PLATO AL CARRITO DE COMPRAS con spread operator
    cartFood = [...cartFood, foodInfo];
    console.log(cartFood);

    htmlCart();

}

//muestra el carrito de compras en el html
function htmlCart() {

    cartFood.forEach( food => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${food.price}
            </td>
        `;
        //agrega el html del carrito en el tbody
        cartContainer.appendChild(row);

    });

    //agregar carrito compras al Storage
    syncStorage();

}

function syncStorage() {
    localStorage.setItem('cart', JSON.stringify(cartFood));
}



