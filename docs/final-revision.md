# Revisão final Delta Grill

Implementação na branch `final-revision`, a partir da main. Nenhum deploy ou push realizado.
Referências: Word “PROMPT DE COMANDO PARA ALTERAÇÕES NO SITE OFICIAL” e os 20 slides de “PROMPT SITE”.

## Entregas e status após QA

Auditoria em 15/10/2026: **funcionalidades testadas aprovadas, escopo ainda parcial**. Ver a [segunda revisão de QA](qa-segunda-revisao.md), concluída em 16/10/2026, e o [histórico da primeira revisão](qa-final-revision.md). Componentes implementados não significam conteúdo concluído.

- [ ] Página inicial (parcial — fotos definitivas pendentes): apresentação institucional unificada, fotos locais substitutas, história resumida e acesso ao catálogo.
- [ ] História (parcial — conteúdo detalhado pendente): página própria com os fatos confirmados no catálogo, sem inventar datas ou marcos.
- [x] Navegação: famílias sem lista de modelos, menu mobile, contatos no rodapé, redes sociais à esquerda e bandeiras à direita.
- [x] Novidades retirada dos menus enquanto não há conteúdo editorial real.
- [x] Contato: página útil com telefone, e-mail, endereço e formulário que prepara mensagem no WhatsApp, sem simular envio.
- [x] Catálogo: título/texto sugeridos, círculos centralizados, retirada da imagem grande e dos dois botões da abertura.
- [x] Oito páginas de categorias, com links diretos e preservação dos antigos links por âncora.
- [x] Serra-Fita: filtros independentes de tamanho e configuração, contador, limpeza, estado vazio, URLs compartilháveis e histórico.
- [ ] Produção (parcial — falta classificação real): mecanismo implementado e testado com dados de teste, inativo no conteúdo público até classificação oficial.
- [x] Categorias menores: remoção de filtros e destaque a capacidade, boca e motor nos cards.
- [x] Busca: código com/sem espaço, nome, categoria, características e aplicação, sem diferenciar acentos.
- [ ] Páginas individuais (parcial — fichas corrigidas; QA-03 ainda depende de material): nomes comerciais, CTA com nome/código, diferenciais, aplicações e ficha técnica em tabela.
- [ ] Galerias (parcial — DG 1047/DG 1049 sem foto, ambientadas pendentes): imagens existentes identificadas, navegação por botões, miniaturas, teclado e gesto no celular.
- [x] Produtos relacionados: links da mesma categoria, sem recomendar equipamentos inexistentes.
- [ ] Recursos de mídia (parcial — suporte pronto, cobertura incompleta): suporte a foto ambientada específica e vídeo YouTube por produto, sem imagens ou vídeos genéricos apresentados como específicos.
- [x] Remoção do card redundante de informações completas e do pedido de vídeo quando não há um vídeo identificado.
- [x] Soluções: guia por seis segmentos, vinculado às famílias existentes.
- [x] WhatsApp fixo em todas as páginas; nas páginas individuais leva o nome e o código do produto.
- [x] Representantes: textos repetidos removidos, fábrica separada ao fim e horário dentro do cartão.
- [x] Mapa: estados clicáveis com malha oficial do IBGE, ligado aos filtros e acessível pelo teclado.
- [x] Idiomas: ES/EN abrem tradução automática externa do endereço público pelo Google Tradutor, identificada no título dos links e na página Idiomas. Na prévia local, os links abrem a explicação.
- [x] Nomenclatura, códigos e cores de panelas conferidos; QA-01/QA-02 corrigidos; fichas sem fonte oficial continuam pendentes.
- [x] Verificação de links internos e testes desktop/mobile.

## Correções e cobertura ainda abertas

- [x] Padronizar ordem/eixos das dimensões das seis panelas conforme catálogo (QA-01), com legenda de largura/altura/profundidade e distinção para medidas com moedor instalado.
- [x] Incluir dados já disponíveis que faltavam nas fichas: embalagem DG 1088, alimentação monofásica das serras documentadas e embalagem/peso/limite de farinha das panelas (QA-02).
- [x] Completar Acessórios com as quatro lâminas do catálogo (DG 3203, 3013, 3172 e 3195), incluindo páginas, busca, ficha e orçamento.
- [x] Delimitar Fornos e Ensacadeiras como consulta à fábrica, com chamadas comerciais específicas (QA-05).
- [ ] Cadastrar modelos de Fornos e Ensacadeiras quando houver fichas/fotos oficiais disponíveis.
- [ ] Completar o cadastro de representantes; os ajustes visuais e o mapa estão prontos, a base está vazia.

