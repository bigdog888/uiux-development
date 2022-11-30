import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import sortedBakeryData from "./assets/sorted-bakery-data.json";
import sortedToastData from "./assets/sorted-toast.json";
import sortedVeganData from "./assets/sorted-vegan.json";
import sortedToastVeganData from "./assets/sorted-toastvegan.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [bakeryItems, setBakeryItems] = useState(bakeryData);
  const [veganChecked, setVeganChecked] = useState(false);
  const [toastChecked, setToastChecked] = useState(false); 
  const [veganFilterName, setVeganFilterName] = useState("Filter By Vegan Pastries");
  const [toastFilterName, setToastFilterName] = useState("Filter By Toasty Pastries");

  function addCart(item) {
    setCart(cart.concat([item]));
    setTotal(total + item.price);
  }

  function removeCart(item) {
    let idx = cart.indexOf(item);
    if (idx !== -1) {
      cart.splice(idx, 1);
      setTotal(total - item.price);
    }
    setCart(cart);
    
  }

  function sortItems() {
    if (veganChecked === false && toastChecked === false){
      setBakeryItems(sortedBakeryData);
    } else if (toastChecked === true && veganChecked === true) {
      setBakeryItems(sortedToastVeganData);
    } else if (veganChecked === true) {
      setBakeryItems(sortedVeganData);
    } else if (toastChecked === true) {
      setBakeryItems(sortedToastData);
    } 
    
  }

  function filterByVegan() {
    if (veganChecked === false) {
      setVeganChecked(true);
      let arr1 = ["Steamed Taro Buns", "Gingerbread Man", "Chocolate Fudge Brownie", "Chocolate Chip Cookies"];
      if (toastChecked === true) {
        let arr2 = ["Multigrain Bread", "Croissant", "Toast with Butter", "Everything Bagel"];
        arr1 = [...arr1, ...arr2];
        console.log(arr1);
      }
      setBakeryItems(bakeryData.filter(a => (arr1.indexOf(a.name) > -1)));
      setVeganFilterName("Stop Including Vegan Pastries in Filter");
    }
    else if (veganChecked === true) {
      setVeganChecked(false);
      if (toastChecked === true) {
        let arr1 = ["Multigrain Bread", "Croissant", "Toast with Butter", "Everything Bagel"];
        setBakeryItems(bakeryData.filter(a => (arr1.indexOf(a.name) > -1)));
      } else {
        setBakeryItems(bakeryData);
      }
      setVeganFilterName("Filter By Vegan Pastries");
    }
  }

  function filterByToast() {
    if (toastChecked === false) {
      setToastChecked(true);
      let arr1 = ["Multigrain Bread", "Croissant", "Toast with Butter", "Everything Bagel"];
      if (veganChecked === true) {
        let arr2 = ["Steamed Taro Buns", "Gingerbread Man", "Chocolate Fudge Brownie", "Chocolate Chip Cookies"];
        arr1 = [...arr1, ...arr2];
      }
      setBakeryItems(bakeryData.filter(a => (arr1.indexOf(a.name) > -1)));
      setToastFilterName("Stop Including Toasty Pastries in Filter");
    }
    else if (toastChecked === true) {
      setToastChecked(false);
      if (veganChecked === true){
        let arr1 = ["Steamed Taro Buns", "Gingerbread Man", "Chocolate Fudge Brownie", "Chocolate Chip Cookies"];
        setBakeryItems(bakeryData.filter(a => (arr1.indexOf(a.name) > -1)));
      } else {
        setBakeryItems(bakeryData);
        console.log(bakeryItems);
      }
      setToastFilterName("Filter By Toasty Pastries");
    }
  }

  function BakeryItem({ item }) {
    return (
      <div class="bakeryItem">
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} class="bk-img"></img>
      <div class="bakeryPrice">
      <p>${item.price}</p>
      <button class="cartButton" onClick={() => addCart(item)}>Add to Cart</button>
      <button class="cartButton" onClick={() => removeCart(item)}>Remove from Cart</button>
      </div>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="parent">
      

      <div class="item-container">
      {bakeryItems.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item}/>
      ))}
      </div>

      <div class="sortcart">
        <div class="sorter">
          <h2 class="cart-text">Filter By:</h2>
        </div>
        <ul>
        <button class="sortButton" onClick={() => filterByVegan()}>{veganFilterName}</button>
        <br></br>
        <button class="sortButton" onClick={() => filterByToast()}>{toastFilterName}</button>
        </ul>
        <div class="sorter">
          <h2 class="cart-text">Sort By:</h2>
        </div>
          <ul>
          <button class="sortButton" onClick={() => sortItems()}>Sort by Price</button>
          </ul>
        
        <div class="cart">
          <h2 class="cart-text">Cart</h2>
          {cart.map((item, index) => (
            <p class="cart-item">{item.name} : {item.price}</p>
          )

          )}

          <h6 class="cart-item">Total Price: {Math.abs(total.toFixed(2))}</h6>
        </div>
      </div>
      </div>
      </div>
  );
}

export default App;
