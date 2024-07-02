import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { usePathname } from "next/navigation";

import "../../app/globals.css";
const MainContainer: React.FC<{ children: React.ReactNode, title: string }> = ({
  children, title
}) => {
  return (
    <div style={{ height: "100%" }}>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button>Users</Button>
            <Button>Tasks</Button>
          </div>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main style={{ height: "calc(100% - 108px)" }}>
        <Card style={{ margin: "20px", padding: "20px", height: "100%" }}>
          <CardHeader title={title} style={{ textAlign: "center" }} />
          {children}
        </Card>
      </main>
    </div>
  );
};

export default MainContainer;
