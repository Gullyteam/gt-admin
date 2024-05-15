import React, { useRef, useState } from 'react'
import { TablePagination, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import CustomButton from 'src/components/table/CustomButton';
import moment from 'moment';



const OrganizerTable = (data, loading) => {

  const { onPageChange } = data;
  const { url } = useSelector((state) => state.home)
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state

  const navigate = useNavigate();

  return (
    <>

      <TableContainer component={Paper}  >
        <Table>
          <TableHead>
            <TableRow style={{ borderBottom: '2px solid #adb1b8' }}>
              {
                data.tableTitle?.map((item, index) => {
                  return (
                    <TableCell key={index}>{item.title}</TableCell>
                  )
                })
              }

            </TableRow>
          </TableHead>

          {loading ? (
            <TableBody>
              {

                data?.data?.map((item,index) => {
                  const serialNumber = index + 1;  // Calculate the serial number (1-indexed)
                  return (
                    
                    <TableRow key={item.id} style={{ borderBottom: '2px solid #d7dce5' }} >
                       <TableCell>{serialNumber}</TableCell>
                      {
                        data.tableBody?.map((fielditem) => {

                          if (fielditem.field === 'paymentView') {
                            return (
                              <TableCell>
                                <NavLink  to={'/payment'}>Payment</NavLink>
                              </TableCell>
                            )
                          }else if (fielditem.field === 'tournamentStartDateTime' || fielditem.field === 'tournamentEndDateTime') {
                            return (
                              <TableCell>
                                {moment(item[fielditem.field]).format('YYYY-MM-DD  HH:mm')}
                              </TableCell>
                            )
                          } 
                          else {
                            return (
                              <TableCell>
                                {item[fielditem.field]}
                              </TableCell>
                            )
                          }
                        })

                      }
                      {data?.editoption?(<CustomButton id={item?._id} />):("")}
                    </TableRow>

                  )
                })
              }
            
            </TableBody>
          ) : ("<p>loaded</p>")}

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 10, 25, 50]}
        component="div"
        count={data === undefined ? 1 : data?.totalcount || 0}
        rowsPerPage={2}
        page={currentPage}
        onPageChange={(event, newPage) => {
          setCurrentPage(newPage);
          onPageChange(newPage); // Pass 0-based page to the parent component
        }}
      />
    </>
  )

}

export default OrganizerTable