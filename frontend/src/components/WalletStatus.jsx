import { useState } from "react";
import { connectWallet } from "../wallet/walletService";

function WalletStatus() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = async () => {
  try {
    const wallet = await connectWallet();

    setConnected(wallet.connected);
    setAddress(wallet.address);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {connected ? (
        <>
          <span
            style={{
              color: "green",
              fontWeight: "bold",
            }}
          >
            🟢 Connected
          </span>

          <span>
            {address.substring(0, 15)}...
          </span>
        </>
      ) : (
        <button onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletStatus;