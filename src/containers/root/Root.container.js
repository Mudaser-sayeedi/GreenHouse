import { useEffect } from "react";
import "./Root.container.css";
import { useNavigate } from "react-router-dom";

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
    console.log("root");
  }, []);
}

export default Root;
