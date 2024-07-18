import { useEffect, useState } from "react";
import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import BaseTable from "@/components/BaseTable";
import { TData } from "@/components/BaseTable/BaseTable";

const rows = [
  {
    title: "Name",
    target: "name",
    url: "tasks",
  },
  {
    title: "Description",
    target: "description",
  },
  {
    title: "Difficulty",
    target: "difficulty",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState<TData[]>([]);
  useEffect(() => {
    api.get("tasks").then(({ data }) => setTasks(data));
  }, []);
  return (
    <MainContainer title={"Tasks"}>
      <BaseTable rows={rows} data={tasks} />
    </MainContainer>
  );
};

export default Tasks;