## Materiais ainda necessários

1. Classificação oficial de cada Serra-Fita em alta, média e baixa produção. O tamanho ou a potência não foram usados para inventar essa classificação. Preencher `production` com `alta`, `media` ou `baixa` em `assets/catalog-data.json`; o filtro se habilita quando houver classificações aprovadas.
2. Identificação das imagens “01” e “001” e das fotos ambientadas de cada produto. A apresentação usa fotos já existentes da Delta Grill. As galerias não exibem uma foto genérica de showroom como se fosse uma aplicação daquele modelo.
3. Vídeos dos modelos ainda sem correspondência no canal. Já foram incorporados nove vídeos específicos, a demonstração da panela de 10 L nas seis variantes e seis demonstrações nas categorias. A relação completa está em [vídeos oficiais](videos-oficiais.md). O DG 1100 aparece no canal, mas ainda depende de cadastro e ficha técnica. O campo `ambient` continua aguardando fotos aprovadas.
4. Cadastro real de representantes. A base anterior continha somente a fábrica, que foi retirada da lista de representantes e mantida como contato separado. Os estados e o mapa funcionam; nenhum representante fictício foi criado.
5. Cronologia detalhada da empresa, caso desejada. A página atual usa os fatos institucionais disponíveis: Caxias do Sul, mais de 20 anos, fabricação, desenvolvimento e testes.
6. Traduções editoriais revisadas, caso se deseje substituir o serviço externo por páginas próprias em espanhol e inglês.

## Conferência técnica

Fonte: `downloads/Delta_Grill_Catalogo_Atualizado.pdf`.

- DG 1068 é a panela diamantada. DG 1088 é a Serra-Fita Semi-inox 1/4 CV, 1,46 m.
- Cores do catálogo: DG 1082 rosa, DG 1083 preta, DG 1084 laranja, DG 1085 vermelha e DG 1086 azul. Textos e imagens foram alinhados a essa tabela.
- Há modelos no site cuja ficha detalhada não está no catálogo disponível. Os dados existentes foram preservados e os campos ausentes continuam sob consulta, sem inventar especificações.
- Padronização comercial: Serra-Fita, metros com espaço, milímetros na ficha técnica; Panelas Misturadoras; Ensacadeiras.

## Validação atual

- `python3 tests/check-links.py`: 61 páginas, nenhum arquivo local ou destino de âncora ausente, nenhum ID duplicado.
- `tests/site-smoke.cjs`: 61 páginas a 390 e 1366 px; páginas representativas também a 320, 768 e 1920 px, sem rolagem horizontal.
- Filtros: combinação, contador, zero resultados, limpeza, recarregamento, voltar e links antigos. Produção testada com fixture separada dos dados publicados.
- Busca: código, tamanho, nome, nenhum resultado e entrada semelhante a HTML tratada como texto.
- Galeria, relacionados e nome/código na mensagem de orçamento.
- Mapa e lista de estados sincronizados; fábrica fora dos representantes.
- Menu e filtros mobile, sem erros JavaScript durante os testes.
- Inspeção visual de início, catálogo, produto e representantes em desktop; início, categoria e produto em celular.
- O envio real pelo WhatsApp e a tradução externa dependem dos respectivos serviços e não foram acionados para enviar mensagens.

Para repetir: servir a raiz por HTTP e executar `node tests/site-smoke.cjs`, com Playwright instalado. `PLAYWRIGHT_MODULE`, `CHROME_PATH` e `SITE_URL` permitem indicar o runtime e navegador disponíveis. `SKIP_LAYOUTS=1` executa apenas os testes funcionais e os tamanhos representativos.

## Fontes visuais

