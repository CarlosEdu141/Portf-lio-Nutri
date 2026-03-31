import { useState, useEffect, useRef } from "react";
import fotoAna from "./assets/PhotoNicole.jpg";
import "./App.css";

const experiences = [
  {
    icon: "🌿",
    title: "Nutrição Clínica",
    place: "Clínica Nutrivida, Goiânia",
    year: "2020",
    desc: "Atendimento individualizado com foco em reequilíbrio metabólico, perda de peso saudável e tratamento de disfunções hormonais.",
  },
  {
    icon: "🫀",
    title: "Nutrição Esportiva",
    place: "Centro Olímpico GO",
    year: "2019",
    desc: "Acompanhamento nutricional de atletas amadores e profissionais, otimizando desempenho e recuperação muscular.",
  },
  {
    icon: "🍃",
    title: "Nutrição Funcional",
    place: "Instituto de Medicina Integrativa",
    year: "2022",
    desc: "Protocolos baseados em modulação intestinal, anti-inflamatório e longevidade aplicados à prática clínica diária.",
  },
  {
    icon: "👶",
    title: "Nutrição Materno-Infantil",
    place: "Hospital Santa Luzia",
    year: "2018",
    desc: "Suporte nutricional para gestantes e crianças, prevenção de carências nutricionais e educação alimentar familiar.",
  },
  {
    icon: "🧘",
    title: "Psicologia Alimentar",
    place: "Instituto BeMind",
    year: "2023",
    desc: "Abordagem integrativa que une comportamento alimentar, mindful eating e manejo do comer emocional.",
  },
  {
    icon: "📊",
    title: "Pesquisa & Docência",
    place: "Universidade Federal de Goiás",
    year: "2021",
    desc: "Pesquisadora na área de microbiota intestinal e saúde metabólica. Professora convidada de Nutrição Clínica.",
  },
];

