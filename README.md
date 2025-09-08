# DevTrack

![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)
<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
</p>

## Introdução

**DevTrack** é uma plataforma de gerenciamento de ativos de TI desenvolvida para empresas que necessitam de controle eficiente sobre seus dispositivos corporativos.  
O sistema permite registrar e categorizar equipamentos, associá-los a colaboradores, monitorar status de utilização, gerenciar números de série e manter um histórico completo de manutenções.

Com o **DevTrack**, a gestão de dispositivos se torna mais organizada, transparente e escalável, reduzindo falhas no inventário e aumentando a produtividade da equipe de TI.

## Tecnologias Utilizadas

- **Front-end & Back-end:** Next.js  
- **Banco de Dados:** PostgreSQL com Prisma ORM  
- **Containerização:** Docker + Docker Compose  
- **Estilização:** Tailwind CSS & shadcn/ui  
- **Segurança:** Bcrypt (criptografia de senhas)  
- **Autenticação:** Auth.js  
- **Deploy:** Vercel  

## Funcionalidades Principais

- Cadastro completo de dispositivos corporativos  
- Associação de dispositivos a colaboradores  
- Controle de disponibilidade dos equipamentos  
- Histórico detalhado de manutenções  
- Registro de números de série  
- Sistema seguro de autenticação e criptografia de dados  

## Screenshots

![Tela Principal](public/og-image.jpeg)

## Como Rodar o Projeto

### Com Docker

```bash
# Clone o repositório
git clone https://github.com/yolmat/DevicesManager.git
cd DevicesManager

# Suba os containers
docker-compose up --build


# Instale as dependências
npm install

# Rode o projeto
npm run dev
```
O sistema estará disponível em http://localhost:3000

### Deploy

A aplicação está disponível em produção: https://devices.msaraiva.dev.br

## Contribuição

Desenvolvido e mantido por:

<p align="left">
  <a href="https://github.com/yolmat" target="_blank">
    <img src="https://github.com/yolmat.png" width="80" alt="Mateus Saraiva"/>
  </a>
</p>

**Mateus Saraiva** - [GitHub](https://github.com/yolmat)  


## Licença

Este projeto está licenciado sob a MIT License.
Veja o arquivo LICENSE
 para mais detalhes.
