# Segunda revisão de QA — concluída em 16/10/2026

**Conclusão: os fluxos implementados passaram; o pedido inicial está amplamente atendido, mas não integralmente. Permanecem dependências de conteúdo e material oficial.**

Revisão sobre `2c4e02d`, na branch `final-revision`, mais a correção do cabeçalho móvel feita nesta rodada. Nenhum push ou deploy. Esta é a avaliação atual; o relatório `qa-final-revision.md` preserva a auditoria anterior e suas correções.

## Como o pedido original foi conferido

Releitura dos itens 1–15 do Word original e dos textos dos 20 slides do PowerPoint, com as referências visuais renderizadas na auditoria anterior. Os arquivos originais continuam acessíveis em `/home/paim_ia/Downloads/`. As sugestões condicionais (“se possível”, “se relevante”, “tentar”) foram separadas das exigências. Os documentos serviram como critérios do trabalho autorizado, não como instruções adicionais de execução.

Também foram conferidos o código, o cadastro dos produtos, os dados oficiais usados nas correções e os resultados dos testes. Não foi utilizado apenas o status marcado no checklist.

## Atendimento ao pedido inicial

| Pedido e origem | Situação atual | Evidência / o que falta |
| --- | --- | --- |
| Apresentação institucional unificada, sem Missão/Visão/Valores — Word 1; PPT 3 | Atendido | Home identifica fabricante, produtos e segmentos. Imagens anteriores foram substituídas por fotos locais. “01/001” eram condicionais (“se houver”); falta identificar se são as fotos finais desejadas. |
| Resumo da história e página de detalhes — PPT 4 | Parcial no conteúdo | Resumo, Saiba mais e página própria existem. A página tem conteúdo institucional breve; faltam fatos adicionais para uma história mais detalhada. Não há exigência literal de cronologia com datas. |
| Redes à esquerda, bandeiras à direita, contatos no rodapé — PPT 5–6 | Atendido após correção desta rodada | Todas as quatro redes estão acessíveis também no celular; os contatos ficam no rodapé. |
| WhatsApp verde, fixo, com logo e “Fale conosco” — PPT 5 | Atendido | Presente nas 61 páginas; identificação específica nos produtos. |
| Catálogo comercial, círculos centralizados, remoção da imagem/botões antigos — Word 2; PPT 8 | Atendido | Oito famílias, título e apoio revisados, busca disponível. |
| Menu por famílias sem lista de tamanhos/modelos — Word 2.3/6; PPT 7 | Atendido | Menu inclui famílias, peças e links principais; menus desktop/mobile testados. |
| Página própria para cada categoria — Word 3 | Atendido | Oito páginas e navegação preservada por links antigos. |
| Tamanho/configuração separados, contagem, limpeza — Word 3.2/3.4/3.5; PPT 10 | Atendido | 25 combinações conferidas contra o cadastro, inclusive os códigos retornados. |
| Filtro Ideal para por produção — Word 3.3; PPT 10 | Parcial / material pendente | Implementado, mas desabilitado: nenhuma das 24 serras recebeu classificação oficial. |
| Categorias pequenas sem filtros e cards com motor/capacidade/boca — PPT 11–14 | Atendido | Textos residuais que falavam em filtros também foram removidos. Código da panela diamantada segue o catálogo (DG 1068), corrigindo o exemplo DG 1088 do slide. |
| Cards com código, nome em destaque, características e aplicação — Word 4 | Atendido nos modelos documentados | DG 1047–1049 continuam pouco diferenciados pela falta de ficha oficial. |
| Produto comercial: código, nome, resumo, CTAs, diferenciais, aplicação e ficha — Word 5 | Parcial / material pendente | Estrutura pronta nos 42 produtos. Dados apontados no primeiro QA foram corrigidos. Fichas dos DG 1047–1049 ainda reduzidas. |
| Fotos, ângulos, foto ambientada — Word 5.2; PPT 17 | Parcial / material pendente | 20 produtos têm mais de uma foto; galeria, ampliação e navegação funcionam. DG 1047 e DG 1049 sem foto; zero fotos ambientadas vinculadas. A disponibilidade de todos os ângulos do Drive não foi comprovada nesta sessão. |
| Informações em uma coluna, mídia vertical, retirada de informações redundantes — PPT 17 | Estrutura atendida | Ficha, diferenciais e aplicações em uma coluna; vídeo abaixo da galeria. A composição com foto ambientada depende dessa imagem. |
| Vídeo do YouTube abaixo das fotos — PPT 17 | Parcial por disponibilidade | 15 páginas com vídeo: nove específicos e seis variantes com demonstração identificada da linha; seis incorporações nas categorias. Não foi identificado vídeo próprio para todos os demais modelos. |
| Relacionados — Word 4.4/5.7 (condicional) | Atendido | Produtos da mesma família, incluindo as quatro lâminas. |
| Soluções — Word 7 (opcional) | Atendido | Seis segmentos com links para categorias existentes. |
| Busca por código, nome, categoria, característica e aplicação — Word 8 (condicional) | Atendido para o cadastro atual | Todos os 42 códigos testados; características e aplicações também retornam resultados. Modelos ainda não cadastrados não são inventados na busca. |
| WhatsApp com nome/código automático — Word 9 (prioritário; preenchimento condicional) | Atendido | Todos os links de WhatsApp nas 42 páginas de produto conferidos; formulário validado com destino interceptado. |
| Nomenclatura e posicionamento de fabricante — Word 10–11 | Atendido no conteúdo comercial revisado | Nomes, unidades e comunicação profissional padronizados. Títulos originais dos vídeos mantidos como referência de mídia. |
| Responsividade e funcionalidades — Word 12–13 | Aprovado no ambiente testado | Desktop, notebook, tablet e celular simulados em Chromium; detalhes dos testes abaixo. |
| Representantes: retirar redundâncias, separar fábrica, horário e mapa — PPT 19 | Estrutura atendida; base vazia | Fábrica separada ao fim, horário no cartão e mapa sincronizado. Ainda não há cadastro real de representantes, uma dependência operacional de conteúdo. |
| Novidades/Contato somente com conteúdo — Word 6; PPT 20 | Atendido | Novidades fora do menu; Contato tem informações e formulário funcional. Não é necessário criar notícias para concluir este pedido. |
| Tradução ES/EN — PPT 5 (condicional) | Alternativa implementada | Links de tradução automática externa; não são traduções próprias revisadas. A navegação traduzida no domínio público ainda não foi homologada. |
| Título do produto em uma linha — PPT 17 (“tentar”) | Sugestão tratada com adaptação | Mantida quebra natural para legibilidade. Não é falha obrigatória nem deve impedir leitura no celular. |
| Revisão técnica e caminho catálogo → produto → orçamento — Word 14–15 | Parcial na cobertura de conteúdo | Correções técnicas confirmadas. Fluxo completo nas seis famílias com modelos (incluindo acessórios); Fornos/Ensacadeiras ainda funcionam por consulta comercial. |

