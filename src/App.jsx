import { usePathname } from './usePathname'
import HomePage from './pages/HomePage'
import MediaPage from './pages/MediaPage'
import CareersPage from './pages/CareersPage'
import InvestorRelationsPage from './pages/InvestorRelationsPage'
import ResearchPage from './pages/ResearchPage'
import ResearchContactPage from './pages/ResearchContactPage'
import ResponsibilityPage from './pages/ResponsibilityPage'
import CorporatesPage from './pages/CorporatesPage'
import AssetManagersPage from './pages/AssetManagersPage'
import AlternativeAssetManagersPage from './pages/AlternativeAssetManagersPage'
import FinancialSponsorsPage from './pages/FinancialSponsorsPage'
import BrokerDealersPage from './pages/BrokerDealersPage'
import InsurersReinsurersPage from './pages/InsurersReinsurersPage'
import CorporatesClientPage from './pages/CorporatesClientPage'
import LawFirmsPage from './pages/LawFirmsPage'
import FinancialInstitutionsPage from './pages/FinancialInstitutionsPage'
import SovereignsSupranationalsPage from './pages/SovereignsSupranationalsPage'
import CorporateBankSolutionsPage from './pages/CorporateBankSolutionsPage'
import CashManagementPage from './pages/CashManagementPage'
import SecuritiesServicesPage from './pages/SecuritiesServicesPage'
import SustainableFinancePage from './pages/SustainableFinancePage'
import TradeFinancePage from './pages/TradeFinancePage'
import TrustAndAgencyServicesPage from './pages/TrustAndAgencyServicesPage'
import FlowCaseStudiesPage from './pages/FlowCaseStudiesPage'
import InvestmentBankSolutionsPage from './pages/InvestmentBankSolutionsPage'
import FixedIncomeAndCurrenciesPage from './pages/FixedIncomeAndCurrenciesPage'
import InvestmentBankingAndCapitalMarketsPage from './pages/InvestmentBankingAndCapitalMarketsPage'
import InvestmentBankResearchPage from './pages/InvestmentBankResearchPage'
import AssetManagementSolutionsPage from './pages/AssetManagementSolutionsPage'
import ClientAccessSolutionsPage from './pages/ClientAccessSolutionsPage'
import CorporateApiConnectivityPage from './pages/CorporateApiConnectivityPage'
import AutobahnLoginPage from './pages/AutobahnLoginPage'
import GlobalOfficeLoginPage from './pages/GlobalOfficeLoginPage'
import IntegrationAndMessagingProductsPage from './pages/IntegrationAndMessagingProductsPage'
import InternationalPaymentTrackingPage from './pages/InternationalPaymentTrackingPage'
import InvestorReportingPage from './pages/InvestorReportingPage'
import InvestorReportingBrowseDealsPage from './pages/InvestorReportingBrowseDealsPage'
import SecureEmailCommunicationPage from './pages/SecureEmailCommunicationPage'
import WebAbirsLoginPage from './pages/WebAbirsLoginPage'
import FocusTopicsPage from './pages/FocusTopicsPage'
import CyberSecurityPage from './pages/CyberSecurityPage'
import FlowTechnologyPage from './pages/FlowTechnologyPage'
import Iso20022OverviewPage from './pages/Iso20022OverviewPage'
import SepaInstantPaymentsVopPage from './pages/SepaInstantPaymentsVopPage'
import RegionalDossiersPage from './pages/RegionalDossiersPage'
import EventReportsPage from './pages/EventReportsPage'
import MagazinesPage from './pages/MagazinesPage'
import CapitalMarketsGuidesPage from './pages/CapitalMarketsGuidesPage'
import ChinaCompassGuidePage from './pages/ChinaCompassGuidePage'
import MarhabaSaudiArabiaGuidePage from './pages/MarhabaSaudiArabiaGuidePage'
import NamasteIndiaGuidePage from './pages/NamasteIndiaGuidePage'
import Asean6CapitalMarketsGuidePage from './pages/Asean6CapitalMarketsGuidePage'
import SalamIndonesiaGuidePage from './pages/SalamIndonesiaGuidePage'
import ThirdPartyArticlesPage from './pages/ThirdPartyArticlesPage'
import MarketplacePaymentsPage from './pages/MarketplacePaymentsPage'
import GlobalRecognitionPage from './pages/GlobalRecognitionPage'
import PrivateBankPage from './pages/PrivateBankPage'
import LocationsPage from './pages/LocationsPage'
import ClientLoginsPage from './pages/ClientLoginsPage'
import ProductsAndServicesPage from './pages/ProductsAndServicesPage'
import MobileServicesPage from './pages/MobileServicesPage'
import DwsGlobalAssetManagementPage from './pages/DwsGlobalAssetManagementPage'
import InvestmentBankPage from './pages/InvestmentBankPage'
import './App.css'

