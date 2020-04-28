# Planilhas do Google (Node)
Script para manipular planilhas do Google

#### Clone este repositório
``` git@github.com:rotirotirafa/node-google-spreadsheets.git  ```

#### Configuração no Google:
- Crie uma planilha: [Google-Planilhas] (https://docs.google.com/spreadsheets/) ;

### Crie as credenciais de acesso:
- Crie um novo projeto: [GitHub](https://console.developers.google.com/) ;
- Acesse: Contas de serviço -> Criar conta de serviço (coloque permissão de editar);
- Copie o e-mail gerado ex: nome-escolhido@nome-projeto.iam.gserviceaccount.com;
- Faça o download da credencial em formato JSON;

### Dê permissão ao e-mail gerado na planilha

### Configuração do projeto

- Acesse com:
``` cd node-google-spreadsheets ```

- Instale as dependencias necessárias com:
``` npm install ``` ou ``` yarn ```

- Crie uma pasta chamada 'credentials' dentro da raiz do projeto

- Faça download do JSON gerado e cole dentro da pasta 'credentials'  com o nome de google.json

#### Acesse no navegador e copie o ID inteiro entre '/d/IDAQUI/'
- Atribua o ID copiado na variável 'sheetId'

