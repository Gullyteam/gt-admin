import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState,useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';

//import action,reducer from redux-toolkit
import {fetchDataFromApi} from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration} from "./store/homeSlice"

import { baselightTheme } from "./theme/DefaultColors";


// const PrivateRoute = ({ element, path }) => {
//   return isAuthenticated() ? (
//     element
//   ) : (
//     <Navigate to="/login" state={{ from: path }} replace />
//   );
// };

function App() {

  const dispatch = useDispatch()
   //const {url} = useSelector((state) => state.home)


  useEffect(() => {
  // apitesting()
  }, []);
  

// const apitesting = () =>{
//   fetchDataFromApi('/trending/movie/day')
//     .then((res) => {
//       //console.log(res)
//      dispatch(getApiConfiguration(res))
//     });
// };

  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      {routing}

    </ThemeProvider>
  );
}

export default App;
