// import {
//   BrowserRouter,
//   Navigate,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Toaster } from "react-hot-toast";

// import GlobalStyles from "./styles/GlobalStyles";
// import {
//   Account,
//   Bookings,
//   Cabins,
//   Dashboard,
//   Login,
//   PageNotFound,
//   Settings,
//   Users,
// } from "./pages/index";
// import AppLayout from "./ui/AppLayout";
// import BookingPage from "./pages/BookingPage";
// import Checkin from "./pages/Checkin";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 0,
//     },
//   },
// });

// const App = () => {
//   function ProtectedRoute({ children }) {
//     if (
//       localStorage.getItem(
//         "sb-mgydawiupshhfutbxcgf-auth-token" || "access_token"
//       ) === null
//     ) {
//       <Navigate to="/login" />;
//     } else return children;
//   }
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//       <GlobalStyles />
//       <BrowserRouter>
//         <Routes>
//           <Route element={<AppLayout />}>
//             <Route index element={<Navigate replace to="/dashboard" />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="bookings" element={<Bookings />} />
//             <Route path="bookings/:bookingId" element={<BookingPage />} />
//             <Route path="checkin/:bookingId" element={<Checkin />} />
//             <Route path="cabins" element={<Cabins />} />
//             <Route path="users" element={<Users />} />
//             <Route path="settings" element={<Settings />} />
//             <Route path="account" element={<Account />} />
//           </Route>
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//       <Toaster
//         position="top-center"
//         reverseOrder={true}
//         gutter={12}
//         containerStyle={{ margin: "8px" }}
//         toastOptions={{
//           success: { duration: 3000 },
//           error: { duration: 5000 },
//           style: {
//             fontSize: "16px",
//             maxWidth: "500px",
//             padding: "16px 24px",
//             backgroundColor: "var(--color-grey-0)",
//             color: "var(--color-grey-700)",
//           },
//         }}
//       />
//     </QueryClientProvider>
//   );
// };

// export default App;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import {
  Account,
  Bookings,
  Cabins,
  Dashboard,
  Login,
  PageNotFound,
  Settings,
  Users,
  Checkin,
} from "./pages/index";
import AppLayout from "./ui/AppLayout";
import BookingPage from "./pages/BookingPage";

import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<BookingPage />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={true}
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;
