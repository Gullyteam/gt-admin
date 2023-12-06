import React,{ useRef } from 'react'
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { divide } from 'lodash';
// import CustomButton from './CustomButton';
import { IconH1 } from '@tabler/icons';



const OrganizerTable = (data, loading) => {
    

    const { url } = useSelector((state) => state.home)
  
    const navigate = useNavigate();
  
//   console.log("tabledata",data.data[0])
    return (
      <>
  
        <TableContainer component={Paper}  >
          <Table>
            <TableHead>
              <TableRow>
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
  
                 data?.data?.map((item) => {

                    return (
                      <TableRow key={item.id} >
                        {
                          data.tableBody?.map((fielditem) => {
  
                            // if(fielditem.field==='images'){
                            //   return (
                            //     <TableCell>
                            //       <img src={item[fielditem.field]} style={{width:"60px",height:"60px"}}/>
                            //     </TableCell>
                            //   )
                            // }else{
                              return (
                                <TableCell>
                                  {item[fielditem.field]}
                                </TableCell>
                              )
                           // }
                          })
                          
                        }
                        {/* {data?.editoption?(<CustomButton id={item?._id} />):("")} */}
                      </TableRow>
                     
                    )
                  })
                }
  
              </TableBody>
            ) : ("<p>loaded</p>")}
  
          </Table>
        </TableContainer>
      </>
    )

}

export default OrganizerTable