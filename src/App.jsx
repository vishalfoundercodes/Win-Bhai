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
import Statistics from "./Pages/ReusableComponent/Statistics"
import WithdrawAffilation from "./Pages/ReusableComponent/WithdrawAffilation"
import WithdrawFunds from "./Pages/ReusableComponent/WithdrawFunds"
import Learn from "./Pages/ReusableComponent/Learn"
import CryptoAddAccount from "./Pages/Wallet/CryptoAddAccount"
import CryptoDeposit from "./Pages/Wallet/CryptoDeposit"
import WithdrawHistory from "./Pages/Wallet/WithdrawHistory"
import BankWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/BankWithdraw"
import CryptoWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/CryptoWithdraw";
import WinbhaiWallet from "./Pages/ReusableComponent/AffilationWithdraw/WinbhaiWallet"
import WhatsupWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/WhatsupWithdraw"
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
            <Route path="/game" element={<Game />} />
            <Route path="/game/:tabName" element={<Game />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/updateAccount" element={<UpdateBankAccount />} />
            <Route path="/CryptoAdd" element={<CryptoAddAccount />} />
            <Route path="/cuppon" element={<Cuppons />} />
            <Route path="/RedeemBonus" element={<RedeemBonus />} />
            <Route path="/Bonus" element={<Bonus />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Info" element={<PersonalInfo />} />
            <Route path="/depositHistory" element={<DepositHistory />} />
            <Route path="/withdrawHistory" element={<WithdrawHistory />} />
            <Route path="/betHistory" element={<BetHistory />} />
            <Route path="/profitLoss" element={<ProfitLoss />} />
            <Route path="/accountStatement" element={<AccountStatement />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/downloadAPK" element={<DownloadApkPage />} />
            <Route path="/aviator" element={<AvitatorLayout />} />,
            <Route path="/lottery/wingo" element={<WinGo />} />,
            <Route path="/chickenRoadGame" element={<ChickenRoadLayout />} />,
            <Route path="/affilationDashboard" element={<AffiliatePage />} />,
            <Route path="/BankWithdraw" element={<BankWithdraw />} />,
            <Route path="/CryptoWithdraw" element={<CryptoWithdraw />} />,
            <Route path="/WhatsupWithdraw" element={<WhatsupWithdraw />} />,
            <Route path="/WinbhaiWallet" element={<WinbhaiWallet />} />,
            <Route path="/affilation" element={<ProfilePage2 />} />,
            <Route path="/ForgetUserName" element={<ForgetUserName />} />,
            <Route path="/PendingBets" element={<PendingBets />} />,
            <Route path="/CreateCampaign" element={<CreateCampaign />} />,
            <Route path="/Statistics" element={<Statistics />} />,
            <Route path="/WithdrawFunds" element={<WithdrawFunds />} />,
            <Route path="/CryptoDeposit" element={<CryptoDeposit />} />,
            <Route path="/Learn" element={<Learn />} />,
            <Route
              path="/WithdrawAffilation"
              element={<WithdrawAffilation />}
            />
            ,
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App
