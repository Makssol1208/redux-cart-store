import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { selectCart } from "../store/cartSlice";
import Cart from "../components/Cart";
import { minus, plus, dellete } from "../store/cartSlice";

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);

  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  // Переиндексируем массив товаров

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  // Общая сумма товаров

  useEffect(() => {
    let sum = 0;
    Object.keys(cart).forEach((item) => {
      const { cost } = goodsObj[item];
      sum += cost * cart[item];
    });
    setTotalPrice(sum);
  }, [cart, goodsObj]);

  // Обработчик событий

  function clickHandler(event) {
    event.preventDefault();
    let m = event.target;
    if (m.classList.contains("count__down")) {
      return dispatch(minus(m.getAttribute("data-key")));
    }
    if (m.classList.contains("count__up")) {
      return dispatch(plus(m.getAttribute("data-key")));
    }
    if (m.classList.contains("dellete")) {
      return dispatch(dellete(m.getAttribute("data-key")));
    }
  }

  return (
    <>
      <div className="cart-wrapper">
        <h2>Корзина</h2>
        <header className="cart-header">
          <div className="cart-header__title">товар</div>
          <div className="cart-header__cost">цена</div>
          <div className="cart-header__count">количество</div>
        </header>

        <div className="cartList" onClick={clickHandler}>
          {Object.keys(cart).map((item) => (
            <Cart
              title={goodsObj[item]["title"]}
              cost={goodsObj[item]["cost"]}
              cart={cart[item]}
              image={goodsObj[item]["image"]}
              articul={goodsObj[item]["articul"]}
              key={item + "_" + goodsObj[item]["title"]}
            />
          ))}
        </div>
        <hr />
        <div className="total-price">
          <p>Итого: {totalPrice.toFixed(2)} грн</p>
        </div>
      </div>
    </>
  );
}

export default CartList;
