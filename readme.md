# BootCamp DIO: Desafio de Código (recriar a interface da Netflix)

## Created by Shikamaru-kun

### Notas

	> Caso utilizarmos o editor ***Visual Studio Code*** ou **vscode**, se tiver o *plugin* ou a ferramenta ***Emmet***, temos a possibilidade de ganhar tempo, digitando apenas "html" e a ferramenta acaba por complementar o código.
	>
	>> A ferramenta cria automaticamente a *tag* do ***DOCTYPE***, a *tag* do "html" com o atributo **"lang"** e o respectivo valor. O valor permite ao navegador interpretar qual a linguagem da página e fornecer a tradução automática, se utilizarmos o ***Google Chrome***.
	>
	>> Cria também a *tag* "head" e dentro dela, cria as *tags* "meta" necessárias e os respectivos atributos e valores.
	>
	
    - Os atributos da *tag* "meta" são:
	>> ***charset***: é o código de caracteres a serem exibidos pela página e compreendidas pelos navegadores. O valor mais utilizado é o **"UTF-8"**, que é o padrão para que os navegadores leiam os caracteres acentuados e os caracteres especiais.
	>
	>> ***name***: ajuda mais nas questões de escalabilidade da página, principalmente quando se trabalha com páginas *mobile*, pois permite pegar o tamanho exacto do dispositivo onde se vai abrir a página. O valor utilizado é o ***viewport***, que é a página em si.
	>> ***content***: é utilizado em conjunto com a atributo *"name"*. O seu valor é ***"width-device-width, initial-scale=1.0"***, permitindo assim ao navegador entender que o tamanho do dispositivo em que a página for aberta será tido em conta, tendo uma escala inicial mínima.
	>
	> A outra *tag* criada dentro do "head" é o *"title"*, que permite ao navegador exibir o título ou nome da página na sua aba ou separador.
	>
	> Também é a criada a *tag* *"body"*.
	>
	
    - Semântica
	
	> ***nav***: esta *tag* é utilizada, geralmente, quando se pretende implementar menus de navegação na página.
	>
	> ***reset css***: serve para atribuir configurações padronizadas à página, para que qualquer navegador onde formos abrir a página interprete de maneira primária e obrigatória.
	>
	> ***box-sizing***: atributo css que permite limitar os elementos à borda da tag html à que os mesmos se destinam. O valor deste atributo é o ***border-box***.
	>
	
    - Como declarar uma variável dentro do css?
	>
	> Para se declarar uma variável no css é necessário que primeiramente a coloquemos na raíz do documento, ou seja, declarando o elemento **":root{}"**.
	>> Geralmente utilizamos para declarar atributos que possam ser reutilizáveis em vários elementos da página e em caso de futura alteração, só se precisará de efectuar a alteração directamente no ***root***, ou seja, cria uma maior optimização na construção da página, faz parte das boas práticas de desenvolvimento e auxilia muito na actualização do css das páginas.
	>
	> A declaração é feita da seguinte maneira:

	 - **--variavel:**

	>
	> A atribuição do valor da variável, dentro de um elemento css é feita da seguinte maneira:

	 - **" body { background: var(--nome_da_variavel); } "**

   - ***main***: é uma tag onde se lança o conteúdo principal de uma página. A palavra *"main"* serve para indicar ao sistema operativo de que se trata do conteúdo-chave da página.

   - Dica de como criar um elemento e uma classe rapidamente, utilizando o *"emmet"*, que é um recurso disponibilizado pelo *"vscode"*:
	>
	> digitar primeiro o nome do elemento html e a seguir, um ponto e o nome que queremos dar à classe.
	>> O *"Emmet"* entende a referência e cria o elemento html, dentro da respectiva tag e atribui a respectiva classe. Ex: **"div.nome_classe"**.
	>

   - Como lançar uma imagem na página, a partir do css?

	> Para a div criada, atribuímos o seguinte css: **" background: url('url da imagem'); "**.
	>

   - ***linear-gradient***: propriedade css que permite trabalhar com textos que estejam sobre imagens, criando uma camada entre o texto e imagem, consoante as cores escolhidas.
	>
	>> A declaração é feita da seguinte maneira: **" linear-gradient( rgba(r,g,b, transparência), rgba(r,g,b, transparência) "percentagem de ocupação da tela pelo *gradient*" ) "**.
	>

  - Atributo ***role*** num botão: serve para indicar ao sistema operativo, qual é a real função ou propriedade do botão.

  - ***Font Awesome***: é uma ferramenta *javascript* que permite criar ícones dentro do código html sem a necessidade de guardar as imagens no pasta de imagens. Para utilizar é só efectuar a referência aos mesmos e para deve-se aceder à página web do *font awesome*, cadastrar o e-mail e após o cadastro, será enviado o link em formato ".js" para podermos utilizar os ícones da ferramenta.

  - ***transition***: propriedade ou atributo css que cuida da transição entre uma animação e outra.
	>
	>> A declaração é feita da seguinte maneira: **"transition: .3s ease all"**.

	