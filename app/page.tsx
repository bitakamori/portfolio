"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/contactForm";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (skillsRef.current) {
      const rect = skillsRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  const [circles, setCircles] = useState<
    {
      width: number;
      height: number;
      left: string;
      top: string;
      backgroundColor: string;
      animationDuration: string;
      animationDelay: string;
    }[]
  >([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id !== "home") {
              setShowNavbar(true);
            } else {
              setShowNavbar(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [
      homeRef.current,
      aboutRef.current,
      skillsRef.current,
      contactRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const newCircles = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      backgroundColor: `hsl(${Math.random() * 360}, 50%, 50%)`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));

    setCircles(newCircles);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    {
      name: "JavaScript",
      experience: "2 anos",
      color: "#8813d8",
      icon: "/javascript.png",
    },
    {
      name: "TypeScript",
      experience: "2 anos",
      color: "#a222f0",
      icon: "/typescript.png",
    },
    {
      name: "React",
      experience: "1 ano",
      color: "#ca74e6",
      icon: "/react.png",
    },
    {
      name: "Vue.Js",
      experience: "2 anos",
      color: "#db43bb",
      icon: "/vuejs.png",
    },
    {
      name: "Bootstrap",
      experience: "2 anos",
      color: "#ed92c8",
      icon: "/bootstrap.png",
    },
  ];

  const experiences = [
    {
      title: "Front End Developer",
      company: "4Network",
      period: "Ag 2023 - Nov 2024",
      description: `
      Colaborou no desenvolvimento e melhoria de uma rede social interna, incluindo criação de novas telas e funcionalidades, manutenção do sistema e correção de bugs.
      Converteu designs Figma em componentes de UI responsivos com TypeScript e VueJS.
      Integrou aplicações com APIs REST usando Axios.
      Utilizou Git para controle de versão e colaboração em projetos GitHub.
      Estudou e aplicou princípios SOLID e metodologias de código limpo.
      Trabalhou em colaboração com equipes de design, controle de qualidade e backend.
      Utilizou ClickUp para acompanhar tarefas, organizar prioridades e otimizar a produtividade da equipe.
      Utilizou metodologias ágeis como Scrum e Kanban para gerenciar o fluxo de trabalho, facilitar o alinhamento da equipe e garantir entregas contínuas e eficientes.
    `,
    },
  ];

  const navItems = ["home", "sobre", "skills", "contato"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800">
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-md shadow-sm transition-all duration-300 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
            >
              Portfolio
            </motion.div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                      activeSection === section
                        ? "text-purple-600"
                        : "text-gray-600"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === section
                      ? "bg-purple-100 text-purple-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      <motion.section
        id="home"
        ref={homeRef}
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            {circles.map((circle, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: circle.width,
                  height: circle.height,
                  left: circle.left,
                  top: circle.top,
                  backgroundColor: circle.backgroundColor,
                  filter: "blur(70px)",
                  animation: `float ${circle.animationDuration} ease-in-out infinite`,
                  animationDelay: circle.animationDelay,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mb-15 sm:mb-0 container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Bianca´s Portfolio
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
            >
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("sobre");
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow w-full sm:w-auto text-center"
              >
                Sobre mim
              </Link>
              <Link
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                className="bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-medium shadow hover:shadow-lg transition-shadow w-full sm:w-auto text-center"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contato");
                }}
                className="bg-gray-50 text-gray-800 px-8 py-3 rounded-full font-medium shadow hover:shadow-lg transition-shadow w-full sm:w-auto text-center"
              >
                Contato
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("sobre")}
            className="bg-gray-50 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <KeyboardArrowDownIcon className="h-6 w-6 text-purple-600" />
          </button>
        </div>
      </motion.section>

      <section id="sobre" ref={aboutRef} className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Sobre mim & Experiência
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Minha jornada
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6">
                Formada em Radiologia pela UTFPR, em 2023 tive a oportunidade de
                participar de um curso para desenvolvedores iniciantes, onde
                descobri minha paixão pelo desenvolvimento de software. Esse
                interesse me levou a fazer uma transição de carreira, e logo
                conquistei meu primeiro emprego na área, reforçando minha
                certeza de que esse é o caminho que desejo seguir. Atualmente,
                estou cursando Engenharia de Software para aprofundar meus
                conhecimentos e continuar evoluindo nessa jornada.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6">
                Estou sempre aprendendo e me adaptando a novas tecnologias e
                metodologias para acompanhar a evolução do desenvolvimento web.
                Meu objetivo é criar experiências digitais que sejam não só
                bonitas, mas também funcionais e acessíveis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Experiência Profissional
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                    {exp.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <span className="text-purple-600 font-medium">
                      {exp.company}
                    </span>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                    {exp.description
                      .trim()
                      .split("\n")
                      .map((item, i) => (
                        <li key={i}>{item.replace(/^- /, "").trim()}</li>
                      ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsRef}
        className="py-16 sm:py-20 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl transition-all duration-200"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
            scale: hoveredSkill ? 1.2 : 0.8,
            opacity: hoveredSkill ? 0.8 : 0.3,
          }}
          transition={{ type: "spring", damping: 15 }}
          style={{
            width: 500,
            height: 500,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
            <p className="hidden sm:flex mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 px-4">
              Mova o mouse para ver o efeito de fundo interativo. Estas são as
              tecnologias com as quais trabalho.
            </p>
            <p className="flex sm:hidden mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 px-4">
              Estas são as tecnologias com as quais trabalho.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group"
              >
                <div
                  className="relative bg-gray-50 rounded-xl p-4 sm:p-6 shadow-md transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg text-center h-full flex flex-col items-center justify-center"
                  style={{
                    borderTop:
                      hoveredSkill === skill.name
                        ? `3px solid ${skill.color}`
                        : "3px solid transparent",
                  }}
                >
                  <div className="mb-3 sm:mb-4">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="transition-transform duration-300 mx-auto"
                      style={{
                        transform:
                          hoveredSkill === skill.name
                            ? "scale(1.2)"
                            : "scale(1)",
                      }}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium">
                    Experiência: {skill.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        ref={contactRef}
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Entre em contato
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
            <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 px-4">
              Tem um projeto em mente ou quer discutir oportunidades em
              potencial? Sinta-se à vontade para entrar em contato!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 sm:p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Informações de contato
              </h3>
              <div className="space-y-4">
                <Link
                  href="mailto:btakamori@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <p className="font-medium text-sm sm:text-base">
                      btakamori@outlook.com
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bianca-helena-takamori-ribeiro-877593268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <LinkedInIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">LinkedIn</p>
                    <p className="font-medium text-sm sm:text-base">
                      linkedin.com/in/bianca-helena-takamori-ribeiro
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://github.com/bitakamori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <GitHubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">GitHub</p>
                    <p className="font-medium text-sm sm:text-base">
                      github.com/bitakamori
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs sm:text-sm text-gray-400">
                © {new Date().getFullYear()} Bianca Takamori.
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="https://github.com/bitakamori"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bianca-helena-takamori-ribeiro-877593268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="mailto:btakamori@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
