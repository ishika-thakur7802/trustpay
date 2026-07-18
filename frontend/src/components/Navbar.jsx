import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        borderBottom: "1px solid gray",
        display: "flex",
        gap: "20px",
      }}
    >
      <h2>TrustPay</h2>

      <Link to="/">Home</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/create">Create Escrow</Link>
    </nav>
  );
}

export default Navbar;