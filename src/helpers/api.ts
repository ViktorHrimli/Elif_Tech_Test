async function getDataShop() {
  const res = await fetch(
    "https://eliftech-server-test.onrender.com/api/shops"
  );

  return res.json();
}

async function sendOrder(data: any) {
  const res = await fetch("");
}

export { getDataShop, sendOrder };