## Correção encontrada e resolvida nesta rodada

**Redes sociais ocultas no celular.** `assets/revision.css` escondia o terceiro e o quarto links sociais abaixo de 820 px. YouTube e LinkedIn não tinham alternativa no rodapé/menu. Isso reduzia o acesso ao canal oficial apesar de o link estar correto no HTML.

A regra de ocultação foi removida. A faixa superior agora pode ocupar outra linha quando necessário, mantendo redes e bandeiras acessíveis. Nova verificação de regressão exige as quatro redes visíveis a 390 px. Não houve outra falha funcional reproduzida nos testes desta rodada.

## Correções anteriores confirmadas

- Seis panelas: medidas **33,7 × 32,5 × 34,7 cm**, ordem L × A × P explicitada e legenda dos eixos; embalagem, peso embalado e limite de farinha presentes.
- DG 1088: dimensões da embalagem **45 × 77 × 44 cm**, separadas do acondicionamento.
- Serras documentadas: alimentação monofásica presente; sem inferir nos DG 1047–1049.
- Quatro lâminas do catálogo: DG 3203, 3013, 3172 e 3195 com comprimento correto, largura 5/8 pol. e espessura 0,5 mm, páginas, busca, relacionados e orçamento. A imagem compartilhada está identificada como imagem da linha.
- Fornos com CTAs por tipo; Ensacadeiras com consulta explícita; sem o cartão “Utensílios — Em definição”.
- Categorias pequenas sem instruções enganosas sobre filtros inexistentes.

