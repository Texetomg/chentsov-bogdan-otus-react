import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Button from "@mui/material/Button";

interface IProps {
  value: string;
  setValue: (value: string) => void;
  saveSolution: (value: string) => void;
}

const TaskCode: React.FC<IProps> = ({ value, setValue, saveSolution }) => {
  return (
    <div style={{ width: "50%", height: "100%" }}>
      <CodeMirror
        value={value}
        height="500px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => setValue(value)}
      />
      <Button onClick={() => saveSolution(value)}>Save solution</Button>
    </div>
  );
};

export default TaskCode;
