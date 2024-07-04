import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import _ from "lodash";

export type TData = {
  id: number;
  [key: string]: any;
};

export type TRow = {
  title: string;
  target: string;
  url?: string;
};

interface IProps {
  data: TData[];
  rows: TRow[];
}

const BaseTable: React.FC<IProps> = ({ data, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map((row, idx) => (
              <TableCell key={row.title} align={idx === 0 ? "left" : "center"}>
                {row.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dataEl, idx) => (
            <TableRow key={idx}>
              {rows.map((row, idx) => (
                <TableCell
                  key={row.title}
                  align={idx === 0 ? "left" : "center"}
                >
                  {row?.url ? (
                    <a href={`${row.url}/${dataEl.id}`}>
                      {_.get(dataEl, row.target)}
                    </a>
                  ) : (
                    _.get(dataEl, row.target)
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
