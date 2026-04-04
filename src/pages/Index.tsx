import { useState } from "react";

const GeapLogoSvg = (
  <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="13" fill="none" stroke="white" strokeWidth="1.8" />
    <ellipse cx="20" cy="20" rx="7" ry="13" fill="none" stroke="white" strokeWidth="1.4" />
    <line x1="7" y1="15" x2="33" y2="15" stroke="white" strokeWidth="1.2" />
    <line x1="7" y1="20" x2="33" y2="20" stroke="white" strokeWidth="1.2" />
    <line x1="7" y1="25" x2="33" y2="25" stroke="white" strokeWidth="1.2" />
    <text x="40" y="28" fill="white" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" letterSpacing="2">GEAP</text>
  </svg>
);

const ChevronSvg = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const WA = "https://wa.me/5511938043333";

const Index = () => {
  
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Form state
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [orgao, setOrgao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [municipioEstado, setMunicipioEstado] = useState("");
  const [servidores, setServidores] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [lgpd, setLgpd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/5511938043333?text=Olá!%20Preenchi%20o%20formulário%20e%20gostaria%20de%20solicitar%20uma%20apresentação%20institucional%20da%20GEAP%20para%20o%20meu%20órgão.",
      "_blank"
    );
  };



  const beneficios = [
    { emoji: "🏛️", title: "Dispensa de Licitação", desc: "A natureza jurídica da GEAP permite contratação direta, simplificando o processo de adesão sem necessidade de licitação pública." },
    { emoji: "⭐", title: "Tradição e Solidez", desc: "Desde 1945 cuidando da saúde dos servidores públicos federais, estaduais e municipais ativos, aposentados e seus familiares." },
    { emoji: "🤝", title: "Autogestão Sem Fins Lucrativos", desc: "A GEAP reverte todos os seus recursos para a assistência integral dos beneficiários — sem intermediários com fins lucrativos." },
    { emoji: "💰", title: "Subsídio Governamental", desc: "Reduz drasticamente o valor final pago pelo servidor, calculado por faixa salarial, tipo de plano e número de dependentes." },
    { emoji: "👨‍👩‍👧‍👦", title: "Dependentes Ampliados", desc: "Inclui pais, sogros, irmãos, sobrinhos, netos, primos e bisnetos — cobertura familiar completa sem burocracia." },
    { emoji: "🏥", title: "Rede com 15 Mil Prestadores", desc: "Mais de 15 mil prestadores em 2.300 municípios, com hospitais premium e clínicas de referência em todo o Brasil." },
  ];

  const diferenciais = [
    { emoji: "🩺", title: "Cobertura Completa", desc: "Internações, cirurgias, consultas, exames e tratamentos de alta complexidade." },
    { emoji: "💻", title: "Atendimento Virtual e Presencial", desc: "Telemedicina integrada e atendimento presencial em toda a rede credenciada." },
    { emoji: "🏷️", title: "Isenção de Coparticipação", desc: "Em diversos procedimentos, reduzindo o custo direto ao servidor e seus dependentes." },
    { emoji: "💳", title: "Subsídio Governamental", desc: "Reduz o valor final pago pelo servidor — benefício exclusivo para órgãos conveniados." },
    { emoji: "✅", title: "Sem Taxa de Adesão", desc: "Nenhum custo adicional para o servidor aderir ao plano do seu órgão." },
    { emoji: "🔓", title: "Gestão Personalizada", desc: "Suporte dedicado e soluções sob medida para cada realidade institucional." },
  ];

  const orgaos = [
    { emoji: "🏙️", name: "Prefeituras" },
    { emoji: "🏛️", name: "Câmaras Municipais" },
    { emoji: "🏢", name: "Autarquias" },
    { emoji: "📋", name: "Secretarias e Órgãos Estaduais" },
    { emoji: "⚖️", name: "Tribunais" },
    { emoji: "🏭", name: "Empresas Públicas" },
    { emoji: "🎓", name: "Universidades Federais" },
    { emoji: "🛡️", name: "Forças Armadas" },
    { emoji: "🏫", name: "Hospitais Universitários" },
  ];

  const steps = [
    { n: "1", title: "Contato Inicial", desc: "Conversa com nossos consultores especializados" },
    { n: "2", title: "Proposta Personalizada", desc: "Elaboração de um plano sob medida para o seu órgão" },
    { n: "3", title: "Formalização do Acordo", desc: "Assinatura do contrato e trâmites legais" },
    { n: "4", title: "Liberação para Adesão", desc: "Início da adesão dos servidores ao plano" },
    { n: "5", title: "Suporte Contínuo", desc: "Acompanhamento pós-implantação e suporte permanente" },
  ];

  const faqItems = [
    { q: "Quem pode conveniar?", a: "Órgãos públicos federais, estaduais e municipais, além de autarquias, fundações e empresas públicas que desejam oferecer planos de saúde aos seus servidores e dependentes." },
    { q: "Como funciona o subsídio?", a: "O subsídio é concedido conforme as normas do órgão conveniado e da GEAP. Ele reduz o valor da mensalidade do servidor, sendo calculado de acordo com faixa salarial, tipo de plano e número de dependentes." },
    { q: "Quais documentos são necessários para o convênio?", a: "Para formalizar o convênio, o órgão deve apresentar: ofício de solicitação de credenciamento, cópia do CNPJ e do ato constitutivo, termo de adesão ou contrato de convênio, e relação de servidores interessados (quando aplicável)." },
    { q: "A GEAP atende agregados?", a: "Sim. Além dos dependentes diretos (cônjuge, filhos, enteados), a GEAP permite a inclusão de agregados como pais, sogros e netos, mediante comprovação e pagamento adicional." },
    { q: "Qual é a cobertura dos planos GEAP?", a: "Os planos oferecem cobertura nacional, com rede credenciada em todas as capitais e principais cidades do país, incluindo consultas, exames, internações, cirurgias, odontologia e programas de prevenção." },
    { q: "Quanto tempo leva para o convênio ser efetivado?", a: "Após o envio da documentação e análise técnica, o processo de credenciamento é concluído em média entre três a cinco meses, dependendo da legislação local, complexidade do órgão e do número de servidores." },
    { q: "Como solicitar uma apresentação institucional?", a: "Basta preencher o formulário disponível nesta página com os dados do órgão e aguardar o contato de um consultor especializado da Plan10 Saúde / GEAP." },
    { q: "Os dados enviados são protegidos?", a: "Sim. Todos os dados são tratados conforme a Lei Geral de Proteção de Dados (LGPD) e armazenados em ambiente seguro com criptografia SSL 256 bits." },
    { q: "Há suporte após o convênio?", a: "Sim. O órgão conveniado conta com atendimento exclusivo, suporte técnico e acompanhamento contínuo para garantir a satisfação dos servidores e a eficiência da gestão do plano." },
    { q: "Onde posso obter mais informações oficiais?", a: "No SAC da GEAP ou diretamente com a Plan10 Saúde, parceira credenciada para órgãos públicos. Entre em contato pelo WhatsApp (11) 9 3804-3333 ou pelo site www.plangroup.com.br." },
    { q: "Quais servidores podem aderir ao plano?", a: "Servidores ativos, aposentados, pensionistas e seus dependentes, conforme regras de elegibilidade da GEAP." },
    { q: "Como é calculado o valor da mensalidade?", a: "O valor depende de: faixa etária do beneficiário, tipo de plano escolhido, categoria do servidor, existência de dependentes e subsídio aplicado pelo órgão." },
    { q: "O órgão precisa ter número mínimo de servidores?", a: "Não. A GEAP atende órgãos de todos os portes, desde pequenas prefeituras até grandes ministérios." },
    { q: "O convênio exige licitação?", a: "Não. A GEAP é uma autogestão pública, o que permite convênios diretos com órgãos governamentais sem necessidade de processo licitatório." },
    { q: "Existem planos específicos para determinados perfis?", a: "Sim. A GEAP oferece modalidades com diferentes níveis de cobertura, rede e valores, adequadas a cada realidade institucional." },
    { q: "A GEAP possui rede própria?", a: "Sim. Além da rede credenciada nacional, a GEAP possui unidades próprias em diversas regiões do Brasil." },
    { q: "A cobertura é válida fora do estado?", a: "Sim. Todos os planos possuem cobertura nacional, conforme legislação da ANS." },
    { q: "Existem programas de prevenção e saúde mental?", a: "Sim. A GEAP oferece programas de saúde mental, acompanhamento de doenças crônicas, prevenção e bem-estar e acompanhamento de gestantes." },
    { q: "Como funciona o pagamento?", a: "O pagamento pode ser via desconto em folha ou via boleto, dependendo da modalidade do órgão conveniado." },
  ];

  const tags = [
    "Consultoria Gratuita",
    "Apoio Jurídico Completo",
    "Comunicação Interna Estruturada",
    "Suporte Pós-Implantação",
    "Parceiro Credenciado GEAP",
    "LGPD — Dados Protegidos",
  ];

  const inputClass = "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm focus:border-[#1B5FAA] focus:ring-2 focus:ring-[#1B5FAA]/20 outline-none transition font-body";

  return (
    <div className="font-body">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50" style={{ background: "linear-gradient(90deg, #0D1F4A 0%, #1B3461 50%, #1B5FAA 100%)" }}>
        <div className="flex items-center justify-between px-8 h-20 max-w-7xl mx-auto">
          <img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-14 w-auto object-contain" />
          <div className="hidden md:block">{GeapLogoSvg}</div>
          <div className="flex items-center gap-6">
            <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="hidden md:block h-12 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-[#F97316] text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:bg-[#ea6c0a] transition">
              Falar com Consultor
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1F4A 0%, #1B3461 50%, #1B5FAA 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M 0 0 L 40 40" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/50 text-[#F97316] rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            ⭐ GEAP desde 1945 · Parceiro Credenciado Oficial
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl leading-tight text-white">
            O Plano Oficial de Saúde do <span style={{ color: "#F97316" }}>Servidor Público</span> com Condições Exclusivas para Órgãos Governamentais
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Contratação direta sem licitação. Rede com mais de 15 mil prestadores em 2.300 municípios. Subsídio governamental para servidores e dependentes.
          </p>
          <div className="mt-10 max-w-lg mx-auto text-left grid grid-cols-2 gap-3">
            {["Dispensa de licitação garantida", "Redução de carências conforme ANS", "Rede com +15 mil prestadores", "Adesão facilitada para dependentes"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/90 text-sm">✅ {t}</div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg transition">
              Quero Informações para Meu Órgão
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition">
              Falar com Consultor Especializado
            </a>
            <a href="#formulario" className="border border-white/40 text-white/80 hover:bg-white/5 px-6 py-3 rounded-xl text-sm transition">
              Solicitar Apresentação ↓
            </a>
          </div>
          <p className="text-white/60 text-xs mt-4 text-center">🔒 Apresentações institucionais gratuitas · Sem compromisso · Resposta em até 24h</p>
        </div>
      </section>

      {/* ===== BARRA DE PROVA SOCIAL ===== */}
      <div className="bg-[#F97316] py-5 px-8">
        <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
          <div className="flex items-center gap-3 text-white">
            <span className="font-black text-2xl">+15 Anos</span>
            <span className="text-sm font-medium opacity-90">de experiência no setor público</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-white/30" />
          <div className="flex items-center gap-3 text-white">
            <span className="font-black text-2xl">+200 Órgãos</span>
            <span className="text-sm font-medium opacity-90">conveniados em todo o Brasil</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-white/30" />
          <div className="flex items-center gap-3 text-white">
            <span className="font-black text-2xl">+50 Mil Vidas</span>
            <span className="text-sm font-medium opacity-90">de servidores protegidos</span>
          </div>
        </div>
      </div>

      {/* ===== BENEFÍCIOS ===== */}
      <section id="beneficios" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">
            Por que escolher a <span style={{ color: "#F97316" }}>GEAP</span> para o seu órgão?
          </h2>
          <p className="text-gray-500 mt-3 text-lg text-center">Diferenciais que só um plano oficial do servidor público pode oferecer.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
            {beneficios.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-7 transition-shadow duration-300 border-t-4 border-t-[#22A851]">
                <div className="bg-[#22A851]/10 rounded-xl w-12 h-12 flex items-center justify-center text-2xl mb-5">{b.emoji}</div>
                <h3 className="font-display font-bold text-[#1B3461] text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAIS ===== */}
      <section className="py-24" style={{ backgroundColor: "#F0F5FF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Nossos Diferenciais para seu Órgão Público</h2>
          <p className="text-gray-500 mt-3 text-center">Benefícios exclusivos para cuidar dos servidores e seus dependentes.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
            {diferenciais.map((d) => (
              <div key={d.title} className="text-center p-6">
                <div className="bg-white shadow-md rounded-2xl w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-5">{d.emoji}</div>
                <h3 className="font-display font-bold text-[#1B3461] text-base mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COBERTURAS ===== */}
      <section id="coberturas" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Coberturas e Benefícios para seu Órgão Público</h2>
          <p className="text-gray-500 mt-3 text-center">Tudo o que seu órgão precisa para cuidar da saúde dos colaboradores.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { emoji: "🩺", title: "Assistência Médica", items: ["Consultas e Exames", "Internações Hospitalares", "Cirurgias e Tratamentos"] },
              { emoji: "❤️", title: "Saúde Preventiva", items: ["Programas de Prevenção", "Acompanhamento de Doenças Crônicas", "Promoção à Saúde", "Saúde Mental"] },
              { emoji: "💊", title: "Assistência Farmacêutica", items: ["Medicamentos com Desconto", "Rede de Farmácias Conveniadas", "Auxílio Medicamentoso"] },
            ].map((c) => (
              <div key={c.title} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:shadow-md transition">
                <div className="bg-[#1B5FAA]/10 rounded-xl w-14 h-14 flex items-center justify-center text-3xl mb-6">{c.emoji}</div>
                <h3 className="font-display font-bold text-[#1B3461] text-xl mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-[#1B5FAA]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#1B3461] rounded-2xl p-8 text-center text-white">
            Mais de 10 modalidades de plano disponíveis — cobertura nacional em todas as capitais e principais cidades conforme legislação da ANS.
          </div>
        </div>
      </section>

      {/* ===== ÓRGÃOS ===== */}
      <section id="orgaos" className="py-24" style={{ backgroundColor: "#F0F5FF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Para Quais Órgãos Atendemos</h2>
          <p className="text-gray-500 mt-3 text-center">Atendimento em todas as esferas governamentais.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-14">
            {orgaos.map((o) => (
              <div key={o.name} className="bg-white shadow-sm rounded-2xl p-6 text-center border border-transparent hover:border-[#1B5FAA] hover:shadow-md transition-all duration-200">
                <span className="text-4xl">{o.emoji}</span>
                <p className="font-semibold text-[#1B3461] text-sm mt-3">{o.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-gray-500">
            Meu órgão não está na lista?{" "}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="underline text-[#F97316] font-medium">Fale com a gente →</a>
          </p>
        </div>
      </section>

      {/* ===== CTA INTERMEDIÁRIO ===== */}
      <div className="py-14 px-8 text-center" style={{ background: "linear-gradient(to right, #1B3461, #1B5FAA)" }}>
        <h2 className="font-display text-3xl font-bold text-white">Seu órgão ainda não tem um plano de saúde de qualidade para os servidores?</h2>
        <p className="text-white/80 mt-3 text-lg">A apresentação é gratuita. O processo é simples. A diferença é real.</p>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-10 py-4 rounded-xl text-lg shadow-xl transition">
          Quero Uma Apresentação Gratuita →
        </a>
        <p className="text-white/50 text-sm mt-4">Sem licitação · Sem burocracia · Sem custo de consultoria</p>
      </div>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-24 text-white" style={{ background: "linear-gradient(135deg, #0D1F4A, #1B5FAA)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white text-center">Como Funciona a Contratação para Órgãos</h2>
          <p className="text-white/70 mt-3 text-center">Processo simples e eficiente para seu órgão aderir ao plano de saúde.</p>
          <div className="relative flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto mt-16">
            <div className="hidden md:block absolute h-0.5 bg-[#F97316]/40 top-6 left-[10%] right-[10%] z-0" />
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center z-10 flex-1 mb-10 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#F97316] text-[#1B3461] font-black text-lg flex items-center justify-center shadow-lg">{s.n}</div>
                <p className="font-bold text-white text-sm mt-4">{s.title}</p>
                <p className="text-white/70 text-xs mt-2 max-w-[140px]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#1B3461] font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition">
              Solicitar Apresentação Institucional
            </a>
          </div>
        </div>
      </section>

      {/* ===== POR QUE PLAN10 ===== */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Por que confiar na Plan10 Saúde para sua Instituição?</h2>
          <p className="text-gray-500 mt-3 text-center">Excelência em consultoria e saúde para órgãos públicos.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
            {[
              { num: "+15", label: "Anos de Experiência", desc: "Referência em planos coletivos para o setor público" },
              { num: "+200", label: "Órgãos Atendidos", desc: "Parcerias com ministérios, autarquias e tribunais" },
              { num: "+50 Mil", label: "Vidas Atendidas", desc: "Milhares de servidores e seus familiares protegidos" },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#F0F5FF" }}>
                <p className="text-5xl font-black text-[#F97316]">{m.num}</p>
                <p className="font-bold text-[#1B3461] mt-2">{m.label}</p>
                <p className="text-gray-500 text-sm mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="max-w-2xl mx-auto text-center mt-12 text-gray-600 text-base">
            A Plan10 Saúde oferece consultoria gratuita e especializada para órgãos públicos, auxiliando em todas as etapas: análise técnica, apoio jurídico, comunicação interna e suporte contínuo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 bg-[#22A851]/10 text-[#22A851] font-medium px-4 py-2 rounded-full text-sm">✅ {t}</span>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-10 py-4 rounded-xl text-base shadow-lg transition">
              Proteger a saúde dos servidores do meu órgão
            </a>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO ===== */}
      <section id="formulario" className="py-24" style={{ backgroundColor: "#F0F5FF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Solicite uma Apresentação Institucional para seu Órgão</h2>
          <p className="text-gray-500 mt-3 text-center">Preencha o formulário e um consultor especializado entrará em contato em até 24h.</p>
          <div className="bg-[#F97316] rounded-2xl p-4 text-center text-white font-semibold text-sm mb-6 max-w-2xl mx-auto mt-12">
            ⚡ Vagas limitadas para apresentações este mês — garanta a sua agora
          </div>
          <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              <div className="mt-4 flex items-start gap-3">
                <input type="checkbox" checked={lgpd} onChange={(e) => setLgpd(e.target.checked)} className="mt-0.5 accent-[#1B5FAA] w-4 h-4" />
                <label className="text-sm text-gray-600">
                  Concordo com a Política de Privacidade e autorizo o tratamento dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD).
                </label>
              </div>
              <button type="submit" className="w-full mt-6 bg-[#1B3461] hover:bg-[#0D1F4A] text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-3 transition shadow-lg">
                ✉️ Solicitar Contato
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#1B3461] text-center">Dúvidas Frequentes</h2>
          <p className="text-gray-500 mt-3 text-center">Encontre respostas para perguntas comuns sobre o convênio.</p>
          <div className="max-w-3xl mx-auto mt-14">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200 py-5 cursor-pointer" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-[#1B3461] text-sm md:text-base flex items-center gap-3">{item.q}</p>
                  <ChevronSvg open={faqOpen === i} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen === i ? "max-h-96 mt-3" : "max-h-0"}`}>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="py-16 px-8" style={{ backgroundColor: "#0D1F4A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8 flex-wrap pb-10 border-b border-white/20">
            <img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
            <div className="scale-90">{GeapLogoSvg}</div>
            <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
          </div>
          <div className="text-center text-white/70 text-sm mt-8 space-y-2">
            <p>Plan Saúde By Plan Group Ltda | GEAP Autogestão em Saúde</p>
            <p className="flex flex-wrap justify-center items-center gap-1">
              📞{" "}
              <a href={WA} className="hover:text-white underline" target="_blank" rel="noopener noreferrer">11 9 3804-3333</a>
              {" | "}
              <a href="https://www.plangroup.com.br" className="hover:text-white underline" target="_blank" rel="noopener noreferrer">www.plangroup.com.br</a>
              {" | "}
              <a href="mailto:contato@plangroup.com.br" className="hover:text-white underline">contato@plangroup.com.br</a>
            </p>
            <p>📍 Paulista Trianon | Av. Paulista, 1079 | 7º andar | Bela Vista | CEP 01311-200 | São Paulo | SP</p>
          </div>
          <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/50 text-xs">
            <p>© 2026 Plan10 Saúde · Todos os direitos reservados</p>
            <p>
              <a href="/privacidade" className="hover:text-white underline">Política de Privacidade</a> · Desenvolvido por Next Corporation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
