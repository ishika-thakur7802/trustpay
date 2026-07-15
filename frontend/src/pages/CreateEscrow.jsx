import { useState } from "react";
function CreateEscrow() {
  const [title, setTitle] = useState("");
const [sellerWallet, setSellerWallet] = useState("");
const [amount, setAmount] = useState("");
const [description, setDescription] = useState("");

const [errors, setErrors] = useState({});
const handleSubmit = () => {

  if (validateForm()) {
    alert("Escrow Created Successfully!");
  }

};

const validateForm = () => {
  let newErrors = {};

  // Title validation
  if (title.trim() === "") {
    newErrors.title = "Title is required";
  }

  // Seller wallet validation
  if (sellerWallet.trim() === "") {
    newErrors.sellerWallet = "Seller wallet is required";
  }

  // Amount validation
  if (amount === "" || Number(amount) <= 0) {
    newErrors.amount = "Amount must be greater than 0";
  }

  // Save errors
  setErrors(newErrors);

  // Return true if no errors
  return Object.keys(newErrors).length === 0;
};

  return (
    <div>
      <h1>Create Escrow</h1>

      <form>

        <div>
          <label>Title</label>
          <br />
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {
          errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )
        }
        </div>

        <br />

        <div>
          <label>Seller Wallet Address</label>
          <br />
         <input 
            type="text"
            value={sellerWallet}
            onChange={(e) => setSellerWallet(e.target.value)}
          />
          {
            errors.sellerWallet && (
              <p className="text-red-500 text-sm mt-1">
                {errors.sellerWallet}
              </p>
            )
          }
        </div>

        <br />

        <div>
          <label>Amount</label>
          <br />
          <input 
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {
            errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount}
              </p>
            )
          }
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </div>

        <br />

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Create Escrow
        </button>

      </form>
       {/* Live Preview */}

      <div className="mt-10 border rounded-lg p-5">

        <h2 className="text-xl font-semibold mb-4">
          Current Form Data
        </h2>

        <p>
          <strong>Title:</strong> {title}
        </p>

        <p>
          <strong>Seller Wallet:</strong> {sellerWallet}
        </p>

        <p>
          <strong>Amount:</strong> {amount}
        </p>

        <p>
          <strong>Description:</strong> {description}
        </p>

      </div>

    </div>
  );
}

export default CreateEscrow;