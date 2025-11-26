# 🍳 Delícias à Mesa - Recipe App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

Aplicação web moderna para descobrir e explorar receitas brasileiras tradicionais

[Demo ao Vivo](https://cerqmateus.github.io/recipe-app) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação)

</div>

---

## 📋 Sobre o Projeto

**Delícias à Mesa** é uma aplicação web interativa e responsiva que celebra a rica culinária brasileira. O projeto oferece uma experiência visual atraente para explorar receitas tradicionais, desde o clássico brigadeiro até a tradicional feijoada, com uma interface moderna e intuitiva.

### 🎯 Propósito

- ✅ Preservar e compartilhar receitas tradicionais brasileiras
- ✅ Oferecer uma experiência de usuário moderna e fluida
- ✅ Facilitar a busca e descoberta de receitas
- ✅ Proporcionar visualização detalhada com instruções passo a passo
- ✅ Criar uma plataforma acessível e responsiva

---

## ✨ Funcionalidades

### 🎠 Carrossel Interativo de Receitas

- **Navegação automática** com transições suaves
- **Controles responsivos**:
  - 3 cards em telas grandes (desktop)
  - 2 cards em tablets
  - 1 card em smartphones
- **Navegação por teclado**: Use ←→ ou botões na tela
- **Indicadores de progresso** animados
- **Auto-play** com pausa ao hover
- **Design adaptativo** com animações CSS

### 🔍 Busca Inteligente

- **Comando rápido**: Abra com `Ctrl/Cmd + K`
- **Busca em tempo real** por nome de receita
- **Preview das receitas** no dropdown de busca
- **Interface Command Dialog** inspirada em VS Code
- **Navegação por teclado** completa
- **Resultados filtrados** instantaneamente

### 📖 Página Detalhada de Receita

- **Layout dividido** entre ingredientes e modo de preparo
- **Imagens otimizadas** com Next.js Image
- **Informações complementares**:
  - Tempo de preparo
  - Número de porções
  - Dicas especiais
- **Navegação intuitiva** com botão de retorno
- **Design responsivo** para todos os dispositivos

### 📱 Interface Responsiva

- **Mobile-First Design**
- **Navegação adaptativa** com Navbar
- **Footer informativo** com redes sociais
- **Banner principal** com call-to-action
- **Otimização de imagens** para diferentes telas

### ℹ️ Página Sobre

- **História do projeto** "Delícias à Mesa"
- **Missão e valores** da plataforma
- **Design inspirador** com gradientes e ícones
- **Cards informativos** sobre comunidade
- **Call-to-action** para explorar receitas

---

## 🛠 Tecnologias

### Core

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 15.3.5 | Framework React com SSR, SSG e App Router |
| **React** | 19.0.0 | Biblioteca para construção de interfaces |
| **TypeScript** | 5.x | Superset JavaScript com tipagem estática |
| **TailwindCSS** | 4.x | Framework CSS utility-first |

### UI/UX

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Radix UI** | 1.1.x | Componentes acessíveis headless |
| **Lucide React** | 0.525.0 | Biblioteca de ícones moderna e leve |
| **CMDK** | 1.1.1 | Command menu para busca avançada |
| **Class Variance Authority** | 0.7.1 | Gerenciamento de variantes de classes |
| **clsx** | 2.1.1 | Utilitário para concatenação de classes |
| **tailwind-merge** | 3.3.1 | Mesclagem inteligente de classes Tailwind |

### Build & Development

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **ESLint** | 9.x | Linter para qualidade de código |
| **PostCSS** | - | Processador de CSS |
| **gh-pages** | 6.3.0 | Deploy para GitHub Pages |
| **tw-animate-css** | 1.3.5 | Animações CSS para Tailwind |

---

## 📦 Instalação

### Pré-requisitos

- Node.js 20.x ou superior
- npm, yarn, pnpm ou bun

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/cerqMateus/recipe-app.git
cd recipe-app
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) no navegador

---

## 🏗 Arquitetura

### Estrutura de Diretórios

