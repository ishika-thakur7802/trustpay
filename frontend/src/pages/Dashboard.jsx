import { useEffect, useState } from "react";
import api from "../services/api.js";

function Dashboard() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    api.get("/health")
      .then(() => {
        setStatus("🟢 Backend Connected");
      })
      .catch(() => {
        setStatus("🔴 Backend Offline");
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{status}</p>
    </div>
  );
}

export default Dashboard;