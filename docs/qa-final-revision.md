# QA da revisão final — 15/10/2026

> Atualização de 16/10/2026: ver [matriz pedido × feito × falta](pedido-feito-falta.md). A nova conferência identificou lacunas no DG 1066 e fotos locais não conciliadas; as afirmações anteriores de ausência de pendências de implementação não devem ser usadas como conclusão atual.

**Resultado após correções: QA-01 e QA-02 resolvidos; fluxos e regressões aprovados. As pendências que dependem de material continuam abertas.**

Branch: `final-revision`. A auditoria original abaixo descreve o código `af08d84`; suas constatações foram preservadas como histórico. Correções técnicas registradas em `bf67ba6`; o lote seguinte completa acessórios, consultas comerciais e testes. Nenhum push/deploy realizado.

## Estado atual após os ajustes autorizados

| Achado | Estado atual |
| --- | --- |
| QA-01 | Resolvido: dimensões das seis panelas na ordem do catálogo, com eixos e legenda; dimensões com moedor identificadas separadamente. |
| QA-02 | Resolvido para os dados apontados: embalagem DG 1088, alimentação monofásica nas serras documentadas e informações comuns às seis panelas. |
| QA-03 | Parcial: removida afirmação de mesa em inox sem fonte disponível nos DG 1047–1049 e incluída orientação para confirmar características por código; fichas/fotos oficiais ainda necessárias. |
| QA-04 | Pendente: classificação de produção, fotos ambientadas/01/001 e cadastro de representantes dependem de material. |
| QA-05 | Acessórios resolvido com quatro lâminas oficiais, fichas, imagens da linha identificadas, busca, relacionados e orçamento. Fornos/Ensacadeiras delimitados como consulta, com CTAs específicos; modelos individuais dependem de dados. |
| QA-06 | Mantidas alternativas e limites documentados; não foram inventados vídeos, marcos históricos nem traduções revisadas. |
| QA-07 | Mantida quebra natural de títulos para preservar a leitura em cada largura. Foto ambientada permanece pendente; vídeo abaixo da galeria quando disponível. |

Também foram corrigidas as instruções antigas que pediam para filtrar misturadores, moedores, raladores e panelas apesar da remoção dos filtros.

**Revalidação:** 61 páginas em 390/1366 px; layouts representativos em 320/768/1920 px; filtros, busca, galeria, menu, mapa e ausência de erros JavaScript aprovados. Os 42 produtos passaram nas verificações de nomes, imagens existentes, WhatsApp e 15 associações de vídeo. As medidas corrigidas e as quatro lâminas têm verificações de regressão contra os dados do catálogo. Navegação e busca de acessórios, CTAs dos fornos e formulário com requisição externa interceptada também passaram. Links locais: 61 páginas, zero problemas.

As matrizes e contagens nas seções abaixo são o **registro da auditoria inicial**, não o status atualizado. Para pendências atuais, usar esta tabela e o [checklist atualizado](final-revision.md).

## Fontes e método

- Word original: `/home/paim_ia/Downloads/PROMPT DE COMANDO PARA ALTERAÇÕES NO SITE OFICIAL.docx`, itens 1–15.
- PowerPoint original: `/home/paim_ia/Downloads/PROMPT SITE.pptx`, 20 slides; texto extraído e slides renderizados para conferir as setas e referências visuais.
- Catálogo oficial local: `downloads/Delta_Grill_Catalogo_Atualizado.pdf`, texto e conferência visual da página 4.
- HTML, CSS, JavaScript e `assets/catalog-data.json`; execução local em Chromium, com testes funcionais e inspeção de capturas desktop/mobile.
- Os documentos foram usados como critérios de aceitação solicitados pelo usuário. Sugestões condicionais foram diferenciadas de exigências, e o exemplo incorreto DG 1088/panela foi confrontado com o catálogo.

## Achados que impedem marcar tudo como concluído

### QA-01 — Ordem das dimensões das panelas não corresponde à referência (prioridade alta)

O catálogo, página 4, informa **L × A × P = 33,7 × 32,5 × 34,7 cm**. As seis páginas de panelas exibem **32,5 × 34,7 × 33,7 cm**, sem informar a ordem dos eixos. Em outras famílias, a sequência publicada segue L × A × P. São as mesmas três medidas, mas a ordem ambígua prejudica a identificação de largura, altura e profundidade.

