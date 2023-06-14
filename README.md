# FertLog
## Sumário:
1. [Requisitos mínimos](https://github.com/i3elj/fertlog/tree/master#requisitos-m%C3%ADnimos)
2. [Rodando a Aplicação](https://github.com/i3elj/fertlog#rodando-a-aplica%C3%A7%C3%A3o)
3. [Um Pouco do React Native](https://github.com/i3elj/fertlog#um-pouco-do-react-native)

## Requisitos Mínimos
Para desenvolver e contribuir para esse projeto é necessário
1. NPM (Node Package Manager)
2. Expo Go

### Instalando o NPM
#### Debian, Ubuntu e derivados (Linux)
Quando você instala o NodeJs, o npm é instalado automaticamente junto a ele.
```bash
sudo apt install node
```
#### Arch Linux
```bash
sudo pacman -Sy node
```
#### Windows & MacOS
Para instalar no Windows ou no Mac você pode utilizar o instalador do NodeJs disponível [aqui](https://nodejs.org/en/download). Tenha certeza de instalar a versão LTS (Long Term Support).

Caso não queira utilizar o instalador, acredito que você possa utilizar o [Chocolatey](https://chocolatey.org/) no Windows e o [Brew](https://brew.sh/) no MacOs.

### Expo Go
Caso esteja utilizando um celular Android é só ir na PlayStore e baixar o aplicativo Expo Go. Aparentemente, caso esteja utilizando um iPhone você só vai precisar da câmera do celular (Mais pra frente você precisará ler um QR code).

## Rodando a Aplicação
Para conseguir rodar a aplicação você primeiro precisa clonar o repositório.

Via SSH:
```bash
git clone git@github.com:i3elj/fertlog.git
```
Via HTTPS:
```bash
git clone https://github.com/i3elj/fertlog.git
```

Depois entre no diretório:
```bash
cd fertlog/
```

Dentro do diretório rode o seguinte commando. Isso vai fazer com que todos os pacotes necessários sejam instalados. Não se preocupe, nada será instalado a nível global no seu sistema, após deletar a pasta do projeto, tudo será apagado.
```bash
npm install
```
Se tudo tiver dado certo, basta rodar `npx expo start` e seguir as instruções.

## Um Pouco do React Native
O React Native é uma versão do React.js para funcionar de forma nativa em qualquer smartphone atual. Se você já ouviu falar do React.js e sabe como ele funciona não precisa continuar lendo, você já sabe tudo que precisa saber, caso contrário continue lendo.

O React Native é uma biblioteca JavaScript para desenvolver Interfaces de Usuários utilizando uma abordagem voltada à componentes. Cada componente é uma função JavaScript normal que retorna um `JSX.Element`.

```jsx
import React from 'react';

function MeuComponente() {
  return (
    <div>
      <h1>My Div</h1>
    </div>
  )
}

export default MeuComponente;
```

Nesse projeto iremos utilizar uma estrutura de pastas que simule nossas "rotas". Caso esse fosse um projeto voltado para a web e quisessemos ter uma página para ver nossos contatos, por exemplo, `https://www.fertlog.com/perfil/contatos` isso se traduziria em uma árvore de pastas similar à seguinte:
```
App.js						<- main file
views/
└── perfil/
    ├── contato/
    │   └── index.js
    ├── editar/
    │...
```

Gostaria também de mostrar como é a estilização de cada componente. Já que estamos trabalhando com arquivos de JavaScript não teremos acesso ao CSS, logo, utilizaremos uma facilidade que o React trouxe: o `StyleSheet`:
```javascript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
Depois é só utilizar a constante `styles` para adiconar as estilizações no componente certo:
```jsx
<View style={styles.container}>
  <Text>Hello World</Text>
</View>
```

Agora cada regra de CSS que você vem utilizando deixará de ser escrito com hífens: `justify-content` e passará a ser escrito, como chamamos, com a regra camelCase, onde a primeira palavra é completamente minúscula e a segunda começa com a primeira letra maiúscula. Ex: backgroundColor, justifyContent, textAlign, fontSize, etc...

E por fim, para importar um componente em outro e utiliza-lo basta usar um `export default NomeDoComponente;` e importar usando: `import NomeDoComponente from '../rota/relativa/do/arquivo/atual/NomeDoComponente';` (obs: não precisa especificar a extensão do arquivo no final `.js`):

Exemplo de projeto:
```
projeto/
├── App.js
└── views/
    └── home/
        └── index.js
```

```jsx
// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

import MeuComponente from './views/home/index';

function App() {
  return (
    <View style={styles.container}>
      <MeuComponente />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

```jsx
// views/home/index.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MeuComponente() {
  return (
    <View style={styles.container}>
      <Text>My Div</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'lightblue',
  },
});

export default MeuComponente;
```
