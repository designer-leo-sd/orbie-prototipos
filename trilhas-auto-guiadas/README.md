# 🚀 Orbie App - Trilhas Auto-Guiadas

Protótipo funcional HTML/CSS das Trilhas Auto-Guiadas do Orbie App - uma funcionalidade gamificada de aprendizado autônomo para estudantes brasileiros.

## 🎯 Sobre o Projeto

As Trilhas Auto-Guiadas permitem que estudantes criem e realizem trilhas de estudo personalizadas de forma completamente autônoma, utilizando o banco de questões existente do Orbie através de integração com LLM para seleção e organização inteligente de conteúdo educacional.

## ✨ Funcionalidades Implementadas

### 🏠 **Laboratório (Home)**
- Dashboard com estatísticas do usuário (XP, trilhas concluídas, sequência)
- Trilha em progresso para continuação
- Recomendações personalizadas baseadas no perfil
- Trilhas populares da comunidade
- Busca e filtros por matéria e dificuldade

### 🎨 **Criação de Trilha**
- Seleção de ano/série (4º ano ao 3º ano EM)
- Escolha de componente curricular
- Seleção de assuntos específicos
- Níveis de dificuldade (Fácil, Médio, Difícil)
- Tipo de trilha (Estudo ou Simulado)

### ⚡ **Experiência de Questões**
- Interface imersiva com timer e progresso
- Feedback visual imediato (correto/incorreto)
- Múltiplos tipos de questão
- Sistema de pontuação XP
- Navegação fluida entre questões

### 🎉 **Conclusão e Resultados**
- Performance detalhada com rating por estrelas
- XP conquistado e tempo gasto
- Recomendações de próximas trilhas
- Celebração visual de conquistas

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design system completo com custom properties
- **JavaScript** - Interatividade e gerenciamento de estado
- **Design System** - Tokens extraídos do Figma do Orbie App

## 🎨 Design System

O protótipo implementa fielmente o design system do Orbie App:

- **Paleta**: Space-themed com deep purple e navy
- **Tipografia**: Orbitron (display) + Outfit (interface)
- **Componentes**: Cards, botões, formulários, navegação
- **Responsividade**: Mobile-first (320px → 1440px+)
- **Animações**: Micro-interações suaves e loading states

## 📱 Como Usar

1. **Abrir o Protótipo**
   ```bash
   # Abra o arquivo index.html em qualquer navegador moderno
   open index.html
   ```

2. **Navegação Principal**
   - Use a **navegação inferior** para alternar entre seções
   - Clique em **"Criar Trilha"** para iniciar uma nova trilha
   - Selecione trilhas existentes para visualizar detalhes

3. **Fluxo de Criação**
   - Preencha o formulário de criação
   - Aguarde o loading de geração
   - Visualize a trilha criada
   - Inicie a experiência de questões

4. **Experiência de Questões**
   - Selecione respostas clicando nas opções
   - Use o botão "Responder" para confirmar
   - Veja o feedback visual de acerto/erro
   - Continue até completar a trilha

## 📂 Estrutura de Arquivos

```
orbie-trilhas-prototype/
├── index.html                 # Interface principal
├── css/
│   ├── design-tokens.css      # Variáveis do design system
│   ├── main.css              # Estilos base e layouts
│   ├── components.css        # Componentes reutilizáveis
│   └── responsive.css        # Responsividade mobile-first
├── js/
│   ├── app.js               # Lógica da aplicação
│   └── mock-data.js         # Dados educacionais mockados
├── design.md                # Especificação do design system
├── README.md               # Este arquivo
└── VALIDATION-REPORT.md    # Relatório de validação técnica
```

## 🎓 Dados Educacionais

O protótipo inclui conteúdo educacional realista:

- **Matérias**: Matemática, Português, Ciências, História, Geografia
- **Séries**: 4º ano (EF1) até 3º ano (EM)
- **Assuntos**: Alinhados com diretrizes BNCC
- **Questões**: Contextualizadas para estudantes brasileiros
- **Dificuldades**: Progressão lógica com recompensas escalonadas

## 🔧 Customização

### Modificar Cores
Edite as variáveis CSS em `css/design-tokens.css`:
```css
:root {
  --brand-blue-300: #0059E7;  /* Cor primária */
  --background-home: #3A00A8;  /* Fundo do home */
  /* ... outras variáveis */
}
```

### Adicionar Conteúdo
Modifique os dados em `js/mock-data.js`:
```javascript
const MockData = {
  recommendedTrails: [
    // Adicione novas trilhas aqui
  ],
  sampleQuestions: {
    // Adicione questões por matéria
  }
};
```

### Ajustar Responsividade
Configure breakpoints em `css/responsive.css`:
```css
@media (min-width: 768px) {
  /* Estilos para tablet */
}
```

## 🚀 Deploy e Produção

### Deploy Simples
1. Faça upload de todos os arquivos para seu servidor web
2. Configure o servidor para servir arquivos estáticos
3. Acesse via `https://seudominio.com/index.html`

### Otimizações Recomendadas
- **Minificação**: CSS e JavaScript
- **Compressão**: Gzip/Brotli no servidor
- **CDN**: Para assets estáticos
- **Progressive Web App**: Service worker para cache

## 🎯 Próximos Passos

### Integração com Backend
- [ ] API REST para dados reais
- [ ] Autenticação de usuários
- [ ] Sincronização de progresso
- [ ] Analytics de uso

### Funcionalidades Avançadas
- [ ] Modo offline com PWA
- [ ] Notificações push
- [ ] Gamificação expandida
- [ ] Social features

### Otimizações
- [ ] Performance audit
- [ ] Testes automatizados
- [ ] Acessibilidade avançada
- [ ] SEO otimization

## 📞 Suporte

Para dúvidas sobre implementação ou customização:

1. **Documentação**: Consulte `VALIDATION-REPORT.md` para detalhes técnicos
2. **Design System**: Referência em `design.md`
3. **Código**: Comentários inline nos arquivos fonte

## 📄 Licença

Este protótipo foi desenvolvido seguindo as especificações do Orbie App e serve como demonstração das funcionalidades das Trilhas Auto-Guiadas.

---

**Desenvolvido com fidelidade extrema ao design original do Orbie App** 🌌