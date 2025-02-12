import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import '../src/App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Fav from "./pages/fav/Fav";
import CreateExpenseSheet from "./pages/createExpenseSheet/CreateExpenseSheet";
import CreateExpense from "./pages/createExpenseGroup/CreateExpense";
import ExpenseSummary from "./pages/ExpenseSummary/ExpenseSummary";
import Message from "./pages/message/Message";


function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Navbar/>
        <div className="Container">
          <Menu/>
          <div className="Homecontainer1">
          <Routes>
            <Route path="/">
               <Route index element={<Home/>}/>
               <Route path="/fav" element={<Fav/>}/>
               <Route path="/expenseGroup" element={<CreateExpense/>}/>
               <Route path="/expenseSheet" element={<CreateExpenseSheet/>}/>
               <Route path="/expenseSummary" element={<ExpenseSummary/>}/>
               <Route path="/message" element={<Message/>}/>
               
            </Route>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
