import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import capitalizeWords from "@/utils/capitalize";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const { user } = useAuth() ?? {};
  const [values, setValues] = useState(user);

  const handleSignOut = useCallback(() => {
    onClose?.();
    auth.logout();
    router.push("/");
  }, [onClose, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Cuenta Administrativa</Typography>
        <Typography color="text.secondary" variant="body2">
          {capitalizeWords(values?.acerca.nombre.toLocaleLowerCase())}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Cerrar sesión</MenuItem>
      </MenuList>
    </Popover>
  );
};
