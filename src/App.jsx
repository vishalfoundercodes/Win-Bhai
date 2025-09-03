import FrogetPassword from "./Auth/FrogetPassword"
import Login from "./Auth/Login"
import SignUp from "./Auth/SignUp"
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout/Layout"
import Home from "./Pages/Home/Home"
import NeedHelp from "./Pages/NeedHelp/NeedHelp"
import Game from "./Pages/Games/Game"
import Deposit from "./Pages/Wallet/Deposit"
import Withdraw from "./Pages/Wallet/Withdraw"
import UpdateBankAccount from "./Pages/Wallet/UpdateBank"
function App() {


  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetPassword" element={<FrogetPassword />} />
            <Route path="/needhelp" element={<NeedHelp />} />
            <Route path="/game/:tabName" element={<Game />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/updateAccount" element={<UpdateBankAccount />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App
