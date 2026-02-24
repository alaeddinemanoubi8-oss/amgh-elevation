import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  Swords,
  Brain,
  Heart,
  User,
  Briefcase,
  Flame,
  Lightbulb,
  Zap,
  Users,
  Eye,
  Target,
  Music,
  Sprout,
  Check,
  Mic,
  ShieldCheck,
  RefreshCw,
  Activity,
  UserCheck,
  ArrowLeft,
  Dumbbell,
  Trophy,
  Moon,
  Compass,
  Apple,
  HeartPulse,
  HardHat,
  Lock,
  Send,
  Sparkles,
  MapPin,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/react";

// --- DONNÉES DE LA FAQ ---
const faqData = [
  {
    question: "À qui s'adressent les programmes AMGH ÉLÉVATION ?",
    answer:
      "Nos accompagnements sont exclusivement dédiés aux dirigeants, athlètes de haut niveau, personnalités publiques et esthètes en quête d'excellence. L'accès à nos services se fait sur analyse stricte de votre profil, de votre ambition et de votre détermination.",
  },
  {
    question:
      "Quelle est la différence entre « L'Initiation » et « La Métamorphose » ?",
    answer:
      "« L'Initiation » est une consultation ponctuelle d'une heure permettant d'établir un premier diagnostic ou de débloquer une problématique urgente. « La Métamorphose » est une immersion pluriannuelle et sur-mesure, conçue pour une transformation structurelle, profonde et pérenne.",
  },
  {
    question: "Le cabinet garantit-il la confidentialité de ses clients ?",
    answer:
      "Absolument. La discrétion est la clé de voûte de notre écosystème. Nous sommes soumis au secret professionnel absolu et nos infrastructures numériques sont hautement cryptées pour garantir la protection totale de votre vie privée et de vos données.",
  },
  {
    question: "Où se déroulent les séances d'accompagnement ?",
    answer:
      "Les consultations et entraînements se tiennent principalement dans notre bureau parisien ou en immersion privatisée. Nous assurons également des déplacements à l'international pour nous adapter aux agendas complexes de nos clients (sur devis).",
  },
  {
    question: "Qu'est-ce que la « House of Brain » ?",
    answer:
      "C'est l'architecture de votre psyché. Nous y utilisons les neurosciences, l'hypnothérapie clinique et le profilage comportemental pour débloquer vos freins invisibles, réguler votre système nerveux et forger un leadership ainsi qu'une autorité naturels.",
  },
  {
    question:
      "Faut-il être un athlète confirmé pour intégrer la « House of Sport » ?",
    answer:
      "Non. Nos protocoles s'adaptent à tous les niveaux, de la simple réathlétisation à la performance absolue en compétition. Notre seule exigence porte sur votre rigueur mentale et votre volonté de vous dépasser.",
  },
  {
    question:
      "En quoi consiste le « Décryptage Comportemental » pour les dirigeants ?",
    answer:
      "C'est une compétence d'élite. Nous vous formons à la lecture froide (Cold Reading), à l'analyse avancée du non-verbal et à la psychologie sociale. L'objectif est de vous permettre de lire au-delà des masques et de maîtriser chaque négociation ou prise de parole.",
  },
  {
    question: "Quelle est la base scientifique de la « House of Health » ?",
    answer:
      "L'ensemble de nos protocoles de vitalité repose sur la biologie des organismes, l'optimisation neurochimique et le bio-hacking naturel. Nous agissons sur le sommeil, la nutrition de précision et la biomécanique pour bâtir une physiologie inébranlable.",
  },
  {
    question:
      "Le cabinet intervient-il auprès des entreprises et comités de direction ?",
    answer:
      "Oui. Nous concevons et animons des séminaires de haute intensité, des conférences, et des teambuildings stratégiques pour les grandes écoles et les entreprises, afin d'aligner l'intelligence collective et de décupler la puissance de vos équipes.",
  },
  {
    question:
      "Comment fonctionne le protocole de Neuro-Réhabilitation post-crise ?",
    answer:
      "C'est un accompagnement spécifique pour les personnes traversant ou sortant d'une rupture (professionnelle, physique ou personnelle). Nous utilisons la science du vivant pour accélérer la régénération neuronale et émotionnelle, afin de vous reconstruire sur des bases plus solides qu'auparavant.",
  },
];

