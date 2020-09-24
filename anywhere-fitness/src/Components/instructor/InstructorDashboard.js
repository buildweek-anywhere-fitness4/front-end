import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

function InstructorDashboard(props) {
  const getClients = () => {
    axiosWithAuth()
      .get("api/client")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //const [clients, setClients] = useState([])

  return (
    <div>
      <button onClick={getClients}>Get Registered Clients</button>
    </div>
  );
}

export default InstructorDashboard;
