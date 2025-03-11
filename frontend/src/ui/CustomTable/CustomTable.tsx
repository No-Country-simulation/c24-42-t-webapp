import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';
import { CustomTableStyles } from './CustomTableStyles';

interface Props {
  children: ReactNode
}

export default function CustomTable({ children }: Props) {
  return (
    <TableContainer component={Paper} sx={CustomTableStyles.container}>
      <Table>
        {children}
      </Table>
    </TableContainer>
  );
}
