# PMERJ 2026 - Landing Page

Landing page moderna para o e-book "Método Estratégico de Aprovação - PMERJ 2026".

## 🎯 Características

- **React 19** + **Vite** - Build rápido e otimizado
- **Tailwind CSS 4** - Estilos modernos e responsivos
- **TypeScript** - Type safety completo
- **Vercel Ready** - Deploy automático e sem configuração
- **Zero Backend** - Frontend puro, sem dependências de servidor
- **Mobile First** - Totalmente responsivo

## 📁 Estrutura

```
src/
  ├── components/
  │   ├── Hero.tsx          # Seção hero com CTA principal
  │   ├── Benefits.tsx      # Benefícios do e-book
  │   ├── Modules.tsx       # Os 12 módulos
  │   ├── Offer.tsx         # Seção de oferta e preço
  │   ├── FAQ.tsx           # Perguntas frequentes
  │   ├── StickyCTA.tsx     # CTA fixo ao scroll
  │   └── Footer.tsx        # Rodapé
  ├── App.tsx               # Componente principal
  ├── main.tsx              # Entry point
  └── index.css             # Estilos globais
public/                      # Arquivos estáticos
index.html                   # HTML principal
package.json                 # Dependências
vite.config.ts              # Configuração Vite
tsconfig.json               # Configuração TypeScript
```

## 🚀 Como Usar

### Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Saída em `dist/`

### Preview da Build

```bash
npm run preview
```

## 🌐 Deploy na Vercel

1. **Conecte seu repositório GitHub** à Vercel
2. **Configure o build:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy automático** em cada push

## 🎨 Customização

### Cores
Edite `src/index.css` para alterar o esquema de cores (azul-marinho + dourado)

### Conteúdo
Edite os componentes em `src/components/` para alterar textos e estrutura

### Link Hotmart
Atualize o link de checkout em:
- `src/components/Offer.tsx`
- `src/components/StickyCTA.tsx`

## 📦 Dependências

- **react** - Framework UI
- **react-dom** - Renderização DOM
- **lucide-react** - Ícones
- **tailwindcss** - Utilitários CSS
- **vite** - Build tool
- **typescript** - Type safety

## 📝 Licença

MIT
