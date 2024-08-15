import loadData from "./assets/plugins/loadData.js";
///PAGES
import About from "./pages/about/about.jsx";
import Events from "./pages/event/event.jsx";
import HomePage from "./pages/Home.jsx";
import News from "./pages/news/news.jsx";
// import News_One from "./pages/news/newsOpen.jsx";
import Partners from "./pages/partners/partners.jsx";
import Sevan2023 from "./pages/sevan2023/upcommingNew.jsx";
import Sevan2024 from "./events/Sevan2024/index.jsx";
import Uae2024 from "./pages/uae2024/upcommingNew.jsx";
import UpcommingNew from "./pages/upcommingNew/upcommingNew.jsx";
// PAST PAGES
import Past_Page from "./pages/past/pageComponent.jsx";
import PastSpeakers from "./pages/past/section4.1.jsx";
import PastStartups from "./pages/past/section5.1.jsx";
// Zoom Form
// import AfterCovid19 from './pages/upcommingNew/zoom/form.jsx'
//Egypt Forms
import { Page_404 } from "./404.jsx";
import HolidayGOA from "./pages/holydayGoa/event_page.jsx";
import HolidayRAK from "./pages/holydayRakPast/event_page.jsx";
import Merch from "./pages/merch/index.jsx";
import Privacy from "./pages/privacy/index.jsx";
import TermsARM from "./pages/termsArm/index.jsx";
import TermsEN from "./pages/termsEn/index.jsx";

export const routes = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },

  {
    exact: true,
    path: "/privacy-policy",
    component: Privacy,
  },

  {
    exact: true,
    path: "/terms-conditions/en",
    component: TermsEN,
  },

  {
    exact: true,
    path: "/terms-conditions/arm",
    component: TermsARM,
  },
  {
    exact: true,
    path: "/upcoming-events/:event/",
    component: UpcommingNew,
  },

  {
    exact: true,
    path: "/upcoming-events/:event/:subpage",
    component: UpcommingNew,
  },

  {
    exact: true,
    path: "/upcoming-events/",
    component: Events,
  },
  {
    exact: true,
    path: "/uae-24/",
    component: Uae2024,
  },
  {
    exact: true,
    path: "/sevan2024/",
    component: Sevan2024,
  },
  {
    exact: true,
    path: "/sevan2023/",
    component: Sevan2023,
  },
  {
    exact: true,
    path: "/sss-holidays-india-vizag/",
    component: HolidayGOA,
  },
  {
    exact: true,
    path: "/sss-holidays-india-vizag/apply",
    component: HolidayGOA,
  },
  {
    exact: true,
    path: "/sss-holidays-uae-rak/",
    component: HolidayRAK,
  },
  {
    exact: true,
    path: "/merch",
    component: Merch,
  },

  {
    exact: true,
    path: "/sevan19/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/sevan18/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/sevan17/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/sevan16/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/uae18/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/india18/",
    component: Past_Page,
  },

  {
    exact: true,
    path: "/sevan19/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/sevan19/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/sevan18/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/sevan18/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/sevan17/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/sevan17/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/sevan16/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/sevan16/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/uae18/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/uae18/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/india18/speakers",
    component: PastSpeakers,
  },

  {
    exact: true,
    path: "/india18/startups",
    component: PastStartups,
  },

  {
    exact: true,
    path: "/events/",
    component: Events,
  },

  {
    exact: true,
    path: "/about-us/",
    component: About,
  },

  {
    exact: true,
    path: "/about-us/job",
    component: About,
  },

  {
    exact: true,
    path: "/about-us/job/:jobname",
    component: About, //Job
  },
  {
    exact: true,
    path: "/partners/",
    component: Partners,
  },

  {
    path: "/blog",
    exact: true,
    component: News,
  },

  // {
  //   path: "/blog/:id",
  //   exact: true,
  //   component: News_One,
  //   loadData: (params) =>
  //     loadData(
  //       `https://www.apis.seasidestartupsummit.com/news/?method=getNewsOne&id=${params.id}`
  //     ),
  // },
  {
    component: Page_404,
  },
];
