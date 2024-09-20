import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import Loader from "../Components/Loader";

function Dashboard() {
  const [product, setproduct] = useState([])
  const [loading, setloading] = useState(true)

  const {Auth,logoutUser} = useContext(AuthContext)
  const {token}=Auth
  const data = () => {
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
      .then((res) => {
        setproduct(res.data.data)
        setloading(false);
      })
      .catch((err) => {
        console.log(err)
        setloading(false);
      })
  }

  useEffect(() => {
    data()
  }, [])
  return loading ? <Loader /> : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={product} />
      </div>
    </div>
  );
}

export default Dashboard;
