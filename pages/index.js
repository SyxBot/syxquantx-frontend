import TokenPrice from "../components/TokenPrice";
import WhaleMonitor from "../components/WhaleMonitor";
import ProtocolTVL from "../components/ProtocolTVL";
import AuditStatus from "../components/AuditStatus";
import RiskAnalyzer from "../components/RiskAnalyzer";

export default function Home() {
  const backendUrl = "https://abcd1234.ngrok.io"; // Change to your backend URL or localhost

  return (
    <div style={{ padding: 50 }}>
      <h1>SyxQuantX Dashboard</h1>

      <TokenPrice backendUrl={backendUrl} />
      <hr />

      <WhaleMonitor backendUrl={backendUrl} />
      <hr />

      <ProtocolTVL backendUrl={backendUrl} />
      <hr />

      <AuditStatus backendUrl={backendUrl} />
      <hr />

      <RiskAnalyzer backendUrl={backendUrl} />
    </div>
  );
}

