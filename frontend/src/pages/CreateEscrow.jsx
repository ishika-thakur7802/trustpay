import { useState } from "react";
import api from "../services/api";

function CreateEscrow() {
  const [formData, setFormData] = useState({
    buyerAddress: "",
    sellerAddress: "",
    amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Updates form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (formData.buyerAddress.trim() === "") {
      newErrors.buyerAddress = "Buyer wallet is required";
    }

    if (formData.sellerAddress.trim() === "") {
      newErrors.sellerAddress = "Seller wallet is required";
    }

    if (formData.amount === "" || Number(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (formData.description.trim() === "") {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await api.post("/api/escrows", formData);

      console.log("Escrow Created:", response.data);

      alert("Escrow Created Successfully!");

      // Clear Form
      setFormData({
        buyerAddress: "",
        sellerAddress: "",
        amount: "",
        description: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      alert("Failed to create escrow.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create Escrow
      </h1>

      <form onSubmit={handleSubmit}>

        {/* Buyer Wallet */}

        <div className="mb-4">

          <label>Buyer Wallet Address</label>

          <input
            className="border p-2 rounded w-full"
            type="text"
            name="buyerAddress"
            value={formData.buyerAddress}
            onChange={handleChange}
          />

          {errors.buyerAddress && (
            <p className="text-red-500">
              {errors.buyerAddress}
            </p>
          )}

        </div>

        {/* Seller Wallet */}

        <div className="mb-4">

          <label>Seller Wallet Address</label>

          <input
            className="border p-2 rounded w-full"
            type="text"
            name="sellerAddress"
            value={formData.sellerAddress}
            onChange={handleChange}
          />

          {errors.sellerAddress && (
            <p className="text-red-500">
              {errors.sellerAddress}
            </p>
          )}

        </div>

        {/* Amount */}

        <div className="mb-4">

          <label>Amount</label>

          <input
            className="border p-2 rounded w-full"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />

          {errors.amount && (
            <p className="text-red-500">
              {errors.amount}
            </p>
          )}

        </div>

        {/* Description */}

        <div className="mb-4">

          <label>Description</label>

          <textarea
            className="border p-2 rounded w-full"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          {errors.description && (
            <p className="text-red-500">
              {errors.description}
            </p>
          )}

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Creating..." : "Create Escrow"}
        </button>

      </form>

      {/* Live Preview */}

      <div className="mt-10 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-4">
          Current Form Data
        </h2>

        <p>
          <strong>Buyer:</strong> {formData.buyerAddress}
        </p>

        <p>
          <strong>Seller:</strong> {formData.sellerAddress}
        </p>

        <p>
          <strong>Amount:</strong> {formData.amount}
        </p>

        <p>
          <strong>Description:</strong> {formData.description}
        </p>

      </div>

    </div>
  );
}

export default CreateEscrow;