Afeta DG 1068 e DG 1082–1086. Em DG 1068, também afeta a linha da embalagem. Exemplo: `produtos/dg-1068.html`, linhas 122–127.

**Ação:** padronizar os rótulos com os eixos e reproduzir a ordem confirmada. Também explicitar os eixos nas dimensões com moedor instalado, cujo catálogo usa H × L × P, diferente da tabela geral.

### QA-02 — Há dados disponíveis que ainda faltam nas fichas (prioridade média)

O Word 5.6 e o slide 17 pedem informações completas. Não é correto atribuir toda ausência à falta de material:

- DG 1088: a página 8 do catálogo traz embalagem de **45 × 77 × 44 cm**; o site mostra apenas “1 unidade por caixa de madeira” na linha Embalagem. Quantidade/material não substituem dimensões.
- DG 1024 e DG 1025: o catálogo, páginas 27 e 28, informa **Monofásica**; essa informação não aparece na tabela do site.
- DG 1043 e DG 1044: as páginas 19 e 20 informam alimentação **monofásica**, ausente na ficha do site. A informação **moedor boca 8** já está presente nos diferenciais e não é pendência.
- Nas panelas coloridas, a tabela está reduzida em relação à página comum da família no catálogo; conferir e incluir os dados aplicáveis de embalagem e limite de farinha, preservando diferenças entre variantes, se houver.

**Ação:** complementar a partir da fonte já disponível e conferir novamente todas as fichas. NCM/EAN e demais dados comerciais não foram usados como requisito obrigatório para o veredito, mas podem ser incluídos conforme a necessidade comercial.

### QA-03 — Conteúdo de alguns produtos ainda insuficiente (dependência de material)

DG 1047, DG 1048 e DG 1049 têm ficha contendo somente a lâmina de 1.800 mm e nomes comerciais iguais, sem características suficientes para comparar as variantes. DG 1047 e DG 1049 também estão sem imagem. O aviso de foto sob consulta evita uma imagem quebrada, mas não atende ao pedido de foto do equipamento.

**Ação:** obter fotos e fichas oficiais, verificar também os diferenciais já publicados desses modelos. Não inferir motor, tensão ou acabamento pelos códigos vizinhos.

### QA-04 — Recursos preparados, mas sem conteúdo real

- Produção: **0 das 24 serras classificadas**; filtro Ideal para permanece desabilitado. O código passou com uma classificação de teste, não com dados comerciais publicados.
- Fotos ambientadas: **0 dos 38 produtos** têm `ambient` preenchido. As fotos “01” e “001” continuam sem identificação; a home usa substitutas locais.
- Representantes: **nenhum representante cadastrado**. Mapa e seleção de estados funcionam, fábrica está separada, mas não há resultados comerciais reais.

**Ação:** obter os materiais e preencher as bases antes de marcar esses pedidos como entregues integralmente.

### QA-05 — Nem todas as famílias completam o caminho até um modelo

Há oito páginas de categorias, mas só cinco possuem modelos individuais: Serra-Fita (24), misturadores (3), moedores (3), panelas (6) e raladores (2), total de 38.

- Ensacadeiras: dois cartões genéricos, um de amaciadores e outro de ensacadeiras, ambos direcionados a consulta pelo WhatsApp; sem modelos/fichas.
- Fornos: cartões “Forno turbo” e “Forno esteira” sob consulta, sem página individual nem CTA específico no cartão; o WhatsApp flutuante permanece disponível.
- Acessórios: conteúdo de reposição, utensílios “Em definição” e download de catálogo, sem listagem de itens. O catálogo possui lâminas DG 3203, 3013, 3172 e 3195 (página 29), que podem ser avaliadas para cadastro.

**Ação:** decidir quais itens serão comercializados no catálogo e completar o cadastro. Até lá, descrever essas famílias como consulta comercial, não como catálogo completo de modelos.

### QA-06 — Vídeos, idiomas e história têm cobertura parcial ou alternativa

