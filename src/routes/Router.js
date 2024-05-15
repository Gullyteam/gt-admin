import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import { isAuthenticated } from 'src/utils/auth';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* **** Dashboard Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))

/* **** Users Pages***** */
const Users = Loadable(lazy(() => import('../views/users/Users')))
const AddUser = Loadable(lazy(() => import('../views/users/AddUser')))

/* **** Organizers Pages***** */
const OrganizerList = Loadable(lazy(() => import('../views/organizer/OrganizerList')))
const Organizer = Loadable(lazy(() => import('../views/organizer/Organizer')))
const AddOrganizer = Loadable(lazy(() => import('../views/organizer/AddOrganizer')))

/* **** Payement Pages***** */
const Payment = Loadable(lazy(() => import('../views/organizer/Payment')))

/* **** Sub Admin Pages***** */
const SubAdminList = Loadable(lazy(() => import('../views/sub-admin/SubAdminList')))
 const SubAdmin = Loadable(lazy(() => import('../views/sub-admin/SubAdmin')))
const AddSubAdmin = Loadable(lazy(() => import('../views/sub-admin/AddSubAdmin')))

/* **** Content Manager***** */
const ContentManager = Loadable(lazy(() => import('../views/contentmanager/Content')))
const EditContent = Loadable(lazy(() => import('../views/contentmanager/EditContent')))

/* **** Add Sports Pages***** */
const AddSport = Loadable(lazy(() => import('../views/addsports/AddSport')))

/* **** Fess and Offer Pages***** */
const FeesOffer = Loadable(lazy(() => import('../views/feesoffer/FessOfferlist')))
const AddFeesOffer = Loadable(lazy(() => import('../views/feesoffer/AddFessoffer')))
const EditFeesOffer = Loadable(lazy(() => import('../views/feesoffer/FessOffer')))

/* **** Fess and Offer Pages***** */
const HelpDesk =Loadable(lazy(() => import('../views/helpdesk/Helpdesklist')))
const EditHelpDesk =Loadable(lazy(() => import('../views/helpdesk/HelpDesk')))

/* **** Notification ******/
const Notificationlist =Loadable(lazy(() => import('../views/notification/Notificationlist')))
const Add_Notification =Loadable(lazy(() => import('../views/notification/AddNotification')))
const Notification =Loadable(lazy(() => import('../views/notification/Notification')))

/* **** Banner ******/
const Bannerlist =Loadable(lazy(() => import('../views/banner/Bannerlist')))
const Add_Banner =Loadable(lazy(() => import('../views/banner/AddBanner')))
const Banner =Loadable(lazy(() => import('../views/banner/Banner')))

/* **** ScoreBoard ******/
const ScoreBoardlist =Loadable(lazy(() => import('../views/scoreBoard/TournamentList')))
const MatchesList =Loadable(lazy(() => import('../views/scoreBoard/MatchesList')))
const ScoreBoard =Loadable(lazy(() => import('../views/scoreBoard/ScoreBoard')))

const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('../views/authentication/ResetPassword')));

const Update = Loadable(lazy(() => import('../views/forceUpdate/Update')));


/* **** TransactionHistory ******/
const TransactionList =Loadable(lazy(() => import('../views/transaction/TransactionList')))


