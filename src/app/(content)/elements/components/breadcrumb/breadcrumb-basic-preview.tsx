import * as React from "react";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const BreadcrumbBasicPreview = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          MUI Kit
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Core
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

      <Breadcrumbs separator="›" color="primary" aria-label="breadcrumb">
        <Link underline="hover" href="#">
          MUI Kit
        </Link>
        <Link underline="hover" href="#">
          Core
        </Link>
        <Typography sx={{ fontWeight: "medium" }}>Breadcrumbs</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
