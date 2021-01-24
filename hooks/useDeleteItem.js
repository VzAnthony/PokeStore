function useDeleteItem(context, item) {
  const { cart, setAllCart } = context;
  const filteredItem = cart.filter((pokemon) => pokemon.name === item.name);
  filteredItem.pop();
  const filteredCart = cart.filter((pokemon) => pokemon.name !== item.name);
  const newCart = [...filteredItem, ...filteredCart];
  setAllCart(newCart);
}

export default useDeleteItem;