- Vídeos: 15 páginas com incorporação (9 modelos exatos e 6 variantes com demonstração da linha). Outros 23 produtos não têm vídeo próprio identificado. Há seis incorporações nas categorias. DG 1100 está no canal, mas não foi cadastrado. Isso não impede publicar os modelos completos, mas impede declarar vídeo específico em todos.
- Idiomas: ES/EN usam tradução automática externa. Não são páginas próprias traduzidas/revisadas. O slide 5 dizia “se possível”; a alternativa foi implementada, mas a qualidade e continuidade da navegação traduzida não foram homologadas em produção.
- História: há resumo e página institucional, mas sem cronologia detalhada. O slide 4 pede detalhes da história; a página existente atende parcialmente esse conteúdo. Uma cronologia com datas não é exigência literal, mas dados adicionais são necessários para ampliar a história.

### QA-07 — Ajustes visuais de baixa prioridade

O slide 17 pede tentar encaixar o título em uma linha. Na inspeção a 1366 px, por exemplo, o título da DG 1068 ocupa duas. É uma sugestão de layout, não motivo para reduzir a legibilidade ou forçar uma linha no celular. A galeria permite alternar fotos; foto ambientada e vídeo têm posição vertical prevista, mas a primeira ainda falta. Não se pode considerar a composição visual completa só pela existência do componente.

## Matriz de cobertura do Word

“Parcial” significa que existe implementação, mas falta conteúdo, validação ou correção identificada acima.

| Item | Resultado | Evidência / ressalva |
| --- | --- | --- |
| 1. Inicial | Parcial | Texto institucional unificado e segmentos; fotos definitivas não identificadas. |
| 2. Produtos/catálogo | Parcial | Título, famílias e círculos entregues; três categorias sem modelos individuais. |
| 3. Categorias/filtros | Parcial | Tamanho/configuração, contagem e limpeza funcionam; produção inativa. |
| 4. Cards e seleção | Parcial | Nome em destaque, código, características, aplicação e relacionados nos modelos cadastrados; DG 1047–1049 pouco diferenciados. |
| 5. Produto específico | Parcial | CTA, seções, galeria e ficha existem; QA-01 a QA-04 impedem conclusão integral. |
| 6. Menu/navegação | Atendido | Famílias, peças, navegação desktop/mobile; Novidades fora do menu, Contato com conteúdo. |
| 7. Soluções (opcional) | Atendido | Página com seis segmentos e links para famílias existentes. |
| 8. Busca (condicional) | Atendido para o cadastro atual | Código, nome, categoria, característica e aplicação; não encontra modelos que ainda não foram cadastrados. |
| 9. WhatsApp/orçamento | Atendido | 38 produtos com nome e código em todos os links de WhatsApp; formulário testado sem envio externo. |
| 10. Nomenclatura | Atendido no conteúdo comercial revisado | Nome comercial separado da lâmina em mm; títulos originais do YouTube preservados como nomes de mídia. |
| 11. Posicionamento | Atendido | Fabricante e aplicação profissional destacados. |
| 12. Responsividade | Aprovado no ambiente testado | 57 páginas em 390/1366 px e amostras em 320/768/1920 px; não equivale a todos os navegadores/dispositivos físicos. |
| 13. Funcionalidades | Parcial | Fluxos implementados passaram; produção e representantes sem dados reais. |
| 14. Revisão técnica/visual | Parcial | Auditoria encontrou divergências e omissões; precisa corrigir e revalidar. |
| 15. Fluxo esperado | Parcial | Completo nas cinco famílias com modelos, não em Fornos/Ensacadeiras/Acessórios. |

## Matriz de cobertura do PowerPoint

| Slides | Resultado | Conferência |
| --- | --- | --- |
| 1, 2, 9, 15, 18 | Referência/separadores | Não contêm alteração isolada a executar. |
| 3 | Parcial | Bloco institucional unificado, sem Missão/Visão/Valores; fotos substitutas. |
| 4 | Parcial | Resumo + Saiba mais + página própria; conteúdo histórico ainda breve. |
| 5 | Atendido com alternativa | Contatos no rodapé, redes à esquerda, bandeiras, WhatsApp verde fixo; tradução automática externa. |
| 6–7 | Atendido | Rodapé simplificado e menu por famílias, sem lista de tamanhos. |
| 8 | Atendido | Título/texto centralizados, círculos centralizados, imagem grande e botões antigos retirados. |
| 10 | Parcial | Filtros no topo em três colunas, cards abaixo; produção desabilitada. |
| 11–12 | Atendido | Sem filtros nas categorias de poucos itens; capacidade, boca e motor nos cards. |
| 13 | Atendido com correção da referência | Panelas sem filtros; DG 1068 diamantada conforme catálogo, em vez do DG 1088 indicado por engano no slide. |
| 14 | Atendido | Raladores com código e potência nos cards. |
| 16–17 | Parcial | Interação, informação em coluna, remoção da seção redundante e vídeos disponíveis; faltam mídias e dados, título pode quebrar linha. |
| 19 | Estrutura atendida; cadastro pendente | Textos redundantes retirados, horário no cartão da fábrica ao final, fábrica fora dos representantes, mapa interativo. |
| 20 | Atendido | Novidades retirada do menu; Contato tem página e formulário úteis. |

