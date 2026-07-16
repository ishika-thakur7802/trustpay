import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import StatusBadge from "../components/StatusBadge";
import api from "../services/api";

function EscrowDetails() {

 const { id } = useParams();

const [escrow, setEscrow] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  const fetchEscrow = async () => {
    try {
      const response = await api.get(`/api/escrows/${id}`);

      console.log("Escrow Details:", response.data);

      setEscrow(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load escrow.");
    } finally {
      setLoading(false);
    }
  };

  fetchEscrow();
}, [id]);

if (loading) {
  return <Loader message="Loading Escrow..." />;
}

if (error) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Escrow Details</h1>
      <p className="text-red-500 mt-4">{error}</p>
    </div>
  );
}

return (
  <div className="p-8">

    <h1 className="text-3xl font-bold mb-8">
      Escrow Details
    </h1>

    <div className="border rounded-xl shadow-md p-6 max-w-2xl">

      <div className="mb-6">
        <h2 className="text-xl font-bold">
          {escrow.description}
        </h2>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Buyer Address</p>
        <p>{escrow.buyerAddress}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Seller Address</p>
        <p>{escrow.sellerAddress}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Amount</p>
        <p>₹{escrow.amount}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Status</p>

        <StatusBadge status={escrow.status} />
      </div>

      <div className="mb-4">
        <p className="font-semibold">Created At</p>
        <p>{escrow.createdAt}</p>
      </div>

    </div>

  </div>
);

}

export default EscrowDetails;