import loadData from './assets/plugins/loadData';
///PAGES 
import Home_Page_Newedition from './pages/firstPageNew/firstPageNew.jsx';
import UpcommingNew from './pages/upcommingNew/upcommingNew.jsx';
import Sevan2023 from './pages/sevan2023/upcommingNew.jsx';
import Sevan2024 from './pages/sevan2024/upcommingNew.jsx';
import Uae2024 from './pages/uae2024/upcommingNew.jsx';
import UpcommingNewOld from './pages/upcommingNew/upcommingNewOld.jsx';
import News from './pages/news/news.jsx';
import News_One from './pages/news/newsOpen.jsx';
import Events from './pages/event/event.jsx';
import About from './pages/about/about.jsx';
import Job from './pages/about/job.jsx';
import Startups from './pages/startupsNew/startup.jsx';
import Partners from './pages/partners/partners.jsx';
// PAST PAGES
import Past_Page from './pages/past/pageComponent.jsx';
import PastSpeakers from './pages/past/section4.1.jsx';
import PastStartups from './pages/past/section5.1.jsx';
// Zoom Form
// import AfterCovid19 from './pages/upcommingNew/zoom/form.jsx'
//Egypt Forms
import HolidayGOA from './pages/holydayGoa/event_page.jsx';
import HolidayRAK from './pages/holydayRakPast/event_page.jsx';
import Merch from './pages/merch/index.jsx';
import Privacy from './pages/privacy/index.jsx';
import { Page_404 } from './404.jsx';

export default [
    {
        exact: true,
        path: '/',
        component: Home_Page_Newedition
    },

    {
        exact: true,
        path: '/privacy-policy',
        component: Privacy
    },
    {
        exact: true,
        path: '/upcoming-events/uae-24/',
        component: Uae2024
    },
    {
        exact: true,
        path: '/upcoming-events/uae-24/:subpage',
        component: Uae2024
    },
    // {
    //     exact: true,
    //     path: '/upcoming-events/sevan-startup-summit-2024/',
    //     component: Sevan2024
    // },
    //
    // {
    //     exact: true,
    //     path: '/upcoming-events/sevan-startup-summit-2024/:subpage',
    //     component: Sevan2024
    // },
    // {
    //     exact: true,
    //     path: '/upcoming-events/:event/',
    //     component: Sevan2023
    // },
    //
    // {
    //     exact: true,
    //     path: '/upcoming-events/event/:subpage',
    //     component: Sevan2023
    // },
    {
        exact: true,
        path: '/upcoming-events/:event/',
        component: UpcommingNew
    },

    {
        exact: true,
        path: '/upcoming-events/:event/:subpage',
        component: UpcommingNew
    },

    {
        exact: true,
        path: '/upcoming-events/',
        component: Events
    },

    {
        exact: true,
        path: '/sss-holidays-india-vizag/',
        component: HolidayGOA
    },
    {
        exact: true,
        path: '/sss-holidays-india-vizag/apply',
        component: HolidayGOA
    },
    {
        exact: true,
        path: '/sss-holidays-uae-rak/',
        component: HolidayRAK
    },
    {
        exact: true,
        path: '/merch',
        component: Merch
    },

    {
        exact: true,
        path: '/sevan19/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/sevan18/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/sevan17/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/sevan16/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/uae18/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/india18/',
        component: Past_Page
    },

    {
        exact: true,
        path: '/sevan19/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/sevan19/startups',
        component: PastStartups
    },

    {
        exact: true,
        path: '/sevan18/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/sevan18/startups',
        component: PastStartups
    },

    {
        exact: true,
        path: '/sevan17/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/sevan17/startups',
        component: PastStartups
    },

    {
        exact: true,
        path: '/sevan16/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/sevan16/startups',
        component: PastStartups
    },

    {
        exact: true,
        path: '/uae18/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/uae18/startups',
        component: PastStartups
    },

    {
        exact: true,
        path: '/india18/speakers',
        component: PastSpeakers
    },

    {
        exact: true,
        path: '/india18/startups',
        component: PastStartups
    }, 

    {
        exact: true,
        path: '/events/',
        component: Events
    },

    {
        exact: true,
        path: '/about-us/',
        component: About
    },

    {
        exact: true,
        path: '/about-us/job',
        component: About
    },

    {
        exact: true,
        path: '/about-us/job/:jobname',
        component:About //Job
    },

    // {
    //     exact: true,
    //     path: '/startups/',
    //     component: Startups
    // },

    {
        exact: true,
        path: '/partners/',
        component: Partners
    },

    {
        path: '/blog',
        exact: true,
        component: News
    },

    {
        path: '/blog/:id',
        exact: true,
        component: News_One,
        loadData: (params) => loadData(`https://www.apis.seasidestartupsummit.com/news/?method=getNewsOne&id=${params.id}`)
    },
    {
        component: Page_404,
    }
]