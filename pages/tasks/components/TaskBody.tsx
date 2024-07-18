import { IData } from "../[id]";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(() => ({
  textAlign: "left",
  lineHeight: "20px",
  padding: "10px",
  width: "100%",
  "&:not(:last-child)": {
    marginBottom: "10px",
  },
}));

interface IProps {
  data: IData | null;
}
const TaskBody: React.FC<IProps> = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
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
            <Item key={idx} style={{ width: "100%" }}>
              {constraint}
            </Item>
          ))}
        </>
      </Item>
      <Item>
        <>
          <div>Examples:</div>
          {data?.examples?.map((example, idx) => (
            <Item key={idx} style={{ width: "100%" }}>
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
    </div>
  );
};

export default TaskBody;
