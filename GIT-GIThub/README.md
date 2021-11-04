# Canivete Suíço - GIT/Github


### Manual simples com pequenos passos para a manipulação de versionamento do Git/Github.


### O que é o Git?

#### <p>Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.</p>
##### Fonte: [Git](https://git-scm.com/)


### Passo para instalação

Entrando como super usuário e atualizando os pacotes.
```
$: su && apt update && apt upgrade
```

Instalando pacotes necessários.
```
#: apt install build-essential make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip
``` 

Acessando a pasta temporária.
```
#: cd /tmp/
```

Baixando a versão mais atual para linux (Debian, git 2.33 mais atual).
```
#: wget https://github.com/git/git/archive/refs/tags/v2.33.0.zip -O git.zip
```

Descompactando pactoes.
```
#: unzip git.zip
```

Acessando a pasta gerada.
```
#: cd git-*
```

Compilando o código.
```
#: make prefix=/usr/local all
#: make prefix=/usr/local install
```

Verificando versão
```
#: git --version
```

### Códigos mais usados para manipulação de projetos


Comando para inicializar um repositório (necessário estar dentro da pasta que será utilizada do git)
```
$: git init
```

Verificação de status do git
```
$: git status
```

Adiciona todos os arquivos do diretório atual para dentro da stage (pré carregamento)
```
$: git add *
```

Adiciona commit para dentro do repositório
```
$: git commit -m "comentario a ser adicionado"
```

Adicionando o repositório do git de origem SSH
```
$: git remote add origin LINK adcinado-SSH
```

Ver as opções dos pacotes.
```
$: git remote -v
```

Adiciona do git local para o remote (Github).
```
$: git push origin master
```

Quando houver erros, basta baixar o pacote e realizar manutenção.
O comando abaixo fará atualização para o pacote atual no qual será feito a verificação e atualização correta necessária para o bom funcionamento do repositório.
```
$: git pull origin master
$: git push origin master
```
Pode ser realizado as manutenções dos códigos após antes de utilizar o push.
