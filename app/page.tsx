"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Instagram,
  Heart,
  Users,
  Home,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Mail,
  HandHeart,
  Gift,
  ArrowUp,
} from "lucide-react";

// Logo Component
function Logo({ className = "" }: { className?: string }) {
  return <img src="/logo.png" alt="Restaurando Vidas" className={className} />;
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#servicos", label: "O que Fazemos" },
    { href: "#galeria", label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#ajudar", label: "Como Ajudar" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className={`${isScrolled ? "text-primary" : "text-primary-foreground"} transition-colors duration-300`}
          >
            <Logo className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contato"
            className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-fade-in">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 animate-fade-in tracking-widest uppercase">
            Fábrica de Restaurar Vidas
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Toda pessoa merece uma{" "}
            <span className="text-accent">segunda chance</span>
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Há mais de uma década transformando vidas através do acolhimento,
            tratamento e amor. Juntos, podemos reconstruir sonhos e devolver a
            esperança.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://wa.me/5511990089152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/restaurandovidas_84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Tratamos cada pessoa com carinho, respeito e dignidade.",
    },
    {
      icon: Users,
      title: "Acolhimento",
      description: "Ambiente seguro e familiar para a recuperação.",
    },
    {
      icon: Sparkles,
      title: "Esperança",
      description: "Acreditamos na transformação e renovação de cada vida.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Imagem da equipe acolhedora
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Uma missão de <span className="text-primary">amor</span> e{" "}
              <span className="text-primary">transformação</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A <strong>Restaurando Vidas</strong> é uma instituição dedicada ao
              resgate e recuperação de pessoas em situação de vulnerabilidade
              social, dependência química e alcoolismo. Nossa missão é oferecer
              acolhimento humanizado, tratamento especializado e apoio integral
              para a reintegração social.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Acreditamos que toda pessoa, independente de sua história, merece
              uma segunda chance. Com amor, dedicação e profissionalismo,
              trabalhamos diariamente para transformar vidas e reconstruir
              famílias.
            </p>

            {/* Values */}
            <div className="grid gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Acolhimento",
      description:
        "Recebemos cada pessoa com amor e dignidade, oferecendo um ambiente seguro e acolhedor para o início da jornada de recuperação.",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "Desintoxicação",
      description:
        "Acompanhamento profissional durante o processo de desintoxicação, com suporte médico e emocional 24 horas.",
      color: "bg-accent",
    },
    {
      icon: Users,
      title: "Reintegração Social",
      description:
        "Programas de capacitação profissional e apoio psicológico para a reinserção na sociedade e no mercado de trabalho.",
      color: "bg-primary",
    },
    {
      icon: HandHeart,
      title: "Apoio Familiar",
      description:
        "Orientação e suporte para as famílias, fundamentais no processo de recuperação e na reconstrução dos laços afetivos.",
      color: "bg-accent",
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            O que <span className="text-primary">fazemos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um tratamento completo e humanizado, acompanhando cada
            etapa da jornada de recuperação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
// Gallery Section
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/galeria${i + 1}.jpg`, // Puxa automaticamente as fotos galeria1.jpg, galeria2.jpg, etc.
    title:
      [
        "Atividade terapêutica",
        "Momento de acolhimento",
        "Oficina de artesanato",
        "Roda de conversa",
        "Atividade física",
        "Momento de oração",
        "Celebração de aniversário",
        "Visita da família",
        "Terapia em grupo",
        "Horta comunitária",
        "Recreação",
        "Formatura de residentes",
      ][i] || `Foto ${i + 1}`,
    description: `Registro das atividades e momentos especiais da nossa comunidade terapêutica.`,
  }));

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Nossa Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Momentos de <span className="text-primary">transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada foto conta uma história de superação, esperança e recomeço.
          </p>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Exibe a foto salva na pasta public */}
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Efeito escuro com o título ao passar o mouse */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">
                  {image.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox (Foto aberta em tamanho grande ao clicar) */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === 1 ? 12 : (prev || 1) - 1));
              }}
              className="absolute left-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <div
              className="bg-card rounded-3xl p-4 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-secondary rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                {/* Imagem Ampliada */}
                <img 
                  src={`/galeria${selectedImage}.jpg`} 
                  alt={galleryImages[selectedImage - 1]?.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-foreground text-xl font-medium">
                  {galleryImages[selectedImage - 1]?.title}
                </p>
                <p className="text-muted-foreground mt-2">
                  {galleryImages[selectedImage - 1]?.description}
                </p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === 12 ? 1 : (prev || 1) + 1));
              }}
              className="absolute right-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "João Silva",
      role: "Ex-residente, recuperado há 3 anos",
      content:
        "A Restaurando Vidas me devolveu a esperança quando eu achava que tudo estava perdido. Hoje tenho uma família, um emprego e uma vida digna. Sou eternamente grato por cada pessoa que faz parte dessa instituição.",
      initials: "JS",
    },
    {
      name: "Maria Santos",
      role: "Mãe de ex-residente",
      content:
        "Recebi meu filho de volta. Não apenas curado, mas transformado. A equipe da Restaurando Vidas tratou minha família com muito amor e profissionalismo. Eles são verdadeiros anjos.",
      initials: "MS",
    },
    {
      name: "Pedro Oliveira",
      role: "Ex-residente, recuperado há 5 anos",
      content:
        "Passei 15 anos nas drogas. Perdi tudo: família, emprego, dignidade. Na Restaurando Vidas encontrei pessoas que acreditaram em mim quando eu mesmo não acreditava. Hoje ajudo outras pessoas a encontrarem o mesmo caminho.",
      initials: "PO",
    },
    {
      name: "Ana Costa",
      role: "Esposa de ex-residente",
      content:
        "Meu marido voltou a ser o homem por quem me apaixonei. A Restaurando Vidas não salvou apenas uma vida, salvou nossa família inteira. Gratidão eterna!",
      initials: "AC",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mt-4 mb-6">
            Histórias de <span className="text-accent">esperança</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Vidas transformadas que nos inspiram a continuar nossa missão.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-6xl text-primary/20 font-serif leading-none mb-4">
              &ldquo;
            </div>
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
              {testimonials[currentSlide].content}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {testimonials[currentSlide].initials}
                </span>
              </div>
              <div>
                <p className="font-bold text-foreground">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground flex items-center justify-center transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-accent w-8"
                      : "bg-primary-foreground/40"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground flex items-center justify-center transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Help Section
function HelpSection() {
  const helpOptions = [
    {
      icon: Gift,
      title: "Doações",
      description:
        "Sua contribuição ajuda a manter nossos serviços e atender mais pessoas. Aceitamos doações em dinheiro, alimentos, roupas e materiais de higiene.",
      cta: "Fazer Doação",
      href: "#contato",
    },
    {
      icon: HandHeart,
      title: "Voluntariado",
      description:
        "Doe seu tempo e talento. Precisamos de voluntários para diversas atividades: desde profissionais de saúde até pessoas dispostas a compartilhar amor.",
      cta: "Ser Voluntário",
      href: "#contato",
    },
  ];

  return (
    <section id="ajudar" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Faça Parte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Como <span className="text-primary">ajudar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Existem várias formas de contribuir com nossa missão. Cada gesto de
            solidariedade faz a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className="bg-card p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <option.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {option.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {option.description}
              </p>
              <a
                href={option.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                {option.cta}
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Vidas transformadas" },
            { number: "10+", label: "Anos de história" },
            { number: "50+", label: "Voluntários ativos" },
            { number: "100%", label: "Dedicação e amor" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl shadow-lg"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Entre em <span className="text-primary">contato</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Estamos aqui para ajudar. Entre em contato conosco para saber mais
              sobre nossos serviços, fazer uma doação ou se tornar um
              voluntário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">
                    Restaurandovidqs933@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">(11) 99008-9152</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Instagram</h3>
                  <a
                    href="https://www.instagram.com/restaurandovidas_84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @restaurandovidas_84
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://wa.me/5511990089152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/restaurandovidas_84"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="internacao">
                    Informações sobre internação
                  </option>
                  <option value="doacao">Quero fazer uma doação</option>
                  <option value="voluntario">Quero ser voluntário</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Escreva sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Logo className="h-12 w-auto mb-4 text-background" />
            <p className="text-background/70 text-sm leading-relaxed">
              Fábrica de Restaurar Vidas. Uma instituição dedicada ao resgate e
              recuperação de pessoas em situação de vulnerabilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#servicos", label: "Nossos Serviços" },
                { href: "#galeria", label: "Galeria" },
                { href: "#ajudar", label: "Como Ajudar" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>Restaurandovidqs933@gmail.com</p>
              <p>(11) 99008-9152</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/5511990089152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-green-600 text-background flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/restaurandovidas_84"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 text-background flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 text-sm">
            {new Date().getFullYear()} Restaurando Vidas. Todos os direitos
            reservados.
          </p>
          <p className="text-background/30 text-xs mt-2">
            Fabrica de Restaurar Vidas - Transformando historias, renovando
            esperancas.
          </p>
          <p className="text-background/40 text-xs mt-3">
            Site criado por{" "}
            <a
              href="https://www.instagram.com/isasouzadev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              @Isasouzadev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Float Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511990089152"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="Contato via WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// Back to Top Button
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <HelpSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </main>
  );
}