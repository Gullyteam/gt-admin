import React, { useRef,useState,useEffect} from 'react'
import { TablePagination, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { divide } from 'lodash';
import CustomButton from './CustomButton';
import { IconH1 } from '@tabler/icons';
 import CustomModal from './CustomModal';
 import moment from 'moment';

 import userDefaltImage from 'src/assets/images/profile/user.png';

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

//  console.log(data);

  
  return (
    <>

      <TableContainer component={Paper}  >
        <Table>
          <TableHead >
            <TableRow style={{ borderBottom: '2px solid #adb1b8' }}>
              {
                data.tableTitle?.map((item, index) => {
                  return (
                    <TableCell  key={index}>{item.title}</TableCell>
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
                    <TableRow key={item.id} style={{ borderBottom: '2px solid #d7dce5' }}>
                      <TableCell>{serialNumber}</TableCell>
                      {
                        data.tableBody?.map((fielditem) => {
 
                          if(fielditem.field==='profilePhoto'||fielditem.field==='imageUrl'){
                            return (
                              <TableCell>
                                <img src={item[fielditem.field]?S3bucketUrl+item[fielditem.field]:userDefaltImage} style={{width:"60px",height:"60px"}}/>
                              </TableCell>
                            )
                          }
                          else if(fielditem.field==='registrationDate' ||  fielditem.field==='date' || fielditem.field==='updatedAt' || fielditem.field==='createdAt'){
                            return (
                              <TableCell >
                                {moment(item[fielditem.field]).format('YYYY-MM-DD  HH:mm')}
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
        rowsPerPage={10}
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
