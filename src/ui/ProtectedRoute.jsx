// import { useNavigate } from "react-router-dom";
// import useUser from "../features/authentication/useUser";
// import Spinner from "./Spinner";
// import { useEffect } from "react";
// import styled from "styled-components";

// const FullPage = styled.div`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export default function ProtectedRoute({ children }) {
//   const navigate = useNavigate();
//   // 1. Get the authenticated user
//   const { isLoading, isAuthenticated } = useUser();

//   // 2. if there is no authenticated use redirect to login page

//   useEffect(() => {
//     if (!isAuthenticated && !isLoading) navigate("/login");
//   }, [isAuthenticated, navigate, isLoading]);

//   // 3. while loading show spinner
//   if (isLoading)
//     return (
//       <FullPage>
//         <Spinner />;
//       </FullPage>
//     );

//   // 4. if there is authenticated user redirect to dashboard
//   if (isAuthenticated) return children;
// }

import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Get the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. if there is no authenticated use redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  // 3. while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  // 4. if there is authenticated user redirect to dashboard
  if (isAuthenticated) return children;
}
