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

function Dashboard() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader message="Fetching Escrows..." />;
  }

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <EscrowCard
          title="Laptop Purchase"
          amount="5000"
          seller="0xABC123"
          status="FUNDED"
        />

        <EscrowCard
          title="Website Development"
          amount="15000"
          seller="0xXYZ987"
          status="CREATED"
        />

      </div>

    </div>

  );
}

export default Dashboard;