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

	
	