```
recipe-app/
├── public/                    # Arquivos estáticos
├── src/
│   ├── app/
│   │   ├── about/            # Página "Sobre"
│   │   │   └── page.tsx
│   │   ├── full-recipe-page/ # Páginas de receitas
│   │   │   └── [id]/
│   │   │       └── page.tsx  # Rotas dinâmicas
│   │   ├── components/       # Componentes da aplicação
│   │   │   ├── RecipeCarousel.tsx
│   │   │   ├── SearchComponent.tsx
│   │   │   ├── banner.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.tsx        # Layout principal
│   │   └── page.tsx          # Página inicial
│   ├── backend/
│   │   └── recipes.json      # Base de dados de receitas
│   ├── components/
│   │   └── ui/               # Componentes base (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── command.tsx
│   │       └── dialog.tsx
│   └── lib/
│       └── utils.ts          # Funções utilitárias
├── components.json           # Configuração shadcn/ui
├── next.config.ts            # Configuração do Next.js
├── tailwind.config.ts        # Configuração do Tailwind
├── tsconfig.json             # Configuração do TypeScript
└── package.json
```

### 📊 Modelo de Dados

As receitas são armazenadas em um arquivo JSON estruturado:

```typescript
interface Recipe {
  nome: string;              // Nome da receita
  descricao: string;         // Descrição breve
  ingredientes: string[];    // Lista de ingredientes
  modoPreparo: string[];     // Passos de preparação
  informacoesAdicionais: string; // Dicas e informações extras
  imageURL: string;          // URL da imagem da receita
}

interface RecipeData {
  receitas: Recipe[];        // Array de receitas
}
```

**Exemplo de Receita:**

```json
{
  "nome": "Brigadeiro",
  "descricao": "Doce tradicional brasileiro feito com leite condensado e chocolate",
  "ingredientes": [
    "1 lata de leite condensado",
    "1 colher (sopa) de manteiga",
    "4 colheres (sopa) de chocolate em pó",
    "Chocolate granulado para enrolar"
  ],
  "modoPreparo": [
    "Em uma panela, coloque o leite condensado, a manteiga e o chocolate em pó",
    "Mexa em fogo médio até soltar do fundo da panela",
    "Deixe esfriar e faça bolinhas",
    "Passe no chocolate granulado"
  ],
  "informacoesAdicionais": "Rende aproximadamente 30 brigadeiros",
  "imageURL": "https://exemplo.com/brigadeiro.jpg"
}
```

---

## 🎨 Componentes Principais

### RecipeCarousel

Carrossel interativo e responsivo com navegação automática.

**Props:**
```typescript
interface RecipeCarouselProps {
  recipes: Recipe[];
}
```

**Features:**
- Auto-play com intervalo de 4 segundos
- Navegação por setas (← →)
- Indicadores de progresso animados
- Pausa ao hover
- Transições suaves (700ms)
- Responsividade automática

### SearchComponent

Componente de busca com Command Dialog.

**Features:**
- Atalho de teclado (`Ctrl/Cmd + K`)
- Busca em tempo real
- Preview de receitas
- Navegação por teclado
- Design minimalista

### FullRecipePage

Página de detalhes da receita com layout dividido.

**Features:**
- Rotas dinâmicas (`/full-recipe-page/[id]`)
- Imagem otimizada com Next.js Image
- Layout grid responsivo
- Informações estruturadas
- Botões de navegação

### Navbar & Footer

Componentes de navegação e rodapé.

**Features:**
- Links para páginas principais
- Busca integrada
- Informações de contato
- Redes sociais

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento (porta 3000)

# Build
npm run build        # Compila para produção

# Produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint

# Deploy
npm run predeploy    # Build antes do deploy
npm run deploy       # Deploy para GitHub Pages
```

---

## 🎨 Customização

### Cores e Tema

O projeto usa cores personalizadas definidas no `globals.css`:

```css
:root {
  --brand-yellow: #FDB401;
  --brand-orange: #FF6B35;
}
```

### Animações

Animações customizadas definidas com TailwindCSS e tw-animate-css:

- `hover:scale-105` - Efeito de zoom
- `transition-all duration-300` - Transições suaves
- `animate-progress` - Barra de progresso

### Imagens Remotas

Configuradas no `next.config.ts` para otimização:

```typescript
remotePatterns: [
  { hostname: 'static.itdg.com.br' },
  { hostname: 'i.panelinha.com.br' },
  // ... outros domínios
]
```

---

## 📱 Responsividade

### Breakpoints Tailwind

- **sm:** 640px (smartphones)
- **md:** 768px (tablets)
- **lg:** 1024px (desktops)
- **xl:** 1280px (telas grandes)

### Carrossel Adaptativo

```typescript
// Smartphones: 1 card
if (window.innerWidth < 768) return 1;

