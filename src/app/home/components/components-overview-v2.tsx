"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading1 } from "@/components/core/heading-1";
import { Iconify } from "@/components/iconify";
import { PATHS } from "@/router/paths";
import { featuredComponents } from "@/router/router";
import { pxToRem } from "@/utils/pxToRem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ComponentOverviewV2 = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        pt: { xs: 0, md: 12 },
        pb: { xs: 6, md: 12 }
      }}>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid size={{ xs: 12, md: 4 }} sx={{ mb: { xs: 2, md: 0 } }}>
            <Box>
              <Heading1 text="40+" />
              <BodyText text="Ready made components" sx={{ fontWeight: 600, fontSize: 20 }} />
              <BodyText
                text="Fully functional components designed with Material ui. Simply copy and paste into your project."
                sx={{ mb: { xs: 0, md: 2 } }}
              />
              <Link
                href={PATHS.ELEMENTS.OVERVIEW}
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontSize: pxToRem(16)
                }}>
                View all
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {featuredComponents.map((item) => (
              <Button
                startIcon={
                  <Iconify icon={item.icon} style={{ color: theme.palette.text.secondary }} />
                }
                key={item.label}
                variant="outlined"
                sx={{
                  mr: { xs: 0.5, md: 1 },
                  mb: { xs: 1, md: 2 },
                  px: { xs: 1, md: 3 },
                  border: "1px solid var(--divider-color)",
                  borderRadius: (theme) => theme.shape.borderRadius,
                  textTransform: "capitalize",
                  fontWeight: 500,
                  color: "text.secondary",
                  fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                  "&:hover": {
                    color: "text.primary"
                  }
                }}
                onClick={() => router.push(item.url)}>
                {item.label}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
