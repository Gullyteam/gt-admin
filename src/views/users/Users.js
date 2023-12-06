import React from 'react';
import { Typography} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
 import { useState } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const Users = () => {

    // const [userData, setUserData] = useState()

    // fetch all users data from  
    const { data,loading }= useFetch(`/admin/all-users`);

    // useEffect(() => {
    //   setUserData(data);
    // }, [data])
  
    // const handleSubmit = (objRow) => {
    //   setUserData(data?.data?.data?.map(obj => obj.id === objRow.id : {...obj, status: obj.objRow}));
    // }
    const tableTitle =[{title:"User Id"},{title:"Image"},{title:"Name"},{title:"Email"},{title:"Phone"},{title:"Location"},{title:"Registration Date"},{title:"Status"}]

    const tableBody =[{field:"_id"},{field:"profilePhoto"},{field:"fullName"},{field:"email"},{field:"phoneNumber"},{field:"location"},{field:"registrationDate"},{field:"banStatus"},]



  return (
    <PageContainer title="Sample Page" description="this is Sample page" >

      <DashboardCard title="Users List" >
     
        <Typography>Users Page</Typography>

        <CustomTable data={data?.data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={false} />
        
      </DashboardCard>
    </PageContainer>
  )
}

export default Users