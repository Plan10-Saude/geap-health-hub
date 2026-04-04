
# Plan10 Saúde — Landing Page Institucional

## Visão Geral
Landing page institucional completa para a Plan10 Saúde, parceira credenciada da GEAP, voltada a órgãos públicos. Página única, sem roteamento, com 11 seções responsivas.

## Preparação
- Copiar os logos enviados (Plan10 e GEAP Saúde) para a pasta `public/`
- Configurar design system com paleta Navy/Laranja/Verde e fontes Merriweather + Inter

## Estrutura da Página (componente único em Index.tsx)

### 1. Header Sticky
- Logo Plan10 (esquerda), GEAP SVG inline (centro), nav links + CTA WhatsApp (direita)
- Menu hamburger mobile com drawer via useState

### 2. Hero
- Gradiente navy profundo com padrão geométrico SVG
- Badge laranja, título Merriweather, 4 bullets ✅, 3 CTAs (WhatsApp + âncora)

### 3. Por que escolher a GEAP (id="beneficios")
- 6 cards com borda superior verde, emojis, grid 3 colunas

### 4. Diferenciais Exclusivos
- Fundo azul claro, 6 features centralizadas com ícones em cards brancos

### 5. Coberturas e Benefícios (id="coberturas")
- 3 cards (Médica, Preventiva, Farmacêutica) + banner navy informativo

### 6. Para Quais Órgãos (id="orgaos")
- 9 cards com emojis (Prefeituras, Câmaras, Autarquias, etc.) + CTA WhatsApp

### 7. Como Funciona a Contratação
- Stepper horizontal (5 etapas) com linha conectora laranja, responsivo vertical no mobile

### 8. Por que Plan10 Saúde
- 3 métricas grandes (+15 anos, +200 órgãos, +50 mil vidas) + 6 tags verdes de diferenciais

### 9. Formulário (id="formulario")
- 8 campos + select + textarea + checkbox LGPD, submit abre WhatsApp

### 10. FAQ
- Accordion com 19 perguntas, chevron laranja animado, controlado via useState

### 11. Rodapé
- Fundo navy escuro, 3 logos em branco (invert), contato, endereço, créditos

## Comportamento
- Scroll suave via CSS `scroll-behavior: smooth`
- Todos CTAs WhatsApp: `wa.me/5511938043333`
- Zero dependências externas além de React + Tailwind
- 100% responsivo mobile-first
