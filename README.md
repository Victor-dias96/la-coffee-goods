# ☕ La Coffee Goods - Front-end

![La Coffee Goods Logo](https://res.cloudinary.com/dqfsrp3ky/image/upload/v1764112013/logo_la_coffee_goods_xhee45.png)

**Link do Repositório:** `https://github.com/Victor-dias96/la-coffee-goods`

## 📝 Introdução ao Projeto

O **La Coffee Goods** é um Sistema de Cafeteria desenvolvido com o objetivo de automatizar o gerenciamento de pedidos, tornando o atendimento mais rápido e eficiente. A inspiração para o projeto surgiu da crescente popularidade das cafeterias nas publicações de redes sociais.

Este repositório contém o código do Front-end, que serve como interface para os usuários (Clientes) e funcionários (Barista/Administrador) do sistema.

## 💻 Tecnologias Utilizadas

O desenvolvimento do Front-end foi realizado utilizando **React** como principal ferramenta. A arquitetura foi planejada para uma versão inicial simples e funcional.

| Categoria | Tecnologia/Ferramenta |
| :--- | :--- |
| Framework Principal | React |
| Bibliotecas | Tanstack query, Axios, React Router |
| Prototipagem/Design | Figma |
| Linguagem Base | JavaScript |

## ✨ Design e Usabilidade

O sistema busca oferecer uma interface moderna, visualmente atraente e fácil de usar.

1.  **Paleta de Cores e Tipografia:** Foi utilizada uma combinação de **cores Pastel** para combinar com a proposta de ser algo mais fofo e jovial. A fonte escolhida foi **Poppins**, por ser não serifada e própria para um ambiente digital, melhorando a experiência do usuário.
2.  **Requisitos de Qualidade:** A interface foi projetada para ser **intuitiva**, permitindo que o usuário finalize um pedido em no máximo 5 cliques (RNF02). Há também um requisito de **Desempenho** (RNF01) que exige que a página inicial seja carregada em até 3 segundos.

## 🚀 Componentes e Funcionalidades

O Front-end é composto por dois componentes principais: o **App Mobile do Cliente** e o **Sistema de Balcão (Painel Barista)**.

### App do Cliente

O App do Cliente é responsável por realizar pedidos e exibir o cardápio.

| Funcionalidade (RF/UC) | Descrição e Telas Correspondentes |
| :--- | :--- |
| **RF01/UC004 - Criar uma conta/Cadastro** | Permite ao usuário criar uma conta no sistema fornecendo dados pessoais. (Tela Login/Cadastro). |
| **RF02/UC001 - Fazer um pedido** | Permite selecionar produtos, finalizar a compra e realizar o pagamento. (Tela de Produtos/Catálogo, Tela de Carrinho, Tela Formas de Pagamento). |
| **RF03 - Editar carrinho de compra** | Permite que o usuário edite o produto selecionado no carrinho. (Tela de Carrinho). |
| **RF05/UC002 - Cancelar pedido** | O usuário tem a opção de cancelar o pedido enquanto ele estiver em produção. (Tela Status do Pedido). |

### Sistema do Barista e Administração

| Funcionalidade (RF/UC) | Descrição e Telas Correspondentes |
| :--- | :--- |
| **RF06/UC003 - Gerenciar pedido em produção** | Tela específica (Painel de Produção do Barista) que permite ao Barista visualizar pedidos pendentes e atualizar o status para "em preparo" ou "concluído". |
| **UC005 - Atualizar catálogo de produtos** | Funcionalidade do Administrador para adicionar, editar ou remover produtos do catálogo. (Painel Administrativo, Tela Adicionar novo produto). |

## 🔗 Integração (Back-end)

O Front-end se comunica com a **API de Pedidos**, que atua como o centro nervoso do sistema, gerenciando pedidos, regras de negócio e persistência de informações.

*   **Repositório do Back-end:** `https://github.com/DanAraujo1001/la-coffee-goods-back`.
*   **Tecnologias do Back-end:** Spring Boot e Postgresql.
*   **Dependência:** A comunicação exige que a API de Pedidos esteja em execução.

## ⚙️ Configuração e Instalação

Para rodar o projeto Front-end localmente, siga os passos abaixo (pressupõe que o Node.js/npm ou yarn estejam instalados):

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Victor-dias96/la-coffee-goods.git
    cd la-coffee-goods
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie a aplicação:**
    ```bash
    npm start
    # ou
    yarn start
    ```

***Nota:** Certifique-se de que o Back-end (API de Pedidos) esteja ativo para que a conexão seja estabelecida corretamente, conforme mapeado em nossos planos de trabalho.*

## 🗺️ Próximos Passos (Iterações Futuras)

O desenvolvimento do Front-end já possui uma base clara nos protótipos. Os próximos passos incluem:

*   Iterações futuras com base no feedback de usuários para melhorias.
*   Integração total da parte do Funcionário e do Gerente.

## 👥 Equipe de Desenvolvimento

O projeto foi desenvolvido pelos seguintes discentes do curso de Sistemas de Informação:

*   Danilo C. Araujo (danilo.caraujo@souunit.com.br)
*   Gabriel O. Souza (gabriel.osouza@souunit.com.br)
*   Guilherme G. do Nascimento (guilherme.guimaraes06@souunit.com.br)
*   Victor Gabriel D. dos Santos (victor.gdias@souunit.com.br)
