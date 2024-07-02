import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
const Tasks = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get("tasks").then(({ data }) => setUsers(data));
  }, []);
  return <MainContainer title={"Tasks"}>tasks</MainContainer>;
};

export default Tasks;
