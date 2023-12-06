import React, { useRef } from 'react'
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { divide } from 'lodash';
import CustomButton from './CustomButton';
import { IconH1 } from '@tabler/icons';
 import CustomModal from './CustomModal';

const CustomTable = (data, loading) => {
  const CustomTablecontainer = useRef();
  //s3 bucket url
  const S3bucketUrl=process.env.REACT_APP_PROFILE_S3_BUCKET_URL;

console.log(data);
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate();

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

                          if(fielditem.field==='profilePhoto'){
                            return (
                              <TableCell>
                                <img src={S3bucketUrl+item[fielditem.field]} style={{width:"60px",height:"60px"}}/>
                              </TableCell>
                            )
                          }
                          else if(fielditem.field==='banStatus'){
                              return (
                                    <TableCell>
                                     <CustomModal id={item?._id} status={item[fielditem.field]} />
                                    </TableCell>
                            )
                          }
                          else{
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
    </>
  )
}

export default CustomTable
