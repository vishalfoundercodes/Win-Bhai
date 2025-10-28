// import FrogetPassword from "./Auth/FrogetPassword"
// import Login from "./Auth/Login"
// import SignUp from "./Auth/SignUp"
// import './index.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Layout from "./Pages/Layout/Layout"
// import Home from "./Pages/Home/Home"
// import NeedHelp from "./Pages/NeedHelp/NeedHelp"
// import Game from "./Pages/Games/Game"
// import Deposit from "./Pages/Wallet/Deposit"
// import Withdraw from "./Pages/Wallet/Withdraw"
// import UpdateBankAccount from "./Pages/Wallet/UpdateBank"
// import  Cuppons from "./Pages/ReusableComponent/Cuppons"
// import RedeemBonus from "./Pages/ReusableComponent/Reedem";
// import Bonus from "./Pages/ReusableComponent/Bonus"
// import Notification from "./Pages/ReusableComponent/Notification"
// import PersonalInfo from "./Pages/ReusableComponent/PrsonalInfo"
// import DepositHistory from "./Pages/Wallet/Deposithistory"
// import BetHistory from "./Pages/Wallet/BetHistory"
// import ProfitLoss from "./Pages/Wallet/ProfitLoss"
// import ChangePassword from "./Auth/ChangePassword"
// import DownloadApkPage from "./Pages/ReusableComponent/DownloadApk"
// import AccountStatement from "./Pages/Wallet/AccountStatement"
// import AvitatorLayout from "./Pages//InhouseGames/AviatorGame/AvitatorLayout"
// import WinGo from "./Pages//InhouseGames/Lottery/WinGo";
// import ChickenRoadLayout from "./Pages//InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout";
// import AffiliatePage from "./Pages/ReusableComponent/Affilation"
// import ProfilePage2 from "./Pages/ReusableComponent/ProfilePage2"
// import ForgetUserName from "./Auth/ForgetUserName"
// import PendingBets from "./Pages/Wallet/PendingBets"
// import CreateCampaign from "./Pages/ReusableComponent/CreateCampaign"
// import Statistics from "./Pages/ReusableComponent/Statistics"
// import WithdrawAffilation from "./Pages/ReusableComponent/WithdrawAffilation"
// import WithdrawFunds from "./Pages/ReusableComponent/WithdrawFunds"
// import Learn from "./Pages/ReusableComponent/Learn"
// import CryptoAddAccount from "./Pages/Wallet/CryptoAddAccount"
// import CryptoDeposit from "./Pages/Wallet/CryptoDeposit"
// import WithdrawHistory from "./Pages/Wallet/WithdrawHistory"
// import BankWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/BankWithdraw"
// import CryptoWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/CryptoWithdraw";
// import WinbhaiWallet from "./Pages/ReusableComponent/AffilationWithdraw/WinbhaiWallet"
// import WhatsupWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/WhatsupWithdraw"
// function App() {


