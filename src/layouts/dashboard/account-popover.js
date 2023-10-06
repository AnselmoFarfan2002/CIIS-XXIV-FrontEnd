import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import capitalizeWords from "@/utils/capitalize";
import { useAuth } from "@/context/auth";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const auth = useAuth();
  const { user, logout } = useAuth();
  const handleSignOut = useCallback(() => {
    onClose?.();
    logout();
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
          {capitalizeWords(user?.name.toLocaleLowerCase())}
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
