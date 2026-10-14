# Revisão final Delta Grill

Implementação na branch `final-revision`, a partir da main. Nenhum deploy ou push realizado.
Referências: Word “PROMPT DE COMANDO PARA ALTERAÇÕES NO SITE OFICIAL” e os 20 slides de “PROMPT SITE”.

## Entregas

- [x] Página inicial: apresentação institucional unificada, fotos locais substitutas, história resumida e acesso ao catálogo.
- [x] História: página própria com os fatos confirmados no catálogo, sem inventar datas ou marcos.
- [x] Navegação: famílias sem lista de modelos, menu mobile, contatos no rodapé, redes sociais à esquerda e bandeiras à direita.
- [x] Novidades retirada dos menus enquanto não há conteúdo editorial real.
- [x] Contato: página útil com telefone, e-mail, endereço e formulário que prepara mensagem no WhatsApp, sem simular envio.
- [x] Catálogo: título/texto sugeridos, círculos centralizados, retirada da imagem grande e dos dois botões da abertura.
- [x] Oito páginas de categorias, com links diretos e preservação dos antigos links por âncora.
- [x] Serra-Fita: filtros independentes de tamanho e configuração, contador, limpeza, estado vazio, URLs compartilháveis e histórico.
- [x] Produção: mecanismo implementado e testado com dados de teste, inativo no conteúdo público até classificação oficial.
- [x] Categorias menores: remoção de filtros e destaque a capacidade, boca e motor nos cards.
- [x] Busca: código com/sem espaço, nome, categoria, características e aplicação, sem diferenciar acentos.
- [x] Páginas individuais: nomes comerciais, CTA com nome/código, diferenciais, aplicações e ficha técnica em tabela.
- [x] Galerias: imagens existentes identificadas, navegação por botões, miniaturas, teclado e gesto no celular.
- [x] Produtos relacionados: links da mesma categoria, sem recomendar equipamentos inexistentes.
- [x] Recursos de mídia: suporte a foto ambientada específica e vídeo YouTube por produto, sem imagens ou vídeos genéricos apresentados como específicos.
- [x] Remoção do card redundante de informações completas e do pedido de vídeo quando não há um vídeo identificado.
- [x] Soluções: guia por seis segmentos, vinculado às famílias existentes.
- [x] WhatsApp fixo em todas as páginas; nas páginas individuais leva o nome e o código do produto.
- [x] Representantes: textos repetidos removidos, fábrica separada ao fim e horário dentro do cartão.
- [x] Mapa: estados clicáveis com malha oficial do IBGE, ligado aos filtros e acessível pelo teclado.
- [x] Idiomas: ES/EN abrem tradução automática externa do endereço público pelo Google Tradutor, identificada no título dos links e na página Idiomas. Na prévia local, os links abrem a explicação.
- [x] Revisão de nomenclatura, códigos e cores de panelas confirmadas no catálogo.
- [x] Verificação de links internos e testes desktop/mobile.

## Materiais ainda necessários

1. Classificação oficial de cada Serra-Fita em alta, média e baixa produção. O tamanho ou a potência não foram usados para inventar essa classificação. Preencher `production` com `alta`, `media` ou `baixa` em `assets/catalog-data.json`; o filtro se habilita quando houver classificações aprovadas.
2. Identificação das imagens “01” e “001” e das fotos ambientadas de cada produto. A apresentação usa fotos já existentes da Delta Grill. As galerias não exibem uma foto genérica de showroom como se fosse uma aplicação daquele modelo.
3. Links de vídeos do YouTube por modelo. O campo `video` aceita o ID do vídeo, e `ambient` aceita o caminho de uma imagem local aprovada. Hoje esses campos estão vazios; não há incorporações falsas ou quebradas.
4. Cadastro real de representantes. A base anterior continha somente a fábrica, que foi retirada da lista de representantes e mantida como contato separado. Os estados e o mapa funcionam; nenhum representante fictício foi criado.
5. Cronologia detalhada da empresa, caso desejada. A página atual usa os fatos institucionais disponíveis: Caxias do Sul, mais de 20 anos, fabricação, desenvolvimento e testes.
6. Traduções editoriais revisadas, caso se deseje substituir o serviço externo por páginas próprias em espanhol e inglês.

## Conferência técnica

Fonte: `downloads/Delta_Grill_Catalogo_Atualizado.pdf`.

- DG 1068 é a panela diamantada. DG 1088 é a Serra-Fita Semi-inox 1/4 CV, 1,46 m.
- Cores do catálogo: DG 1082 rosa, DG 1083 preta, DG 1084 laranja, DG 1085 vermelha e DG 1086 azul. Textos e imagens foram alinhados a essa tabela.
- Há modelos no site cuja ficha detalhada não está no catálogo disponível. Os dados existentes foram preservados e os campos ausentes continuam sob consulta, sem inventar especificações.
- Padronização comercial: Serra-Fita, metros com espaço, milímetros na ficha técnica; Panelas Misturadoras; Ensacadeiras.

## Validação

- `python3 tests/check-links.py`: 57 páginas, nenhum arquivo local ou destino de âncora ausente, nenhum ID duplicado.
- `tests/site-smoke.cjs`: 57 páginas a 390 e 1366 px; páginas representativas também a 320, 768 e 1920 px, sem rolagem horizontal.
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
