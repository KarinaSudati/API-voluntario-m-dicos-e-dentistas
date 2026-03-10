🩺 API Médicos & Dentistas Voluntários
Esta é uma API desenvolvida com Node.js e Express para gerenciar o cadastro de profissionais de saúde que desejam realizar trabalhos voluntários. O projeto simula o recebimento de dados de um formulário, aplica validações de segurança e armazena as informações em memória.

🚀 Tecnologias Utilizadas
Node.js: Ambiente de execução Javascript.

Express: Framework web para criação de rotas e middlewares.

Dotenv: Gerenciamento de variáveis de ambiente.

Nodemon: Ferramenta de desenvolvimento para reiniciar o servidor automaticamente.

Regex: Utilizado para validação rigorosa de campos (E-mail, Nome, Telefone).

🛠️ Funcionalidades
GET /: Rota inicial para verificar se a API está online.

GET /cadastros: Lista todos os profissionais voluntários cadastrados.

POST /cadastros: Realiza um novo cadastro com as seguintes regras:

Nome: Mínimo de 3 caracteres (apenas letras).

Email: Deve seguir um formato válido (exemplo@email.com).

Telefone: Deve conter entre 10 e 11 dígitos numéricos.

Mensagem: Sanitização de caracteres para evitar envios maliciosos.



📁 Estrutura de Pastas
Plaintext
├── node_modules/     # Dependências do projeto
├── .env              # Variáveis de ambiente (Porta)
├── .gitignore        # Arquivos ignorados pelo Git
├── package.json      # Scripts e dependências
└── server.js         # Código principal da API e validações



🔧 Como Executar o Projeto

Clone o repositório:

Bash
git clone https://github.com/KarinaSudati/API-voluntario-m-dicos-e-dentistas.git
Entre na pasta do projeto:

Bash
cd desafio-backend
Instale as dependências:

Bash
npm install
Inicie o servidor em modo de desenvolvimento:

Bash
npm run dev
O servidor iniciará em http://localhost:3000 (ou na porta definida no seu arquivo .env).


🧪 Testando com Postman: 

Para realizar um cadastro, envie uma requisição POST para http://localhost:3000/cadastros com o seguinte corpo JSON:


JSON
{
  "nome": "Karina Sudati",
  
  "email": "contato@exemplo.com",
  
  "telefone": "16999999999",
  
  "mensagem": "Olá! Gostaria de me voluntariar para atendimentos na região de Araraquara."
  
}


👤 Autora
Karina Sudati - 



Estudante de Desenvolvimento Full-Stack 🚀
