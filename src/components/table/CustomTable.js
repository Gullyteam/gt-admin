import React, { useRef,useState,useEffect} from 'react'
import { TablePagination, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { divide } from 'lodash';
import CustomButton from './CustomButton';
import { IconH1 } from '@tabler/icons';
 import CustomModal from './CustomModal';

const CustomTable = ( data, loading) => {
  const CustomTablecontainer = useRef();

  const { onPageChange } = data;

  //s3 bucket url
  const S3bucketUrl=process.env.REACT_APP_PROFILE_S3_BUCKET_URL;

  const { url } = useSelector((state) => state.home)
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
  const [pagecount, setPageCount] = useState(1);


  // useEffect(() => {
  //   setPageCount(data===undefined ? 1:data?.totalcount?.length);
  // }, [data])

  // console.log(data?.totalcount);

  
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
      <TablePagination
        rowsPerPageOptions={[2, 10, 25, 50]}
        component="div"
        count={data===undefined ? 1:data?.totalcount || 0}
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

export default CustomTable