- Bandeira RS: https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Rio_Grande_do_Sul.svg (símbolo oficial, Wikimedia Commons).
- Mapa de estados: https://servicodados.ibge.gov.br/api/docs/malhas?versao=3, país BR, intrarregião UF, qualidade mínima.
- Fotos: arquivos já presentes em `assets/images/`.

## Continuação da revisão

- Fotos agora abrem em visualização ampliada, com navegação, fechamento por Escape e retorno do foco ao botão de origem. A rolagem da página é bloqueada somente enquanto a foto está aberta.
- Busca reconhece plurais e variantes como “serras 1,46m”, “serra 1460mm” e “panela mexedora”, mantendo a consulta por código, potência e aplicação.
- Fichas técnicas receberam garantia, tipo de alimentação e detalhes de tensão já existentes. Medidas repetidas foram retiradas dos diferenciais, sem alterar seus valores; lâmina não aparece novamente como fita estendida quando ambas representam a mesma medida.
- Novo teste cobre abertura da foto, navegação pelo teclado, Escape e restauração do foco. Inspeção visual da ampliação concluída a 1366 e 390 px.
- Testes funcionais e layouts representativos a 320, 768 e 1920 px passaram após esses ajustes; verificação de links continua com 57 páginas e zero problemas.
- As dependências de materiais oficiais listadas acima permanecem abertas.

## Vídeos do canal oficial

- Canal fornecido pelo usuário: https://www.youtube.com/@DeltaGrill.
- 16 vídeos conferidos; 15 utilizados, com correspondência e pendência documentadas em [vídeos oficiais](videos-oficiais.md).
- Vídeos de linha identificados explicitamente; links diretos disponíveis, inclusive sem JavaScript nas páginas de produto.
- Links sociais corrigidos em todas as páginas.
- Validação deste lote: correspondência dos nove códigos com os títulos oficiais e das seis variantes com a linha de panelas; 57 páginas sem problemas de links; sintaxe JavaScript e diff sem erros.
- Prévia no navegador: player e miniatura carregados no DG 1027 em desktop e DG 1068 a 390 px; categorias de serras e panelas com duas e quatro incorporações respectivamente, sem rolagem horizontal no celular. Reprodução integral dos vídeos não foi testada.

## Correções após o QA — 15/10/2026

- Dimensões das panelas alinhadas à ordem L × A × P do catálogo; tabelas com legenda dos eixos.
- Fichas completadas com os dados oficiais disponíveis, sem preencher especificações ausentes por inferência.
- DG 1047–1049: retirada a afirmação de mesa em inox sem confirmação na fonte disponível e incluída orientação para confirmar características pelo código. Fotos/fichas continuam pendentes.
- Quatro lâminas cadastradas a partir da página 29 do catálogo: 42 produtos em 61 páginas HTML. A imagem extraída do PDF é identificada como imagem da linha, sem afirmar que mostra cada comprimento específico.
- Fornos e Ensacadeiras com orientação de consulta e chamadas específicas; removido o cartão “Utensílios — Em definição”.
- Corrigidas mensagens que ainda falavam em filtros nas quatro categorias onde eles foram removidos.
- Títulos mantêm quebra natural quando necessário para preservar legibilidade, inclusive em celular; a sugestão de uma linha não foi aplicada como regra rígida.

- Revalidação após correções: 61 páginas sem problemas de links; testes de desktop/mobile, conteúdo dos 42 produtos, medidas, novos acessórios e CTAs dos fornos aprovados. Nenhum erro JavaScript no teste principal.
- Conferência visual das correções concluída em desktop e celular: categoria Acessórios, nova página de lâmina, tabela de panela e cartões de consulta dos fornos.

## Segunda revisão de QA — 16/10/2026

- Pedidos obrigatórios e sugestões condicionais distinguidos no [relatório atual](qa-segunda-revisao.md).
- Corrigida a ocultação de YouTube/LinkedIn no celular; a faixa superior se adapta sem remover redes.
- Testes adicionais: 25 combinações de filtros, 42 códigos na busca, aplicações/características, gesto simulado de galeria, mapa por teclado e 61 páginas em 320/390/1024/1280 px. Todos aprovados.
- Dependências de conteúdo permanecem abertas; não há declaração de conclusão integral.
