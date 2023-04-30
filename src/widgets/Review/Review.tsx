import { useBalanceSheetQuery } from '@services/api/balance-sheet';
import { Application } from 'types/application';

import { useFormContext, useWatch } from 'react-hook-form';
import {
  LinearProgress,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from '@mui/material';

export function Review() {
  const { control } = useFormContext<Application>();

  const business = useWatch({
    control,
    name: 'business',
  });

  const provider = useWatch({
    control,
    name: 'provider',
  });

  const amount = useWatch({
    control,
    name: 'amount',
  });

  const { data, isLoading } = useBalanceSheetQuery({
    business,
    provider,
  });

  if (isLoading) return <LinearProgress />;

  return (
    <Stack spacing={2}>
      <div>
        <Typography>Business name: {business.name}</Typography>
        <Typography>Established: {business.established}</Typography>
        <Typography>Provider: {provider.name}</Typography>
        <Typography>Loan amount: {amount}</Typography>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Profit or loss</TableCell>
            <TableCell>Asses value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((balance, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{balance.year}</TableCell>
              <TableCell>{balance.month}</TableCell>
              <TableCell>{balance.profitOrLoss}</TableCell>
              <TableCell>{balance.assetsValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
