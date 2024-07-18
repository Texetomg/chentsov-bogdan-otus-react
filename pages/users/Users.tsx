import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import BaseTable from "@/components/BaseTable";

const rows = [
  {
    title: "Login",
    target: "login",
    url: "users",
  },
  {
    title: "Email",
    target: "email",
  },
  {
    title: "Rank",
    target: "rank",
  },
  {
    title: "Role",
    target: "role",
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get("users").then(({ data }) => setUsers(data));
  }, []);
  return (
    <MainContainer title={"Users"}>
      <BaseTable rows={rows} data={users} />
    </MainContainer>
  );
};

export default Users;
