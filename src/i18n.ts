import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.mtech": "M-Tech",
      "nav.marketing": "Marketing",
      "nav.studio": "Studio",
      "nav.blog": "Blog",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.login": "Login",
      
      // Hero Section
      "hero.title": "EmpireL",
      "hero.subtitle": "Building Digital Legacies",
      "hero.description": "We craft exceptional digital experiences through technology, marketing, and creative solutions that transform businesses and build lasting legacies.",
      "hero.getStarted": "Get Started",
      "hero.exploreServices": "Explore Services",
      
      // M-Tech
      "mtech.title": "Transform Your Digital Future",
      "mtech.description": "Leverage cutting-edge technology solutions to optimize operations, enhance efficiency, and drive sustainable growth for your business.",
      "mtech.startJourney": "Start Your Journey",
      "mtech.exploreSolutions": "Explore Solutions",
      
      // Marketing
      "marketing.title": "Amplify Your Market Impact",
      "marketing.description": "Strategic marketing solutions that drive measurable results, enhance brand visibility, and accelerate business growth.",
      "marketing.getFreeAnalysis": "Get Free Analysis",
      "marketing.viewServices": "View Services",
      
      // Studio
      "studio.title": "Bring Ideas To Life",
      "studio.description": "Transform your vision into captivating visual experiences through innovative design, photography, and video production.",
      "studio.startCreating": "Start Creating",
      "studio.viewPortfolio": "View Portfolio",
      
      // Contact
      "contact.title": "Let's Connect",
      "contact.subtitle": "We're here to help transform your digital presence. Reach out to discuss how we can work together.",
      "contact.form.title": "Send Us a Message",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.phone": "Phone Number",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",
      "contact.form.required": "Required",
      "contact.form.success": "Message sent successfully!",
      "contact.form.error": "Failed to send message. Please try again later.",
      
      // M-Tech Hero
      "mtech.badge": "Innovative Tech Solutions",
      "mtech.subtitle": "Digital Future",
      
      // Marketing Hero
      "marketing.badge": "Data-Driven Growth",
      "marketing.subtitle": "Market Impact",
      
      // Studio Hero
      "studio.badge": "Creative Excellence",
      "studio.subtitle": "Life",
      
      // Footer
      "footer.services": "Services",
      "footer.location": "Kinondoni, Dar es Salaam",
      "footer.rights": "All rights reserved",
      
      // Social Media Departments
      "social.mtech": "M-Tech Department",
      "social.marketing": "Marketing Department",
      "social.studio": "Studio Department",
      
      // Theme
      "theme.light": "Light Mode",
      "theme.dark": "Dark Mode",
      
      // Language
      "language.english": "English",
      "language.swahili": "Kiswahili",
    }
  },
  sw: {
    translation: {
      // Navigation
      "nav.home": "Nyumbani",
      "nav.mtech": "M-Tech",
      "nav.marketing": "Uuzaji",
      "nav.studio": "Studio",
      "nav.blog": "Blogu",
      "nav.about": "Kuhusu",
      "nav.contact": "Mawasiliano",
      "nav.login": "Ingia",
      
      // Hero Section
      "hero.title": "EmpireL",
      "hero.subtitle": "Kujenga Urithi wa Kidijitali",
      "hero.description": "Tunaunda uzoefu wa kipekee wa kidijitali kupitia teknolojia, uuzaji, na suluhisho za ubunifu zinazobadilisha biashara na kujenga urithi wa kudumu.",
      "hero.getStarted": "Anza",
      "hero.exploreServices": "Chunguza Huduma",
      
      // M-Tech
      "mtech.title": "Badilisha Mustakabali Wako wa Kidijitali",
      "mtech.description": "Tumia suluhisho za teknolojia za kisasa kuboresha utendaji, kuongeza ufanisi, na kuendesha ukuaji endelevu wa biashara yako.",
      "mtech.startJourney": "Anza Safari Yako",
      "mtech.exploreSolutions": "Chunguza Suluhisho",
      
      // Marketing
      "marketing.title": "Ongeza Athari Yako ya Sokoni",
      "marketing.description": "Suluhisho za kimkakati za uuzaji zinazoendesha matokeo yanayoweza kupimwa, kuongeza mwonekano wa chapa, na kuharakisha ukuaji wa biashara.",
      "marketing.getFreeAnalysis": "Pata Uchambuzi wa Bure",
      "marketing.viewServices": "Ona Huduma",
      
      // Studio
      "studio.title": "Leta Mawazo Maishani",
      "studio.description": "Badilisha maono yako kuwa uzoefu wa kuona unaovutia kupitia muundo wa ubunifu, upigaji picha, na uzalishaji wa video.",
      "studio.startCreating": "Anza Kuunda",
      "studio.viewPortfolio": "Ona Kazi Zetu",
      
      // Contact
      "contact.title": "Hebu Tuungane",
      "contact.subtitle": "Tuko hapa kusaidia kubadilisha uwepo wako wa kidijitali. Wasiliana nasi kujadili jinsi tunavyoweza kufanya kazi pamoja.",
      "contact.form.title": "Tutumie Ujumbe",
      "contact.form.name": "Jina Kamili",
      "contact.form.email": "Anwani ya Barua Pepe",
      "contact.form.phone": "Nambari ya Simu",
      "contact.form.subject": "Mada",
      "contact.form.message": "Ujumbe",
      "contact.form.send": "Tuma Ujumbe",
      "contact.form.required": "Inahitajika",
      "contact.form.success": "Ujumbe umetumwa kwa ufanisi!",
      "contact.form.error": "Imeshindwa kutuma ujumbe. Tafadhali jaribu tena baadaye.",
      
      // M-Tech Hero
      "mtech.badge": "Suluhisho za Teknolojia za Kisasa",
      "mtech.subtitle": "Mustakabali wa Kidijitali",
      
      // Marketing Hero
      "marketing.badge": "Ukuaji Unaotegemea Data",
      "marketing.subtitle": "Athari ya Sokoni",
      
      // Studio Hero
      "studio.badge": "Ubora wa Ubunifu",
      "studio.subtitle": "Maisha",
      
      // Footer
      "footer.services": "Huduma",
      "footer.location": "Kinondoni, Dar es Salaam",
      "footer.rights": "Haki zote zimehifadhiwa",
      
      // Social Media Departments
      "social.mtech": "Idara ya M-Tech",
      "social.marketing": "Idara ya Uuzaji",
      "social.studio": "Idara ya Studio",
      
      // Theme
      "theme.light": "Hali ya Mwanga",
      "theme.dark": "Hali ya Giza",
      
      // Language
      "language.english": "Kiingereza",
      "language.swahili": "Kiswahili",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;