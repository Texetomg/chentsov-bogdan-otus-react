import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(() => ({
  textAlign: "left",
  height: 60,
  lineHeight: "60px",
  paddingLeft: "10px",
  width: "100%",
  maxWidth: "700px",
  "&:not(:last-child)": {
    marginBottom: "10px",
  },
}));

interface IData {
  id: number;
  login: string;
  email: string;
  role: string;
  rank: number;
}

const User = () => {
  const { query } = useRouter();
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    if (query.id) {
      api.get(`users/${query.id}`).then(({ data }) => setData(data));
    }
  }, [query.id]);

  return (
    <MainContainer title={`user ${query.id}`}>
      <Box
         sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Item>Login: {data?.login}</Item>
        <Item>Email: {data?.email}</Item>
        <Item>Role: {data?.role}</Item>
        <Item>Rank: {data?.rank}</Item>
      </Box>
    </MainContainer>
  );
};

export default User;
