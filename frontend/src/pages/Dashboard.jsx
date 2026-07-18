// import { useEffect, useState } from "react";
// import EscrowCard from "../components/EscrowCard.jsx";
// import api from "../services/api.js";
// function Dashboard() {
//   const [status, setStatus] = useState("Checking...");

//   useEffect(() => {
//     api.get("/health")
//       .then(() => {
//         setStatus("🟢 Backend Connected");
//       })
//       .catch(() => {
//         setStatus("🔴 Backend Offline");
//       });
//   }, []);

//   return (
//    <div className="p-8">

//     <h1 className="text-3xl font-bold mb-6">
//         Dashboard
//     </h1>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//    <EscrowCard
//     title="Laptop Purchase"
//     amount="5000"
//     seller="0xABC123"
//     status="FUNDED"
// />

// <EscrowCard
//     title="Website Development"
//     amount="15000"
//     seller="0xXYZ987"
//     status="CREATED"
// />

// <EscrowCard
//     title="Logo Design"
//     amount="2000"
//     seller="0xAAA111"
//     status="RELEASED"
// />

// <EscrowCard
//     title="Marketing Campaign"
//     amount="9000"
//     seller="0xBBB222"
//     status="CANCELLED"
// />
// </div>

// </div>
//   );
// }

// export default Dashboard;
import { useEffect, useState } from "react";
import EscrowCard from "../components/EscrowCard";
import Loader from "../components/Loader";
import api from "../services/api";

function Dashboard() {
  const [escrows, setEscrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEscrows();
  }, []);

  const fetchEscrows = async () => {
    try {
      const response = await api.get("/api/escrows");
      console.log("Escrows:", response.data);
      console.log("First escrow:", response.data[0]);
      setEscrows(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load escrows.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Fetching Escrows..." />;
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (escrows.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <div className="border rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold">
            No Escrows Found
          </h2>

          <p className="text-gray-600 mt-2">
            Create your first escrow to see it here.
          </p>
        </div>
      </div>
    );
  }
console.log("Escrows State:", escrows);
console.log("Number of escrows:", escrows.length);
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       {escrows.map((escrow) => {
  console.log("Rendering:", escrow);

  return (
    <EscrowCard
      key={escrow.id}
      escrow={escrow}
    />
  );
})}

      </div>

    </div>
  );
}

export default Dashboard;