import StatusBadge from "./StatusBadge";
function EscrowCard({ title, amount, seller, status }) {
  return (
    <div className="border rounded-xl p-5 shadow-md">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-3">
        💰 Amount: ₹{amount}
      </p>

      <p className="mt-2">
        👤 Seller:
      </p>

      <p className="text-gray-500">
        {seller}
      </p>

      <div className="mt-4">
    <StatusBadge status={status} />
    </div>

      <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg">
        View Details
      </button>

    </div>
  );
}

export default EscrowCard;