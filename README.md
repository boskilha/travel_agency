# 🌍 Travelle Dashboard

Um dashboard completo de viagem desenvolvido com React, TypeScript e Tailwind CSS. Perfeito para gerenciar reservas, pacotes de viagem, estatísticas e comunicação com clientes.

## ✨ Características

- **Dashboard Responsivo**: Interface adaptável para desktop e mobile
- **Estatísticas em Tempo Real**: Cards com métricas de reservas, clientes e receita
- **Gráficos Interativos**: Visualizações de receita e destinos populares
- **Gestão de Pacotes**: Interface completa para gerenciar pacotes de viagem
- **Sistema de Mensagens**: Central de comunicação com clientes
- **Calendário Integrado**: Visualização de datas e agendamentos
- **Tabela de Reservas**: Listagem detalhada de todas as reservas
- **Atividades Recentes**: Timeline de ações no sistema

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Vite** - Build tool rápida e moderna
- **Recharts** - Biblioteca para gráficos React
- **Lucide React** - Ícones modernos e personalizáveis

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/travelle-dashboard.git
   cd travelle-dashboard
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra o navegador e acesse:**
   ```
   http://localhost:3000
   ```

### Build para Produção

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

O build otimizado será gerado na pasta `dist/`.

### Visualizar Build de Produção

```bash
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

## 📁 Estrutura do Projeto

```
travelle-dashboard/
├── components/           # Componentes React reutilizáveis
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── figma/           # Componentes específicos do Figma
│   └── ...              # Componentes do dashboard
├── styles/              # Estilos globais
│   └── globals.css      # CSS global com variáveis Tailwind
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada da aplicação
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── tailwind.config.js   # Configuração Tailwind CSS
├── vite.config.ts       # Configuração Vite
└── README.md            # Documentação
```

## 🎨 Customização

### Cores e Temas

As cores do sistema podem ser customizadas no arquivo `styles/globals.css`. O projeto suporta modo claro e escuro automaticamente.

### Componentes

Todos os componentes estão na pasta `components/` e podem ser facilmente customizados ou estendidos.

### Dados

Atualmente o projeto usa dados mock. Para integrar com uma API real, substitua os dados estáticos nos componentes pelos chamadas à sua API.

## 📊 Funcionalidades Principais

### Dashboard Principal
- Cards de estatísticas (Total de Reservas, Novos Clientes, Receita)
- Gráfico de receita semanal
- Gráfico de destinos mais populares

### Gestão de Pacotes
- Listagem de pacotes de viagem
- Informações detalhadas (preço, duração, avaliação)
- Estatísticas de viagens (total, concluídas, reservadas, canceladas)

### Sistema de Mensagens
- Lista de conversas com clientes
- Indicadores de mensagens não lidas
- Interface limpa e organizada

### Reservas e Atividades
- Tabela de reservas recentes
- Status das reservas (Confirmada, Pendente, Cancelada)
- Timeline de atividades do sistema

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💡 Ideias para Melhorias

- [ ] Integração com APIs reais
- [ ] Sistema de autenticação
- [ ] Notificações em tempo real
- [ ] Filtros avançados na tabela de reservas
- [ ] Exportação de relatórios
- [ ] Sistema de upload de imagens
- [ ] Integração com sistemas de pagamento
- [ ] Modo offline com sincronização

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor abra uma issue no GitHub.

---

Desenvolvido com ❤️ para a comunidade de desenvolvedores.