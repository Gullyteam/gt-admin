import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useState } from 'react';
import useFetch from 'src/hooks/useFetch';
import CustomTable from 'src/components/table/CustomTable';

const Content = () => {

    // const [endpoint, setendpoint] = useState("day")

    const data ={
        data:[{
        id: 1,
        title: 'Terms & Conditions',
        status: 'actve',
        _id:'terms'
    },
    {
        id: 2,
        title: 'FAQ',
        status: 'actve',
        _id:'faq'
    },
    {
        id: 3,
        title: 'Disclaimer',
        status: 'actve',
        _id:'disclaimer'
    },
    {
        id: 4,
        title: 'Privacy Policy',
        status: 'actve',
        _id:'privacy-policy'
    },
    {
        id: 5,
        title: 'Language Change',
        status: 'actve',
        _id:'language-change'
    },
    {
        id: 6,
        title: 'Welcome Message',
        status: 'actve',
        _id:'welcome-message'
    },
    ]}
    const loading = false;

    console.log(data)

    const tableTitle = [{ title: "id" }, { title: "Title" }, { title: "Status" }, { title: "Options" }]

    const tableBody = [{ field: "id" }, { field: "title" }, { field: "status" }]
    return (
        <PageContainer title="Sample Page" description="this is Sample page" >

            <DashboardCard title="Content Manager"  >

                <Typography>Content Manager</Typography>

                <CustomTable data={data?.data} loading={loading} tableTitle={tableTitle} tableBody={tableBody} editoption={true} />

            </DashboardCard>
        </PageContainer>
    )
}

export default Content