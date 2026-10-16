# Pedido original × feito × falta — 16/10/2026

Base: arquivos originais `PROMPT DE COMANDO PARA ALTERAÇÕES NO SITE OFICIAL.docx` e `PROMPT SITE.pptx`, relidos nesta rodada diretamente do ZIP/XML; os 20 slides foram confrontados com a extração e as imagens renderizadas. Código auditado: `3413209`, branch `final-revision`.

**Retificação:** a afirmação de que só faltava material externo foi excessiva. Esta comparação encontrou uma omissão concreta no DG 1066 e fotos locais ainda não conciliadas/incluídas. Testes funcionais anteriores aprovados não comprovavam atendimento integral de cada pedido visual/editorial.

Esta rodada registra a comparação e as pendências. Não altera o site. Os testes da segunda revisão continuam como evidência de funcionamento; não foram repetidos indiscriminadamente, pois o objetivo agora é cobertura dos requisitos.

## Word — comparação de cada pedido

| Referência | Pedido | Feito no site | Falta / situação |
| --- | --- | --- | --- |
| 1 / 1.1 | Home simples, identidade de cores, fabricante/produtos/segmentos | Texto institucional único, cores preservadas e famílias/segmentos citados em `index.html` | Estrutura atendida; conferir fotos finais indicadas no PPT. |
| 2.1 | Título e apoio comerciais | Título sugerido e apoio em `produtos.html` | Atendido. |
| 2.2 | Oito famílias com apresentação visual | Oito círculos e respectivas páginas | Atendido como organização por famílias; Fornos/Ensacadeiras ainda por consulta. |
| 2.3 | Modelos e tamanhos fora do menu principal | Menu por famílias | Atendido. |
| 3 / 3.1 | Página de categoria com apresentação | Páginas específicas e título | Atendido; texto introdutório longo da Serra-Fita foi removido conforme as setas do slide 10. O texto no Word era exemplo. |
| 3.2 | Filtros independentes de tamanho e configuração | Dois seletores, combinações e URLs funcionais | Atendido. |
| 3.3 | Ideal para: alta/média/baixa produção | Terceiro seletor e mecanismo implementados | **Parcial:** 24 serras sem classificação; seletor desabilitado. |
| 3.4 | Contador atualizado | Contador acompanha filtros | Atendido nos filtros ativos. |
| 3.5 | Limpar filtros | Botão e reset funcional | Atendido. |
| 4.1 | Cards com código/nome/características/aplicação/Ver produto | Estrutura presente | **Parcial:** DG 1066 com `card-specs` vazio apesar de haver dados oficiais. |
| 4.2 | Nome comercial com mais destaque que código | Nome maior, código secundário | Atendido. |
| 4.3 | Duas a quatro características quando disponíveis | Resumos nos cards da maioria dos modelos | **Parcial:** DG 1066 sem resumo; DG 1047–1049 limitados à lâmina por falta de ficha. |
| 4.4 | Relacionados, se relevantes | Links da mesma família | Atendido. |
| 5 / 5.1 | Código, nome e características no topo | Estrutura comercial das páginas | **Parcial:** DG 1066 tem `product-highlights` vazio. |
| 5.2 | Imagem principal, foto ambientada e demais ângulos disponíveis | Galeria, miniaturas, ampliação, teclado e gesto; 20 produtos com múltiplas fotos | **Parcial:** zero ambientadas; DG 1047/1049 sem imagem; seis alternativas locais de panelas ainda não conciliadas/incluídas; não comprovada integração de todas as fotos do Drive. |
| 5.3 | Solicitar orçamento/consultor em destaque | CTAs nas 42 páginas de produto | Atendido. |
| 5.4 | Diferenciais somente com confirmação oficial | Seções criadas; afirmação sem fonte retirada dos DG 1047–1049 | Estrutura atendida; modelos sem ficha oficial ainda exigem confirmação de conteúdo. |
| 5.5 | Aplicações adequadas a cada produto | Seção Ideal para varia por família/aplicação | Atendido no cadastro atual. |
| 5.6 | Ficha completa, após apresentação; sem inventar dados | Tabelas; medidas/embalagens/alimentação corrigidas com catálogo | **Parcial:** DG 1047–1049 só têm lâmina na ficha. Não preencher o restante por inferência. |
| 5.7 | Conheça também, se relevante | Relacionados no fim das páginas | Atendido. |
| 6 / 6.1 | Menu simplificado por famílias e peças; Novidades/Contato só com conteúdo | Menu entregue, Novidades fora, Contato com conteúdo útil | Atendido. |
| 7 | Soluções por seis segmentos, opcional | Página com os seis grupos e links | Atendido. Não exige criar amassadeiras inexistentes no catálogo. |
| 8 | Busca por código, nome, categoria, característica e aplicação | Busca funcional nos dados indexados | **Parcial na cobertura:** `specs: []` do DG 1066 impede encontrá-lo por sua potência/produção, embora os valores estejam na ficha. |
| 9 | WhatsApp/orçamento claro; nome/código automáticos se possível | Mensagem específica nas 42 páginas, CTA fixo e formulário | Atendido. Teste não enviou mensagens reais. |
| 10 | Serra-Fita, metros no nome, mm na ficha | Padrão aplicado ao conteúdo comercial | Atendido no conteúdo revisado; títulos originais de vídeos preservam a grafia da fonte. |
| 11 | Posicionar como fabricante profissional | Fabricação, aplicação profissional e atendimento nos textos | Atendido. |
| 12 | Desktop/notebook/tablet/celular; menu/cards/imagens/CTAs/filtros/formulário | Testes em 320, 390, 768, 1024, 1280, 1366 e 1920 px, conforme suítes registradas | Aprovado no Chromium testado; não equivale a todos os dispositivos físicos/navegadores. |
| 13 | Testar filtros, busca, WhatsApp, páginas, relacionados e menus | Suítes de funcionalidades, conteúdo e aceitação | Funcionamento aprovado; produção sem dados reais e cobertura do DG 1066 ainda parcial. |
| 14 | Revisar escrita, fotos, dados, códigos e contatos antes de publicar | Auditorias, checagem de links e correções documentadas | **Ainda aberta:** esta conferência identificou a omissão comercial do DG 1066 e fotos não conciliadas. |
| 15 | Caminho home → catálogo → categoria → produto → orçamento | Completo em seis famílias com modelos, inclusive lâminas | Parcial em Fornos/Ensacadeiras, que encerram em consulta comercial. Falta definir/cadastrar modelos se o mesmo fluxo individual deve abranger essas famílias. |

