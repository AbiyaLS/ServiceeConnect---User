import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Original Page Imports
import U18_Request_Service from "./pages/U18_Request_Service";
import U17_PROVIDER_PROFILE from "./pages/U17_PROVIDER_PROFILE";
import U19Bookings from "./pages/U19_Bookings";
import U20_Booking_Details from "./pages/U20_Booking_Details";
import U21_PAYMENT_METHODS from "./pages/U21_PAYMENT_METHODS";
import U21_B_ADD_NEW_CARD from "./pages/U21_B_ADD_NEW_CARD";
import U22PaymentSuccessMessage from "./pages/U22_PAYMENT_SUCCESS_MESSAGE";
import U23EReceipt from "./pages/U23_E_RECEIPT";

// New Page Imports
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Sucess from "./pages/Sucess";

// New "Pages-dha" Imports
import Page11 from "./pages/Page11.jsx";
import Page12 from "./pages/Page12.jsx";
import Page13 from "./pages/Page13.jsx";
import Page14 from "./pages/Page14.jsx";
import Page15 from "./pages/Page15.jsx";
import Page16 from "./pages/Page16.jsx";
import Page17 from "./pages/SirviceprovidersPage.jsx";
import Page18 from "./pages/SirvicesPage.jsx";

// New Pages by Abhishek
import PageU24 from "./pages/PageU24.jsx";
import PageU25 from "./pages/PageU25.jsx";
import PageU26 from "./pages/PageU26.jsx";
import PageU27 from "./pages/PageU27.jsx";
import PageU28 from "./pages/PageU28.jsx";
import PageU29 from "./pages/PageU29.jsx";
import PageU30 from "./pages/PageU30.jsx";
import PageU31 from "./pages/PageU31.jsx";
import PageMU1 from "./pages/PageMU1.jsx";
import PageU32 from "./pages/PageU32.jsx";
import PageU33 from "./pages/PageU33.jsx";
import PageU37 from "./pages/PageU37.jsx";
import PageM14 from "./pages/PageM14.jsx";
import PageU36 from "./pages/PageU36.jsx";
import PageU40 from "./pages/PageU40.jsx";
import PageU44 from "./pages/PageU44.jsx";
import PageU39 from "./pages/PageU39.jsx";

import PageU48 from "./pages/PageU48.jsx";
import Logout from "./pages/Logout.jsx";

import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import History from "./pages/History.jsx";
import PageU45 from "./pages/PageU45.jsx";
import PageU43 from "./pages/PageU43.jsx";
import Privacy from "./pages/Privacy.jsx";
import PageU38 from "./pages/PageU38.jsx";

import Page_45 from "./pages/Page_45.jsx";
import Page_41 from "./pages/Page_41.jsx";
import Page_43 from "./pages/Page_43.jsx";
import Page_44 from "./pages/Page_44.jsx";
import Page_46 from "./pages/Page_46.jsx";
import Page_48 from "./pages/Page_48.jsx";
import Page9 from "./pages/Page9.jsx";
import OfferPage from "./pages/OfferPage.jsx";

function App() {
  return (
    <BrowserRouter>

      <div>
        <Routes>
          {/* Original Routes */}
          <Route
            path="/U18_Request_Service"
            element={<U18_Request_Service />}
          />
          <Route
            path="/U17_PROVIDER_PROFILE/*"
            element={<U17_PROVIDER_PROFILE />}
          />
          <Route path="/U19Bookings/*" element={<U19Bookings />} />
          <Route
            path="/U20_Booking_Details/*"
            element={<U20_Booking_Details />}
          />
          <Route
            path="/U21_PAYMENT_METHODS/*"
            element={<U21_PAYMENT_METHODS />}
          />
          <Route
            path="/U21_B_ADD_NEW_CARD/*"
            element={<U21_B_ADD_NEW_CARD />}
          />
          <Route
            path="/U22PaymentSuccessMessage/*"
            element={<U22PaymentSuccessMessage />}
          />
          <Route path="/U23EReceipt/*" element={<U23EReceipt />} />

          

          {/* New Page Routes */}
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page14" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page16" element={<Page16 />} />
          <Route path="/SirviceProvidersPage" element={<Page17 />} />
          <Route path="/SirvicesPage" element={<Page18 />} />
          <Route path="/offers" element={<OfferPage />} />


          {/* New Pages Routes by Abhishek */}
          <Route path="/page24" element={<PageU24 />} />
          <Route path="/pageM1" element={<PageM14 />} />
          <Route path="/page25" element={<PageU25 />} />
          <Route path="/page26" element={<PageU26 />} />
          <Route path="/page27" element={<PageU27 />} />
          <Route path="/page28" element={<PageU28 />} />
          <Route path="/page29" element={<PageU29 />} />
          <Route path="/page30" element={<PageU30 />} />
          <Route path="/page31" element={<PageU31 />} />
          <Route path="/page32" element={<PageMU1 />} />
          <Route path="/pageM32" element={<PageU32 />} />
          <Route path="/pageM33" element={<PageU33 />} />
          <Route path="/pageM37" element={<PageU37 />} />

          {/*---------- U32-U40 by Abiya----------------- */}
          <Route path="/pageu36" element={<PageU36 />} />
          <Route path="/pageu40" element={<PageU40 />} />
          <Route path="/pageu44" element={<PageU44 />} />
          <Route path="/pageu39" element={<PageU39 />} />
          {/* <Route path="/pageu41" element={<PageU41 />}>
            <Route index element={<Faq_50 />} />
            <Route path="faq" element={<Faq_50 />} />
            <Route path="contact" element={<ContactUs_51 />} />
          </Route> */}
          <Route path="/pageu48" element={<PageU48 />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/pageu45" element={<PageU45 />} />
          <Route path="/pageu43" element={<PageU43 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pageu38" element={<PageU38 />} />

          {/*----------------------- thanzeeh pages u41-u48--------------------------------  */}

          <Route path="/Page_41" element={<Page_41 />} />
          <Route path="/Page_45" element={<Page_45 />} />

          <Route path="/Page_41" element={<Page_41 />} />
          <Route path="/Page_43" element={<Page_43 />} />

          <Route path="/Page_44" element={<Page_44 />} />
          <Route path="/Page_46" element={<Page_46 />} />

          <Route path="/Page_48" element={<Page_48 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