const formations = [
  { year: "2024", title: "Pós-graduação em Nutrição Funcional e Integrativa", inst: "Instituto VP — São Paulo" },
  { year: "2022", title: "Especialização em Nutrição Esportiva", inst: "CREF/GO — Goiânia" },
  { year: "2020", title: "Bacharelado em Nutrição", inst: "Universidade Federal de Goiás" },
  { year: "2019", title: "Certificação em Mindful Eating", inst: "The Center for Mindful Eating — EUA" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          Nicole <span>Oliveira</span> · Nutricionista
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => scrollTo("bio")} href="#bio">
              Biografia
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo("exp")} href="#exp">
              Experiência
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollTo("contato")}
              href="#contato"
              className="nav-cta"
            >
              Agendar Consulta
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        <div className="hero-leaf">🌿</div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Nutricionista · CRN-9 · Goiânia
          </div>
          <h1 className="hero-title">
            Transforme sua<br />
            <em>saúde através</em><br />
            da alimentação.
          </h1>
          <p className="hero-subtitle">
            Cuidado nutricional personalizado, baseado em ciência e humanidade.
            Juntos, vamos construir uma relação mais leve e consciente com a comida.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("contato")}>
              Agendar Consulta
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("bio")}>
              Conhecer mais
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div style={{ position: "relative" }}>
            <div className="hero-frame-deco" />
            <div className="hero-image-frame">
              <img
                src={fotoAna}
                alt="Ana Beatriz — Nutricionista"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div className="hero-badge">
              <span className="badge-icon">⭐</span>
              <div className="badge-text">
                <strong>6+</strong>
                anos de experiência
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* BIOGRAFIA */}
      <section id="bio" className="section bio-section">
        <div className="section-inner">
          <div className="section-label" ref={addReveal}>
            <span className="label-line" />
            Quem sou eu
          </div>
          <h2 className="section-title reveal" ref={addReveal}>
            Uma abordagem <em>humana</em><br />e baseada em evidências
          </h2>

          <div className="bio-grid">
            <div className="bio-visual reveal" ref={addReveal}>
              <div className="bio-card">
                <div className="bio-card-leaf">🌿</div>
                <p className="bio-quote">
                  Alimentar-se bem é um ato de amor próprio, não de restrição.
                </p>
                <div className="bio-stats">
                  <div className="stat-item">
                    <div className="stat-num">500+</div>
                    <div className="stat-label">Pacientes Atendidos</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">6</div>
                    <div className="stat-label">Anos de Prática</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">4</div>
                    <div className="stat-label">Especializações</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-num">98%</div>
                    <div className="stat-label">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio-text reveal" ref={addReveal}>
              <p>
                Olá! Sou <strong>Nicole Oliveira</strong>, nutricionista formada pela
                Universidade Federal de Goiás, com pós-graduação em Nutrição Funcional
                e Integrativa. Minha trajetória é guiada pela crença de que cada corpo
                é único e merece uma abordagem personalizada.
              </p>
              <p>
                Combino o rigor científico com uma escuta ativa e empática, entendendo
                que a alimentação vai muito além da mesa — ela reflete histórias, emoções
                e identidade. Meu objetivo é que cada paciente alcance saúde plena de
                forma sustentável e prazerosa.
              </p>
              <p>
                Atuo nas áreas clínica, esportiva, funcional e materno-infantil,
                integrando sempre o olhar da psicologia alimentar para resultados
                duradouros.
              </p>
              <div className="bio-specialties">
                {[
                  "Nutrição Clínica",
                  "Nutrição Funcional",
                  "Emagrecimento",
                  "Saúde Intestinal",
                  "Nutrição Esportiva",
                  "Mindful Eating",
                  "Gestação & Infância",
                ].map((s) => (
                  <span key={s} className="specialty-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIÊNCIA */}
      <section id="exp" className="section exp-section">
        <div className="section-inner">
          <div className="section-label reveal" ref={addReveal}>
            <span className="label-line" />
            Trajetória profissional
          </div>
          <h2 className="section-title reveal" ref={addReveal}>
            Experiências que <em>moldaram</em><br />minha prática
          </h2>

          <div className="exp-grid">
            {experiences.map((e, i) => (
              <div
                key={i}
                className="exp-card reveal"
                ref={addReveal}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="exp-card-year">{e.year}</span>
                <div className="exp-icon">{e.icon}</div>
                <div className="exp-card-title">{e.title}</div>
                <div className="exp-card-place">{e.place}</div>
                <div className="exp-card-desc">{e.desc}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="formation-wrap reveal" ref={addReveal}>
            <h3 className="formation-title">Formação Acadêmica</h3>
            <div className="timeline">
              {formations.map((f, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="tl-year">{f.year}</div>
                  <div className="tl-title">{f.title}</div>
                  <div className="tl-inst">{f.inst}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTATO */}
      <section id="contato" className="section contact-section">
        <div className="section-inner">
          <div className="section-label reveal" ref={addReveal}>
            <span className="label-line" />
            Vamos conversar
          </div>
          <h2 className="section-title reveal" ref={addReveal}>
            Dê o primeiro passo para<br />uma vida mais <em>equilibrada</em>
          </h2>

          <div className="contact-grid">
            <div className="contact-info reveal" ref={addReveal}>
              <p>
                Estou aqui para ouvir você. Se você busca melhorar sua relação com a
                alimentação, alcançar resultados sustentáveis ou simplesmente se sentir
                melhor no seu corpo, entre em contato — ficarei feliz em ajudar.
              </p>
              <div className="contact-items">
                {[
                  { icon: "📍", label: "Localização", value: "Goiânia, Goiás — Brasil" },
                  { icon: "📱", label: "WhatsApp", value: "(62) 9 9999-9999" },
                  { icon: "📧", label: "E-mail", value: "NiOliveira@nutricao.com.br" },
                  { icon: "📅", label: "Horário de atendimento", value: "Seg–Sex: 8h às 18h" },
                ].map((c) => (
                  <div key={c.label} className="contact-item">
                    <div className="contact-item-icon">{c.icon}</div>
                    <div>
                      <div className="contact-item-text">{c.label}</div>
                      <div className="contact-item-value">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" ref={addReveal}>
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Seu nome</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Como você se chama?"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Como posso ajudar?</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Conte um pouco sobre o que você busca..."
                  />
                </div>
                <button className="btn-form">Enviar Mensagem 🌿</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">Nicole Oliveira · Nutrição</div>
        <div className="footer-copy">© 2025 · CRN-9 · Todos os direitos reservados</div>
      </footer>
    </>
  );
}