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
import  Cuppons from "./Pages/ReusableComponent/Cuppons"
import RedeemBonus from "./Pages/ReusableComponent/Reedem";
import Bonus from "./Pages/ReusableComponent/Bonus"
import Notification from "./Pages/ReusableComponent/Notification"
import PersonalInfo from "./Pages/ReusableComponent/PrsonalInfo"
import DepositHistory from "./Pages/Wallet/Deposithistory"
import BetHistory from "./Pages/Wallet/BetHistory"
import ProfitLoss from "./Pages/Wallet/ProfitLoss"
import ChangePassword from "./Auth/ChangePassword"
import DownloadApkPage from "./Pages/ReusableComponent/DownloadApk"
import AccountStatement from "./Pages/Wallet/AccountStatement"
import AvitatorLayout from "./Pages//InhouseGames/AviatorGame/AvitatorLayout"
import WinGo from "./Pages//InhouseGames/Lottery/WinGo";
import ChickenRoadLayout from "./Pages//InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout";
import AffiliatePage from "./Pages/ReusableComponent/Affilation"
import ProfilePage2 from "./Pages/ReusableComponent/ProfilePage2"
import ForgetUserName from "./Auth/ForgetUserName"
import PendingBets from "./Pages/Wallet/PendingBets"
import CreateCampaign from "./Pages/ReusableComponent/CreateCampaign"
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
            <Route path="/cuppon" element={<Cuppons />} />
            <Route path="/RedeemBonus" element={<RedeemBonus />} />
            <Route path="/Bonus" element={<Bonus />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Info" element={<PersonalInfo />} />
            <Route path="/depositHistory" element={<DepositHistory />} />
            <Route path="/betHistory" element={<BetHistory />} />
            <Route path="/profitLoss" element={<ProfitLoss />} />
            <Route path="/accountStatement" element={<AccountStatement />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/downloadAPK" element={<DownloadApkPage />} />
            <Route path="/aviator" element={<AvitatorLayout />} />,
            <Route path="/lottery/wingo" element={<WinGo />} />,
            <Route path="/chickenRoadGame" element={<ChickenRoadLayout />} />,
            <Route path="/affilationDashboard" element={<AffiliatePage />} />,
            <Route path="/affilation" element={<ProfilePage2 />} />,
            <Route path="/ForgetUserName" element={<ForgetUserName />} />,
            <Route path="/PendingBets" element={<PendingBets />} />,
            <Route path="/CreateCampaign" element={<CreateCampaign />} />,
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App
