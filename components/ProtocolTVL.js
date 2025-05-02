import { useState } from "react";
import axios from "axios";

export default function ProtocolTVL({ backendUrl }) {
  const [protocol, setProtocol] = useState("raydium");
  const [tvl, setTvl] = useState(null);

  const fetchTVL = async () => {
    try {
      const res = await axios.get(`${backendUrl}/protocol/${protocol}`);
      setTvl(res.data.tvl || "N/A");
    } catch (err) {
      setTvl("Error fetching TVL");
    }
  };

  return (
    <div>
      <h2>Protocol TVL</h2>
      <input value={protocol} onChange={(e) => setProtocol(e.target.value)} />
      <button onClick={fetchTVL}>Fetch TVL</button>
      <p>TVL: {tvl}</p>
    </div>
  );
}
