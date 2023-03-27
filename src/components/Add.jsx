import {
  Delete,
  PhotoCamera,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Fab,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box, color, Stack } from "@mui/system";
export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{ position: "fixed", bottom: 25, left: { xs: "45%", md: "40px" } }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: { xs: "50%", md: 420 },
            height: 220,
            borderRadius: "10px",
          }}
          p={3}
        >
          <Typography variant="3" color={"text.primary"}>
            Create a new post ☺
          </Typography>
          <Box display="flex" alignItems="center" gap={2} p={1}>
            <Avatar alt="H" src="/static/images/avatar/1.jpg" />
            <Typography variant="3" color={"text.primary"}>
              Houcem Saidani
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%", marginTop: "10px" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind"
            variant="standard"
          />

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Button
              variant="contained"
              component="label"
              sx={{ width: 50, height: 20, bgcolor: "grey" }}
            >
              Post
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera sx={{ color: "grey" }} />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
