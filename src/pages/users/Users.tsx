import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get("users").then(({ data }) => setUsers(data));
  }, []);
  return <MainContainer title={"Users"}>users</MainContainer>;
};

export default Users;