// --- COMPOSANT FAQ (Accordéon) ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#FCFCFC] border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-2xl md:text-4xl tracking-widest text-[#1a1a1a] uppercase mb-4">
            Foire Aux Questions
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="font-light-ui text-base md:text-lg text-gray-500 tracking-wider">
            Les réponses à vos interrogations sur notre écosystème d'excellence.
          </p>
        </div>
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-6 text-left group outline-none"
              >
                <span
                  className={`font-cinzel text-sm md:text-base tracking-wider uppercase transition-colors pr-8 ${
                    openIndex === index
                      ? "text-gold font-bold"
                      : "text-[#1a1a1a] group-hover:text-gold"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index
                      ? "rotate-180 text-gold"
                      : "text-gray-400 group-hover:text-gold"
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-light-ui text-base text-gray-600 leading-relaxed tracking-wider text-justify">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'strategie', 'mentorat', 'vitalite', 'fondateur', 'contact', 'rgpd', 'confirmation'
  const [history, setHistory] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // État du formulaire Contrôlé par React
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_domain: "",
    houses: [],
    availability: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Gestion du scroll pour le style de la barre de navigation
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remonter en haut de page lors du changement de navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [currentPage]);

  // Fermer le menu déroulant en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateTo = (page) => {
    if (page === currentPage) return;
    setHistory((prev) => [...prev, currentPage]);
    setCurrentPage(page);
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const prevPage = newHistory.pop();
      setHistory(newHistory);
      setCurrentPage(prevPage);
    } else {
      setCurrentPage("home");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "houses") {
      setFormData((prev) => ({
        ...prev,
        houses: checked
          ? [...prev.houses, value]
          : prev.houses.filter((h) => h !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      user_name: formData.user_name,
      user_phone: formData.user_phone,
      user_email: formData.user_email,
      user_domain: formData.user_domain || "Non précisé",
      house_interest:
        formData.houses.length > 0
          ? formData.houses.join(", ")
          : "Aucune maison sélectionnée",
      availability: formData.availability || "Non précisée",
      message: formData.message,
    };

    emailjs
      .send(
        "service_65ykv7h",
        "template_90qwmhp",
        templateParams,
        "vuRLqpeC3-Tvxpr0W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          setIsSubmitting(false);
          setFormData({
            user_name: "",
            user_phone: "",
            user_email: "",
            user_domain: "",
            houses: [],
            availability: "",
            message: "",
          });

          setTimeout(() => {
            navigateTo("confirmation");
            setSubmitStatus(null);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  const BackButton = () => (
    <button
      onClick={goBack}
      className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors font-cinzel text-[10px] tracking-[0.2em] uppercase group mb-8"
    >
      <ArrowLeft
        size={14}
        className="transform group-hover:-translate-x-1 transition-transform"
      />
      Retour
    </button>
  );

  const SportIcons = {
    Judo: () => <UserCheck size={32} strokeWidth={1} />,
    Karate: () => <Swords size={32} strokeWidth={1} />,
    MMA: () => <Zap size={32} strokeWidth={1} />,
    Hyrox: () => <Activity size={32} strokeWidth={1} />,
    Fitness: () => <RefreshCw size={32} strokeWidth={1} />,
    Musculation: () => <Dumbbell size={32} strokeWidth={1} />,
    SelfDefense: () => <ShieldCheck size={32} strokeWidth={1} />,
    Grappling: () => <Users size={32} strokeWidth={1} />,
    KickBoxing: () => <Flame size={32} strokeWidth={1} />,
    Boxe: () => <Trophy size={32} strokeWidth={1} />,
  };

  const VitalityIcons = {
    Sleep: () => <Moon size={32} strokeWidth={1} />,
    Muscle: () => <Activity size={32} strokeWidth={1} />,
    Nutrition: () => <Apple size={32} strokeWidth={1} />,
    Lifestyle: () => <Compass size={32} strokeWidth={1} />,
    Brain: () => <Brain size={32} strokeWidth={1} />,
    Pro: () => <Briefcase size={32} strokeWidth={1} />,
    Recovery: () => <HeartPulse size={32} strokeWidth={1} />,
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#1a1a1a] selection:bg-[#D4AF37] selection:text-white flex flex-col">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500&display=swap');
          
          .font-cinzel { font-family: 'Cinzel', serif; }
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-cormorant { font-family: 'Cormorant Garamond', serif; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-light-ui { font-family: 'Segoe UI', 'Helvetica Neue', sans-serif; font-weight: 300; }
          
          .text-gold { color: #D4AF37; }
          .bg-gold { background-color: #D4AF37; }
          .border-gold { border-color: #D4AF37; }
          
          .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

          input[type="checkbox"] {
            accent-color: #D4AF37;
          }
        `}
      </style>

      {/* NAVIGATION HEADER */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            className="flex items-center gap-2 z-50 cursor-pointer"
            onClick={() => navigateTo("home")}
          >
            <h1 className="font-cinzel text-[15px] md:text-[20px] lg:text-[26px] text-[#1a1a1a]">
              <span className="font-bold tracking-normal uppercase">AMGH</span>{" "}
              <span className="text-gold font-normal tracking-wide">
                ELEVATION
              </span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-12 font-cinzel text-[11px] tracking-[0.25em] text-gray-500 uppercase font-medium">
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 hover:text-gold transition-colors pb-2 ${
                  ["strategie", "mentorat", "vitalite"].includes(currentPage)
                    ? "text-gold"
                    : ""
                }`}
              >
                EXPERTISES{" "}
                <ChevronDown
                  size={14}
                  className={`transform transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 z-50 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="bg-white shadow-xl border border-gray-100 flex flex-col py-2 w-64">
                  <button
                    onClick={() => navigateTo("strategie")}
                    className="px-6 py-4 text-left hover:bg-gray-50 hover:text-gold transition-colors font-cinzel text-[10px] tracking-[0.2em] text-gray-600"
                  >
                    STRATÉGIES D'ÉVOLUTION
                  </button>
                  <button
                    onClick={() => navigateTo("mentorat")}
                    className="px-6 py-4 text-left hover:bg-gray-50 hover:text-gold transition-colors font-cinzel text-[10px] tracking-[0.2em] text-gray-600"
                  >
                    MENTORAT SPORTIF
                  </button>
                  <button
                    onClick={() => navigateTo("vitalite")}
                    className="px-6 py-4 text-left hover:bg-gray-50 hover:text-gold transition-colors font-cinzel text-[10px] tracking-[0.2em] text-gray-600"
                  >
                    VITALITÉ & SANTÉ
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo("fondateur")}
              className={`hover:text-gold transition-colors pb-2 ${
                currentPage === "fondateur" ? "text-gold" : ""
              }`}
            >
              LE FONDATEUR
            </button>

            <button
              onClick={() => navigateTo("contact")}
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-2.5 hover:bg-[#D4AF37] hover:text-white transition-all duration-500 tracking-[0.25em]"
            >
              CONTACT
            </button>
          </div>

          <button
            className="md:hidden z-50 text-[#1a1a1a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 md:hidden overflow-y-auto ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 w-full px-6 pt-20">
            <button
              onClick={() => navigateTo("home")}
              className="font-cinzel text-xl tracking-widest text-[#1a1a1a]"
            >
              ACCUEIL
            </button>
            <div className="w-12 h-[1px] bg-gold my-4"></div>
            <button
              onClick={() => navigateTo("strategie")}
              className="font-light-ui text-base tracking-widest text-gray-500 uppercase"
            >
              STRATÉGIES D'ÉVOLUTION
            </button>
            <button
              onClick={() => navigateTo("mentorat")}
              className="font-light-ui text-base tracking-widest text-gray-500 uppercase"
            >
              MENTORAT SPORTIF
            </button>
            <button
              onClick={() => navigateTo("vitalite")}
              className="font-light-ui text-base tracking-widest text-gray-500 uppercase"
            >
              VITALITÉ & SANTÉ
            </button>
            <div className="w-12 h-[1px] bg-gold my-4"></div>
            <button
              onClick={() => navigateTo("fondateur")}
              className="font-cinzel text-xl tracking-widest text-[#1a1a1a]"
            >
              LE FONDATEUR
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="font-cinzel text-xl tracking-widest text-[#1a1a1a] mt-4"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-grow">
        {/* --- PAGE: ACCUEIL --- */}
        {currentPage === "home" && (
          <div className="animate-fade-in">
            <section className="relative pt-48 pb-20 px-6 flex flex-col items-center justify-center min-h-[85vh] text-center">
              <div className="max-w-6xl mx-auto space-y-8">
                <h1 className="font-cinzel text-3xl md:text-[2.5rem] lg:text-[3.25rem] text-[#1a1a1a] leading-none mb-6">
                  <span className="font-bold tracking-normal uppercase">
                    AMGH
                  </span>{" "}
                  <span className="text-gold font-normal tracking-wide">
                    ELEVATION
                  </span>
                </h1>

                <h2 className="font-cinzel text-sm md:text-base tracking-[0.35em] uppercase text-gray-600 max-w-4xl mx-auto mt-6">
                  NOTRE ACCOMPAGNEMENT{" "}
                  <span className="text-gold mx-2">AU SERVICE DE</span> VOTRE{" "}
                  <span className="font-normal">ÉLÉVATION</span>
                </h2>

                <p className="font-cormorant text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mt-12 mb-10 italic leading-relaxed tracking-wider">
                  Un écosystème d'excellence où la stratégie, la maîtrise du
                  corps et la puissance de l'esprit convergent.
                </p>

                <div className="w-20 h-[1px] bg-gold mx-auto mb-10"></div>

                <div>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="bg-[#D4AF37] text-white font-cinzel text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#c29e2f] transition-all duration-300"
                  >
                    PRENDRE RENDEZ-VOUS
                  </button>
                </div>
              </div>
            </section>

            <section className="py-24 px-6 max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-cinzel text-2xl md:text-3xl tracking-widest text-[#1a1a1a] uppercase">
                  NOTRE RAISON D'ÊTRE
                </h2>
                <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
              </div>

              <div className="space-y-16">
                <div className="flex gap-8 items-start">
                  <Swords
                    className="text-gold flex-shrink-0 mt-1"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <p className="font-light-ui text-base md:text-lg text-gray-600 leading-relaxed tracking-wider text-justify">
                    Pour le corps, nous proposons via la{" "}
                    <span className="text-gold font-medium italic font-playfair">
                      House of Sport
                    </span>{" "}
                    une architecture physique de haute couture. Un
                    accompagnement sportif rigoureux, scientifique et
                    entièrement sur-mesure, conçu pour sculpter votre résilience
                    et atteindre vos objectifs les plus élevés, quel que soit
                    votre niveau de départ. Nous construisons une discipline de
                    fer dans un écrin de bienveillance exigeante.
                  </p>
                </div>

                <div className="flex gap-8 items-start">
                  <Brain
                    className="text-gold flex-shrink-0 mt-1"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <p className="font-light-ui text-base md:text-lg text-gray-600 leading-relaxed tracking-wider text-justify">
                    Dans la sphère privée, nous œuvrons pour votre souveraineté
                    grâce à la{" "}
                    <span className="text-gold font-medium italic font-playfair">
                      House of Brain
                    </span>
                    . De la reprogrammation des croyances limitantes à
                    l'optimisation neurochimique, nous installons un calme
                    puissant. Nous affûtons votre intelligence sociale et votre
                    charisme par la présence, pour que votre stabilité
                    émotionnelle devienne le pilier de vos relations
                    personnelles et familiales.
                  </p>
                </div>

                <div className="flex gap-8 items-start">
                  <Briefcase
                    className="text-gold flex-shrink-0 mt-1"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <p className="font-light-ui text-base md:text-lg text-gray-600 leading-relaxed tracking-wider text-justify">
                    Pour les dirigeants, chefs d'entreprises et présidents, nous
                    déployons une stratégie de suprématie professionnelle.
                    Ingénierie de l'influence, architecture de l'autorité,
                    détection des scripts et profilage comportemental : nous
                    vous transmettons les clés invisibles pour fédérer,
                    convaincre et diriger avec une légitimité naturelle, en
                    utilisant la psychologie des besoins pour devenir
                    indispensable.
                  </p>
                </div>

                <div className="flex gap-8 items-start">
                  <Heart
                    className="text-gold flex-shrink-0 mt-1"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <p className="font-light-ui text-base md:text-lg text-gray-600 leading-relaxed tracking-wider text-justify">
                    Le tout soutenu par la{" "}
                    <span className="text-gold font-medium italic font-playfair">
                      House of Health
                    </span>
                    , garante de votre énergie vitale et de votre longévité.
                    Grâce à une approche scientifique fondée sur la biologie des
                    organismes, la nutrition de précision et l'optimisation du
                    cycle circadien, nous installons les fondations d'une
                    physiologie inébranlable. Votre corps devient le moteur
                    d'une performance durable et d'une résilience absolue.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-24 px-6 bg-[#FCFCFC] border-t border-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-cinzel text-3xl md:text-4xl tracking-widest text-[#1a1a1a] uppercase mb-4">
                    OUR HOUSES
                  </h2>
                  <p className="font-cinzel text-[10px] tracking-[0.3em] text-gold uppercase">
                    PILIERS FONDAMENTAUX
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div
                    onClick={() => navigateTo("strategie")}
                    className="bg-white p-10 md:p-12 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <h3 className="font-cinzel text-xs tracking-[0.2em] font-bold text-[#1a1a1a] mb-6 uppercase">
                      House of Brain
                    </h3>
                    <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-6"></div>
                    <Brain
                      className="mx-auto text-gold group-hover:scale-110 transition-transform duration-500 mb-8"
                      size={48}
                      strokeWidth={1}
                    />
                    <p className="font-light-ui text-sm text-gray-500 leading-relaxed tracking-wider flex-grow mb-8">
                      Stratégies d'évolution, neurosciences et maîtrise
                      psychologique pour sublimer votre potentiel.
                    </p>
                    <span className="font-cinzel text-[10px] tracking-widest text-gold uppercase border-b border-transparent group-hover:border-gold pb-1 self-center transition-colors">
                      Explorer
                    </span>
                  </div>

                  <div
                    onClick={() => navigateTo("mentorat")}
                    className="bg-white p-10 md:p-12 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <h3 className="font-cinzel text-xs tracking-[0.2em] font-bold text-[#1a1a1a] mb-6 uppercase">
                      House of Sport
                    </h3>
                    <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-6"></div>
                    <Swords
                      className="mx-auto text-gold group-hover:scale-110 transition-transform duration-500 mb-8"
                      size={48}
                      strokeWidth={1}
                    />
                    <p className="font-light-ui text-sm text-gray-500 leading-relaxed tracking-wider flex-grow mb-8">
                      Mentorat sportif, rigueur martiale et préparation
                      athlétique pour forger votre résilience.
                    </p>
                    <span className="font-cinzel text-[10px] tracking-widest text-gold uppercase border-b border-transparent group-hover:border-gold pb-1 self-center transition-colors">
                      Explorer
                    </span>
                  </div>

                  <div
                    onClick={() => navigateTo("vitalite")}
                    className="bg-white p-10 md:p-12 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                  >
                    <h3 className="font-cinzel text-xs tracking-[0.2em] font-bold text-[#1a1a1a] mb-6 uppercase">
                      House of Health
                    </h3>
                    <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-6"></div>
                    <Heart
                      className="mx-auto text-gold group-hover:scale-110 transition-transform duration-500 mb-8"
                      size={48}
                      strokeWidth={1}
                    />
                    <p className="font-light-ui text-sm text-gray-500 leading-relaxed tracking-wider flex-grow mb-8">
                      Vitalité, biologie et longévité pour bâtir le socle
                      physiologique de votre excellence.
                    </p>
                    <span className="font-cinzel text-[10px] tracking-widest text-gold uppercase border-b border-transparent group-hover:border-gold pb-1 self-center transition-colors">
                      Explorer
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* NOUVELLE SECTION CALL-TO-ACTION PSYCHOLOGIQUE */}
            <section className="py-32 px-6 bg-[#111] text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="flex justify-center text-gold mb-8">
                  <Sparkles size={40} strokeWidth={1} />
                </div>

                <h2 className="font-cinzel text-3xl md:text-5xl tracking-[0.2em] uppercase mb-12 font-normal leading-tight">
                  L'Instant de Vérité
                </h2>

                <div className="w-24 h-[1px] bg-gold mx-auto mb-16"></div>

                <div className="space-y-8 font-light-ui text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wider text-justify md:text-center italic">
                  <p>
                    Le hasard n'a pas sa place ici. Si vous lisez ces lignes,
                    c'est que vous avez déjà franchi le seuil de la médiocrité.
                    Vous ressentez cette dissonance : cette certitude que votre
                    potentiel actuel n'est qu'une fraction de votre puissance
                    réelle.
                  </p>
                  <p>
                    Vous savez, au plus profond de vous, que votre personne
                    mérite le meilleur des accompagnements. Ignorer cet appel,
                    c'est accepter de stagner là où vous devriez régner. Votre
                    ambition exige une architecture à sa mesure pour devenir
                    l'humain supérieur que vous êtes destiné à être.
                  </p>
                </div>

                <div className="mt-20">
                  <button
                    onClick={() => navigateTo("contact")}
                    className="group relative inline-flex items-center justify-center px-16 py-6 bg-gold text-white font-cinzel text-xs md:text-sm font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-white hover:text-gold shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10">
                      Réclamer mon élévation
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                  <p className="mt-8 font-cinzel text-[9px] tracking-[0.5em] text-gray-500 uppercase">
                    Discrétion absolue. Sélection sur profil.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* --- PAGE: EXPERTISE - STRATÉGIES D'ÉVOLUTION --- */}
        {currentPage === "strategie" && (
          <div className="animate-fade-in pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
              <BackButton />
              <div className="flex items-center gap-4 mb-8 text-gold mt-4">
                <Brain size={48} strokeWidth={1} />
                <span className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase font-bold">
                  House of Brain
                </span>
              </div>
              <h1 className="font-cinzel text-5xl md:text-7xl text-[#1a1a1a] mb-6 uppercase tracking-tight">
                STRATÉGIES D'ÉVOLUTION
              </h1>
              <p className="font-cormorant text-2xl text-gray-500 italic mb-10">
                Neurosciences, Psychologie, Sociologie & Hypnothérapie
              </p>
              <div className="w-20 h-[1px] bg-gold mb-12"></div>
              <div className="space-y-8 mb-16 max-w-4xl">
                <p className="font-light-ui text-xl text-gray-600 leading-relaxed tracking-wider text-justify">
                  Nous ne nous contentons pas d'analyser, nous bâtissons avec
                  vous. Notre approche des neurosciences et de la psychologie
                  est entièrement dédiée à votre ascension. Nous débloquons les
                  freins invisibles et structurons votre mental pour que vous
                  puissiez atteindre, et dépasser, vos ambitions.
                </p>
                <p className="font-light-ui text-xl text-gray-600 leading-relaxed tracking-wider text-justify italic">
                  Nous utilisons l'hypnothérapie clinique et la
                  neuro-programmation pour optimiser l'architecture de votre
                  autorité. Nous supprimons les bruits parasites (croyances
                  limitantes, stress somatique) pour que votre prise de parole
                  et votre charisme deviennent des armes d'influence massive.
                </p>
              </div>
              <button
                onClick={() => navigateTo("contact")}
                className="w-full md:w-auto border border-[#1a1a1a] text-[#1a1a1a] font-cinzel text-[11px] font-bold tracking-[0.25em] uppercase px-16 py-5 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 text-center block mb-32"
              >
                PRENDRE RENDEZ-VOUS
              </button>

              <div className="text-center mb-16">
                <h2 className="font-cinzel text-3xl md:text-4xl tracking-wide text-[#1a1a1a] uppercase mb-6 font-bold">
                  DOMAINES D'INTERVENTION : MAÎTRISE TOTALE
                </h2>
                <div className="w-16 h-[1px] bg-gold mx-auto mb-8"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-0 border border-gray-100 shadow-xl overflow-hidden rounded-sm">
                <div className="bg-white p-10 md:p-16">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center rounded-md text-gold">
                      <User size={28} />
                    </div>
                    <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase leading-snug">
                      ÉQUILIBRE & SPHÈRE
                      <br />
                      PRIVÉE
                    </h3>
                  </div>
                  <div className="space-y-10">
                    {[
                      {
                        icon: <Flame size={24} />,
                        title: "Reprogrammation Mentale",
                        desc: "Hypnothérapie et gestion du stress pour débloquer les freins profonds et les croyances limitantes.",
                      },
                      {
                        icon: <ShieldCheck size={24} />,
                        title: "Confiance & Sang-froid",
                        desc: "Forger une solidité interne inébranlable et un calme souverain face à l'imprévu.",
                      },
                      {
                        icon: <UserCheck size={24} />,
                        title: "Autorité & Posture",
                        desc: "Incarner une autorité naturelle par l'alignement corporel et la maîtrise du non-verbal.",
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Discipline Personnelle",
                        desc: "Instaurer une structure de vie d'élite pour soutenir une performance mentale constante.",
                      },
                      {
                        icon: <Lightbulb size={24} />,
                        title: "Intelligence Relationnelle",
                        desc: "Dénouer les complexités affectives pour instaurer une communication souveraine.",
                      },
                      {
                        icon: <Activity size={24} />,
                        title: "Optimisation Neurochimique",
                        desc: "Stratégies naturelles pour réguler le système nerveux et augmenter la confiance biologique.",
                      },
                      {
                        icon: <Zap size={24} />,
                        title: "Magnétisme & Présence",
                        desc: "Développer un charme authentique fondé sur l'équilibre interne.",
                      },
                      {
                        icon: <RefreshCw size={24} />,
                        title: "Neuro-Réhabilitation post-crise",
                        desc: "Stratégies de récupération cognitive et émotionnelle après des périodes de rupture.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="text-gold flex-shrink-0 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1a1a1a] text-lg mb-2 uppercase tracking-wider">
                            {item.title}
                          </h4>
                          <p className="font-light-ui text-gray-500 text-lg leading-relaxed tracking-wider">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#111111] p-10 md:p-16 text-white border-l border-gray-800">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-gold flex items-center justify-center rounded-md text-[#111]">
                      <Briefcase size={28} />
                    </div>
                    <h3 className="font-cinzel text-2xl text-white uppercase leading-snug">
                      STRATÉGIE & IMPACT
                      <br />
                      PROFESSIONNEL
                    </h3>
                  </div>
                  <div className="space-y-10">
                    {[
                      {
                        icon: <Target size={24} />,
                        title: "Décision sous Haute Pression",
                        desc: "Maintenir une clarté cognitive totale et un instinct décisif dans les environnements critiques.",
                      },
                      {
                        icon: <ShieldCheck size={24} />,
                        title: "Leadership",
                        desc: "Inspirer, porter une vision et fédérer l'intelligence collective vers un objectif commun d'excellence.",
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Management",
                        desc: "Optimiser les ressources humaines et les processus pour une performance opérationnelle fluide et sereine.",
                      },
                      {
                        icon: <Mic size={24} />,
                        title: "Souveraineté Scénique",
                        desc: "Art de la prise de parole, rhétorique d'influence et maîtrise absolue du discours public.",
                      },
                      {
                        icon: <Zap size={24} />,
                        title: "Neuro-performance",
                        desc: "Protocoles d'optimisation des capacités cérébrales pour une efficacité et une endurance d'élite.",
                      },
                      {
                        icon: <ShieldCheck size={24} />,
                        title: "Architecture de l'Autorité",
                        desc: "Incarner un leadership naturel et un charisme inébranlable pour diriger sans friction.",
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Ingénierie des Talents",
                        desc: "Profilage comportemental et sécurité psychologique pour bâtir des équipes d'élite.",
                      },
                      {
                        icon: <Eye size={24} />,
                        title: "Décryptage Comportemental",
                        desc: "Lire au-delà des discours et des masques, et être le maître de l'assemblée grâce aux neurosciences et à la psychologie.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="text-gold flex-shrink-0 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg mb-2 uppercase tracking-wider">
                            {item.title}
                          </h4>
                          <p className="font-light-ui text-gray-400 text-lg leading-relaxed tracking-wider">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center mt-32 mb-16">
                <h2 className="font-cinzel text-4xl md:text-5xl tracking-wide text-[#1a1a1a] uppercase mb-4 font-bold">
                  OFFRES D'ACCOMPAGNEMENT
                </h2>
                <p className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase mb-8">
                  CHOISIR L'EXCELLENCE POUR VOTRE ÉVOLUTION
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border border-gray-200 p-12 shadow-sm flex flex-col">
                  <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase mb-2">
                    CONSULTATION UNIQUE
                  </h3>
                  <p className="font-cormorant text-xl text-gold italic mb-8">
                    L'Initiation — 1 Heure
                  </p>
                  <ul className="space-y-6 mb-12 flex-grow">
                    <li className="flex gap-4 font-light-ui text-lg text-gray-600 tracking-wider">
                      <span className="text-gold">✓</span> Sans engagement,
                      liberté totale.
                    </li>
                    <li className="flex gap-4 font-light-ui text-lg text-gray-600 tracking-wider">
                      <span className="text-gold">✓</span> Idéal pour tester
                      l'approche et la méthode.
                    </li>
                    <li className="flex gap-4 font-light-ui text-lg text-gray-600 tracking-wider">
                      <span className="text-gold">✓</span> Déblocage d'une
                      problématique précise et urgente.
                    </li>
                  </ul>
                  <div className="pt-8 border-t border-gray-100 text-gray-500 font-light-ui text-sm italic tracking-wider">
                    <span className="text-gray-400 font-bold not-italic">
                      ⓘ
                    </span>{" "}
                    Limites : Diagnostic non-approfondi. Accompagnement
                    ponctuel.
                  </div>
                </div>
                <div className="bg-[#111111] text-white p-12 shadow-xl border-t-4 border-gold relative flex flex-col">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gold text-[#111] font-cinzel text-[10px] font-bold tracking-widest uppercase px-4 py-1">
                    RECOMMANDÉ
                  </div>
                  <h3 className="font-cinzel text-2xl text-white uppercase mb-2">
                    IMMERSION SUR-MESURE
                  </h3>
                  <p className="font-cormorant text-xl text-gold italic mb-8">
                    La Métamorphose — Pluriannuel
                  </p>
                  <ul className="space-y-6 mb-12 flex-grow">
                    <li className="flex gap-4 font-light-ui text-lg text-gray-300 tracking-wider">
                      <span className="text-gold">✓</span> Diagnostic profond &
                      priorisation stratégique.
                    </li>
                    <li className="flex gap-4 font-light-ui text-lg text-gray-300 tracking-wider">
                      <span className="text-gold">✓</span> Analyse, recherche et
                      plan d'action chirurgical.
                    </li>
                    <li className="flex gap-4 font-light-ui text-lg text-gray-300 tracking-wider">
                      <span className="text-gold">✓</span> Efficacité maximale :
                      résultats durables et profonds.
                    </li>
                  </ul>
                  <div className="pt-8 border-t border-gray-800 text-gray-400 font-light-ui text-sm italic flex gap-3 tracking-wider">
                    <span className="text-gold font-bold not-italic text-lg">
                      ◷
                    </span>{" "}
                    <span>
                      Exigence : Processus long et exhaustif. Fondamental pour
                      une réussite totale.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-gold/30 bg-[#fdfbf7] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-24 rounded-sm shadow-sm">
                <div className="flex items-start gap-6">
                  <Briefcase className="text-gold flex-shrink-0" size={36} />
                  <div>
                    <h4 className="font-cinzel text-xl text-[#1a1a1a] uppercase leading-relaxed mb-2 font-bold tracking-wide">
                      INTERVENTION SUR MESURE DÉDIÉE AUX
                      <br />
                      GRANDES ÉCOLES, ASSOCIATIONS,
                      <br />
                      UNIVERSITÉS ET ENTREPRISES
                    </h4>
                    <p className="font-light-ui text-lg text-gray-600 tracking-wider">
                      Teambuilding, Séminaires, Conférences, Coaching d'Équipes.
                    </p>
                  </div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="font-cinzel text-3xl text-gold mb-4">
                    SUR DEVIS
                  </div>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="border border-[#1a1a1a] text-[#1a1a1a] font-cinzel text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    CONTACTER LE CABINET
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: EXPERTISE - MENTORAT SPORTIF --- */}
        {currentPage === "mentorat" && (
          <div className="animate-fade-in pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
              <BackButton />
              <div className="flex items-center gap-4 mb-8 text-gold mt-4">
                <Swords size={48} strokeWidth={1} />
                <span className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase font-bold">
                  House of Sport
                </span>
              </div>
              <h1 className="font-cinzel text-5xl md:text-7xl text-[#1a1a1a] mb-6 uppercase tracking-tight">
                MENTORAT SPORTIF
              </h1>
              <p className="font-cormorant text-2xl text-gray-500 italic mb-10">
                Maîtrise, Loisirs & Performance
              </p>
              <div className="w-20 h-[1px] bg-gold mb-12"></div>
              <p className="font-light-ui text-xl text-gray-600 leading-relaxed tracking-wider text-justify mb-16 max-w-4xl">
                Plus qu'un sport, une école de vie. Forts de 25 ans de pratique
                et 17 ans d'enseignement, nous nous engageons à vous transmettre
                la rigueur, la maîtrise et la sérénité du guerrier moderne. Un
                accompagnement physique qui forge aussi l'esprit.
              </p>
              <button
                onClick={() => navigateTo("contact")}
                className="w-full md:w-auto border border-[#1a1a1a] text-[#1a1a1a] font-cinzel text-[11px] font-bold tracking-[0.25em] uppercase px-16 py-5 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 text-center block mb-24"
              >
                PRENDRE RENDEZ-VOUS
              </button>
              <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="font-cinzel text-3xl tracking-widest text-[#1a1a1a] uppercase mb-4 font-bold">
                    DISCIPLINES D'EXCELLENCE
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
                  <p className="font-light-ui text-lg text-gray-500 tracking-wider">
                    Un panel complet pour une maîtrise globale du corps et de
                    l'esprit.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    {
                      name: "Judo",
                      desc: "L'art de la souplesse et des projections pour un contrôle total.",
                      icon: SportIcons.Judo(),
                    },
                    {
                      name: "Karaté",
                      desc: "Tradition et efficacité pour forger un esprit de fer.",
                      icon: SportIcons.Karate(),
                    },
                    {
                      name: "MMA",
                      desc: "La discipline de combat la plus complète, alliant frappe et lutte.",
                      icon: SportIcons.MMA(),
                    },
                    {
                      name: "Hyrox",
                      desc: "Entraînement fonctionnel mêlant cardio et puissance brute.",
                      icon: SportIcons.Hyrox(),
                    },
                    {
                      name: "Fitness",
                      desc: "Amélioration de la tonicité, de la condition physique et du bien-être.",
                      icon: SportIcons.Fitness(),
                    },
                    {
                      name: "Musculation",
                      desc: "Forge du corps par le renforcement musculaire ciblé.",
                      icon: SportIcons.Musculation(),
                    },
                    {
                      name: "Self-défense",
                      desc: "Approche réaliste pour réagir efficacement face à une menace.",
                      icon: SportIcons.SelfDefense(),
                    },
                    {
                      name: "Grappling",
                      desc: "Science du combat au sol et des soumissions stratégiques.",
                      icon: SportIcons.Grappling(),
                    },
                    {
                      name: "Kick-boxing",
                      desc: "Intensité des frappes pieds-poings pour l'agilité cardio.",
                      icon: SportIcons.KickBoxing(),
                    },
                    {
                      name: "Boxe Anglaise",
                      desc: "Le noble art de la précision et de l'esquive absolue.",
                      icon: SportIcons.Boxe(),
                    },
                  ].map((sport, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-8 bg-white border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all group text-center"
                    >
                      <div className="mb-6 group-hover:scale-110 transition-transform text-gold">
                        {sport.icon}
                      </div>
                      <span className="font-cinzel text-xs tracking-[0.2em] uppercase font-bold mb-3">
                        {sport.name}
                      </span>
                      <p className="font-light-ui text-[11px] text-gray-500 leading-relaxed tracking-wider">
                        {sport.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mb-16">
                <h2 className="font-cinzel text-4xl md:text-5xl tracking-wide text-[#1a1a1a] uppercase mb-4 font-bold">
                  OFFRES D'ACCOMPAGNEMENT
                </h2>
                <p className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase mb-8">
                  CHOISIR L'EXCELLENCE POUR VOTRE ÉVOLUTION
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {[
                  {
                    title: "SIGNATURE",
                    tag: "L'ART & LA MANIÈRE",
                    dest: "Esthètes de la technique cherchant l'excellence sans compromis.",
                    dark: true,
                    desc: "L'intensité du sport sans les blessures. Pour l'esthète qui cherche la maîtrise technique dans un confort absolu.",
                  },
                  {
                    title: "VITALITÉ",
                    tag: "SANTÉ & ÉQUILIBRE",
                    dest: "Profils en quête de santé durable et réathlétisation.",
                    dark: false,
                    desc: "Utiliser la science du mouvement pour renforcer le corps. Le mouvement comme remède et fondation.",
                  },
                  {
                    title: "PERFORMANCE",
                    tag: "LE CHOC & LA GLOIRE",
                    dest: "Guerriers souhaitant repousser leurs limites absolues.",
                    dark: true,
                    desc: "L'arène des compétiteurs. Rigueur absolue, reality du terrain. Accès uniquement sur aptitude.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${
                      item.dark
                        ? "bg-[#111111] text-white border-[#111]"
                        : "bg-white text-[#1a1a1a] border-gray-100"
                    } p-10 flex flex-col border shadow-xl hover:shadow-2xl transition-all`}
                  >
                    <div className="w-8 h-1 bg-gold mb-8"></div>
                    <h3 className="font-cinzel text-2xl uppercase mb-2">
                      {item.title}
                    </h3>
                    <p
                      className={`font-cinzel text-[10px] ${
                        item.dark ? "text-gold" : "text-gold"
                      } tracking-widest font-bold uppercase mb-6`}
                    >
                      {item.tag}
                    </p>
                    <p
                      className={`font-light-ui text-sm ${
                        item.dark
                          ? "text-gray-400 border-gray-800"
                          : "text-gray-500 border-gray-100"
                      } mb-8 pb-4 border-b tracking-wider`}
                    >
                      <span className="text-gold font-bold">Destiné aux :</span>{" "}
                      {item.dest}
                    </p>
                    <p
                      className={`font-light-ui text-lg ${
                        item.dark ? "text-gray-400" : "text-gray-600"
                      } leading-relaxed tracking-wider mb-12 flex-grow`}
                    >
                      {item.desc}
                    </p>
                    <button
                      onClick={() => navigateTo("contact")}
                      className={`${
                        item.dark
                          ? "text-gold border-gold hover:text-white hover:border-white"
                          : "text-[#1a1a1a] border-[#1a1a1a] hover:text-gold hover:border-gold"
                      } font-cinzel text-[11px] font-bold tracking-[0.2em] border-b pb-1 self-start transition-colors`}
                    >
                      EXPLORER
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: EXPERTISE - VITALITÉ & SANTÉ --- */}
        {currentPage === "vitalite" && (
          <div className="animate-fade-in pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
              <BackButton />
              <div className="flex items-center gap-4 mb-8 text-gold mt-4">
                <Heart size={48} strokeWidth={1} />
                <span className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase font-bold">
                  House of Health
                </span>
              </div>
              <h1 className="font-cinzel text-5xl md:text-7xl text-[#1a1a1a] mb-6 uppercase tracking-tight">
                VITALITÉ & SANTÉ
              </h1>
              <p className="font-cormorant text-2xl text-gray-500 italic mb-10">
                Bio-Ingénierie, Nutrition & Optimisation des Organismes
              </p>
              <div className="w-20 h-[1px] bg-gold mb-12"></div>

              <div className="mb-16 max-w-4xl border-l-2 border-gold/30 pl-8 py-4">
                <p className="font-light-ui text-xl text-gray-700 leading-relaxed tracking-wider text-justify mb-6">
                  La médecine occidentale moderne s'est enlisée dans une culture
                  du remède immédiat, privilégiant la suppression chimique des
                  symptômes au détriment de l'analyse des causes fondamentales.
                  Ce système de gestion des maladies chroniques mène
                  inexorablement à un ultimatum biologique : l'instant où la
                  pathologie devient irréversible, enfermant le patient dans un
                  régime de privations et de limitations définitives, incapable
                  de retrouver son mode de vie antérieur.
                </p>
                <p className="font-light-ui text-xl text-gray-700 leading-relaxed tracking-wider text-justify italic">
                  Notre vision de l'ingénierie de la santé s'inscrit en rupture
                  totale avec ce déterminisme. Nous ne cherchons pas à masquer
                  le signal, mais à restaurer la fonction. En plaçant le rythme
                  de vie, la précision nutritionnelle, les techniques de jeûne,
                  l'exposition environnementale et l'optimisation des organismes
                  au cœur de notre stratégie, nous bâtissons une physiologie
                  inébranlable capable de soutenir l'excellence.
                </p>
              </div>

              <p className="font-light-ui text-xl text-gray-600 leading-relaxed tracking-wider text-justify mb-24 max-w-4xl italic">
                La performance pérenne est le fruit d'une ingénierie
                physiologique précise. Nous ne soignons pas, nous optimisons. À
                travers l'étude du vivant et des neurosciences, nous bâtissons
                le socle biologique de votre réussite pour que votre corps ne
                soit plus un frein, mais un moteur d'excellence inépuisable.
              </p>

              <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="font-cinzel text-3xl tracking-widest text-[#1a1a1a] uppercase mb-4 font-bold">
                    L'INGÉNIERIE DU VIVANT
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
                  <p className="font-light-ui text-lg text-gray-500 tracking-wider">
                    Les piliers de l'optimisation biologique.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 shadow-lg">
                  {[
                    {
                      icon: VitalityIcons.Sleep(),
                      title: "Ingénierie du Sommeil",
                      desc: "Architecture des cycles circadiens, sommeil profond et récupération neuronale pour une clarté mentale absolue dès l'éveil.",
                    },
                    {
                      icon: VitalityIcons.Muscle(),
                      title: "Santé des Muscles",
                      desc: "Optimisation de la densité musculaire, posture athlétique et prévention de la dégénérescence par la science du mouvement.",
                    },
                    {
                      icon: VitalityIcons.Nutrition(),
                      title: "Nutrition de Précision",
                      desc: "Bio-individualité alimentaire, micronutrition et carburants cellulaires adaptés à votre métabolisme unique.",
                    },
                    {
                      icon: VitalityIcons.Brain(),
                      title: "Santé du Cerveau",
                      desc: "Neuro-protection, gestion de la charge cognitive et optimisation de la chimie cérébrale pour l'endurance intellectuelle.",
                    },
                    {
                      icon: VitalityIcons.Lifestyle(),
                      title: "Régime de Vie",
                      desc: "Architecture globale de votre quotidien : environnement, bio-hacking et protocoles de vitalité intégrés.",
                    },
                    {
                      icon: VitalityIcons.Recovery(),
                      title: "Bio-Résilience",
                      desc: "Renforcement de l'immunité et des systèmes de défense de l'organisme pour une protection totale.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-12 hover:bg-gray-50 transition-all group"
                    >
                      <div className="text-gold mb-8 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-cinzel text-lg font-normal mb-4 tracking-widest uppercase">
                        {item.title}
                      </h4>
                      <p className="font-light-ui text-gray-500 leading-relaxed tracking-wider">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-32 py-24 bg-[#111] text-white px-10 md:px-20 -mx-6 md:-mx-12 lg:-mx-24 border-y border-gold/20">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-20">
                    <h2 className="font-cinzel text-3xl tracking-widest text-white uppercase mb-4 font-bold">
                      ARCHITECTURES DE PERFORMANCE
                    </h2>
                    <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
                    <p className="font-light-ui text-lg text-gray-400 tracking-wider">
                      Des protocoles physiologiques adaptés à la réalité de
                      votre métier.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                      <h3 className="font-cinzel text-xl text-gold uppercase tracking-widest font-normal flex items-center gap-3">
                        <Users size={24} strokeWidth={1} /> Les Sportifs
                      </h3>
                      <p className="font-light-ui text-gray-400 leading-relaxed tracking-wider text-justify">
                        Optimisation des phases de sur-entraînement, gestion de
                        l'inflammation systémique et protocoles d'endurance
                        explosive. Nous forgeons des organismes capables de
                        supporter les plus hautes contraintes physiques sur le
                        long terme.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <h3 className="font-cinzel text-xl text-gold uppercase tracking-widest font-normal flex items-center gap-3">
                        <User size={24} strokeWidth={1} /> Les Dirigeants
                      </h3>
                      <p className="font-light-ui text-gray-400 leading-relaxed tracking-wider text-justify">
                        Pour ceux qui vivent "assis et sous stress". Protocoles
                        anti-sédentarité, régulation du cortisol (stress) et
                        optimisation de la posture de bureau. Nous compensons
                        l'immobilité par une vitalité métabolique active.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <h3 className="font-cinzel text-xl text-gold uppercase tracking-widest font-normal flex items-center gap-3">
                        <HardHat size={24} strokeWidth={1} /> Métiers CSP++
                      </h3>
                      <p className="font-light-ui text-gray-400 leading-relaxed tracking-wider text-justify">
                        Santé des métiers à forte charge mentale et horaires
                        atypiques. Nous installons des boucliers contre le
                        burn-out physiologique et optimisons la résilience
                        cognitive des leaders d'élite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-24">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <div className="text-gold mb-6">
                      {VitalityIcons.Recovery()}
                    </div>
                    <h2 className="font-cinzel text-3xl md:text-4xl tracking-widest text-[#1a1a1a] uppercase mb-8 font-normal leading-tight">
                      RÉSONANCE & <br /> RECONSTRUCTION
                    </h2>
                    <p className="font-cormorant text-2xl text-gray-500 italic mb-8 tracking-wider leading-relaxed">
                      "La santé des convalescents est l'art de transformer une
                      rupture en une nouvelle fondation."
                    </p>
                  </div>
                  <div className="lg:col-span-7 bg-white border border-gray-100 p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full"></div>
                    <h3 className="font-cinzel text-xs text-gold tracking-[0.4em] uppercase font-normal mb-8">
                      Protocole Convalescence
                    </h3>
                    <p className="font-light-ui text-lg text-gray-600 leading-relaxed tracking-wider text-justify space-y-6">
                      Un accompagnement spécifique dédié à ceux qui sortent
                      d'une épreuve physique ou psychologique. Nous utilisons
                      l'ingénierie de la santé pour accélérer la régénération
                      tissulaire, restaurer l'énergie mitochondriale et
                      reconstruire une confiance corporelle totale. Notre rôle
                      est de vous ramener à votre plein potentiel, avec une
                      structure plus solide qu'auparavant.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-6 text-[10px] font-cinzel tracking-widest uppercase font-normal text-gray-400">
                      <span className="flex items-center gap-2">
                        <Check size={12} className="text-gold" /> Récupération
                        Cellulaire
                      </span>
                      <span className="flex items-center gap-2">
                        <Check size={12} className="text-gold" /> Équilibre
                        Neuro-Séquentiel
                      </span>
                      <span className="flex items-center gap-2">
                        <Check size={12} className="text-gold" /> Reconstruction
                        Vitale
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-32">
                <button
                  onClick={() => navigateTo("contact")}
                  className="bg-[#D4AF37] text-white font-cinzel text-xs md:text-sm font-bold tracking-[0.3em] uppercase px-20 py-6 hover:bg-[#c29e2f] transition-all duration-300 shadow-xl"
                >
                  CONSULTER LE CABINET
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: FONDATEUR --- */}
        {currentPage === "fondateur" && (
          <div className="animate-fade-in pt-40 pb-32">
            <div className="max-w-4xl mx-auto px-6">
              <BackButton />
            </div>

            <div className="max-w-4xl mx-auto px-6 mb-32 text-center mt-4">
              <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-16 uppercase font-normal tracking-widest">
                Le Fondateur
              </h1>
              <div className="relative p-12 md:p-16 bg-white border border-gray-100 shadow-sm flex flex-col">
                <blockquote className="font-cormorant text-xl leading-relaxed text-[#1a1a1a] text-justify w-full italic tracking-wider">
                  Alaeddine a conçu cette structure pour offrir le luxe absolu :
                  la certitude de la réussite. Sa vision est de permettre
                  d'avancer vers les rêves sans friction, porté par une
                  structure inébranlable. Son rôle est de révéler la puissance
                  naturelle de l'individu, pour que chaque ambition devienne,
                  avec fluidité et sérénité, une nouvelle réalité.
                </blockquote>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 space-y-32">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:text-right">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                    <Sprout className="text-gold" size={32} strokeWidth={1} />
                    <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase leading-relaxed font-normal tracking-widest">
                      Racines &<br />
                      science du vivant
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-gold mt-4 hidden md:block ml-auto"></div>
                </div>
                <div className="md:col-span-8 font-light-ui text-lg text-gray-700 leading-relaxed tracking-wider text-justify">
                  C'est au cœur d'une nature généreuse, entre les champs
                  d'oliviers, d'orge et d'orangers, que s'est forgée sa première
                  alliance avec le vivant. Cette curiosité organique s'est muée
                  en rigueur scientifique à l'Université Jean Monnet de
                  Saint-Étienne, où Alaeddine a obtenu son diplôme en{" "}
                  <strong>Biologie des Organismes et des Populations</strong>,
                  avec une spécialisation pointue en{" "}
                  <strong>
                    Neurosciences du Comportement Humain et Animal
                  </strong>
                  . Cette base scientifique lui offre aujourd'hui une expertise
                  précise sur la nutrition, le sommeil et la physiologie,
                  piliers indispensables d'une santé durable.
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:text-right md:order-1">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                    <Brain className="text-gold" size={32} strokeWidth={1} />
                    <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase leading-relaxed font-normal tracking-widest">
                      Psyché &<br />
                      stratégie mentale
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-gold mt-4 hidden md:block ml-auto"></div>
                </div>
                <div className="md:col-span-8 md:order-2 font-light-ui text-lg text-gray-700 leading-relaxed tracking-wider text-justify space-y-6">
                  <p>
                    Son parcours est d'abord celui d'un bâtisseur : créateur
                    d'entreprises et d'associations, il a piloté des projets
                    internationaux et multiculturels complexes. Cette expérience
                    terrain s'étend de l'accompagnement d'adolescents à la
                    gestion de relations de très haut niveau avec une clientèle
                    de luxe et des interlocuteurs ministériels. La sécurisation
                    de financements stratégiques a forgé chez lui une maîtrise
                    redoutable de la persuasion, du leadership et de l'art de
                    convaincre.
                  </p>
                  <p>
                    Cette reality opérationnelle s'appuie sur une quête
                    intellectuelle profonde : il a exploré la psychologie et la
                    psychothérapie, enchaînant les formations en{" "}
                    <strong>
                      neurosciences cognitives, hypnothérapie, négociation et
                      leadership
                    </strong>
                    . Sa force de frappe réside dans cette{" "}
                    <strong>vision intégrative</strong> : lier la science du
                    cerveau à la reality du terrain business pour offrir une
                    préparation mentale d'élite.
                  </p>
                  <p>
                    Il déploie cette expertise sur deux axes majeurs. D'une
                    part, la{" "}
                    <strong>maîtrise de soi et l'intelligence sociale</strong>{" "}
                    pour la gestion de la vie privée, en intervenant sur la
                    reprogrammation des croyances limitantes, l'optimisation
                    neurochimique et le charisme appliqué (contrôle du cadre et
                    magnétisme). D'autre part, la{" "}
                    <strong>suprématie professionnelle</strong>, où il utilise
                    l'ingénierie de l'influence, l'architecture de l'autorité
                    naturelle et le profilage comportemental de haut niveau. Cet
                    accompagnement stratégique sur-mesure est spécifiquement
                    conçu pour armer les commerciaux, les chefs d'entreprises,
                    ainsi que les leaders et présidents de groupes ou
                    d'associations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:text-right">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                    <Swords className="text-gold" size={32} strokeWidth={1} />
                    <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase leading-relaxed font-normal tracking-widest">
                      Parcours physique,
                      <br />
                      combat et maîtrise de soi
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-gold ml-auto mt-4 hidden md:block ml-auto"></div>
                </div>
                <div className="md:col-span-8 font-light-ui text-lg text-gray-700 leading-relaxed tracking-wider text-justify space-y-6">
                  <p>
                    Son corps s'est construit à travers une polyvalence
                    athlétique exigeante :{" "}
                    <strong>
                      6 ans de football et 5 ans de natation en club
                    </strong>
                    , enrichis par la pratique du handball, du basketball et des
                    années de <strong>danses latines</strong> pour la maîtrise
                    du rythme et de l'espace. C'est cependant sur les tatamis
                    que s'est forgée son identité profonde.
                  </p>
                  <p>
                    <strong>Sportif de haut niveau</strong> en catégories Cadet
                    et Junior, il a été formé à la dure par son coach{" "}
                    <strong>Salah</strong>, membre actif des unités spéciales
                    d'élite, qui a initié ses élèves à la rigueur des
                    entraînements commandos, bien au-delà du simple karaté.
                    Titulaire d'un <strong>2ème Dan de Karaté</strong> en France
                    (3ème Dan à l'étranger) et Arbitre National, son expertise
                    de coaching couvre aujourd'hui le{" "}
                    <strong>
                      Karaté Traditionnel et Sportif, le Kickboxing et la
                      Self-Défense
                    </strong>
                    .
                  </p>
                  <p>
                    Pendant plus de 16 ans, il a reçu les enseignements
                    exigeants de son maître <strong>Amor BLANCO</strong>,
                    lui-même élève des grands maîtres Kasé, Kanazawa et Shirai.
                    Cette transmission lui a conféré une connaissance
                    approfondie de la voie de la main vide, de son histoire, de
                    sa philosophie, du <strong>BUNKAI</strong>, des techniques,
                    des katas, de la spiritualité, ainsi que les valeurs et la
                    discipline du <strong>BUSHIDO</strong>.
                  </p>
                  <p>
                    Cette quête d'excellence s'est poursuivie via des stages
                    avec l'élite mondiale et continue aujourd'hui en tant que
                    pratiquant passionné de{" "}
                    <strong>MMA et de Luta Livre</strong>, discipline dans
                    laquelle il recherche activement l'obtention de nouveaux
                    grades techniques.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:text-right md:order-1">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                    <Music className="text-gold" size={32} strokeWidth={1} />
                    <h3 className="font-cinzel text-2xl text-[#1a1a1a] uppercase leading-relaxed font-normal tracking-widest">
                      Art &<br />
                      présence scénique
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-gold ml-auto mt-4 hidden md:block ml-auto"></div>
                </div>
                <div className="md:col-span-8 md:order-2 font-light-ui text-lg text-gray-700 leading-relaxed tracking-wider text-justify space-y-6">
                  <p>
                    L'éveil artistique s'est initié dès l'âge de 4 ans sous
                    l'égide de son oncle, professeur de musique et
                    violoncelliste, qui fut son tout premier mentor. L'âme
                    artistique s'est ensuite élevée dès l'enfance, traversant
                    les conservatoires locaux pour l'apprentissage de la théorie
                    et de l'histoire de la musique, jusqu'aux conservatoires
                    privés pour le perfectionnement du piano et des percussions.
                  </p>
                  <p>
                    Habitué de la scène et des compétitions musicales dès son
                    plus jeune âge, il a ensuite embrassé le théâtre, porte
                    d'entrée vers l'opéra. La découverte de sa voix de ténor l'a
                    mené au Conservatoire National de Musique, où il a travaillé
                    aux côtés de la cantatrice bulgare{" "}
                    <strong>Hristina Hadjieva</strong>, de{" "}
                    <strong>Catherine Lassale</strong> en chant lyrique, ainsi
                    que de sa professeure japonaise{" "}
                    <strong>Toyoko Azaiez</strong> et de{" "}
                    <strong>Zouhaier Matteli</strong> pour le piano. Ces maîtres
                    lui ont transmis des connaissances précieuses et l'art de
                    l'interprétation, lui permettant de véritablement découvrir
                    son instrument.
                  </p>
                  <p>
                    Son chemin s'est poursuivi au Conservatoire Régional de
                    Saint-Étienne puis à Paris. Tout au long de ce parcours, il
                    a brillé en tant que MC et speaker pour des compétitions,
                    des shows et des animations culturelles. Il a également
                    guidé la troupe 'Nuances du Monde', composant, arrangeant,
                    dirigeant et performant sur scène.
                  </p>
                  <p>
                    Aujourd'hui, il met ses talents au service du marché,
                    enseignant le piano (occidental et oriental) et les
                    percussions orientales, tout en préparant les performeurs
                    scéniques à la gestion du trac, du stress, et à la
                    pertinence du fond et de la forme. Il déploie également ses
                    services de prestations, proposant acteurs, musiciens et
                    chanteurs sur le marché de l'événementiel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: CONTACT (VERSION REACT CONTROLED AVEC EMAILJS) --- */}
        {currentPage === "contact" && (
          <div className="animate-fade-in pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto px-6 mb-8">
              <BackButton />
            </div>
            <div className="text-center mb-16">
              <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
                L'Initiation
              </h1>
              <p className="font-light text-gray-600 max-w-2xl mx-auto text-lg">
                L'excellence ne souffre d'aucun compromis. Soumettez votre
                candidature pour intégrer nos programmes d'élévation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Colonne Informations */}
              <div className="space-y-12">
                <div>
                  <h3 className="font-cinzel text-xl mb-6 tracking-widest text-[#1a1a1a]">
                    BUREAU PARISIEN
                  </h3>
                  <div className="space-y-6 font-light text-gray-600">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                      <p>
                        Consultations privées sur demande
                        <br />
                        Paris & Déplacements Internationaux
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                      <p>+33 (0)7 66 45 60 51</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-[#D4AF37]" />
                      <p>elevation@amgh.me</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 border border-[#D4AF37]/30 bg-gray-50">
                  <h4 className="font-cinzel text-lg mb-4 text-[#1a1a1a]">
                    Protocole d'Admission
                  </h4>
                  <p className="font-light text-sm text-gray-600 leading-relaxed">
                    En raison de la nature ultra-personnalisée de nos
                    accompagnements (La Métamorphose), nous n'acceptons qu'un
                    nombre strictement limité de dirigeants et d'athlètes
                    simultanément. Une première analyse de votre profil
                    déterminera la validation de votre accès à L'Initiation.
                  </p>
                </div>
              </div>

              {/* Colonne Formulaire */}
              <div>
                {submitStatus === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center p-12 text-center border border-[#D4AF37]/50 bg-[#1a1a1a] text-white">
                    <CheckCircle className="w-16 h-16 text-[#D4AF37] mb-6" />
                    <h3 className="font-cinzel text-2xl mb-4 text-[#D4AF37]">
                      Candidature Transmise
                    </h3>
                    <p className="font-light text-gray-300">
                      Votre demande a été réceptionnée avec la plus stricte
                      confidentialité. La Direction d'AMGH ÉLÉVATION reviendra
                      vers vous dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-300 focus:border-[#D4AF37] py-2 px-0 outline-none transition-colors font-light"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                          Téléphone Direct *
                        </label>
                        <input
                          type="tel"
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-300 focus:border-[#D4AF37] py-2 px-0 outline-none transition-colors font-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Adresse Email Pro *
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-gray-300 focus:border-[#D4AF37] py-2 px-0 outline-none transition-colors font-light"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Domaine d'Activité
                      </label>
                      <input
                        type="text"
                        name="user_domain"
                        value={formData.user_domain}
                        onChange={handleInputChange}
                        placeholder="Ex: Dirigeant, Artiste, Sportif..."
                        className="w-full bg-transparent border-b border-gray-300 focus:border-[#D4AF37] py-2 px-0 outline-none transition-colors font-light"
                      />
                    </div>

                    {/* NOUVELLE SECTION: CASES À COCHER MULTIPLES */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4">
                        HOUSE OF... D'INTÉRÊT (PLUSIEURS CHOIX POSSIBLES)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          "House of Brain",
                          "House of Sport",
                          "House of Health",
                        ].map((house) => (
                          <label
                            key={house}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              name="houses"
                              value={house}
                              checked={formData.houses.includes(house)}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                            />
                            <span className="font-light-ui text-gray-600 group-hover:text-[#D4AF37] transition-colors tracking-wider">
                              {house}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* RETOUR DE LA ZONE DE DISPONIBILITÉS */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Zone de disponibilités
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-300 bg-transparent py-2 px-0 outline-none transition-colors font-light text-gray-700 cursor-pointer"
                      >
                        <option value="">Sélectionnez un créneau...</option>
                        <option value="Matin (8h - 12h)">
                          Matin (8h - 12h)
                        </option>
                        <option value="Après-midi (12h - 18h)">
                          Après-midi (12h - 18h)
                        </option>
                        <option value="Soirée (18h - 21h)">
                          Soirée (18h - 21h)
                        </option>
                        <option value="En semaine">En semaine</option>
                        <option value="Le week-end">Le week-end</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                        Vos Objectifs & Situation Actuelle *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        className="w-full bg-transparent border-b border-gray-300 focus:border-[#D4AF37] py-2 px-0 outline-none transition-colors font-light resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
                        />
                        <span className="font-light-ui text-sm text-gray-500 leading-relaxed tracking-wider">
                          J'accepte que AMGH utilise mes informations et me
                          contacte par téléphone ou mail. *
                        </span>
                      </label>
                    </div>

                    {submitStatus === "error" && (
                      <div className="flex items-center text-red-600 text-sm mt-4 bg-red-50 p-3">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Une erreur est survenue lors de l'envoi. Veuillez
                        réessayer ou nous contacter par email.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1a1a1a] text-white px-8 py-5 hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="font-cinzel text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                        {isSubmitting
                          ? "Transmission sécurisée..."
                          : "Soumettre le dossier"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: CONFIRMATION --- */}
        {currentPage === "confirmation" && (
          <div className="animate-fade-in pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="max-w-2xl mx-auto space-y-10">
              <div className="flex justify-center text-gold mb-4">
                <div className="p-8 border border-gold/30 rounded-full bg-white shadow-xl animate-pulse">
                  <Send size={48} strokeWidth={1} />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-cinzel text-3xl md:text-5xl uppercase tracking-widest text-[#1a1a1a] font-normal leading-tight">
                  Demande reçue
                </h1>
                <div className="w-16 h-[1px] bg-gold mx-auto"></div>
              </div>

              <p className="font-light-ui text-xl text-gray-600 leading-relaxed tracking-wider">
                Votre demande d'élévation a été transmise au cabinet. <br />
                Alaeddine et ses experts analyseront votre profil avec la plus
                grande discrétion. <br />
                <span className="text-[#1a1a1a] font-medium mt-4 block">
                  Vous serez contacté très prochainement pour initier votre
                  parcours.
                </span>
              </p>

              <div className="pt-8">
                <button
                  onClick={() => navigateTo("home")}
                  className="bg-[#1a1a1a] text-white font-cinzel text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase px-12 py-5 hover:bg-gold transition-all duration-500 shadow-lg"
                >
                  Retour à l'accueil
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- PAGE: RGPD --- */}
        {currentPage === "rgpd" && (
          <div className="animate-fade-in pt-40 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
              <BackButton />
              <div className="mb-20">
                <div className="flex items-center gap-4 text-gold mb-4">
                  <Lock size={32} strokeWidth={1} />
                  <span className="font-cinzel text-sm tracking-[0.4em] uppercase font-bold">
                    Confidentialité
                  </span>
                </div>
                <h1 className="font-cinzel text-3xl md:text-5xl text-[#1a1a1a] mb-8 uppercase font-normal leading-tight tracking-widest">
                  Politique de Confidentialité et de Protection des Données
                  Personnelles (RGPD)
                </h1>
                <div className="w-20 h-[1px] bg-gold"></div>
              </div>

              <div className="space-y-12 font-light-ui text-lg text-gray-700 leading-relaxed tracking-wider text-justify">
                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    1. Dispositions Générales
                  </h2>
                  <p>
                    La présente politique de confidentialité est établie
                    conformément aux exigences du Règlement (UE) 2016/679
                    (Règlement Général sur la Protection des Données - RGPD) et
                    à la loi française "Informatique et Libertés". Elle définit
                    la manière dont le cabinet AMGH ELEVATION (ci-après "le
                    Responsable de Traitement") collecte, utilise, protège et
                    partage les données personnelles de ses clients et des
                    visiteurs de son site internet.
                  </p>
                  <p className="mt-4 italic border-l-2 border-gold pl-6">
                    L'excellence et la confidentialité absolue étant au cœur de
                    l'écosystème AMGH ELEVATION, nous nous engageons à garantir
                    le plus haut niveau de sécurité pour vos données
                    personnelles, physiques et psychologiques.
                  </p>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    2. Identité du Responsable de Traitement
                  </h2>
                  <p>
                    Le traitement des données personnelles est opéré par :<br />
                    <strong>Nom :</strong> Cabinet AMGH ELEVATION
                    <br />
                    <strong>Adresse :</strong> Paris, France
                    <br />
                    <strong>
                      Contact Délégué à la Protection des Données (DPO) :
                    </strong>{" "}
                    contact@amgh-elevation.com
                  </p>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    3. Catégories de Données Collectées
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-2 uppercase text-sm tracking-widest">
                        3.1. Données d'identification et de contact (Données
                        standards) :
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Nom, prénom, adresse e-mail, numéro de téléphone.
                        </li>
                        <li>Fonction professionnelle et domaine de métier.</li>
                        <li>Données de navigation sur notre site internet.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] mb-2 uppercase text-sm tracking-widest">
                        3.2. Données à caractère sensible (Article 9 du RGPD) :
                      </h3>
                      <p>
                        En raison de la nature de nos expertises (optimisation
                        neurochimique, reprogrammation mentale, ingénierie du
                        sommeil et biologie), la souscription à nos services
                        nécessite la collecte de données relatives à votre santé
                        physique et mentale :
                      </p>
                      <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>
                          Antécédents médicaux et sportifs (blessures,
                          conditions physiques).
                        </li>
                        <li>
                          Évaluations psychologiques, niveaux de charge mentale
                          et de stress.
                        </li>
                        <li>
                          Données biométriques et physiologiques issues de nos
                          diagnostics.
                        </li>
                      </ul>
                      <p className="mt-4 font-semibold text-gold">
                        Ces données sensibles ne sont collectées qu'avec votre
                        consentement explicite, écrit et préalable.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    4. Finalités et Bases Légales du Traitement
                  </h2>
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#111] text-white font-cinzel text-[10px] tracking-widest uppercase">
                          <th className="p-4 border border-gray-800 text-left font-normal">
                            Finalité du traitement
                          </th>
                          <th className="p-4 border border-gray-800 text-left font-normal">
                            Catégorie de données
                          </th>
                          <th className="p-4 border border-gray-800 text-left font-normal">
                            Base légale (RGPD)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="p-4 border border-gray-200">
                            Prise de contact et élaboration de devis
                          </td>
                          <td className="p-4 border border-gray-200">
                            Données standards
                          </td>
                          <td className="p-4 border border-gray-200 italic">
                            Exécution de mesures précontractuelles.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-gray-200">
                            Diagnostic profond et accompagnement
                          </td>
                          <td className="p-4 border border-gray-200">
                            Données standards & Sensibles
                          </td>
                          <td className="p-4 border border-gray-200 italic">
                            Consentement explicite & Exécution du contrat.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-gray-200">
                            Facturation et gestion administrative
                          </td>
                          <td className="p-4 border border-gray-200">
                            Données standards
                          </td>
                          <td className="p-4 border border-gray-200 italic">
                            Obligation légale.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-gray-200">
                            Amélioration continue des protocoles
                          </td>
                          <td className="p-4 border border-gray-200">
                            Données pseudonymisées
                          </td>
                          <td className="p-4 border border-gray-200 italic">
                            Intérêt légitime du Responsable.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    5. Destinataires des Données et Confidentialité
                  </h2>
                  <p>
                    L'architecture de vos données est cloisonnée. Vos
                    informations ne seront jamais vendues, louées ou cédées à
                    des tiers à des fins commerciales.
                  </p>
                  <p className="mt-4">
                    L'accès à vos données est strictement limité :
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Aux experts et mentors internes d'AMGH ELEVATION, tenus au
                      secret professionnel absolu.
                    </li>
                    <li>
                      Aux sous-traitants techniques (hébergeur sécurisé, outil
                      de facturation) conformes au RGPD.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    6. Transferts Hors Union Européenne
                  </h2>
                  <p>
                    AMGH ELEVATION privilégie l'hébergement de ses données sur
                    le territoire de l'Union Européenne. Si des transferts
                    venaient à s'effectuer hors EEE, ils seraient encadrés par
                    des Clauses Contractuelles Types (CCT).
                  </p>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    7. Durée de Conservation
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Données de santé :</strong> Durée du programme + 5
                      ans d'archivage sécurisé.
                    </li>
                    <li>
                      <strong>Données de contact (prospects) :</strong> 3 ans à
                      compter du dernier contact.
                    </li>
                    <li>
                      <strong>Données de facturation :</strong> 10 ans
                      (obligation légale).
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    8. Vos Droits
                  </h2>
                  <p>
                    Conformément au RGPD, vous disposez d'une souveraineté
                    totale sur vos données. Vous avez le droit d'accès, de
                    rectification, d'effacement, de retrait du consentement et
                    de portabilité.
                  </p>
                  <p className="mt-4 font-semibold text-gold">
                    Pour exercer vos droits : contact@amgh-elevation.com.
                    Réponse sous 30 jours.
                  </p>
                </section>

                <section>
                  <h2 className="font-cinzel text-xl text-[#1a1a1a] uppercase mb-6 tracking-widest font-normal">
                    9. Sécurité des Données
                  </h2>
                  <p>
                    AMGH ELEVATION met en œuvre des mesures de sécurité de
                    pointe. L'ensemble des données sensibles font l'objet d'un
                    chiffrement et d'un stockage sur des serveurs hautement
                    sécurisés.
                  </p>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* SECTION FAQ GLOBALE (Affichée sur toutes les pages en bas) */}
        <FAQSection />
      </main>

      {/* FOOTER */}
      <footer className="bg-white text-[#1a1a1a] pt-24 pb-12 px-6 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="font-cinzel text-[15px] md:text-[20px] lg:text-[26px] text-black mb-16 uppercase tracking-widest">
            <span className="font-bold tracking-normal uppercase">AMGH</span>{" "}
            <span className="text-gold font-normal tracking-wide">
              ELEVATION
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center mb-16 font-cinzel text-xs tracking-[0.2em] text-[#1a1a1a] uppercase font-bold">
            <div>
              <h4 className="mb-6 tracking-widest">CONTACT</h4>
              <p className="font-light-ui text-sm text-gray-500 tracking-wider lowercase font-normal">
                elevation@amgh.me
              </p>
              <p className="font-light-ui text-sm text-gray-500 tracking-wider font-normal mt-2">
                +33 (0)7 66 45 60 51
              </p>
            </div>
            <div>
              <h4 className="mb-6 tracking-widest">BUREAUX</h4>
              <p className="font-light-ui text-sm text-gray-500 tracking-wider uppercase font-normal">
                Paris, France
              </p>
            </div>
            <div>
              <h4 className="mb-6 tracking-widest">RÉSEAUX</h4>
              <div className="flex justify-center gap-8 text-gray-400 font-normal">
                <Instagram
                  size={20}
                  className="hover:text-gold cursor-pointer transition-colors"
                />
                <Linkedin
                  size={20}
                  className="hover:text-gold cursor-pointer transition-colors"
                />
                <Mail
                  size={20}
                  className="hover:text-gold cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="w-32 h-[1px] bg-gold mb-8"></div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-light-ui text-[11px] tracking-[0.2em] text-gray-400 uppercase text-center md:text-left">
              © 2013 cabinet d'expertise AMGH{" "}
              <span className="font-normal">ELEVATION</span>. Tous droits
              réservés.
            </div>
            <button
              onClick={() => navigateTo("rgpd")}
              className={`font-light-ui text-[11px] tracking-[0.2em] text-gray-400 uppercase hover:text-gold transition-colors ${
                currentPage === "rgpd" ? "text-gold" : ""
              }`}
            >
              Politique RGPD
            </button>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;