// Tablets: 2 cards
if (window.innerWidth < 1024) return 2;

// Desktop: 3 cards
return 3;
```

---

## 🔧 Configurações

### Next.js

```typescript
// next.config.ts
const nextConfig = {
  devIndicators: false,      // Remove indicadores de dev
  images: {
    remotePatterns: [...]     // Domínios permitidos
  }
}
```

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]      // Alias para imports
    }
  }
}
```

### Tailwind

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'brand-yellow': '#FDB401',
      'brand-orange': '#FF6B35'
    }
  }
}
```

---

## 🌐 Deploy

### GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. **Build do projeto**

```bash
npm run build
```

2. **Deploy**

```bash
npm run deploy
```

3. **Acesse**

[https://cerqmateus.github.io/recipe-app](https://cerqmateus.github.io/recipe-app)

### Outras Plataformas

O projeto também é compatível com:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- **Render**

---

## 🎯 Melhorias Futuras

- [ ] Sistema de favoritos com localStorage
- [ ] Filtros por categoria (doces, salgados, bebidas)
- [ ] Sistema de avaliações e comentários
- [ ] Modo escuro/claro
- [ ] Impressão de receitas
- [ ] Compartilhamento em redes sociais
- [ ] Lista de compras automática
- [ ] Timer de cozinha integrado
- [ ] Conversor de medidas
- [ ] Sugestões de receitas baseadas em ingredientes
- [ ] API backend para CRUD de receitas
- [ ] Autenticação de usuários
- [ ] Upload de receitas pelos usuários
- [ ] Internacionalização (i18n)

---

## 🔍 SEO e Performance

### Otimizações Implementadas

- ✅ **Next.js Image Optimization** - Imagens otimizadas automaticamente
- ✅ **SSG (Static Site Generation)** - Páginas geradas em build time
- ✅ **Code Splitting** - Carregamento sob demanda
- ✅ **Lazy Loading** - Imagens carregadas conforme necessário
- ✅ **Semantic HTML** - Estrutura HTML semântica
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Fast Refresh** - Hot reload durante desenvolvimento

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript para novas funcionalidades
- Siga as convenções do ESLint configurado
- Mantenha componentes pequenos e reutilizáveis
- Documente mudanças significativas
- Teste em diferentes dispositivos

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

## 👤 Autor

**Mateus Cerqueira**
- GitHub: [@cerqMateus](https://github.com/cerqMateus)
- LinkedIn: [Mateus Cerqueira](https://linkedin.com/in/mateus-cerqueira)
- Portfolio: [cerqmateus.github.io/recipe-app](https://cerqmateus.github.io/recipe-app)

---

## 🙏 Agradecimentos

- **Next.js Team** - Framework incrível
- **Vercel** - Hospedagem e ferramentas
- **Radix UI** - Componentes acessíveis
- **Lucide** - Ícones lindos
- **TailwindCSS** - CSS utility-first
- **Comunidade Open Source** - Inspiração e suporte

---

## 📞 Contato

Tem alguma dúvida ou sugestão? Entre em contato!

- 📧 Email: [mateus@exemplo.com](mailto:mateus@exemplo.com)
- 💼 LinkedIn: [Mateus Cerqueira](https://linkedin.com/in/mateus-cerqueira)
- 🐙 GitHub: [@cerqMateus](https://github.com/cerqMateus)

---

<div align="center">

**[⬆ Voltar ao topo](#-delícias-à-mesa---recipe-app)**

Feito com ❤️ e muito ☕ por [Mateus Cerqueira](https://github.com/cerqMateus)

🍳 **Bom apetite!** 🍳

</div>
