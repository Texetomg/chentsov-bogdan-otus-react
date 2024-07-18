import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TaskBody from "./components/TaskBody";
import TaskCode from "./components/TaskCode";
import Custom404 from "../404";
import TaskEdit from "./components/TaskEdit";

export interface IData {
  id: number;
  name: string;
  description: string;
  rating: number;
  constraints: string[];
  examples: { input: string; output: string }[];
  difficulty: string;
}

const Task = () => {
  const { query } = useRouter();
  const [data, setData] = useState<IData | null | undefined>(null);
  const [code, setCode] = useState("");
  const [solution, setSolution] = useState("");

  useEffect(() => {
    if (query.id) {
      api.get(`tasks/${query.id}`).then(
        ({ data }) => {
          setData(data);
        },
        () => {
          setData(undefined);
        }
      );

      api.get(`solutions/${query.id}`)?.then(({ data }) => {
        setSolution(data?.solution?.value || "");
        setCode(data?.solution?.value || "");
      });
    }
  }, [query.id]);

  const saveSolution = (value: string) => {
    if (!solution) {
      api.post(`solutions/${query.id}`, { value: code });
    } else {
      api.patch(`solutions/${query.id}`, { value: code });
    }
  };

  if (data === null) {
    return "loading";
  }
  if (!data && data !== null) {
    return <Custom404 />;
  }
  return (
    <MainContainer title={`Task ${query.id}`} edit={<TaskEdit data={data} />}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <TaskBody data={data} />
        <TaskCode
          value={solution || code}
          setValue={setCode}
          saveSolution={saveSolution}
        />
      </div>
    </MainContainer>
  );
};

export default Task;
