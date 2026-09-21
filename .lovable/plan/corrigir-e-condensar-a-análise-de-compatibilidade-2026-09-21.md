# Corrigir e condensar a análise de compatibilidade

## Objetivo
Garantir que todos os procedimentos da competência vigente sejam analisados, incluindo 0304020478 e 0304020486, e tornar a consulta e o PDF mais compactos e legíveis.

## Alterações
- Corrigir a montagem da análise para cruzar a lista completa de procedimentos com vínculos onde cada código aparece como principal ou vinculado.
- Conferir automaticamente se algum procedimento da base ficou ausente e sinalizar “Sem compatibilidade” somente quando não houver vínculo em nenhuma posição.
- Substituir os vários blocos do PDF por uma tabela única, procedimento a procedimento, com código, nome, forma, compatibilidades, tipo, limite, vigência, idade, sexo e CIDs.
- Ajustar larguras, quebras de linha e margens laterais da tela e do PDF.
- Validar os dois códigos informados, a contagem total e a exibição em tela estreita.

## Detalhes técnicos
A identidade dos códigos será normalizada para 10 dígitos, evitando divergências causadas pelo zero inicial. A tabela consolidada repetirá uma linha por vínculo e manterá uma linha explícita para procedimentos sem compatibilidade.
