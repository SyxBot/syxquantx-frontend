import { useState } from "react";
import axios from "axios";

export default function AuditStatus({ backendUrl }) {
  const [protocol, setProtocol] = useState("raydium");
  const [status, setStatus] = useState(null);

  const fetchAudit = async () => {
    try {
      const res = await axios.get(`${backendUrl}/audit/${protocol}`);
      setStatus(res.data.audit_status);
    } catch (err) {
      setStatus("Error fetching audit status");
    }
  };

  return (
    <div>
      <h2>Smart Contract Audit</h2>
      <input value={protocol} onChange={(e) => setProtocol(e.target.value)} />
      <button onClick={fetchAudit}>Fetch Audit Status</button>
      <p>Status: {status}</p>
    </div>
  );
}
