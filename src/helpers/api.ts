const BASE_URL = "https://eliftech-server-test.onrender.com/";

async function getDataShop() {
  const res = await fetch(`${BASE_URL}api/shops`);

  return res.json();
}

async function sendOrder(state: any) {
  const res = await fetch(`${BASE_URL}api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(state),
  });

  return res.json();
}

async function getAllOrder() {
  const res = await fetch(`${BASE_URL}api/orders`);

  return res.json();
}

async function getShop() {
  const res = await fetch(`${BASE_URL}api/market`);

  return res.json();
}

export { getDataShop, sendOrder, getShop, getAllOrder };
