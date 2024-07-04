import { api } from "@/axios";
import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = () => {
  const { query } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query.id) {
      api.get(`users/${query.id}`).then(({ data }) => setData(data));
    }
  }, [query.id]);

  return <MainContainer title={`user ${query.id}`}>user</MainContainer>;
};

export default User;
