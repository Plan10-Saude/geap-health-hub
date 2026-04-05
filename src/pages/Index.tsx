import { useState, useEffect } from "react";

const WA = "https://wa.me/5511938043333";

const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#22A851] flex items-center justify-center flex-shrink-0">
    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
  </div>
);

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Index = () => {
  const [openTema, setOpenTema] = useState<number | null>(null);
  const [openPergunta, setOpenPergunta] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [orgao, setOrgao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [municipioEstado, setMunicipioEstado] = useState("");
  const [servidores, setServidores] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [lgpd, setLgpd] = useState(false);

  useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/5511938043333?text=Olá!%20Preenchi%20o%20formulário%20e%20gostaria%20de%20solicitar%20uma%20apresentação%20institucional%20da%20GEAP%20para%20o%20meu%20órgão.",
      "_blank"
    );
  };

  const beneficios = [
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#1B3461" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M9 12l2 2 4-4" stroke="#22A851" strokeWidth="2" strokeLinecap="round"/></svg>,
      title: "Dispensa de Licitação",
      desc: "A natureza jurídica da GEAP permite contratação direta, simplificando o processo de adesão sem necessidade de licitação pública."
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><circle cx="12" cy="8" r="4" stroke="#1B3461" strokeWidth="1.8"/><path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      title: "Tradição e Solidez",
      desc: "Desde 1945 cuidando da saúde dos servidores públicos federais, estaduais e municipais ativos, aposentados e seus familiares."
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#1B3461" strokeWidth="1.8"/></svg>,
      title: "Autogestão Sem Fins Lucrativos",
      desc: "A GEAP reverte todos os seus recursos para a assistência integral dos beneficiários — sem intermediários com fins lucrativos."
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><circle cx="12" cy="12" r="9" stroke="#1B3461" strokeWidth="1.8"/><path d="M12 7v10M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5s2.5.9 2.5 2-.9 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="#1B3461" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      title: "Subsídio Governamental",
      desc: "Reduz drasticamente o valor final pago pelo servidor, calculado por faixa salarial, tipo de plano e número de dependentes."
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#1B3461" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      title: "Dependentes Ampliados",
      desc: "Inclui pais, sogros, irmãos, sobrinhos, netos, primos e bisnetos — cobertura familiar completa sem burocracia."
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#1B3461" strokeWidth="1.8"/><circle cx="12" cy="9" r="2.5" stroke="#1B3461" strokeWidth="1.8"/></svg>,
      title: "Rede com 15 Mil Prestadores",
      desc: "Mais de 15 mil prestadores em 2.300 municípios, com hospitais premium e clínicas de referência em todo o Brasil."
    },
  ];

  const diferenciais = [
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.8"/><path d="M12 8v8M8 12h8" stroke="#22A851" strokeWidth="2" strokeLinecap="round"/></svg>,
      title: "Cobertura Completa",
      desc: "Internações, cirurgias e tratamentos de alta complexidade"
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      title: "Atendimento Virtual",
      desc: "Telemedicina e atendimento presencial integrados"
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="white" strokeWidth="1.8"/><circle cx="7" cy="7" r="1.5" fill="white"/></svg>,
      title: "Isenção de Coparticipação",
      desc: "Reduz o custo direto ao servidor"
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5S10.3 17 12 17s3-1.1 3-2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      title: "Subsídio Governamental",
      desc: "Valor final reduzido para o servidor"
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/><path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="#22A851" strokeWidth="2" strokeLinecap="round"/></svg>,
      title: "Sem Taxa de Adesão",
      desc: "Nenhum custo adicional para aderir"
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="white" strokeWidth="1.8"/><path d="M9 12h6M9 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
      title: "Gestão Personalizada",
      desc: "Suporte dedicado sob medida para o órgão"
    },
  ];

  const orgaosData = [
    { title: "Prefeituras", sub: "Municípios de todos os portes", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V12h6v9" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { title: "Câmaras Municipais", sub: "Poder legislativo municipal", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M12 3L2 9h20L12 3zM4 9v11h16V9M2 20h20M9 14h6M9 17h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { title: "Autarquias", sub: "Entidades da administração indireta", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg> },
    { title: "Secretarias Estaduais", sub: "Órgãos da esfera estadual", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg> },
    { title: "Tribunais", sub: "Poder judiciário em todas as instâncias", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M12 3v18M3 21h18M5 8l7-5 7 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 8v4a4 4 0 008 0V8M11 8v4a4 4 0 008 0V8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg> },
    { title: "Empresas Públicas", sub: "Sociedades de economia mista", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="1.6"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg> },
    { title: "Universidades Federais", sub: "Institutos e fundações de ensino", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg> },
    { title: "Forças Armadas", sub: "Militares ativos e na reserva", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/></svg> },
    { title: "Hospitais Universitários", sub: "Unidades hospitalares públicas", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.6"/><path d="M12 8v8M8 12h8" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/></svg> },
  ];

  const steps = [
    { n: "1", title: "Contato Inicial", desc: "Conversa com nossos consultores especializados" },
    { n: "2", title: "Proposta Personalizada", desc: "Elaboração de um plano sob medida para o seu órgão" },
    { n: "3", title: "Formalização do Acordo", desc: "Assinatura do contrato e trâmites legais" },
    { n: "4", title: "Liberação para Adesão", desc: "Início da adesão dos servidores ao plano" },
    { n: "5", title: "Suporte Contínuo", desc: "Acompanhamento pós-implantação e suporte permanente" },
  ];

  const faqTemas = [
    {
      tema: "Elegibilidade e Adesão",
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
      perguntas: [
        { q: "Quem pode conveniar?", a: "Órgãos públicos federais, estaduais e municipais, além de autarquias, fundações e empresas públicas que desejam oferecer planos de saúde aos seus servidores e dependentes." },
        { q: "Quais servidores podem aderir ao plano?", a: "Servidores ativos, aposentados, pensionistas e seus dependentes, conforme regras de elegibilidade da GEAP." },
        { q: "O órgão precisa ter número mínimo de servidores?", a: "Não. A GEAP atende órgãos de todos os portes, desde pequenas prefeituras até grandes ministérios." },
        { q: "A GEAP atende agregados?", a: "Sim. Além dos dependentes diretos (cônjuge, filhos, enteados), a GEAP permite a inclusão de agregados como pais, sogros e netos, mediante comprovação e pagamento adicional." },
      ],
    },
    {
      tema: "Convênio e Licitação",
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/><path d="M9 12l2 2 4-4" stroke="#22A851" strokeWidth="2"/></svg>,
      perguntas: [
        { q: "O convênio exige licitação?", a: "Não. A GEAP é uma autogestão pública, o que permite convênios diretos com órgãos governamentais sem necessidade de processo licitatório." },
        { q: "Quais documentos são necessários para o convênio?", a: "Para formalizar o convênio, o órgão deve apresentar: ofício de solicitação de credenciamento, cópia do CNPJ e do ato constitutivo, termo de adesão ou contrato de convênio, e relação de servidores interessados (quando aplicável)." },
        { q: "Quanto tempo leva para o convênio ser efetivado?", a: "Após o envio da documentação e análise técnica, o processo de credenciamento é concluído em média entre três a cinco meses, dependendo da legislação local, complexidade do órgão e do número de servidores." },
        { q: "Como solicitar uma apresentação institucional?", a: "Basta preencher o formulário disponível nesta página com os dados do órgão e aguardar o contato de um consultor especializado da Plan10 Saúde / GEAP." },
      ],
    },
    {
      tema: "Cobertura e Planos",
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"><path d="M3 12h3l2-7 4 14 3-9 2 5 1-3h3" strokeLinejoin="round"/></svg>,
      perguntas: [
        { q: "Qual é a cobertura dos planos GEAP?", a: "Os planos oferecem cobertura nacional, com rede credenciada em todas as capitais e principais cidades do país, incluindo consultas, exames, internações, cirurgias, odontologia e programas de prevenção." },
        { q: "Existem planos específicos para determinados perfis?", a: "Sim. A GEAP oferece modalidades com diferentes níveis de cobertura, rede e valores, adequadas a cada realidade institucional." },
        { q: "A cobertura é válida fora do estado?", a: "Sim. Todos os planos possuem cobertura nacional, conforme legislação da ANS." },
        { q: "A GEAP possui rede própria?", a: "Sim. Além da rede credenciada nacional, a GEAP possui unidades próprias em diversas regiões do Brasil." },
        { q: "Existem programas de prevenção e saúde mental?", a: "Sim. A GEAP oferece programas de saúde mental, acompanhamento de doenças crônicas, prevenção e bem-estar e acompanhamento de gestantes." },
      ],
    },
    {
      tema: "Financeiro e Pagamento",
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5s2.5.9 2.5 2-.9 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2"/></svg>,
      perguntas: [
        { q: "Como funciona o subsídio?", a: "O subsídio é concedido conforme as normas do órgão conveniado e da GEAP. Ele reduz o valor da mensalidade do servidor, sendo calculado de acordo com faixa salarial, tipo de plano e número de dependentes." },
        { q: "Como é calculado o valor da mensalidade?", a: "O valor depende de: faixa etária do beneficiário, tipo de plano escolhido, categoria do servidor, existência de dependentes e subsídio aplicado pelo órgão." },
        { q: "Como funciona o pagamento?", a: "O pagamento pode ser via desconto em folha ou via boleto, dependendo da modalidade do órgão conveniado." },
        { q: "É possível migrar servidores de outro plano?", a: "Sim. A Plan10 Saúde auxilia no processo de migração e na comunicação interna com os servidores." },
      ],
    },
    {
      tema: "Segurança e Suporte",
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
      perguntas: [
        { q: "Os dados enviados são protegidos?", a: "Sim. Todos os dados são tratados conforme a Lei Geral de Proteção de Dados (LGPD) e armazenados em ambiente seguro com criptografia SSL 256 bits." },
        { q: "Há suporte após o convênio?", a: "Sim. O órgão conveniado conta com atendimento exclusivo, suporte técnico e acompanhamento contínuo para garantir a satisfação dos servidores e a eficiência da gestão do plano." },
        { q: "Onde posso obter mais informações oficiais?", a: "No SAC da GEAP ou diretamente com a Plan10 Saúde, parceira credenciada para órgãos públicos. Entre em contato pelo WhatsApp (11) 9 3804-3333 ou pelo site www.plangroup.com.br." },
      ],
    },
  ];

  const coberturas = [
    {
      img: "/assistencia-medica.jpg",
      title: "Assistência Médica",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M4.5 6.5C4.5 4.57 6.07 3 8 3s3.5 1.57 3.5 3.5V11c0 2.76-2.24 5-5 5a5 5 0 01-5-5V6.5" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"/><path d="M6.5 3v4M9.5 3v4" stroke="#1B3461" strokeWidth="1.5" strokeLinecap="round"/><path d="M11.5 13.5A6.5 6.5 0 0018 20a3 3 0 003-3v-1" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round"/><circle cx="21" cy="15.5" r="1.5" fill="#1B3461"/></svg>,
      items: ["Consultas e Exames", "Internações Hospitalares", "Cirurgias e Tratamentos"],
    },
    {
      img: "/saude-preventiva.jpg",
      title: "Saúde Preventiva",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M3 12h3l2-7 4 14 3-9 2 5 1-3h3" stroke="#1B3461" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      items: ["Programas de Prevenção", "Acompanhamento de Doenças Crônicas", "Saúde Mental", "Promoção à Saúde"],
    },
    {
      img: "/assistencia-farmaceutica.jpg",
      title: "Assistência Farmacêutica",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M10.5 20.5L3.5 13.5a5 5 0 017.07-7.07l7 7a5 5 0 01-7.07 7.07z" stroke="#1B3461" strokeWidth="1.8"/><path d="M7 9.5l7.5 7.5" stroke="#22A851" strokeWidth="1.8" strokeLinecap="round"/></svg>,
      items: ["Medicamentos com Desconto", "Rede de Farmácias Conveniadas", "Auxílio Medicamentoso"],
    },
  ];

  const inputClass = "border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 w-full text-sm focus:border-[#1B5FAA] focus:ring-2 focus:ring-[#1B5FAA]/20 outline-none transition font-body";

  return (
    <div className="font-body overflow-x-hidden w-full max-w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap');
        .scroll-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-reveal-delay-1 { transition-delay: 0.1s; }
        .scroll-reveal-delay-2 { transition-delay: 0.2s; }
        .scroll-reveal-delay-3 { transition-delay: 0.3s; }
        .scroll-reveal-delay-4 { transition-delay: 0.4s; }
        .scroll-reveal-delay-5 { transition-delay: 0.5s; }
        .hover-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(27, 52, 97, 0.15);
        }
        .hover-glow:hover {
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.3);
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 w-full overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0D1F4A 0%, #1B3461 60%, #1B5FAA 100%)' }}>
        <div className="flex items-center justify-center gap-8 sm:gap-16 px-4 h-14 sm:h-20 w-full overflow-hidden">
          <img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-7 sm:h-11 w-auto object-contain flex-shrink-0 max-w-[120px] sm:max-w-[180px]" />
          <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-7 sm:h-10 w-auto object-contain flex-shrink-0 max-w-[110px] sm:max-w-[160px]" style={{ filter: 'brightness(0) invert(1)', opacity: 0.93 }} />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <img src="/familia-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(9,25,60,0.92) 0%, rgba(13,31,74,0.88) 40%, rgba(13,31,74,0.4) 70%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 w-full flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="scroll-reveal inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] rounded-full text-xs px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 font-semibold">
              ⭐ GEAP desde 1945 · Parceiro Credenciado Oficial
            </div>
            <h1 className="scroll-reveal scroll-reveal-delay-1 font-display font-black text-2xl sm:text-4xl md:text-5xl leading-tight text-white mb-3 sm:mb-4">
              O Plano de Saúde Oficial do <span style={{ color: '#F97316' }}>Servidor Público</span> com Condições Exclusivas para Órgãos Governamentais
            </h1>
            <p className="scroll-reveal scroll-reveal-delay-2 font-body text-sm sm:text-lg text-white/75 mb-6 sm:mb-8 max-w-lg">
              Contratação direta sem licitação · Rede nacional · Subsídio governamental
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-7 sm:mb-10">
              {["Condições especiais para órgãos públicos", "Redução de carências conforme ANS", "Rede com mais de 15 mil prestadores", "Adesão facilitada para servidores e agregados"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white text-xs sm:text-sm">
                  <CheckIcon />
                  {t}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold text-sm px-5 py-3 sm:px-6 rounded-xl shadow-lg transition-all hover:scale-105 hover-glow whitespace-nowrap">
                Quero mais informações
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-3 sm:px-6 rounded-xl shadow-lg transition-all hover:scale-105 whitespace-nowrap">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.13 1.532 5.862L.057 23.882l6.204-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.987-1.358l-.358-.214-3.686.861.878-3.593-.234-.369A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Falar com consultor
              </a>
            </div>
            <p className="text-white/60 text-xs mt-3 text-center sm:text-left">
              contato@plangroup.com.br&nbsp; |&nbsp; (11) 9 3804-3333
            </p>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section id="beneficios" className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-[#1B3461] text-center">
            Por que escolher a <span style={{ color: "#F97316" }}>GEAP</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium mt-2 sm:mt-3 text-center">Um plano criado para o servidor público, com benefícios que o mercado privado não oferece.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
            {beneficios.map((b, i) => (
              <div key={b.title} className={`scroll-reveal scroll-reveal-delay-${(i % 5) + 1} hover-lift bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default border-t-4 border-t-[#22A851] group`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1B3461]/[0.08] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#22A851]/15 transition-colors duration-300">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-[#1B3461] text-base mb-1 sm:mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BARRA DE PROVA SOCIAL ===== */}
      <div className="bg-[#F97316] w-full overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 py-8 sm:py-5 px-6 w-full">
          <div className="text-center text-white">
            <span className="font-black text-2xl sm:text-3xl block">+15 Anos</span>
            <span className="text-xs sm:text-sm opacity-90 mt-0.5">de experiência no setor público</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/30" />
          <div className="text-center text-white">
            <span className="font-black text-2xl sm:text-3xl block">+200 Órgãos</span>
            <span className="text-xs sm:text-sm opacity-90 mt-0.5">conveniados em todo o Brasil</span>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/30" />
          <div className="text-center text-white">
            <span className="font-black text-2xl sm:text-3xl block">+50 Mil Vidas</span>
            <span className="text-xs sm:text-sm opacity-90 mt-0.5">de servidores protegidos</span>
          </div>
        </div>
      </div>

      {/* ===== DIFERENCIAIS ===== */}
      <section className="py-16 sm:py-24 px-4 sm:px-8" style={{ background: 'linear-gradient(135deg, #0D1F4A 0%, #1B3461 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-white text-center">Diferenciais que só a GEAP oferece</h2>
          <p className="text-white/75 font-medium mt-2 sm:mt-3 text-center text-sm sm:text-base">Serviços exclusivos para cuidar dos servidores e seus dependentes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14">
            {diferenciais.map((d, i) => (
              <div key={d.title} className={`scroll-reveal scroll-reveal-delay-${(i % 5) + 1} hover-lift group flex flex-col items-center text-center p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F97316]/40 transition-all duration-300 cursor-default`}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#F97316]/20 transition-colors duration-300">
                  {d.icon}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{d.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COBERTURAS ===== */}
      <section id="coberturas" className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-[#1B3461] text-center">Coberturas e Benefícios</h2>
          <p className="text-gray-600 font-medium mt-2 sm:mt-3 text-center text-sm sm:text-base">Diferenciais que só um plano oficial do servidor público pode oferecer.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
            {coberturas.map((c, i) => (
              <div key={c.title} className={`scroll-reveal scroll-reveal-delay-${(i % 5) + 1} hover-lift bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(27,52,97,0.6) 100%)' }} />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5FAA]/10 flex items-center justify-center mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-display font-bold text-[#1B3461] text-xl mb-3">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="text-[#22A851]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 bg-[#1B3461] rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center text-white text-sm sm:text-base">
            Mais de 10 modalidades de plano disponíveis — cobertura nacional em todas as capitais e principais cidades conforme legislação da ANS.
          </div>
        </div>
      </section>

      {/* ===== ÓRGÃOS ===== */}
      <section id="orgaos" className="py-16 sm:py-24 px-4 sm:px-8 bg-[#0D1F4A] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-white text-center">
            Para quais órgãos a <span style={{ color: '#F97316' }}>GEAP é indicada</span>
          </h2>
          <p className="text-white/75 font-medium mt-2 sm:mt-3 text-center text-sm sm:text-base">Atendimento em todas as esferas governamentais.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-10 sm:mt-14">
            {orgaosData.map((o, i) => (
              <div key={o.title} className={`scroll-reveal scroll-reveal-delay-${(i % 5) + 1} hover-lift group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 cursor-default hover:bg-white/10 hover:border-[#F97316]/40 transition-all duration-300`}>
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#F97316]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors duration-300">
                  {o.icon}
                </div>
                <div>
                  <p className="font-bold text-white text-sm sm:text-base">{o.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{o.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-white/50">
            Seu órgão não está listado?{" "}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="text-[#F97316] underline font-medium hover:text-[#ea6c0a] transition-colors">Fale com a gente →</a>
          </p>
        </div>
      </section>

      {/* ===== CTA INTERMEDIÁRIO ===== */}
      <div className="py-12 sm:py-14 px-5 sm:px-8 text-center" style={{ background: "linear-gradient(to right, #1B3461, #1B5FAA)" }}>
        <h2 className="scroll-reveal font-display text-xl sm:text-3xl font-bold text-white leading-snug">Ainda não tem um plano de saúde de qualidade para os servidores?</h2>
        <p className="text-white/80 font-medium mt-2 sm:mt-3 text-sm sm:text-lg">A apresentação é gratuita. O processo é simples. A diferença é real.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="hover-glow inline-block mt-6 sm:mt-8 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold text-sm sm:text-base px-7 sm:px-10 py-3 sm:py-4 rounded-xl shadow-xl transition whitespace-nowrap">
          Quero Uma Apresentação Gratuita →
        </a>
        <p className="text-white/50 text-xs mt-3">Sem licitação · Sem burocracia · Sem custo de consultoria</p>
      </div>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 text-white" style={{ background: "linear-gradient(135deg, #0D1F4A, #1B5FAA)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-white text-center">Como Funciona a Contratação</h2>
          <p className="text-white/80 font-medium mt-2 sm:mt-3 text-sm sm:text-base text-center">Processo simples e eficiente para seu órgão aderir ao plano de saúde.</p>

          {/* Desktop stepper */}
          <div className="hidden md:flex relative justify-between items-start max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="absolute h-0.5 bg-[#F97316]/40 top-6 left-[10%] right-[10%] z-0" />
            {steps.map((s) => (
              <div key={s.n} className="scroll-reveal flex flex-col items-center text-center z-10 flex-1">
                <div className="w-12 h-12 rounded-full bg-[#F97316] text-[#1B3461] font-black text-lg flex items-center justify-center shadow-lg">{s.n}</div>
                <p className="font-bold text-white text-sm mt-4">{s.title}</p>
                <p className="text-white/70 text-xs mt-2 max-w-[140px]">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile stepper */}
          <div className="flex flex-col md:hidden gap-6 max-w-sm mx-auto mt-10">
            {steps.map((s) => (
              <div key={s.n} className="scroll-reveal flex items-start gap-4 z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F97316] text-[#1B3461] font-black text-base sm:text-lg flex items-center justify-center shadow-lg flex-shrink-0">{s.n}</div>
                <div className="flex flex-col">
                  <p className="font-bold text-white text-sm leading-snug">{s.title}</p>
                  <p className="text-white/70 text-xs mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-16">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#1B3461] font-bold text-sm px-7 sm:px-10 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition whitespace-nowrap">
              Solicitar Apresentação Institucional
            </a>
          </div>
        </div>
      </section>

      {/* ===== POR QUE PLAN10 ===== */}
      <section className="py-16 sm:py-24 px-4 sm:px-8" style={{ backgroundColor: '#F0F5FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-px w-12 bg-[#F97316]" />
            <span className="text-[#F97316] font-semibold text-sm tracking-widest uppercase">Parceiro Credenciado GEAP</span>
            <div className="h-px w-12 bg-[#F97316]" />
          </div>
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-[#1B3461] text-center">Por que contratar o plano GEAP com a Plan Saúde?</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base text-center">Excelência em consultoria e saúde para órgãos públicos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 max-w-4xl mx-auto">
            {[
              { num: "+15", label: "Anos de Experiência", desc: "Referência em planos coletivos para o setor público" },
              { num: "+200", label: "Órgãos Atendidos", desc: "Parcerias com ministérios, autarquias e tribunais" },
              { num: "+50 Mil", label: "Vidas Atendidas", desc: "Milhares de servidores e seus familiares protegidos" },
            ].map((m) => (
              <div key={m.label} className="scroll-reveal bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-md border border-[#1B3461]/10">
                <p className="text-4xl sm:text-5xl font-black text-[#F97316]">{m.num}</p>
                <p className="font-bold text-[#1B3461] text-sm sm:text-base mt-1 sm:mt-2">{m.label}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Selos de confiança */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-10 sm:mt-14 max-w-3xl mx-auto">
            <div className="scroll-reveal scroll-reveal-delay-1 hover-lift flex flex-col items-center bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm border border-gray-100 min-w-[110px] sm:min-w-[130px]">
              <div className="flex items-center gap-1 text-[#F97316]">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-xl">{s}</span>)}
              </div>
              <span className="font-black text-xl sm:text-2xl text-[#1B3461] mt-1">4,9/5</span>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 text-center">Avaliação dos órgãos</span>
            </div>
            <div className="scroll-reveal scroll-reveal-delay-2 hover-lift flex flex-col items-center bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm border border-gray-100 min-w-[110px] sm:min-w-[130px]">
              <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-8 w-auto object-contain mb-2"/>
              <span className="text-xs font-semibold text-[#1B3461] text-center">Credenciado pela GEAP</span>
              <div className="flex items-center gap-1 mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#22A851"/><path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-[10px] text-[#22A851] font-medium">Parceiro Oficial</span>
              </div>
            </div>
            <div className="scroll-reveal scroll-reveal-delay-3 hover-lift flex flex-col items-center bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm border border-gray-100 min-w-[110px] sm:min-w-[130px]">
              <div className="w-10 h-10 rounded-full bg-[#1B3461] flex items-center justify-center mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="1.8"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <span className="text-xs font-semibold text-[#1B3461] text-center">LGPD</span>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 text-center">SSL 256-bit</span>
            </div>
            <div className="scroll-reveal scroll-reveal-delay-4 hover-lift flex flex-col items-center bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm border border-gray-100 min-w-[110px] sm:min-w-[130px]">
              <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 15l-4.5 2.5 1.2-5-4-3.5 5.2-.4L12 4l2.1 4.6 5.2.4-4 3.5 1.2 5z" fill="white"/></svg>
              </div>
              <span className="font-black text-xl sm:text-2xl text-[#1B3461]">+15 anos</span>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 text-center">no setor público</span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-center mt-4 text-gray-600 text-sm sm:text-base">
            A Plan10 Saúde oferece consultoria gratuita e especializada para órgãos públicos, auxiliando em todas as etapas: análise técnica, apoio jurídico, comunicação interna e suporte contínuo.
          </p>

          {/* Depoimento */}
          <div className="max-w-2xl mx-auto mt-6 sm:mt-8 bg-white rounded-xl sm:rounded-2xl border-t-4 border-[#F97316] shadow-md border-x border-b border-x-[#1B3461]/10 border-b-[#1B3461]/10 p-5 sm:p-7">
            <svg className="w-8 h-8 text-[#F97316]/30 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="text-[#1B3461] text-sm sm:text-base leading-relaxed italic">
              "A parceria com a Plan10 Saúde foi decisiva para viabilizarmos o plano de saúde dos nossos servidores de forma ágil e sem burocracia. O suporte jurídico e a comunicação interna foram impecáveis — em menos de quatro meses tínhamos o convênio formalizado e os servidores já aderindo."
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 sm:mt-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1B3461] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  MF
                </div>
                <div>
                  <p className="font-bold text-[#1B3461] text-sm">Marcos Ferreira</p>
                  <p className="text-gray-500 text-xs">Diretor de RH · Autarquia Municipal de Santos/SP</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 sm:ml-auto">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-[#F97316] text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Validações redesenhadas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-5 sm:mt-6 max-w-2xl mx-auto">
            {[
              "Consultoria Gratuita",
              "Apoio Jurídico Completo",
              "Comunicação Interna Estruturada",
              "Suporte Pós-Implantação",
              "Parceiro Credenciado GEAP",
              "LGPD — Dados Protegidos"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F0F5FF] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-[#1B3461]/10">
                <div className="w-5 h-5 rounded-full bg-[#22A851] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#1B3461] text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover-glow inline-block bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold text-sm px-7 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg transition whitespace-nowrap">
              Proteger a saúde dos servidores do meu órgão
            </a>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO ===== */}
      <section id="formulario" className="py-16 sm:py-24 px-4 sm:px-8" style={{ backgroundColor: "#F0F5FF" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-[#1B3461] text-center">Solicite uma Apresentação Institucional para seu Órgão</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base text-center">Preencha o formulário e um consultor especializado entrará em contato em até 24h.</p>
          <div className="max-w-xl sm:max-w-2xl mx-auto bg-[#F97316] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center text-white font-semibold text-xs sm:text-sm mb-5 sm:mb-6 mt-10 sm:mt-12">
            Vagas limitadas para apresentações este mês — garanta a sua agora
          </div>
          <div className="scroll-reveal max-w-xl sm:max-w-2xl mx-auto bg-white shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Nome</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome completo" className={inputClass} />
              </div>
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Cargo</label>
                <input value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ex.: Diretor de RH, Coordenador de Saúde" className={inputClass} />
              </div>
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Órgão</label>
                <input value={orgao} onChange={(e) => setOrgao(e.target.value)} placeholder="Ex.: Prefeitura de Campinas, Tribunal de Contas" className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-[#1B3461] text-sm mb-1 block">E-mail Institucional</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nome@orgao.gov.br" className={inputClass} />
                </div>
                <div>
                  <label className="font-medium text-[#1B3461] text-sm mb-1 block">Telefone</label>
                  <input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="(DDD) 99999-9999" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Município / Estado</label>
                <input value={municipioEstado} onChange={(e) => setMunicipioEstado(e.target.value)} placeholder="Ex.: Campinas / SP" className={inputClass} />
              </div>
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Número Estimado de Servidores</label>
                <select value={servidores} onChange={(e) => setServidores(e.target.value)} className={inputClass}>
                  <option value="">Selecione...</option>
                  <option>Até 50</option>
                  <option>51 a 200</option>
                  <option>201 a 500</option>
                  <option>501 a 1.000</option>
                  <option>Acima de 1.000</option>
                </select>
              </div>
              <div>
                <label className="font-medium text-[#1B3461] text-sm mb-1 block">Mensagem</label>
                <textarea rows={4} value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Descreva sua necessidade ou solicite uma apresentação personalizada" className={inputClass} />
              </div>
              <div className="flex items-start gap-2 sm:gap-3 mt-3 sm:mt-4">
                <input type="checkbox" checked={lgpd} onChange={(e) => setLgpd(e.target.checked)} className="mt-0.5 accent-[#1B5FAA] w-4 h-4" />
                <label className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Concordo com a <a href="/privacidade" className="text-[#1B5FAA] underline">Política de Privacidade</a> e autorizo o tratamento dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD).
                </label>
              </div>
              <button type="submit" className="hover-glow w-full mt-5 sm:mt-6 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold py-3.5 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base flex items-center justify-center gap-3 transition shadow-lg">
                Quero Minha Apresentação Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-reveal font-display text-2xl sm:text-4xl font-bold text-[#1B3461] text-center">Dúvidas Frequentes</h2>
          <p className="text-gray-500 mt-2 sm:mt-3 text-center text-sm sm:text-base">Encontre respostas para perguntas comuns sobre o convênio.</p>
          <div className="max-w-2xl sm:max-w-3xl mx-auto mt-10 sm:mt-14 space-y-3">
            {faqTemas.map((tema, tIdx) => (
              <div key={tIdx}>
                <div
                  onClick={() => { setOpenTema(openTema === tIdx ? null : tIdx); setOpenPergunta(null); }}
                  className={`py-3 sm:py-4 px-4 sm:px-6 rounded-xl cursor-pointer flex justify-between items-center font-bold text-[#1B3461] border transition-all ${openTema === tIdx ? 'border-[#1B3461]/40 bg-[#E8EEF9]' : 'bg-[#F0F5FF] border-[#1B3461]/10 hover:border-[#1B3461]/30'}`}
                >
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    {tema.icon}
                    <span>{tema.tema}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[#1B3461]/10 text-[#1B3461] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full">{tema.perguntas.length}</span>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-[#F97316] transition-transform duration-300 ${openTema === tIdx ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openTema === tIdx && (
                  <div className="mt-2 space-y-2 px-0 sm:px-1">
                    {tema.perguntas.map((p, pIdx) => {
                      const key = `${tIdx}-${pIdx}`;
                      return (
                        <div key={pIdx}>
                          <div
                            onClick={() => setOpenPergunta(openPergunta === key ? null : key)}
                            className={`py-3 px-4 sm:px-5 bg-white rounded-lg cursor-pointer flex justify-between items-center text-xs sm:text-sm text-[#1B3461] font-medium border transition-all ${openPergunta === key ? 'border-[#22A851]/40' : 'border-gray-100 hover:border-[#1B3461]/20'}`}
                          >
                            <span>{p.q}</span>
                            <svg
                              className={`w-4 h-4 text-[#F97316] transition-transform duration-300 flex-shrink-0 ml-2 ${openPergunta === key ? "rotate-180" : ""}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          {openPergunta === key && (
                            <div className="text-gray-600 text-xs sm:text-sm px-4 sm:px-5 pb-3 pt-1 leading-relaxed">{p.a}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="py-12 sm:py-16 px-5 sm:px-8 pb-20 md:pb-16" style={{ backgroundColor: "#0D1F4A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8 sm:gap-16 flex-wrap pb-8 sm:pb-10 border-b border-white/20">
            <img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-7 sm:h-10 w-auto object-contain brightness-0 invert opacity-90 flex-shrink-0" />
            <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-7 sm:h-10 w-auto object-contain brightness-0 invert opacity-90 flex-shrink-0" />
          </div>
          <div className="text-center text-white/70 text-xs sm:text-sm mt-6 sm:mt-8 space-y-2">
            <p>Plan Saúde By Plan Group Ltda | GEAP Autogestão em Saúde</p>
            <p className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 flex-wrap">
              <a href={WA} className="hover:text-white underline" target="_blank" rel="noopener noreferrer">11 9 3804-3333</a>
              <span className="hidden sm:inline">|</span>
              <a href="https://www.plangroup.com.br" className="hover:text-white underline" target="_blank" rel="noopener noreferrer">www.plangroup.com.br</a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:contato@plangroup.com.br" className="hover:text-white underline">contato@plangroup.com.br</a>
            </p>
            <p className="text-white/60 text-xs leading-relaxed px-2 sm:px-0">Paulista Trianon | Av. Paulista, 1079 | 7º andar | Bela Vista | CEP 01311-200 | São Paulo | SP</p>
          </div>
          <div className="border-t border-white/10 pt-5 sm:pt-6 mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-white/50 text-xs text-center">
            <p>© 2026 Plan10 Saúde · Todos os direitos reservados</p>
            <p>
              <a href="/privacidade" className="hover:text-white underline">Política de Privacidade</a> · Desenvolvido por <a href="https://nextcorporation.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Next Corporation</a>
            </p>
          </div>
        </div>
      </footer>

      {/* ===== CTA FLUTUANTE MOBILE ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0D1F4A]/95 backdrop-blur-sm border-t border-white/10">
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 rounded-xl text-sm shadow-2xl transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.13 1.532 5.862L.057 23.882l6.204-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.987-1.358l-.358-.214-3.686.861.878-3.593-.234-.369A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Falar com Consultor — WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Index;