## PowerPoint — comparação slide por slide

| Slide | Pedido | Feito | Falta / situação |
| --- | --- | --- | --- |
| 1 | Sem instrução de alteração | — | Não é pendência. |
| 2 | Separador da primeira página | — | Não é pendência. |
| 3 | Unificar institucional, remover títulos Missão/Visão/Valores, trocar duas imagens; 01/001 se houver | Bloco unificado e duas fotos substituídas | Identificar 01/001 e confirmar se são as imagens finais. A referência é condicional. |
| 4 | Resumo da história + Saiba mais + página com detalhes | Resumo, link e página institucional | Página ainda breve; ampliar a história com fatos reais. Não há exigência literal de cronologia datada. |
| 5 | Contatos fora do topo, redes à esquerda, bandeiras à direita, tradução se possível, WhatsApp verde fixo | Estrutura entregue, quatro redes também no celular e tradução externa | Tradução de todo o site no domínio público não homologada; alternativa externa implementada, não tradução editorial própria. |
| 6 | Simplificar/reorganizar rodapé | Rodapé reduzido com navegação e contatos | Atendido. |
| 7 | Menu Serra-Fita sem sublista de tamanhos | Família leva à página com filtros | Atendido. |
| 8 | Remover imagem grande e botões, centralizar círculos, trocar/centralizar título e texto | Alterações presentes em `produtos.html` | Atendido. |
| 9 | Separador de filtros | — | Não é pendência. |
| 10 | Remover apresentação antiga; três filtros no topo; cards abaixo; faixas de produção/aplicação | Layout, tamanho/configuração, contador e limpeza entregues | **Produção inativa.** Ao classificar, completar a orientação de aplicações do slide, incluindo segmentos citados, sem inferir quais modelos atendem cada faixa. |
| 11 | Misturadores sem filtros, capacidade e motor em destaque | Cards 7 kg/1⁄3 CV, 7 kg/1⁄2 CV e 25 kg/3⁄4 CV | Atendido. |
| 12 | Moedores sem filtros; destacar código, boca e motor | Filtros removidos e boca/código presentes | **Não integral:** falta motor no card DG 1066; 1,25 CV já consta na ficha e no catálogo. |
| 13 | Panelas sem filtros, código/10 L/acabamento | Implementado; diamantada DG 1068 | Atendido com correção do código incorreto DG 1088 do exemplo do slide, conforme catálogo. |
| 14 | Raladores com código e potência | DG 1070 1/3 CV e DG 1071 1/2 CV destacados | Atendido. |
| 15 | Aplicar exemplo de produto a todos | Páginas padronizadas | Estrutura entregue; exceções de conteúdo descritas acima. |
| 16 | Produto mais interativo, usando referência visual | Galeria, ampliação, navegação e apresentação comercial | Interação entregue; não foi pedida cópia literal do site de referência. |
| 17 — galeria | Adicionar todas as fotos e permitir alternar ângulos | Controles implementados e fotos vinculadas | **Falta conciliar/incluir todo o acervo pertinente**, inclusive seis fotos locais de panelas; não basta dizer que faltam arquivos externos. |
| 17 — ambientadas | Foto ambientada por produto, existente no Drive | Suporte de código, posição na coluna | **Zero imagens ambientadas vinculadas.** Obter acesso/localização e associar por modelo. |
| 17 — composição | Fotos na vertical; tentar título em uma linha | Mídia em coluna; títulos com quebra natural | Composição completa depende da ambientada; uma linha é tentativa/sugestão, não obrigação de reduzir legibilidade. |
| 17 — vídeo | YouTube abaixo das fotos | Nove modelos específicos + seis variantes com vídeo da linha; categorias com demonstrações | Cobertura parcial: outros produtos sem vídeo identificado. Não implica obrigação de produzir vídeos novos. |
| 17 — informações | Informações em uma coluna; remover bloco redundante | Estrutura em coluna e bloco removido | Fichas DG 1047–1049 incompletas. |
| 18 | Separador de representantes | — | Não é pendência. |
| 19 | Retirar redundâncias, horário no cartão da fábrica, fábrica no fim e fora dos representantes, estados/mapa, botão direto | Alterações estruturais feitas, incluindo mapa opcional | **Pedido de alteração atendido.** Cadastro real vazio é dependência operacional; o slide não forneceu nem exigiu cadastrar uma lista nova de representantes. |
| 20 | Novidades e Contato somente com conteúdo | Novidades fora do menu, Contato com informações/formulário | Atendido. Não há obrigação de criar notícias. |