//   return (
//     <>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/forgetPassword" element={<FrogetPassword />} />
//             <Route path="/needhelp" element={<NeedHelp />} />
//             <Route path="/game" element={<Game />} />
//             <Route path="/game/:tabName" element={<Game />} />
//             <Route path="/deposit" element={<Deposit />} />
//             <Route path="/withdraw" element={<Withdraw />} />
//             <Route path="/updateAccount" element={<UpdateBankAccount />} />
//             <Route path="/CryptoAdd" element={<CryptoAddAccount />} />
//             <Route path="/cuppon" element={<Cuppons />} />
//             <Route path="/RedeemBonus" element={<RedeemBonus />} />
//             <Route path="/Bonus" element={<Bonus />} />
//             <Route path="/Notification" element={<Notification />} />
//             <Route path="/Info" element={<PersonalInfo />} />
//             <Route path="/depositHistory" element={<DepositHistory />} />
//             <Route path="/withdrawHistory" element={<WithdrawHistory />} />
//             <Route path="/betHistory" element={<BetHistory />} />
//             <Route path="/profitLoss" element={<ProfitLoss />} />
//             <Route path="/accountStatement" element={<AccountStatement />} />
//             <Route path="/changePassword" element={<ChangePassword />} />
//             <Route path="/downloadAPK" element={<DownloadApkPage />} />
//             <Route path="/aviator" element={<AvitatorLayout />} />,
//             <Route path="/lottery/wingo" element={<WinGo />} />,
//             <Route path="/chickenRoadGame" element={<ChickenRoadLayout />} />,
//             <Route path="/affilationDashboard" element={<AffiliatePage />} />,
//             <Route path="/BankWithdraw" element={<BankWithdraw />} />,
//             <Route path="/CryptoWithdraw" element={<CryptoWithdraw />} />,
//             <Route path="/WhatsupWithdraw" element={<WhatsupWithdraw />} />,
//             <Route path="/WinbhaiWallet" element={<WinbhaiWallet />} />,
//             <Route path="/affilation" element={<ProfilePage2 />} />,
//             <Route path="/ForgetUserName" element={<ForgetUserName />} />,
//             <Route path="/PendingBets" element={<PendingBets />} />,
//             <Route path="/CreateCampaign" element={<CreateCampaign />} />,
//             <Route path="/Statistics" element={<Statistics />} />,
//             <Route path="/WithdrawFunds" element={<WithdrawFunds />} />,
//             <Route path="/CryptoDeposit" element={<CryptoDeposit />} />,
//             <Route path="/Learn" element={<Learn />} />,
//             <Route
//               path="/WithdrawAffilation"
//               element={<WithdrawAffilation />}
//             />
//             ,
//           </Routes>
//         </Layout>
//       </Router>
//     </>
//   );
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import FrogetPassword from "./Auth/FrogetPassword";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import NeedHelp from "./Pages/NeedHelp/NeedHelp";
import Game from "./Pages/Games/Game";
import Deposit from "./Pages/Wallet/Deposit";
import Withdraw from "./Pages/Wallet/Withdraw";
import UpdateBankAccount from "./Pages/Wallet/UpdateBank";
import Cuppons from "./Pages/ReusableComponent/Cuppons";
import RedeemBonus from "./Pages/ReusableComponent/Reedem";
import Bonus from "./Pages/ReusableComponent/Bonus";
import Notification from "./Pages/ReusableComponent/Notification";
import PersonalInfo from "./Pages/ReusableComponent/PrsonalInfo";
import DepositHistory from "./Pages/Wallet/DepositHistory";
import BetHistory from "./Pages/Wallet/BetHistory";
import ProfitLoss from "./Pages/Wallet/ProfitLoss";
import ChangePassword from "./Auth/ChangePassword";
import DownloadApkPage from "./Pages/ReusableComponent/DownloadApk";
import AccountStatement from "./Pages/Wallet/AccountStatement";
import AvitatorLayout from "./Pages/InhouseGames/AviatorGame/AvitatorLayout";
import WinGo from "./Pages/InhouseGames/Lottery/WinGo";
import ChickenRoadLayout from "./Pages/InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout";
import AffiliatePage from "./Pages/ReusableComponent/Affilation";
import ProfilePage2 from "./Pages/ReusableComponent/ProfilePage2";
import ForgetUserName from "./Auth/ForgetUserName";
import PendingBets from "./Pages/Wallet/PendingBets";
import CreateCampaign from "./Pages/ReusableComponent/CreateCampaign";
import Statistics from "./Pages/ReusableComponent/Statistics";
import WithdrawAffilation from "./Pages/ReusableComponent/WithdrawAffilation";
import WithdrawFunds from "./Pages/ReusableComponent/WithdrawFunds";
import Learn from "./Pages/ReusableComponent/Learn";
import CryptoAddAccount from "./Pages/Wallet/CryptoAddAccount";
import CryptoDeposit from "./Pages/Wallet/CryptoDeposit";
import WithdrawHistory from "./Pages/Wallet/WithdrawHistory";
import BankWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/BankWithdraw";
import CryptoWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/CryptoWithdraw";
import WinbhaiWallet from "./Pages/ReusableComponent/AffilationWithdraw/WinbhaiWallet";
import WhatsupWithdraw from "./Pages/ReusableComponent/AffilationWithdraw/WhatsupWithdraw";
import { useNavigate } from "react-router-dom";
// Import the PrivateRoute component
import PrivateRoute from "./privateRoute";
import PrivacyPolicy from "./Pages/LegalCompliance/PrivacyPolicy";
import ResponsibleGambling from "./Pages/LegalCompliance/ResponsibleGambling";
import RulesAndRegulation from "./Pages/LegalCompliance/RulesAndRegulation";
import PromotionHome from "./Pages/PromotionAndEarn/PromotionHome";
import SubordinateData from "./Pages/PromotionAndEarn/SubordinateData";
import InvitationRules from "./Pages/PromotionAndEarn/InvitationRule";
import RebateRatio from "./Pages/PromotionAndEarn/RebetRatio";
import Commissiondetail from "./Pages/PromotionAndEarn/Commissiondetail";
import AgentLine from "./Pages/PromotionAndEarn/AgentLine";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<FrogetPassword />} />
          {/* Protected Routes - use PrivateRoute for authentication check */}
          <Route path="/" element={<Home />} />
          <Route
            path="/needhelp"
            element={
              <PrivateRoute>
                <NeedHelp />
              </PrivateRoute>
            }
          />
          <Route
            path="/game"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
          <Route
            path="/game/:tabName"
            element={
              <PrivateRoute>
                <Game />
              </PrivateRoute>
            }
          />
          {/* <Route path="/game/:tabName" element={<Game />} /> */}
          <Route
            path="/deposit"
            element={
              <PrivateRoute>
                <Deposit />
              </PrivateRoute>
            }
          />
          <Route
            path="/withdraw"
            element={
              <PrivateRoute>
                <Withdraw />
              </PrivateRoute>
            }
          />
          <Route
            path="/updateAccount"
            element={
              <PrivateRoute>
                <UpdateBankAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/CryptoAdd"
            element={
              <PrivateRoute>
                <CryptoAddAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/cuppon"
            element={
              <PrivateRoute>
                <Cuppons />
              </PrivateRoute>
            }
          />
          <Route
            path="/RedeemBonus"
            element={
              <PrivateRoute>
                <RedeemBonus />
              </PrivateRoute>
            }
          />
          <Route
            path="/Bonus"
            element={
              <PrivateRoute>
                <Bonus />
              </PrivateRoute>
            }
          />
          <Route
            path="/Notification"
            element={
              <PrivateRoute>
                <Notification />
              </PrivateRoute>
            }
          />
          <Route
            path="/Info"
            element={
              <PrivateRoute>
                <PersonalInfo />
              </PrivateRoute>
            }
          />
          <Route
            path="/depositHistory"
            element={
              <PrivateRoute>
                <DepositHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/withdrawHistory"
            element={
              <PrivateRoute>
                <WithdrawHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/betHistory"
            element={
              <PrivateRoute>
                <BetHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/profitLoss"
            element={
              <PrivateRoute>
                <ProfitLoss />
              </PrivateRoute>
            }
          />
          <Route
            path="/accountStatement"
            element={
              <PrivateRoute>
                <AccountStatement />
              </PrivateRoute>
            }
          />
          <Route
            path="/changePassword"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/downloadAPK"
            element={
              <PrivateRoute>
                <DownloadApkPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/aviator"
            element={
              <PrivateRoute>
                <AvitatorLayout />
              </PrivateRoute>
            }
          />
          <Route
            path="/lottery/wingo"
            element={
              <PrivateRoute>
                <WinGo />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/chickenRoadGame"
            element={<PrivateRoute element={<ChickenRoadLayout />} />}
          /> */}
          <Route
            path="/chickenRoadGame"
            element={
              <PrivateRoute>
                <ChickenRoadLayout component={<Game />} />
              </PrivateRoute>
            }
          />
          <Route
            path="/affilationDashboard"
            element={
              <PrivateRoute>
                <AffiliatePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/BankWithdraw"
            element={
              <PrivateRoute>
                <BankWithdraw />
              </PrivateRoute>
            }
          />
          <Route
            path="/CryptoWithdraw"
            element={
              <PrivateRoute>
                <CryptoWithdraw />
              </PrivateRoute>
            }
          />
          <Route
            path="/WhatsupWithdraw"
            element={
              <PrivateRoute>
                <WhatsupWithdraw />
              </PrivateRoute>
            }
          />
          <Route
            path="/WinbhaiWallet"
            element={
              <PrivateRoute>
                <WinbhaiWallet />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/affilation"
            element={<ProfilePage2  />}
          /> */}
          <Route
            path="/affilation"
            element={
              <PrivateRoute>
                <ProfilePage2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/ForgetUserName"
            element={
              <PrivateRoute>
                <ForgetUserName />
              </PrivateRoute>
            }
          />
          <Route
            path="/PendingBets"
            element={
              <PrivateRoute>
                <PendingBets />
              </PrivateRoute>
            }
          />
          <Route
            path="/PromoteAndEarn"
            element={
              <PrivateRoute>
                <PromotionHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotion/subordinatedata"
            element={
              <PrivateRoute>
                <SubordinateData />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotion/invitationrules"
            element={
              <PrivateRoute>
                <InvitationRules />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotion/rebateratio"
            element={
              <PrivateRoute>
                <RebateRatio />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotion/commissiondetail"
            element={
              <PrivateRoute>
                <Commissiondetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/promotion/agentLine"
            element={
              <PrivateRoute>
                <AgentLine />
              </PrivateRoute>
            }
          />
          <Route path="/CreateCampaign" element={<CreateCampaign />} />
          <Route
            path="/Statistics"
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route
            path="/WithdrawFunds"
            element={
              <PrivateRoute>
                <WithdrawFunds />
              </PrivateRoute>
            }
          />
          <Route
            path="/CryptoDeposit"
            element={
              <PrivateRoute>
                <CryptoDeposit />
              </PrivateRoute>
            }
          />
          <Route
            path="/Learn"
            element={
              <PrivateRoute>
                <Learn />
              </PrivateRoute>
            }
          />
          <Route
            path="/WithdrawAffilation"
            element={
              <PrivateRoute>
                <WithdrawAffilation />
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <PrivateRoute>
                <PrivacyPolicy />
              </PrivateRoute>
            }
          />
          <Route
            path="/resposibleGambling"
            element={
              <PrivateRoute>
                <ResponsibleGambling />
              </PrivateRoute>
            }
          />
          <Route
            path="/rules"
            element={
              <PrivateRoute>
                <RulesAndRegulation />
              </PrivateRoute>
            }
          />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

