import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCardShown, setisCardShown] = useState(false);
  const DisplayCard = () => {
    setisCardShown(true);
  }
  const HideCard = ()=> {
    setisCardShown(false)
  }
  
  return (
   <CartProvider>
   {isCardShown && <Cart onClose= {HideCard}/>}
    <Header onShowCard = {DisplayCard}/>
    <main>
      <Meals />
    </main>
   </CartProvider>
  )
}

export default App;
