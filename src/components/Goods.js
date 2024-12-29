function Goods(props) {
  const { image, title, cost, articul } = props;
  return (
    <div className="goods-block">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{cost} грн</p>
      <button className="add-to-cart" data-key={articul}>
        В Корзину
      </button>
    </div>
  );
}

export default Goods;