## Evidências novas e concretas

### 1. DG 1066 — falta implementação com dados já disponíveis

- `categoria-moedores-carne.html:81`: nome não inclui motor; linha 82 tem `card-specs` vazio.
- `produtos/dg-1066.html:88`: resumo de características vazio.
- `assets/catalog-data.json`: o registro DG 1066 tem `specs: []`; a busca indexa esse campo, não a tabela HTML da página.
- A ficha do mesmo produto informa **1,25 CV** e **200 a 300 kg por hora**. O catálogo atualizado, página 6, confirma os dados.

Falta transportar esses dados para card, resumo e índice de busca, e testar explicitamente essa cobertura. Não depende de nova informação do cliente. Isso atende Word 4.1/4.3/5.1/8 e PPT 12.

### 2. Fotos de panelas — há trabalho sobre arquivos já locais

Seis arquivos `assets/images/catalog-vitrine/dg-*-drive.png` não constam das galerias das panelas. A inspeção visual mostra imagens diferentes das atualmente usadas (panela sem conteúdo, outro enquadramento/apresentação).

| Arquivo local | Cor visível | Correspondência pelo catálogo |
| --- | --- | --- |
| `dg-1068-drive.png` | Diamantada | Candidata DG 1068 |
| `dg-1082-drive.png` | Azul | Candidata DG 1086; nome de arquivo divergente |
| `dg-1083-drive.png` | Preta | Candidata DG 1083 |
| `dg-1084-drive.png` | Rosa | Candidata DG 1082; nome de arquivo divergente |
| `dg-1085-drive.png` | Vermelha | Candidata DG 1085 |
| `dg-1086-drive.png` | Laranja | Candidata DG 1084; nome de arquivo divergente |

