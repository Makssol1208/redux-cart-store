function Cart(props) {
  const { title, cost, cart, image, articul } = props;

  let currentPrice = cost * cart;

  return (
    <>
      <section className="cart">
        <section className="product">
          <div className="product__img">
            <img src={image} alt={title} />
          </div>
          <div className="product__title">{title}</div>

          <div className="product__price">{currentPrice.toFixed(2)} грн</div>
          <div className="product__count">
            <div className="count">
              <button type="button" className="count__down" data-key={articul}>
                -
              </button>

              <div className="count__box">
                <div className="count__input">{cart}</div>
              </div>

              <button type="button" className="count__up" data-key={articul}>
                +
              </button>
            </div>
          </div>

          <div className="product__controls">
            <button type="button" className="dellete" data-key={articul}>
              ✖
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Cart;
