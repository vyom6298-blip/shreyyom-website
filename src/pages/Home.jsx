import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import CertificateTicker from '../components/sections/CertificateTicker';
import BusinessNeeds from '../components/sections/BusinessNeeds';
import FeaturedServices from '../components/sections/FeaturedServices';
import IndiaMapExplorer from '../components/sections/IndiaMapExplorer';
import SchemeComparisonTable from '../components/sections/SchemeComparisonTable';
import WhyShreyyom from '../components/sections/WhyShreyyom';
import Section80IAC from '../components/sections/Section80IAC';
import ProcessPinned from '../components/sections/ProcessPinned';
import StatsCounter from '../components/sections/StatsCounter';
import ClientExperience from '../components/sections/ClientExperience';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shreyyom Consultancy — Turning Business Potential into Funded Reality | MSME Loans & Scheme Advisory</title>
        <meta
          name="description"
          content="Shreyyom Consultancy — Premier Indian funding intelligence & startup advisory platform. Secure MSME loans, PMEGP subsidies, CGTMSE credit guarantees, Section 80-IAC 100% Tax Holiday, and DPIIT recognition."
        />
        <meta
          name="keywords"
          content="Shreyyom, Shreyyom Consultancy, MSME funding intelligence, PMEGP loan subsidy, CGTMSE credit guarantee, Section 80-IAC tax exemption, Startup India DPIIT recognition, Pan India funding advisor, Vyom Suthar"
        />
        <link rel="canonical" href="https://shreyyom.com/" />
      </Helmet>

      <Hero />
      <CertificateTicker />
      <TrustStrip />
      <BusinessNeeds />
      <FeaturedServices />
      <IndiaMapExplorer />
      <SchemeComparisonTable />
      <WhyShreyyom />
      <Section80IAC />
      <ProcessPinned />
      <StatsCounter />
      <ClientExperience />
      <FinalCTA />
    </>
  );
}
