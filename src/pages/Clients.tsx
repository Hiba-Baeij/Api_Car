import React, { useEffect, useRef, useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { useQuery } from 'react-query';
import { Clients as ClientsType } from '@/api/Clients/dto';
import { useDispatch, useSelector } from 'react-redux'
import { ClientApi } from '../api/Clients/index';
import { AppDispatch, RootState } from '../store/index';
import { ClientActions } from '@/store/clients'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Clients() {
    const [modifyItem, setModifyItem] = useState<ClientsType | null>(null)
    const dispatch = useDispatch<AppDispatch>()

    useQuery('client', ClientApi.fetchClients, {
        onSuccess: (data: ClientsType[]) => {
            dispatch(ClientActions.setClientsList(data));
        }
    })
    const clients = useSelector<RootState, ClientsType[]>(state => state.client.clients)


    return (
        <div>
            <Button color='primary' variant="contained" startIcon={<AddIcon />}>Add Clients</Button>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>رقم الزبون</TableCell>
                                    <TableCell align="right">اسم الزبون</TableCell>
                                    <TableCell align="right">رقم الهاتف</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clients.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <div className="flex">
                                                <span className='mr-4'>
                                                    {row.name}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.phoneNumber}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </div>

    )
}

export default Clients