import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

interface FeatureComparison {
  feature: string;
  monthly: boolean;
  yearly: boolean;
}

const features: FeatureComparison[] = [
  { feature: "10 GB Storage", monthly: true, yearly: true },
  { feature: "Priority Support", monthly: false, yearly: true },
  { feature: "Unlimited File Uploads", monthly: true, yearly: true },
  { feature: "Custom Branding", monthly: false, yearly: true },
  { feature: "Team Collaboration", monthly: false, yearly: true },
  { feature: "Version History", monthly: true, yearly: true }
];

export function ComparisonTablePreview() {
  return (
    <Paper sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="comparison table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Feature</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Monthly Plan</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Yearly Plan</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>{row.feature}</TableCell>
                <TableCell align="center">
                  {row.monthly ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                </TableCell>
                <TableCell align="center">
                  {row.yearly ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
