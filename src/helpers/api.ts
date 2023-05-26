async function getDataShop() {
  const res = await fetch(
    "https://eliftech-server-test.onrender.com/api/shops"
  );

  return res.json();
}

async function sendOrder(data: any) {
  const res = await fetch("");
}

async function getShop() {
  const res = await fetch(
    "https://eliftech-server-test.onrender.com/api/market"
  );

  return res.json();
}

export { getDataShop, sendOrder, getShop };
