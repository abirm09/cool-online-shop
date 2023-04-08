const handleDataAndRestoreCart = async () => {
  const fetchData = await fetch("products.json");
  const primaryProducts = await fetchData.json();
  console.log(primaryProducts);
};
export { handleDataAndRestoreCart };