Não incluir cegamente pelo nome. Falta conferir correspondência/versão e integrar as fotos pertinentes ou registrar uma justificativa de exclusão. Isso é parte do pedido de todas as fotos, PPT 17, e Word 5.2. Não significa que essas seis sejam fotos ambientadas: são fotos de produto.

## Lista final do que falta em relação ao pedido

### Trabalho ainda necessário com o material disponível

- [ ] DG 1066: completar potência/produção no card, resumo e cadastro usado pela busca; verificar procura por essas características.
- [ ] Conciliar as seis fotos locais de panelas com seus modelos/cores e integrar as pertinentes às galerias, ou justificar exclusões por versão/modelo.
- [ ] Homologar a alternativa de tradução ES/EN para a navegação do site publicado (pedido condicional). Não considerar comprovada a tradução integral só pela existência dos links.

### Dependências para completar pedidos explícitos

- [ ] Classificar as 24 serras por produção, ativar o filtro e completar a orientação de aplicações do slide 10.
- [ ] Vincular foto ambientada por equipamento e conferir os demais ângulos do acervo do Drive; fornecer fotos dos DG 1047/1049, que não têm imagem.
- [ ] Completar as fichas DG 1047–1049 com dados oficiais.
- [ ] Ampliar o conteúdo histórico da página com fatos confirmados, além do resumo institucional atual.
- [ ] Identificar e incorporar vídeos próprios nos produtos restantes conforme existam no acervo. Os já identificados foram incorporados; não se exige inventar ou produzir novos vídeos.
- [ ] Confirmar as imagens 01/001 **se existirem**, como diz o slide 3.

### Limites operacionais, separados de novas exigências

- Fornos/Ensacadeiras: famílias e CTAs existem; faltam cadastros individuais para estender a elas o fluxo completo do Word 15. Os documentos não especificam quais modelos criar.
- Representantes: ajustes do slide 19 estão atendidos; diretório vazio precisa de contatos reais para ser útil. Isso não equivale a uma alteração visual esquecida nem a uma lista de cadastros fornecida e não inserida.
- DG 1100, traduções editoriais próprias, notícias novas e títulos obrigatoriamente em uma linha não devem ser apresentados como entregas obrigatórias não feitas.
- Publicação é etapa posterior, não evidência de descumprimento: o usuário pediu trabalhar em branch separada e ainda não foi realizado deploy.

**Conclusão:** não era correto responder que não restava implementação. Há pelo menos a omissão confirmada do DG 1066 e a conciliação de fotos locais a executar, além das dependências explícitas. Esta matriz substitui as afirmações anteriores sobre cobertura integral e identifica a origem de cada pendência.
