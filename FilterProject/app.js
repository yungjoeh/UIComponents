const products = [
  {
    title: "supreme",
    price: 15.00,
    category: "cakes"
  },
  {
    title: "dough",
    price: 40.00,
    category: "doughnuts"
  },
  {
    title: "candy",
    price: 30.00,
    category: "sweets"
  },
  {
    title: "cakes",
    price: 401.00,
    category: "cakes"
  },
  {
    title: "square dough",
    price: 40.00,
    category: "doughnuts"
  },
  {
    title: "sweet cupcakes",
    price: 40.00,
    category: "cupcakes"
  },
  {
    title: "pastes",
    price: 450.00,
    category: "pastes"
  },
  {
    title: "kapitau candies",
    price: 300.00,
    category: "sweets"
  },
  {
    title: "special hotdogs",
    price: 30.00,
    category: "hotdogs"
  }
  
];

const productsGrid = document.querySelector(".products-grid");
const buttons = document.querySelector('.buttons');
const inputForm = document.querySelector('[type=text]');
const form = document.querySelector("form");


form.addEventListener("submit", e => {
  e.preventDefault();
})


//search functionality
inputForm.addEventListener('keyup', e => {
  const val = e.target.value;
 const product = products.reduce((t, item) => {
   const pattern = new RegExp( `^${val}`, 'i');
    if(item.title.match(pattern)) t.push(item);
    return t;
  }, []);

    if(product.length === 0) {
      productsGrid.innerHTML = 'oops nothing to show here!!!😢😢💔💔💔💔💔😅😏💦🤭💦🤭🍆🤒🍆🤒🍆🤒😤🤒🍆🤒🍆🤒😆🤭😤💦🤭🍆💦';
  }
  
  if(val.length === 0) {
    display(products)
  }
  display(product);
})

function getButtons(product) {
  const btns = product.reduce((b , acc) => {
     const categories = b.concat([...new Set([acc.category])]);
     return [...new Set(categories)]
  }, ['all']);
 
  return btns;
}



const butt = getButtons(products);

function showBtns(btn) {
  const btns = btn.map(btn => {
    return `
        <button class=${btn} data-select=${btn}>${btn}</button>
    `
  }).join("");
  buttons.innerHTML = btns;
}


function display(product) {
  const showProducts = product.map((p , i) => {
    return `
         <div class="product-card">
            <div class="card-top">
               <div class="img-top"></div>
            </div>
            <div class="card-footer">
                <span>${p.title}</span>
                <span>$${p.price.toFixed(2)}</span>
           </div>
         </div>
    `
  });
  productsGrid.innerHTML = showProducts.join("");
  showBtns(butt)
}

function showProduct(category) {
  const product = products.reduce((t, item) => {
    if (item.category === category) t.push(item);
    return t;
  }, []);
  display(product);
}

function filter(e) {
   const category = e.target.dataset.select;
   if (category === 'all') {
     display(products);
   } else {
     showProduct(category);
   }
 };


buttons.addEventListener("click" , filter);

window.addEventListener("load", ()=> {
  display(products);
})