// Define a PrivateRoute component
const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/auth/login" state={{ from: path }} replace />
  );
};

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/auth/login" /> },
      { path: '/dashboard', exact: true, element: <PrivateRoute path="/dashboard" element={<Dashboard />} /> },
     
     /* **** Users Pages***** */
      { path: '/sample-page', exact: true, element:<PrivateRoute path="/sample-page" element={<SamplePage />} />  },
      { path: '/users', exact: true, element: <PrivateRoute path="/sample-page" element={<Users />} />  },
      { path: '/users/add', exact: true, element:<PrivateRoute path="/sample-page" element={<AddUser />} />},

      /* **** Organizers Pages***** */
      { path: '/organizer', exact: true, element:<PrivateRoute path="/sample-page" element={<OrganizerList />} />},
      { path: '/organizer/add', exact: true, element: <PrivateRoute path="/sample-page" element={<AddOrganizer />} /> },
      { path: '/organizer/view/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<Organizer action={"view"}/>} />  },
      { path: '/organizer/edit/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<Organizer action={"edit"} />} />  },
      { path: '/organizer/delete/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<Organizer action={"delete"} />} />  },
    
      // { path: '/tournament', exact: true, element: <Tournament /> },

      /* **** Sub Admin Pages***** */
      { path: '/subadmin', exact: true, element: <PrivateRoute path="/subadmin" element={<SubAdminList />} />  },
      { path: '/subadmin/add', exact: true, element: <PrivateRoute path="/sample-page" element={<AddSubAdmin/>} /> },
      { path: '/subadmin/view/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<SubAdmin action={"view"}/>} /> },
      { path: '/subadmin/edit/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<SubAdmin  action={"edit"}/>} /> },
      { path: '/subadmin/delete/:id', exact: true, element: <PrivateRoute path="/sample-page" element={<SubAdmin  action={"delete"}/>} /> },
      
       /* **** Content Manager Pages***** */
       { path: '/content', exact: true, element: <ContentManager /> },
       { path: '/content/view/:id', exact: true, element: <EditContent /> },
       { path: '/content/edit/:id', exact: true, element: <EditContent action={"view"}/> },
       { path: '/content/delete/:id', exact: true, element: <EditContent action={"edit"}/> },

      { path: '/addsports', exact: true, element: <AddSport /> },

      /* **** Fess and Offer Pages***** */
      { path: '/fessoffer', exact: true, element: <FeesOffer /> },
      { path: '/fessoffer/add', exact: true, element: <AddFeesOffer /> },
      { path: '/fessoffer/view/:id', exact: true, element: <EditFeesOffer action={"view"}/> },
      { path: '/fessoffer/edit/:id', exact: true, element: <EditFeesOffer action={"edit"}/> },
      // { path: '/fessoffer/delete/:id', exact: true, element: <FeesOffer /> },

       /* **** Helpdesk Pages***** */
       { path: '/helpdesk', exact: true, element: <HelpDesk /> },
       { path: '/helpdesk/view/:id', exact: true, element: <EditHelpDesk action={"view"}/> },
      { path: '/helpdesk/edit/:id', exact: true, element: <EditHelpDesk action={"edit"}/> },

      /* **** Notification  Pages***** */
      { path: '/notification', exact: true, element: <Notificationlist /> },
      { path: '/notification/add', exact: true, element: <Add_Notification action={"add"}/> },
      { path: '/notification/view/:id', exact: true, element: <Notification action={"view"}/> },
      { path: '/notification/edit/:id', exact: true, element: <Notification action={"edit"}/> },

       /* **** Banner  Pages***** */
       { path: '/banner', exact: true, element: <Bannerlist /> },
       { path: '/banner/add', exact: true, element: <Add_Banner action={"add"}/> },
       { path: '/banner/view/:id', exact: true, element: <Banner action={"view"}/> },
       { path: '/banner/edit/:id', exact: true, element: <Banner action={"edit"}/> },

        /* **** ScoreBoard  Pages***** */
        { path: '/scoreBoard', exact: true, element: <ScoreBoardlist /> },
        { path: '/scoreBoard/:id', exact: true, element: <MatchesList /> },
        { path: '/scoreBoardData/:id', exact: true, element: <ScoreBoard /> },

        { path: '/update', exact: true, element: <Update /> },

        { path: '/transaction', exact: true, element: <TransactionList /> },
        { path: '/payment/:id', exact: true, element: <Payment /> },

      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', exact: true, element: <Register /> },
      { path: '/auth/login', exact: true, element: <Login /> },
      { path: '/auth/forgot', exact: true, element: <ForgotPassword /> },
      { path: '/auth/reset/:token', exact: true, element: <ResetPassword /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
