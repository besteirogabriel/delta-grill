# Revisão local — MasterChef e cabeçalho

Data: 19/10/2026. Branch: `codex/masterchef-home`.

## Pedido e entrega

- Destaque logo abaixo do banner inicial, com título “Nossa serra-fita no MasterChef”, texto fornecido pelo cliente e foto do desafio.
- Foto e botão “Confira o episódio” apontam para o vídeo informado, a partir de 160 segundos (2min40s).
- Indicação do tempo em texto menor abaixo do botão.
- Bandeira do Brasil como arquivo local, logo após a bandeira do RS; BR, ES e EN com a mesma tipografia.
- Seta visual do menu Produtos removida, preservando abertura, fechamento e teclado.
- Cabeçalho consistente nas 61 páginas.

## Fontes

Foto: `participantes-dividindo-porco-leilao-prova-masterchef-profissionais.jpg`, da pasta Master Chef do Drive enviada pelo cliente:
https://drive.google.com/drive/folders/1fdHEdnIPoNq-C9Al2sTSzYeV9TCVkMI2

Arquivo identificado no Drive: `18jBFxo7av4qrBqCULZDiSn8Zu4DeSmpQ`. Cópia local em `assets/images/masterchef-serra-fita.jpg` (1080 × 720). A outra foto da pasta mostra a apresentação do porco; foi escolhida a que mostra o equipamento durante o corte.

Vídeo: https://www.youtube.com/watch?v=Z8mybszvG2A&t=160s
O endereço abriu no YouTube com o título “Um porco INTEIRO! | Especial de 10 anos | BAÚ MASTERCHEF”, do canal MasterChef Brasil. O tempo segue a indicação do cliente; não foi feita auditoria do episódio completo.

Bandeira brasileira: https://flagcdn.com/br.svg, armazenada localmente em `assets/images/flag-br.svg`.

## QA após implementação

- `tests/check-links.py`: 61 páginas, nenhum problema de links locais ou estrutura verificada.
- `tests/site-smoke.cjs`: aprovado nas 61 páginas em 390 e 1366 px, e páginas representativas em 320, 768 e 1920 px; filtros, busca, galeria, mapa, menu móvel e ausência de erros JavaScript aprovados.
- Conferência adicional do destaque em 320, 390, 768, 1024, 1366 e 1920 px: sem rolagem horizontal; foto carregada; posição imediatamente após o banner; ambos os links com vídeo e tempo corretos; bandeiras em ordem; BR/ES/EN com tamanho igual.
- Menu Produtos testado por teclado (Enter abre; Escape fecha).
- Capturas de desktop e celular inspecionadas visualmente.

## Limite desta entrega

Alterações somente locais, com commits separados. Sem push, merge na main ou publicação. Esta revisão cobre os pedidos novos de MasterChef e cabeçalho; não declara concluídas as pendências anteriores do catálogo nem incorpora todas as outras pastas do Drive.
