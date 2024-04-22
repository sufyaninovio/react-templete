import { Route, Routes } from "react-router-dom";
import LayOut from "./Layout/Layout";
import { Home, NotFound, ContactUs, Faqs, Services, PrivacyPolicy, TermsConditions, GetQuoteSec, ServiceDetails, Packages, Checkout, AboutUs } from "../pages";
import ThankYou from "../pages/ThankYou/ThankYou";

const PublicRoutes = () => {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/get-quote" element={<GetQuoteSec />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayOut>
  );
};

export default PublicRoutes;
