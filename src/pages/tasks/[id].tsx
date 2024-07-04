import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(() => ({
  textAlign: "left",
  lineHeight: "30px",
  padding: "10px",
  width: "100%",
  maxWidth: "700px",
  "&:not(:last-child)": {
    marginBottom: "10px",
  },
}));

interface IData {
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
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    if (query.id) {
      api.get(`tasks/${query.id}`).then(({ data }) => setData(data));
    }
  }, [query.id]);

  return (
    <MainContainer title={`Task ${query.id}`}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Item>
          Name: <div>{data?.name}</div>
        </Item>
        <Item>
          Description: <div>{data?.description}</div>
        </Item>
        <Item>
          Rating: <div>{data?.rating}</div>
        </Item>
        <Item>
          <>
            <div>Constraints:</div>
            {data?.constraints?.map((constraint, idx) => (
              <Item key={idx}>{constraint}</Item>
            ))}
          </>
        </Item>
        <Item>
          <>
            <div>Examples:</div>
            {data?.examples?.map((example, idx) => (
              <Item key={idx}>
                <div>Input: {example.input}</div>
                <div>Output: {example.output}</div>
              </Item>
            ))}
          </>
        </Item>
        <Item>
          Difficulty:
          <div>{data?.difficulty}</div>
        </Item>
      </Box>
    </MainContainer>
  );
};

export default Task;
