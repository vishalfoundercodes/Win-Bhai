import AffiliateModal from "../Pages/ReusableComponent/AddAffiliation";

export const baseUrlWinBhai = "https://root.winbhai.in";
export const configModalWinBhai = `${baseUrlWinBhai}/api/`

export const referral_url = "https://root.winbhai.in/";

export const configModalApk = `${baseUrlWinBhai}/apk/`;
// export const configModalBanner = `${baseUrlWinBhai}/public/api/`;
// https://root.winbhai.in/public/api/about_us?type=10
// https://root.winbhai.in/public/api/coupon_show
// https://root.winbhai.in/api/customer_service

const apis = {
  sendOtp: "https://otp.fctechteam.org/send_otp.php?mode=test&digit=4&mobile=",
  verifyOtp: "https://otp.fctechteam.org/verifyotp.php?mobile=",
  // https://root.winbhai.in/api/slider_image_view
  // https://root.winbhai.in/api/getAllNotices
  // https://root.winbhai.in/api/get-category-language-data?category_id=
  learn: `${configModalWinBhai}get-category-language-data?category_id=`,
  // https://root.winbhai.in/api/campaign_summary
  // https://root.winbhai.in/api/campaign_analytics
  // https://root.winbhai.in/api/campaign_commission_summary

  affiliateDashboard: `${configModalWinBhai}campaign_summary`,
  affiliateStatics: `${configModalWinBhai}campaign_analytics`,
  affiliateWithdrawHome: `${configModalWinBhai}campaign_commission_summary`,
  affiliateWithdraw: `${configModalWinBhai}affiliate_withdraw`,
  affiliation_usdtwithdraw: `${configModalWinBhai}affiliation_usdtwithdraw`,
  affiliation_wallet_add: `${configModalWinBhai}affiliation_wallet_add`,
  gift_cart_apply: `${configModalWinBhai}gift_cart_apply`,
  subcategories_by_cat: `${configModalWinBhai}subcategories-by-cat`,

  // https://root.winbhai.in/api/get_casino_lobby
  get_casino_lobby: `${configModalWinBhai}get_casino_lobby`,

  sponserImage: `${configModalWinBhai}getAllNotices`,
  bannerImage: `${configModalWinBhai}slider_image_view`,
  createUserId: `${configModalWinBhai}otp-register`,
  register: `${configModalWinBhai}register`,
  login: `${configModalWinBhai}login`,
  profile: `${configModalWinBhai}profile?id=`,
  changePassword: `${configModalWinBhai}changePassword`,
  fundTransfer: `${configModalWinBhai}main_wallet_transfers`,
  policy: `${configModalWinBhai}about_us?type=`, //type 11- resposible gambling , 12-privacy policy, 10- rules and regulation
  coupon_show: `${configModalWinBhai}coupon_show`,
  forget_password: `${configModalWinBhai}forget_pass`,
  forget_username: `${configModalWinBhai}forget_username`,
  customer_service: `${configModalWinBhai}customer_service`,
  profit_loss: `${configModalWinBhai}betSummaryProfit_loss`,
  // --------------

  withdraw_history: `${configModalWinBhai}withdraw_history?user_id=`,
  download_apk: `${configModalApk}chickenroad.apk`,
  bet_value: `${configModalWinBhai}bet_values`,
  add_account: `${configModalWinBhai}add_account`,
  account_view: `${configModalWinBhai}Account_view?user_id=`,
  add_usdt_wallet_address: `${configModalWinBhai}add_usdt_wallet_address`,
  view_usdt_wallet_address: `${configModalWinBhai}view_usdt_wallet_address`,
  usdtwithdraw: `${configModalWinBhai}usdtwithdraw`,
  indianpay_withdraw: `${configModalWinBhai}indianpay_withdraw`,
  withdraw: `${configModalWinBhai}withdraw`,
  promotionData: `${configModalWinBhai}agency-promotion-data-`,
  subordinateData: `${configModalWinBhai}subordinate-data`,
  tier: `${configModalWinBhai}tier`,

  // https://root.winbhai.in/api/jilliGame

  //wingo game urls
  wingo_bet: `${configModalWinBhai}bets`,
  wingo_my_history: `${configModalWinBhai}bet_history`,
  wingo_game_history: `${configModalWinBhai}results`,
  wingo_win_amount_announcement: `${configModalWinBhai}win-amount`,
  get_result_trx: `${configModalWinBhai}get_result`,

  //chicken road game
  chickenMultplier: `${configModalWinBhai}multiplier`,
  chickenCashout: `${configModalWinBhai}cashout`,
  chickenbet: `${configModalWinBhai}bet`,
  login: `${configModalWinBhai}login`,
  register: `${configModalWinBhai}register`,
  // profile: `${configModalWinBhai}profile`,
  updateProfile: `${configModalWinBhai}update_profile`,
  betHisotry: `${configModalWinBhai}history?user_id=`,
  getPaymentMethod: `${configModalWinBhai}adminMethodPayment?type=`,
  add_amount: `${configModalWinBhai}add_amount`,
  withdrawal_request: `${configModalWinBhai}withdrawal_request`,
  avatar_request: `${configModalWinBhai}avatar_list`,
  avatarUpdate_request: `${configModalWinBhai}update_avatar?user_id=`,
  gameRule_request: `${configModalWinBhai}getGameRules`,
  deposit_history: `${configModalWinBhai}deposit_history?user_id=`,
  withdraw_history: `${configModalWinBhai}withdrawHistory?user_id=`,
  download_apk: `${configModalApk}chickenroad.apk`,
  banner_image: `${configModalWinBhai}getBanners`,
  bet_value: `${configModalWinBhai}bet_values`,

  //jilli  game apis
  // all_game_list: `${configModalWinBhai}getJilliGames`,
  // https://root.winbhai.in/api/get_brands
  all_game_list: `${configModalWinBhai}get_brands`,
  all_jilli_game_list: `https://softapi.gt.tc/brands.php?brand_id=49`,
  jilliGame: `${configModalWinBhai}jilliGame`,
  openGame: `${configModalWinBhai}openGame`,

  // general apis
  profile_winbhai: `${configModalWinBhai}profile?id=`,
  betHistory_winbhai: `${configModalWinBhai}betHistory_winbhai`,
  pendingBets_winbhai: `${configModalWinBhai}pending-bets`,
  accountStatement: `${configModalWinBhai}AccountStatement`,

  //wallet
  pay_modes: `${configModalWinBhai}pay_modes`,
  // https://root.winbhai.in/api/crypto
  // https://root.winbhai.in/api/game_subcat_sliders

  game_subcat_sliders: `${configModalWinBhai}game_subcat_sliders`,
  crypto: `${configModalWinBhai}crypto`,
  bappa_venture: `${configModalWinBhai}bappa_venture`,
  create_campaign: `${configModalWinBhai}campaign_create`,
  campaign_list: `${configModalWinBhai}campaign_list`,
  get_manual_details: `${configModalWinBhai}get-qr-codes`,
  manual_payin: `${configModalWinBhai}manual_payin`,

  // https://root.winbhai.in/public/api/gift_redeem_list?userid=40
  gift_redeem_list: `${configModalWinBhai}gift_redeem_list?userid=`,
  // https://root.winbhai.in/api/bonus_info
  bonus_info: `${configModalWinBhai}bonus_info`,
  contact_info: `${configModalWinBhai}contact_info`,
  // https://root.winbhai.in/api/contact_info

};

export default apis
