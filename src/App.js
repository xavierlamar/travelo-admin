import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Navigate } from "react-router-dom";
import { BusColumns, userColumns,orderColumns } from "./datatablesource";
import NewBus from "./pages/newBus/NewBus";

function App() {
  const { darkMode } = useContext(DarkModeContext);
   
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* sidebar */}
      <Route path="/admin/user" element={<List columns = {userColumns}/>} />
      <Route path="/admin/bus" element={<List columns = {BusColumns}/>} />
      <Route path="/admin/order" element={<List columns = {orderColumns}/>} />
      {/* adding new */}
      <Route path="/admin/bus/new" element={<NewBus/>} />
      <Route path="/admin/user/new" element={<New inputs={userInputs} title="Add New User" />} />
      {/* view by id */}
      <Route path="/admin/bus/:busId" element={<Single />} />
      <Route path="/admin/user/:userId" element={<Single />} />


      
          {/* <Route path="/admin">
             <Route index element={
               <ProtectedRoute>
              <Home />
              </ProtectedRoute>}/>
          </Route>
              <Route path="login" element={<Login />} />
            <Route path="admin/user">
              <Route
               index
               element={
              <ProtectedRoute>
                 <List columns = {userColumns} />
              </ProtectedRoute>} />
              <Route path=":userId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
              } />
              <Route
                path="new"
                element={
                <ProtectedRoute>
                  <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>}
              />
            </Route>
            <Route path="admin/bus">
              <Route index element={
              <ProtectedRoute>
                <List columns = {BusColumns}/>
                </ProtectedRoute>} />
              <Route path=":busId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>} />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewBus/>
                  </ProtectedRoute>}
              />
              </Route>
            <Route path="admin/order">
              <Route index element={
              <ProtectedRoute>
                <List columns = {orderColumns}/>
                </ProtectedRoute>} />
              <Route path=":orderId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>} />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewBus/>
                  </ProtectedRoute>}
              />
              </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
