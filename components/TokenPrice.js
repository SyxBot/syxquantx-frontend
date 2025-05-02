import { useState } from "react";
import axios from "axios";

export default function TokenPrice({ backendUrl }) {
  const [token, setToken] = useState("solana");
  const [price, setPrice] = useState(null);

  const fetchPrice = async () => {
    try {
      const res = await axios.get(`${backendUrl}/price/${token}`);
      setPrice(res.data.price_usd);
    } catch (err) {
      setPrice("Error fetching price");
    }
  };

  return (
    <div>
      <h2>Token Price</h2>
      <input value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={fetchPrice}>Fetch Price</button>
      <p>Price: {price}</p>
    </div>
  );
}
