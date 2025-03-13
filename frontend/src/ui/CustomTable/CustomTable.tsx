import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  tableWithTabs?: boolean
}

export default function CustomTable({ children, tableWithTabs = false }: Props) {
  return (
    <TableContainer component={Paper} sx={{ borderTopLeftRadius: tableWithTabs ? "0" : "10px" }}>
      <Table>
        {children}
      </Table>
    </TableContainer>
  );
}