function App() {
  const path = usePathname()

  if (path === '/media' || path.startsWith('/media/')) {
    return <MediaPage />
  }

  if (path === '/careers' || path.startsWith('/careers/')) {
    return <CareersPage />
  }

  if (path === '/investor-relations' || path.startsWith('/investor-relations/')) {
    return <InvestorRelationsPage />
  }

  if (path === '/research/contact') {
    return <ResearchContactPage />
  }

  if (path === '/research' || path.startsWith('/research/')) {
    return <ResearchPage />
  }

  if (path === '/solutions/corporate-bank-solutions/cash-management') {
    return <CashManagementPage />
  }

  if (path === '/solutions/corporate-bank-solutions/securities-services') {
    return <SecuritiesServicesPage />
  }

  if (
    path === '/solutions/corporate-bank-solutions/sustainable-finance' ||
    path === '/solutions/Corporate-bank-solutions/sustainable-finance'
  ) {
    return <SustainableFinancePage />
  }

  if (path === '/solutions/corporate-bank-solutions/trade-finance') {
    return <TradeFinancePage />
  }

  if (path === '/solutions/client-access-solutions/international-payment-tracking') {
    return <InternationalPaymentTrackingPage />
  }

  if (
    path === '/solutions/client-access-solutions/secure-exchange-of-information-via-e-mail' ||
    path === '/solutions/Client-access-solutions/secure-exchange-of-information-via-e-mail'
  ) {
    return <SecureEmailCommunicationPage />
  }

  if (
    path === '/investor-reporting/browse-deals' ||
    path === '/solutions/client-access-solutions/investor-reporting/browse-deals'
  ) {
    return <InvestorReportingBrowseDealsPage />
  }

  if (
    path === '/investor-reporting' ||
    path === '/solutions/client-access-solutions/investor-reporting'
  ) {
    return <InvestorReportingPage />
  }

  if (
    path === '/solutions/client-access-solutions/integration-and-messaging-products'
  ) {
    return <IntegrationAndMessagingProductsPage />
  }

  if (path === '/global-office/login' || path === '/global-office') {
    return <GlobalOfficeLoginPage />
  }

  if (path === '/web-abirs/login' || path === '/web-abirs') {
    return <WebAbirsLoginPage />
  }

  if (path === '/autobahn/login' || path === '/autobahn') {
    return <AutobahnLoginPage />
  }

  if (path === '/solutions/client-access-solutions/corporate-api-connectivity') {
    return <CorporateApiConnectivityPage />
  }

  if (path === '/solutions/client-access-solutions') {
    return <ClientAccessSolutionsPage />
  }

  if (path === '/solutions/asset-management-solutions') {
    return <AssetManagementSolutionsPage />
  }

  if (path === '/solutions/investment-bank-solutions/research') {
    return <InvestmentBankResearchPage />
  }

  if (path === '/solutions/investment-bank-solutions/investment-banking-and-capital-markets') {
    return <InvestmentBankingAndCapitalMarketsPage />
  }

  if (path === '/solutions/investment-bank-solutions/fixed-income-and-currencies') {
    return <FixedIncomeAndCurrenciesPage />
  }

  if (path === '/solutions/investment-bank-solutions') {
    return <InvestmentBankSolutionsPage />
  }

  if (path === '/solutions/corporate-bank-solutions/trust-and-agency-services') {
    return <TrustAndAgencyServicesPage />
  }

  if (path === '/solutions/corporate-bank-solutions') {
    return <CorporateBankSolutionsPage />
  }

  if (path === '/clients/global-recognition') {
    return <GlobalRecognitionPage />
  }

  if (path === '/clients/financial-sponsors') {
    return <FinancialSponsorsPage />
  }

  if (path === '/clients/broker-dealers') {
    return <BrokerDealersPage />
  }

  if (path === '/clients/insurers-and-reinsurers') {
    return <InsurersReinsurersPage />
  }

  if (path === '/clients/corporates') {
    return <CorporatesClientPage />
  }

  if (path === '/clients/law-firms') {
    return <LawFirmsPage />
  }

  if (path === '/clients/financial-institutions') {
    return <FinancialInstitutionsPage />
  }

  if (path === '/clients/sovereigns-supranationals-and-agencies') {
    return <SovereignsSupranationalsPage />
  }

  if (path === '/clients/asset-managers/alternative-asset-managers') {
    return <AlternativeAssetManagersPage />
  }

  if (path === '/clients/asset-managers') {
    return <AssetManagersPage />
  }

  if (
    path ===
      '/solutions/corporate-bank-solutions/cash-management/merchant-solutions/marketplace-payments' ||
    path ===
      '/solutions/Corporate-bank-solutions/cash-management/merchant-solutions/marketplace-payments'
  ) {
    return <MarketplacePaymentsPage />
  }

  if (
    path === '/in-focus/focus-topics/iso20022/overview' ||
    path === '/in-focus/Focus-topics/iso20022/overview' ||
    path === '/in-focus/focus-topics/iso20022' ||
    path === '/in-focus/Focus-topics/iso20022'
  ) {
    return <Iso20022OverviewPage />
  }

  if (
    path === '/in-focus/focus-topics/instant-payments-vop' ||
    path === '/in-focus/Focus-topics/instant-payments-vop'
  ) {
    return <SepaInstantPaymentsVopPage />
  }

  if (
    path === '/in-focus/focus-topics/digitalisation' ||
    path === '/in-focus/Focus-topics/digitalisation' ||
    path === '/flow/topics/technology' ||
    path === '/Topics/technology' ||
    path === '/Topics/technology/'
  ) {
    return <FlowTechnologyPage />
  }

  if (
    path === '/in-focus/focus-topics/cyber-security' ||
    path === '/in-focus/Focus-topics/cyber-security'
  ) {
    return <CyberSecurityPage />
  }

  if (path === '/in-focus/focus-topics' || path === '/in-focus/Focus-topics') {
    return <FocusTopicsPage />
  }

  if (
    path === '/in-focus/regional-dossiers' ||
    path === '/in-focus/Regional-dossiers'
  ) {
    return <RegionalDossiersPage />
  }

  if (
    path === '/in-focus/event-reports' ||
    path === '/in-focus/Event-reports' ||
    path === '/in-focus/event-reports/' ||
    path.startsWith('/in-focus/event-reports/') ||
    path.startsWith('/in-focus/Event-reports/')
  ) {
    return <EventReportsPage />
  }

  if (path === '/publications/magazines' || path === '/publications/Magazines') {
    return <MagazinesPage />
  }

  if (
    path === '/publications/market-focused-capital-markets-guides' ||
    path === '/publications/Market-focused-capital-markets-guides'
  ) {
    return <CapitalMarketsGuidesPage />
  }

  if (
    path === '/publications/magazines/china-compass' ||
    path === '/publications/Magazines/china-compass'
  ) {
    return <ChinaCompassGuidePage />
  }

  if (
    path === '/publications/magazines/marhaba-saudi-arabia' ||
    path === '/publications/Magazines/marhaba-saudi-arabia'
  ) {
    return <MarhabaSaudiArabiaGuidePage />
  }

  if (
    path === '/publications/magazines/namaste-india' ||
    path === '/publications/magazines/namaste-india/' ||
    path === '/publications/magazines/namaste-india/index' ||
    path === '/publications/Magazines/namaste-india'
  ) {
    return <NamasteIndiaGuidePage />
  }

  if (
    path === '/publications/magazines/navigating-asean-6-capital-markets' ||
    path === '/publications/Magazines/navigating-asean-6-capital-markets'
  ) {
    return <Asean6CapitalMarketsGuidePage />
  }

  if (
    path === '/publications/magazines/salam-indonesia' ||
    path === '/publications/Magazines/salam-indonesia'
  ) {
    return <SalamIndonesiaGuidePage />
  }

  if (
    path === '/publications/third-party-articles' ||
    path === '/publications/third-party-articles/' ||
    path === '/publications/Third-party-articles'
  ) {
    return <ThirdPartyArticlesPage />
  }

  if (path === '/flow/case-studies' || path.startsWith('/flow/case-studies/')) {
    return <FlowCaseStudiesPage />
  }

  if (path === '/corporates' || path.startsWith('/corporates/')) {
    return <CorporatesPage />
  }

  if (path === '/private-bank' || path.startsWith('/private-bank/')) {
    return <PrivateBankPage />
  }

  if (path === '/locations' || path.startsWith('/locations/')) {
    return <LocationsPage />
  }

  if (path === '/client-logins' || path.startsWith('/client-logins/')) {
    return <ClientLoginsPage />
  }

  if (path === '/products-and-services' || path.startsWith('/products-and-services/')) {
    return <ProductsAndServicesPage />
  }

  if (path === '/mobile-services' || path.startsWith('/mobile-services/')) {
    return <MobileServicesPage />
  }

  if (path === '/dws' || path.startsWith('/dws/')) {
    return <DwsGlobalAssetManagementPage />
  }

  if (path === '/investment-bank' || path.startsWith('/investment-bank/')) {
    return <InvestmentBankPage />
  }

  if (path === '/responsibility' || path.startsWith('/responsibility/')) {
    return <ResponsibilityPage />
  }

  return <HomePage />
}

export default App
