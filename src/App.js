import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import '../src/app.css'
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import Fav from "./pages/fav/Fav";
import CreateExpenseSheet from "./pages/createExpenseSheet/CreateExpenseSheet";
import CreateExpense from "./pages/createExpenseGroup/CreateExpense";
import ExpenseSummary from "./pages/ExpenseSummary/ExpenseSummary";
import Message from "./pages/message/Message";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import EditExpenseGroup from "./pages/EditExpenseGroup/EditExpenseGroup";


function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/fav" element={<Fav />} />
              <Route path="/expenseGroup" element={<CreateExpense />} />
              <Route path="/editGroup" element={<EditExpenseGroup />} />
              <Route path="/expenseSheet" element={<CreateExpenseSheet />} />
              <Route path="/expenseSummary" element={<ExpenseSummary />} />
              <Route path="/message" element={<Message />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}


const Layout = () => (
  <>
    <Navbar />
    <div className="Container">
    <Menu />
    <div className="Homecontainer1">
      <Outlet /> {/* This will render the current route's component */}
    </div>
  </div>
  </>
);

export default App;
