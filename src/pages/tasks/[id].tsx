import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Task = () => {
  const { query } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query.id) {
      api.get(`tasks/${query.id}`).then(({ data }) => setData(data));
    }
  }, [query.id]);

  return <MainContainer title={`Task ${query.id}`}>Task</MainContainer>;
};

export default Task;