## Validações executadas nesta auditoria

- `python3 tests/check-links.py`: 57 páginas, zero arquivos/âncoras locais ausentes e zero IDs duplicados.
- `tests/site-smoke.cjs`: 57 páginas em 390 e 1366 px; amostra em 320, 768 e 1920 px, sem overflow horizontal, um H1 e um cabeçalho por página.
- Filtros combinados, contador, limpeza, zero resultados, recarga, voltar, links antigos e produção com fixture isolada: aprovados.
- Busca por código, tamanho, variantes de escrita, nome e consulta sem resultado; entrada HTML tratada como texto: aprovados.
- Galeria, ampliação, teclado, Escape e retorno de foco, relacionados e menu/filtros mobile: aprovados.
- Estados/mapa sincronizados e fábrica fora da lista: aprovados.
- `tests/site-content-smoke.cjs` — auditoria adicional dos 38 produtos: nomes iguais ao cadastro, identificação de produto em todos os links de WhatsApp, carregamento das imagens principais existentes e 15 associações de vídeo: aprovada.
- Formulário: campos obrigatórios e mensagem com nome/texto, incluindo `&` e acentos; requisição de destino interceptada localmente, sem enviar mensagem nem contatar o WhatsApp.
- Páginas com vídeo DG 1068, DG 1027 e categoria de panelas: sem overflow em 320/768/1920 px.
- Arquivos de imagens referidos no cadastro: todos existentes. Isso não substitui conferir visualmente todos os ângulos contra os modelos reais.
- Inspeção visual: home, catálogo, filtro Serra-Fita, produto e representantes em desktop; home e produto em celular.
- Nenhum erro JavaScript capturado pelo teste principal; `git diff --check` sem problemas antes das alterações documentais.

## Limites e recomendação

Não houve teste de envio real de WhatsApp, homologação de traduções no domínio publicado, reprodução integral de todos os vídeos, auditoria exaustiva de acessibilidade, comparação de todas as fotos com os equipamentos físicos ou testes em Safari/Firefox/dispositivos físicos. Telefones e e-mail foram verificados nos links e, quando presentes, no catálogo; não foi realizado contato para validar atendimento.

**Antes de declarar a revisão completa:** resolver QA-01 e QA-02, obter os materiais de QA-03/QA-04 e fechar a cobertura comercial de QA-05. As alternativas/limitações de QA-06 e QA-07 devem constar da revisão final do usuário. Não há falha funcional bloqueante reproduzida nos fluxos testados, mas há pendências reais de conteúdo e aderência.

Para repetir os testes de navegador, iniciar o servidor HTTP na raiz e executar `node tests/site-smoke.cjs` e `node tests/site-content-smoke.cjs`. Ambos aceitam `PLAYWRIGHT_MODULE`, `CHROME_PATH` e `SITE_URL`.

## Rastreabilidade das correções

- Fonte das medidas e limites das panelas: catálogo atualizado, página 4.
- Embalagem DG 1088: página 8. Alimentação: páginas correspondentes às serras, todas explicitando monofásica; não aplicada aos DG 1047–1049.
- Lâminas: página 29. DG 3203 = 1,46 m; DG 3013 = 1,80 m; DG 3172 = 2,20 m; DG 3195 = 2,82 m. Largura 5/8 pol. e espessura 0,5 mm nos quatro itens. Imagem extraída do PDF com sua máscara original, identificada como imagem da linha.
- Ao buscar “serra 1,46”, há agora seis resultados: cinco máquinas e a lâmina correspondente; a categoria Serra-Fita continua com 24 máquinas.
