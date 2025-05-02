import { useState } from "react";
import axios from "axios";

export default function WhaleMonitor({ backendUrl }) {
  const [whales, setWhales] = useState([]);

  const fetchWhales = async () => {
    try {
      const res = await axios.get(`${backendUrl}/whales`);
      setWhales(res.data);
    } catch (err) {
      setWhales(["Error fetching whales"]);
    }
  };

  return (
    <div>
      <h2>Whale Monitor</h2>
      <button onClick={fetchWhales}>Fetch Whale Transfers</button>
      <ul>
        {whales.map((tx, idx) => (
          <li key={idx}>{JSON.stringify(tx)}</li>
        ))}
      </ul>
    </div>
  );
}
