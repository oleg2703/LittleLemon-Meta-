/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useState
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [basketOpen, setBasketOpen] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);
    const [basketItems, setBasketItems] =
    useState([]);
        const addToBasket = (product) => {

    setBasketItems((prev) => {

      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return prev.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };

    const removeFromBasket = (id) => {

    setBasketItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };
  const increaseQuantity = (id) => {

    setBasketItems((prev) =>

      prev.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };
   const decreaseQuantity = (id) => {

    setBasketItems((prev) =>

      prev
        .map((item) =>

          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )

        .filter((item) => item.quantity > 0)
    );
  };
const clearBasket = () => {
    setBasketItems([]);
  };
  

  // TOTAL

  const totalPrice = basketItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    // eslint-disable-next-line react/react-in-jsx-scope
    <AppContext.Provider value={{basketOpen,setBasketOpen,menuOpen,setMenuOpen,basketItems,
        addToBasket,removeFromBasket,increaseQuantity,decreaseQuantity,clearBasket,totalPrice }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}