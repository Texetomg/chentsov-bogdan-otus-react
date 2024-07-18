import { TData } from "@/components/BaseTable/BaseTable";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/router";
import { api } from "@/axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TaskEdit: React.FC<{ data: TData }> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    name: data.name,
    description: data.description,
    rating: data.rating,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api.patch(`tasks/${data.id}`, { ...data, ...formData }).then(() => {
      window.location.reload();
    });
  };

  const handleInput = (e: any) => {
    const fieldName = e.target?.name;
    const fieldValue = e.target?.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Edit ${router.asPath}`}
          </Typography>
          <form onSubmit={onSubmit}>
            <div>Name</div>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInput}
              />
            </div>
            <div>Description</div>
            <div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInput}
              />
            </div>
            <div>Rating</div>
            <div>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInput}
              />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskEdit;
