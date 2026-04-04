const WA = "https://wa.me/5511938043333";

const PrivacyPolicy = () => {
  return (
    <div className="font-body overflow-x-hidden w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0D1F4A 0%, #1B3461 60%, #1B5FAA 100%)' }}>
        <div className="flex items-center justify-center gap-16 sm:gap-24 px-6 h-16 sm:h-20 w-full">
          <a href="/"><img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-8 sm:h-12 w-auto object-contain flex-shrink-0" /></a>
          <a href="/"><img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-8 sm:h-11 w-auto object-contain flex-shrink-0" style={{ filter: 'brightness(0) invert(1)', opacity: 0.95 }} /></a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl text-[#1B3461] mb-2" style={{ fontFamily: 'Merriweather, serif' }}>Política de Privacidade</h1>
        <p className="text-gray-500 text-sm mb-12">Última atualização: abril de 2026</p>

        <Section title="1. Identificação do Responsável pelo Tratamento">
          <p>A Plan Group Ltda, inscrita no CNPJ sob o nº [CNPJ], com sede na Av. Paulista, 1079, 7º andar, Bela Vista, CEP 01311-200, São Paulo/SP ("Plan10 Saúde" ou "Controladora"), é a responsável pelo tratamento dos dados pessoais coletados por meio desta Landing Page, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).</p>
        </Section>

        <Section title="2. Dados Pessoais Coletados">
          <p>Coletamos os seguintes dados pessoais fornecidos voluntariamente pelo titular por meio do formulário desta página:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Nome completo</li>
            <li>Cargo e órgão de atuação</li>
            <li>Endereço de e-mail institucional</li>
            <li>Número de telefone</li>
            <li>Estado e município</li>
            <li>Número estimado de servidores do órgão</li>
            <li>Mensagem livre (campo opcional)</li>
          </ul>
        </Section>

        <Section title="3. Finalidade do Tratamento">
          <p>Os dados coletados são utilizados exclusivamente para as seguintes finalidades:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Responder à solicitação de contato ou apresentação institucional enviada pelo titular;</li>
            <li>Realizar o atendimento comercial pela equipe da Plan10 Saúde;</li>
            <li>Enviar informações sobre produtos e serviços da GEAP comercializados pela Plan10 Saúde, mediante consentimento;</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
          </ul>
        </Section>

        <Section title="4. Base Legal para o Tratamento">
          <p>O tratamento dos dados pessoais é fundamentado nas seguintes bases legais previstas no art. 7º da LGPD:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Consentimento do titular (art. 7º, I): para envio de comunicações comerciais;</li>
            <li>Execução de contrato ou procedimentos preliminares (art. 7º, V): para atendimento à solicitação de contato;</li>
            <li>Legítimo interesse do controlador (art. 7º, IX): para fins de relacionamento comercial, respeitados os direitos e expectativas do titular.</li>
          </ul>
        </Section>

        <Section title="5. Compartilhamento de Dados">
          <p>Os dados pessoais coletados poderão ser compartilhados com:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>GEAP Autogestão em Saúde, parceira comercial da Plan10 Saúde, para fins de viabilização do convênio;</li>
            <li>Prestadores de serviços de tecnologia da informação que atuam como operadores de dados, sob contrato com cláusulas de confidencialidade e proteção de dados;</li>
            <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p className="mt-3">Não vendemos, alugamos ou cedemos dados pessoais a terceiros para fins publicitários.</p>
        </Section>

        <Section title="6. Retenção dos Dados">
          <p>Os dados pessoais serão mantidos pelo período necessário para atender às finalidades descritas nesta Política ou enquanto houver relação comercial ativa, podendo ser retidos por prazo adicional para cumprimento de obrigações legais.</p>
        </Section>

        <Section title="7. Direitos do Titular">
          <p>Nos termos da LGPD, o titular dos dados tem direito a:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Confirmar a existência de tratamento;</li>
            <li>Acessar os dados coletados;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Opor-se ao tratamento realizado com base em legítimo interesse.</li>
          </ul>
          <p className="mt-3">Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@plangroup.com.br" className="text-[#1B5FAA] underline">contato@plangroup.com.br</a></p>
        </Section>

        <Section title="8. Segurança dos Dados">
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração ou divulgação indevida, incluindo criptografia SSL 256-bit e controle de acesso restrito.</p>
        </Section>

        <Section title="9. Cookies e Tecnologias de Rastreamento">
          <p>Esta Landing Page pode utilizar cookies de sessão e ferramentas de análise (como Google Analytics) para mensurar o desempenho das campanhas. Os dados coletados por essas ferramentas são agregados e não identificam individualmente o titular sem seu consentimento.</p>
        </Section>

        <Section title="10. Alterações nesta Política">
          <p>Esta Política pode ser atualizada periodicamente. A data da última atualização é indicada no topo do documento. O uso continuado desta página após alterações implica aceitação da versão vigente.</p>
        </Section>

        <Section title="11. Contato e Encarregado (DPO)">
          <p>Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais:</p>
          <div className="bg-[#F0F5FF] rounded-xl p-6 mt-4 border border-[#1B3461]/10">
            <p className="font-bold text-[#1B3461]">Plan Group Ltda — Plan10 Saúde</p>
            <p className="mt-2">E-mail: <a href="mailto:contato@plangroup.com.br" className="text-[#1B5FAA] underline">contato@plangroup.com.br</a></p>
            <p>Telefone: (11) 9 3804-3333</p>
            <p>Site: <a href="https://www.plangroup.com.br" target="_blank" rel="noopener noreferrer" className="text-[#1B5FAA] underline">www.plangroup.com.br</a></p>
            <p>Endereço: Av. Paulista, 1079, 7º andar, Bela Vista, CEP 01311-200, São Paulo/SP</p>
          </div>
          <p className="mt-4">Também é possível registrar reclamações perante a Autoridade Nacional de Proteção de Dados (ANPD): <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#1B5FAA] underline">www.gov.br/anpd</a></p>
        </Section>
      </div>

      {/* Rodapé */}
      <footer className="py-16 px-8" style={{ backgroundColor: "#0D1F4A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-16 flex-wrap pb-10 border-b border-white/20">
            <img src="/logo-plan10.png" alt="Plan10 Saúde" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
            <img src="/logo-geap-saude.png" alt="GEAP Saúde" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
          </div>
          <div className="text-center text-white/70 text-sm mt-8 space-y-2">
            <p>Plan Saúde By Plan Group Ltda | GEAP Autogestão em Saúde</p>
            <p className="flex flex-wrap justify-center items-center gap-1">
              <a href={WA} className="hover:text-white underline" target="_blank" rel="noopener noreferrer">11 9 3804-3333</a>
              {" | "}
              <a href="https://www.plangroup.com.br" className="hover:text-white underline" target="_blank" rel="noopener noreferrer">www.plangroup.com.br</a>
              {" | "}
              <a href="mailto:contato@plangroup.com.br" className="hover:text-white underline">contato@plangroup.com.br</a>
            </p>
            <p>Paulista Trianon | Av. Paulista, 1079 | 7º andar | Bela Vista | CEP 01311-200 | São Paulo | SP</p>
          </div>
          <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/50 text-xs">
            <p>© 2026 Plan10 Saúde · Todos os direitos reservados</p>
            <p>
              <a href="/privacidade" className="hover:text-white underline">Política de Privacidade</a> · Desenvolvido por <a href="https://nextcorporation.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Next Corporation</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-bold text-xl text-[#1B3461] mt-10 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>{title}</h2>
    <div className="text-gray-600 text-base leading-relaxed">{children}</div>
  </div>
);

export default PrivacyPolicy;
