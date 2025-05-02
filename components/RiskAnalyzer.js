import { useState } from "react";
import axios from "axios";

export default function RiskAnalyzer({ backendUrl }) {
  const [expected, setExpected] = useState(100);
  const [actual, setActual] = useState(95);
  const [slippage, setSlippage] = useState(null);

  const fetchSlippage = async () => {
    try {
      const res = await axios.get(`${backendUrl}/slippage?expected=${expected}&actual=${actual}`);
      setSlippage(res.data.slippage_percent);
    } catch (err) {
      setSlippage("Error calculating slippage");
    }
  };

  return (
    <div>
      <h2>Risk Analyzer</h2>
      <input type="number" value={expected} onChange={(e) => setExpected(e.target.value)} />
      <input type="number" value={actual} onChange={(e) => setActual(e.target.value)} />
      <button onClick={fetchSlippage}>Calculate Slippage</button>
      <p>Slippage: {slippage}%</p>
    </div>
  );
}
