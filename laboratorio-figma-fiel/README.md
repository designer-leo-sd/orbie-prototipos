# Orbie App - Laboratório de Trilhas Autoguiadas

Este é um protótipo HTML fiel ao design do Figma para a funcionalidade "Laboratório" do aplicativo Orbie.

## Estrutura dos Arquivos

### Páginas Principais
- `index.html` - Tela inicial do laboratório com trilhas disponíveis
- `loading.html` - Tela de carregamento durante criação de trilha
- `trilha-nao-iniciada.html` - Trilha que ainda não foi iniciada
- `trilha-em-andamento.html` - Trilha em progresso (3/10 fases)
- `trilha-concluida.html` - Trilha finalizada com resultados
- `fase-questao.html` - Interface de questão durante uma fase

### Páginas de Busca
- `busca-com-resultados.html` - Página de busca com trilhas encontradas
- `busca-sem-resultados.html` - Estado vazio quando não há resultados

### Páginas de Desempenho
- `desempenho-com-dados.html` - Estatísticas do usuário com trilhas realizadas
- `desempenho-vazio.html` - Estado inicial sem trilhas realizadas

### Modais
- `modal-resultado.html` - Modal de resultado após completar trilha
- `modal-criar-trilha.html` - Modal para criar nova trilha personalizada

### Arquivos de Estilo
- `styles.css` - Todos os estilos CSS responsivos e fiéis ao Figma

## Funcionalidades Implementadas

### Navegação Completa
✅ Todas as páginas estão interligadas com navegação funcional
✅ Botões "Voltar" funcionam corretamente
✅ Transições entre diferentes estados de trilha

### Interatividade
✅ Hover effects em todos os elementos clicáveis
✅ Sistema de busca funcional com filtros
✅ Seleção de respostas em questões
✅ Feedback visual para ações do usuário
✅ Modais com overlay e animações

### Layout Responsivo
✅ Design se adapta para desktop (foco principal)
✅ Suporte para tablet e mobile
✅ Botão flutuante "Criar" fixo na tela
✅ Scroll horizontal nos carrosséis

### Estados Visuais
✅ Estados vazios (sem trilhas, sem resultados)
✅ Estados de carregamento com spinners
✅ Indicadores de progresso em trilhas
✅ Feedback de sucesso/erro em questões

## Como Usar

1. **Abrir o protótipo**: Abra `index.html` em um navegador
2. **Navegar por trilhas**: Clique nos cards para ver diferentes estados
3. **Buscar conteúdo**: Clique na barra de busca ou use os filtros
4. **Criar trilha**: Use o botão flutuante "Criar" no canto inferior direito
5. **Ver desempenho**: Implemente navegação para desempenho via menu

## Fluxos de Navegação

### Fluxo Principal
```
index.html → trilha-nao-iniciada.html → fase-questao.html → modal-resultado.html → trilha-concluida.html
```

### Fluxo de Busca
```
index.html → busca-com-resultados.html → trilha selecionada
index.html → busca-sem-resultados.html → modal-criar-trilha.html
```

### Fluxo de Criação
```
index.html → modal-criar-trilha.html → loading.html → trilha-nao-iniciada.html
```

## Diferenças do Figma Original

### Ajustes de Usabilidade
- Removidos controles de navegador (conforme solicitado)
- Layout responsivo otimizado para tela cheia
- Botão flutuante fixo para melhor acessibilidade
- Interações completas em todos os elementos

### Melhorias Técnicas
- JavaScript funcional para todas as interações
- Estados de hover e focus implementados
- Transições suaves entre páginas
- Validação de formulários nos modais

## Assets do Figma

Todas as imagens e ícones são servidos diretamente da API do Figma com URLs temporárias (7 dias de validade). Para uso em produção, baixe e hospede os assets localmente.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tecnologias Usadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript vanilla (sem frameworks)
- Google Fonts (Roboto, Orbitron, Inter)
- SVG para ícones e ilustrações

---

**Nota**: Este é um protótipo fiel ao design do Figma com funcionalidades completas de navegação e interação para demonstração do produto final.