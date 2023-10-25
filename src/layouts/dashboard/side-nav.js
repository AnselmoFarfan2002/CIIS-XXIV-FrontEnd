import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import {
  Box,
  CardActionArea,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";
import { ChevronLeft } from "@mui/icons-material";
import capitalizeWords from "@/utils/capitalize";
import { useRouter } from "next/router";
import Link from "next/link";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { user } = useAuth() ?? {};

  const BG_SIDE_NAV_COLOR = "#1a1a29";

  const content = (
    <Box
      sx={{
        background: BG_SIDE_NAV_COLOR,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 3 }}>
        <CardActionArea
          onClick={() => router.push("/")}
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            width: "100%",
            cursor: "pointer",
            py: 2,
          }}
        >
          <Box sx={{ px: 10, py: 1, mt: 0 }}>
            <img
              src="/img/CIIS/XXIV/logo.png"
              alt="Logo Sportainment"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography
            variant="body2"
            color={"white"}
            sx={{ textAlign: "center", fontWeight: 500 }}
          >
            CIIS-TACNA
          </Typography>
        </CardActionArea>
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            borderRadius: 1,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            p: "12px",
          }}
        >
          <div>
            <Typography color="inherit" variant="subtitle1">
              {capitalizeWords(user?.lastname.toLocaleLowerCase())}
            </Typography>
            <Typography color="neutral.400" variant="body2">
              Usuario
            </Typography>
          </div>
          <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
            <ChevronLeft />
          </SvgIcon>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#233b54" }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {items.map((item) => {
            const active = item.path ? pathname === item.path : false;

            return (
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            color: "common.white",
            width: 280,
            border: 0,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: BG_SIDE_NAV_COLOR,
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
