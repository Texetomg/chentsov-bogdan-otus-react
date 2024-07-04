import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Item = styled(Paper)(() => ({
  textAlign: "left",
  lineHeight: "40px",
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

  const changeRank = (rank: number) =>
    api
      .patch(`users/${query.id}/rank`, { rank })
      .then(() => setData({ ...data, rank } as IData));

  return (
    <MainContainer title={`user ${query.id}`}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Item>
          Login:
          <div>{data?.login}</div>
        </Item>
        <Item>
          Email:
          <div>{data?.email}</div>
        </Item>
        <Item>
          Role:
          <div>{data?.role}</div>
        </Item>
        <Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              Rank:
              <div>{data?.rank}</div>
            </div>
            <div>
              <Button
                variant="contained"
                sx={{ margin: "10px" }}
                onClick={() => changeRank(data!.rank + 1)}
              >
                +
              </Button>
              <Button
                variant="contained"
                sx={{ margin: "10px" }}
                onClick={() => changeRank(data!.rank - 1)}
              >
                -
              </Button>
            </div>
          </div>
        </Item>
      </Box>
    </MainContainer>
  );
};

export default User;