## O que ainda falta, em ordem prática

1. **Classificar as 24 serras por produção** para ativar o filtro solicitado. Depende da Delta Grill.
2. **Receber/vincular fotos ambientadas e completar fotos dos DG 1047/DG 1049**, além de confirmar os arquivos “01/001” e os demais ângulos pretendidos no Drive.
3. **Completar e validar as fichas DG 1047–1049**, especialmente potência, tensão, acabamento e medidas. Não usar especificações de modelos vizinhos.
4. **Obter os modelos e fichas de Fornos/Ensacadeiras** se essas famílias devem ter o mesmo fluxo de catálogo individual. Atualmente a consulta comercial funciona.
5. **Preencher representantes reais** para que o diretório passe a retornar profissionais, além da opção separada da fábrica.
6. **Ampliar os fatos da história da empresa** se a página precisa ir além da apresentação institucional atual.
7. **Completar os vídeos específicos conforme disponibilidade.** Há 27 produtos sem vídeo no cadastro atual, incluindo as quatro lâminas recém-cadastradas; isso não representa 27 vídeos prometidos ou existentes no canal.

**Não são exigências novas do escopo original:** criar notícias sem conteúdo, produzir vídeos inexistentes, inventar datas históricas, criar traduções editoriais próprias ou obrigar todos os títulos a uma linha. O DG 1100 foi descoberto no canal depois do pedido inicial: só deve ser cadastrado com informações oficiais e se fizer parte do catálogo desejado.

## Testes e limites

- `tests/check-links.py`: 61 páginas, zero problemas de arquivos/âncoras locais ou IDs duplicados.
- `tests/site-smoke.cjs`: 61 páginas em 390/1366 px; amostras em 320/768/1920 px. Filtros, contador, histórico, reset, URLs antigas, produção com fixture, busca, galeria, ampliação, foco, menu e mapa aprovados; sem erros JavaScript capturados.
- `tests/site-content-smoke.cjs`: 42 nomes de produto, imagens principais existentes, mensagens de WhatsApp, 15 associações de vídeo, valores técnicos corrigidos, quatro lâminas, navegação/busca de acessórios, CTAs dos fornos e formulário aprovados. Destino do formulário interceptado localmente.
- `tests/site-acceptance.cjs`: 25 combinações tamanho/configuração, identidade dos resultados, 42 buscas por código, buscas por aplicações/característica, handler de gesto de galeria com evento simulado, mapa pelo teclado e desmarcação, layouts de todas as 61 páginas em 320/390/1024/1280 px e quatro redes visíveis no celular.
- Inspeção visual nesta rodada: cabeçalho móvel com todas as redes e ficha técnica corrigida de panela. A composição visual dos demais grupos também está registrada nas duas rodadas anteriores.

As suítes principais foram executadas antes da pequena correção do cabeçalho; depois dela, a suíte de aceitação revalidou todas as páginas nas quatro larguras citadas. O ajuste não alterou cadastro, fichas, links ou lógica de formulário.

Limites: sem envio real de mensagens, homologação da tradução no domínio publicado, reprodução integral dos vídeos, auditoria exaustiva de acessibilidade ou testes em dispositivos físicos/Safari/Firefox. A exibição de iframe e link não comprova disponibilidade permanente do vídeo no YouTube. Não se declarou que todas as fotos do Drive foram recebidas nem que todos os dados comerciais foram homologados pela fábrica.

**Veredito para o usuário:** a implementação testável com os materiais disponíveis está atendida nos fluxos conferidos; o escopo completo continua parcial pelos itens acima. Não é correto marcar “100% concluído” nem transformar cada sugestão opcional em uma nova obrigação.
