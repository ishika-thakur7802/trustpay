import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        borderRight: "1px solid gray",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>

      <p>
        <Link to="/create">Create Escrow</Link>
      </p>
    </div>
  );
}

export default Sidebar;