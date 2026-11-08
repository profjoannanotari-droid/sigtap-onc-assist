// Compatibilidade de Procedimentos - SIGTAP Competência 11/2026 — subgrupos 0304 e 0605

import { buscarPorCodigo } from "./sigtap";

export interface Compatibilidade {
  categoria: string;
  codigo: string;
  nome: string;
  quantidade: number;
  desde: string;
}

export const compatibilidades: Record<string, Compatibilidade[]> = {
  "304010367": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 35
    }
  ],
  "304010375": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 28
    }
  ],
  "304010383": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 30
    }
  ],
  "304010391": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "NARCOSE PARA BRAQUITERAPIA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010340",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 4
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE CADEIA LINFÁTICA",
      "desde": "11/2026",
      "codigo": "304010545",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 30
    }
  ],
  "304010405": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "NARCOSE PARA BRAQUITERAPIA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010340",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 4
    },
    {
      "nome": "RADIOTERAPIA DE CADEIA LINFÁTICA",
      "desde": "11/2026",
      "codigo": "304010545",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 30
    }
  ],
  "304010413": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 15
    }
  ],
  "304010421": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "BRAQUITERAPIA GINECOLÓGICA",
      "desde": "11/2026",
      "codigo": "304010430",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "RADIOTERAPIA DE CADEIA LINFÁTICA",
      "desde": "11/2026",
      "codigo": "304010545",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    }
  ],
  "304010430": [
    {
      "nome": "NARCOSE PARA BRAQUITERAPIA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010340",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 4
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 4
    }
  ],
  "304010448": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 20
    }
  ],
  "304010456": [
    {
      "nome": "BRAQUITERAPIA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304010464",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 35
    }
  ],
  "304010464": [
    {
      "nome": "NARCOSE PARA BRAQUITERAPIA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010340",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2
    }
  ],
  "304010472": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "RADIOTERAPIA DE METÁSTASE EM SISTEMA NERVOSO CENTRAL",
      "desde": "11/2026",
      "codigo": "304010529",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RADIOTERAPIA DE PLASMOCITOMA / MIELOMA / METÁSTASES EM OUTRAS LOCALIZAÇÕES",
      "desde": "11/2026",
      "codigo": "304010537",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 30
    }
  ],
  "304010480": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    }
  ],
  "304010502": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 30
    }
  ],
  "304010510": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 5
    }
  ],
  "304010529": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 5
    }
  ],
  "304010537": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 10
    }
  ],
  "304010545": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    }
  ],
  "304010553": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 20
    }
  ],
  "304010561": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 3
    }
  ],
  "304010570": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 5
    }
  ],
  "304010588": [
    {
      "nome": "NARCOSE DE CRIANÇA (POR PROCEDIMENTO)",
      "desde": "11/2026",
      "codigo": "304010170",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 25
    },
    {
      "nome": "ALOJAMENTO PARA PACIENTES EM TRATAMENTO DE RADIOTERAPIA",
      "desde": "11/2026",
      "codigo": "802010334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 5
    }
  ],
  "304020010": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020028": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020036": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020044": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020052": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020060": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030252",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030260",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020079": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030252",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030260",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020087": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020095": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020109": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020117": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020125": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020133": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020141": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020150": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020168": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020176": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020184": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020192": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020206": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020214": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020222": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020230": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020249": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020257": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020265": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020273": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020281": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020290": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020303": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020311": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "MESILATO DE IMATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010030",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 248
    },
    {
      "nome": "MESILATO DE IMATINIBE 400 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010080",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    }
  ],
  "304020320": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020338": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020346": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020362": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020370": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020397": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020400": [
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020419": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304020427": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    }
  ],
  "304020435": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304020443": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    },
    {
      "nome": "PERTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010099",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1260
    }
  ],
  "304020451": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020460": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020478": [
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020486": [
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020508": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    }
  ],
  "304020516": [
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304020524": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030252",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020532": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030252",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020540": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE MIELOMA MÚLTIPLO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030252",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304020559": [
    {
      "nome": "ACETATO DE LANREOTIDA 120 MG (SERINGA PREENCHIDA)",
      "desde": "11/2026",
      "codigo": "605010145",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2
    }
  ],
  "304020567": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CÂNCER DE PRÓSTATA METASTÁTICO HORMÔNIO RESISTENTE COM ABIRATERONA",
      "desde": "11/2026",
      "codigo": "304020575",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304020575": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304020583": [
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304020591": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "CLORIDRATO DE PAZOPANIBE 200 MG (POR COMPRIMIDO",
      "desde": "11/2026",
      "codigo": "605010153",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 124
    },
    {
      "nome": "CLORIDRATO DE PAZOPANIBE 400 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010161",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    }
  ],
  "304030015": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030023": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030031": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030040": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030058": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "RITUXIMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010137",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1100
    }
  ],
  "304030066": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030074": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030082": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "DASATINIBE 20 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010056",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    },
    {
      "nome": "DASATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010064",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 31
    }
  ],
  "304030090": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MESILATO DE IMATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010030",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 248
    },
    {
      "nome": "MESILATO DE IMATINIBE 400 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010080",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    }
  ],
  "304030104": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304030112": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MESILATO DE IMATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010030",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 248
    },
    {
      "nome": "MESILATO DE IMATINIBE 400 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010080",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    }
  ],
  "304030120": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030139": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304030147": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "DASATINIBE 20 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010056",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    },
    {
      "nome": "DASATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010064",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 31
    },
    {
      "nome": "NILOTINIBE 200 MG (POR CÁPSULA)",
      "desde": "11/2026",
      "codigo": "605010072",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 124
    }
  ],
  "304030155": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304030163": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030171": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030180": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030198": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030201": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030210": [
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030228": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "DASATINIBE 20 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010056",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    },
    {
      "nome": "DASATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010064",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 31
    },
    {
      "nome": "NILOTINIBE 200 MG (POR CÁPSULA)",
      "desde": "11/2026",
      "codigo": "605010072",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 124
    }
  ],
  "304030236": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "RITUXIMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010137",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1100
    }
  ],
  "304030244": [
    {
      "nome": "RITUXIMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010137",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1100
    }
  ],
  "304030252": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CÂNCER DE PRÓSTATA HORMÔNIO RESISTENTE OU METASTÁTICO HORMÔNIO SENSÍVEL",
      "desde": "11/2026",
      "codigo": "304020087",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304030260": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA PRÉVIA À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304040207",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA ADJUVANTE À RADIOTERAPIA EXTERNA DO ADENOCARCINOMA DE PRÓSTATA",
      "desde": "11/2026",
      "codigo": "304050342",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304040029": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304040061": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304040088": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304040185": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304040193": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304040207": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    }
  ],
  "304050016": [
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE ENDOMÉTRIO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020036",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANTIANDROGÊNICO PERIFÉRICO",
      "desde": "11/2026",
      "codigo": "304020060",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO ADENOCARCINOMA DE PRÓSTATA AVANÇADO COM ANÁLOGOS DE LHRH",
      "desde": "11/2026",
      "codigo": "304020079",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    }
  ],
  "304050024": [
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    }
  ],
  "304050040": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050067": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050075": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050113": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050121": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA NEOPLASIA MALIGNA AVANÇADA DO COLO OU DO CORPO UTERINO AVANÇADO, VULVA E VAGINA.",
      "desde": "11/2026",
      "codigo": "304020184",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020273",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DE TUBA UTERINA AVANÇADA - 2ª LINHA)",
      "desde": "11/2026",
      "codigo": "304020281",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DO COLO UTERINO",
      "desde": "11/2026",
      "codigo": "304040045",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMOIDE DE VULVA",
      "desde": "11/2026",
      "codigo": "304040126",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304040134",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040142",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA EPITELIAL DE OVÁRIO OU DA TUBA UTERINA",
      "desde": "11/2026",
      "codigo": "304050202",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE OVÁRIO",
      "desde": "11/2026",
      "codigo": "304060160",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - BAIXO RISCO",
      "desde": "11/2026",
      "codigo": "304060178",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA TROFOBLÁSTICA GESTACIONAL - CORIOCARCINOMA DE BAIXO RISCO PERSISTENTE / ALTO RISCO / RECIDIVA",
      "desde": "11/2026",
      "codigo": "304060186",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA COM ANÁLOGO SINTÉTICO DO LHRH / GNRH",
      "desde": "11/2026",
      "codigo": "304080098",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050130": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050261": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050270": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050288": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304050296": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    }
  ],
  "304050300": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    }
  ],
  "304050318": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    },
    {
      "nome": "TRASTUZUMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010048",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 2100
    }
  ],
  "304050334": [
    {
      "nome": "MESILATO DE IMATINIBE 100 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010030",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 248
    },
    {
      "nome": "MESILATO DE IMATINIBE 400 MG (POR COMPRIMIDO)",
      "desde": "11/2026",
      "codigo": "605010080",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 62
    }
  ],
  "304050342": [
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE COLON AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020028",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020044",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE PÂNCREAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020052",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020095",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RETO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020109",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO APUDOMA/TUMOR NEUROENDÓCRINO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020117",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE ADRENAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020125",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE RIM AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020168",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020176",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CANAL ANAL/ MARGEM ANAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020192",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE CABEÇA E PESCOÇO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020206",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS AVANÇADO - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304020214",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020222",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020230",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE ADENOCARCINOMA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020249",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE CARCINOMA EPIDERMÓIDE/CARCINOMA NEUROENDOCRINO DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020257",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE METÁSTASE DE NEOPLASIA MALIGNA INDIFERENCIADA DE ORIGEM DESCONHECIDA",
      "desde": "11/2026",
      "codigo": "304020265",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020290",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020303",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO TUMOR DO ESTROMA GASTROINTESTINAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020311",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO SISTEMA NERVOSO CENTRAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020320",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE TIREOIDE AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020362",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE PÊNIS AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020370",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA DO FÍGADO OU DO TRATO BILIAR AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020389",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA MALIGNA DO TIMO AVANÇADA",
      "desde": "11/2026",
      "codigo": "304020397",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA UROTELIAL AVANÇADO",
      "desde": "11/2026",
      "codigo": "304020400",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO MELANOMA MALIGNO AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020516",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA -1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030015",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA LINFOPROLIFERATIVA RARA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030023",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030031",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE DOENÇA MIELOPROLIFERATIVA RARA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030058",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOCITICA CRONICA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030066",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELOIDE CRONICA QUALQUER FASE - CONTROLE SANGÜINEO",
      "desde": "11/2026",
      "codigo": "304030074",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030082",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLASTICA - MARCADOR POSITIVO - SEM FASE CRÔNICA OU DE TRANSFORMAÇÃO ANTERIOR (PRIMEIRA LINHA).",
      "desde": "11/2026",
      "codigo": "304030090",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE BLÁSTICA - MARCADOR POSITIVO-3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030104",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - PRIMEIRA LINHA.",
      "desde": "11/2026",
      "codigo": "304030112",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030120",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304030139",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030147",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE DE TRANSFORMAÇÃO - MARCADOR POSITIVO - SEM FASE CRONICA ANTERIOR (PRIMEIRA LINHA)",
      "desde": "11/2026",
      "codigo": "304030155",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE (1ª LINHA)",
      "desde": "11/2026",
      "codigo": "304030163",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE BAIXO GRAU DE MALIGNIDADE - 2ªLINHA",
      "desde": "11/2026",
      "codigo": "304030171",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 1ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE NEOPLASIA DE CÉLULAS PLASMÁTICAS - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304030198",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA TRICOLEUCEMIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030201",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TRICOLEUCEMIA - 1ªLINHA.",
      "desde": "11/2026",
      "codigo": "304030210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA MIELÓIDE CRÔNICA EM FASE CRÔNICA - MARCADOR POSITIVO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030228",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304030236",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA FOLICULAR - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304030244",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040010",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE RETO/ CANAL ANAL/ MARGEM ANAL",
      "desde": "11/2026",
      "codigo": "304040053",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA EPIDERMÓIDE DE SEIO PARA-NASAL/ LARINGE / HIPOFARINGE/ OROFARINGE /CAVIDADE ORAL",
      "desde": "11/2026",
      "codigo": "304040061",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE BEXIGA",
      "desde": "11/2026",
      "codigo": "304040070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE NASOFARINGE",
      "desde": "11/2026",
      "codigo": "304040088",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040096",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA EPIDERMÓIDE / ADENOCARCINOMA DE ESÔFAGO",
      "desde": "11/2026",
      "codigo": "304040118",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE OSTEOSSARCOMA - 2ª LINHA.",
      "desde": "11/2026",
      "codigo": "304040150",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA ÓSSEO / OSTEOSSARCOMA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304040169",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PRÉ-OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304040177",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-VESICAL",
      "desde": "11/2026",
      "codigo": "304050016",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE ADENOCARCINOMA DE CÓLON",
      "desde": "11/2026",
      "codigo": "304050024",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE RETO (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050032",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA PULMONAR DE CÉLULAS NÃO PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050172",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CARCINOMA PULMONAR INDIFERENCIADO DE CÉLULAS PEQUENAS (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050180",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO OSTEOSSARCOMA",
      "desde": "11/2026",
      "codigo": "304050210",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE SARCOMA DE PARTES MOLES DE EXTREMIDADE",
      "desde": "11/2026",
      "codigo": "304050229",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO ADENOCARCINOMA DE ESTÔMAGO (PÓS OPERATÓRIA)",
      "desde": "11/2026",
      "codigo": "304050253",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR DO ESTROMA GASTRO INTESTINAL",
      "desde": "11/2026",
      "codigo": "304050334",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060011",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060038",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DA DOENÇA DE HODGKIN - TERCEIRA LINHA",
      "desde": "11/2026",
      "codigo": "304060046",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA / LINFOMA DE BURKITT - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060070",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060089",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/ MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060097",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA AGUDA/MIELODISPLASIA/ LINFOMA LINFOBLÁSTICO/ LINFOMA DE BURKITT - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304060100",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060119",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN GRAU INTERMEDIÁRIO OU ALTO - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304060127",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA NÃO HODGKIN DE GRAU DE MALIGNIDADE INTERMEDIÁRIO OU ALTO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060135",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO EXTRA-GONADAL",
      "desde": "11/2026",
      "codigo": "304060151",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060208",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE TUMOR GERMINATIVO DE TESTÍCULO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304060216",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA - 1ª LINHA - FASES TERAPÊUTICAS INICIAIS...",
      "desde": "11/2026",
      "codigo": "304060232",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCITICA AGUDA-1ª LINHA – FASE DE MANUTENÇÃO.",
      "desde": "11/2026",
      "codigo": "304060240",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 0
    }
  ],
  "304050350": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Concomitantes - APACs diferentes para o mesmo paciente",
      "quantidade": 1
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    }
  ],
  "304060011": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060038": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060046": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060070": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060089": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060097": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304060100": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304060119": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060127": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060135": [
    {
      "nome": "QUIMIOTERAPIA DE LINFOMA DIFUSO DE GRANDES CÉLULAS B – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304060224",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 1
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060151": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060160": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060178": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060186": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060208": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060216": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304060224": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "RITUXIMABE (POR MG)",
      "desde": "11/2026",
      "codigo": "605010137",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1100
    }
  ],
  "304060232": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304060240": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304070017": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304070025": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304070033": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304070041": [
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO -1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020133",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020141",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020338",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO- 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020346",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020419",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020427",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA COM DUPLO ANTI HER-2 DO CARCINOMA DE MAMA HER-2 POSITIVO 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020435",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "BLOQUEIO COM DUPLO ANTI-HER-2 DOCARCINOMA DE MAMA HER-2 POSITIVOAVANÇADO/METASTÁTICO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020443",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020451",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "TERAPIA ANTINEOPLÁSICA SISTÊMICA DO CÂNCER DE MAMA AVANÇADO COM INIBIDOR CDK 4/6 – 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020460",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304020478",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA AVANÇADO COM ANTIESTROGÊNICO SUPRESSOR DOS RECEPTORES DE ESTROGÊNIO - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304020486",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040029",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040185",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA (PRÉVIA)",
      "desde": "11/2026",
      "codigo": "304040193",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050040",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050067",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050075",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO III",
      "desde": "11/2026",
      "codigo": "304050113",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "HORMONIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO II",
      "desde": "11/2026",
      "codigo": "304050121",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DO CARCINOMA DE MAMA EM ESTÁDIO I",
      "desde": "11/2026",
      "codigo": "304050130",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050261",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050270",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "POLIQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050288",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO I (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050296",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO II (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050300",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "MONOQUIMIOTERAPIA DO CARCINOMA DE MAMA HER-2 POSITIVO EM ESTÁDIO III (ADJUVANTE)",
      "desde": "11/2026",
      "codigo": "304050318",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304070050": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "INIBIDOR DA OSTEÓLISE",
      "desde": "11/2026",
      "codigo": "304080071",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    }
  ],
  "304070068": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304070076": [
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 0
    }
  ],
  "304070084": [
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA",
      "desde": "11/2026",
      "codigo": "304070017",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CANCER NA INFÂNCIA E ADOLESCÊNCIA - 2ª LINHA",
      "desde": "11/2026",
      "codigo": "304070025",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 4ª LINHA",
      "desde": "11/2026",
      "codigo": "304070033",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE CÂNCER NA INFÂNCIA E ADOLESCÊNCIA - 3ª LINHA",
      "desde": "11/2026",
      "codigo": "304070041",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA , LINFOMA LINFOBLÁSTICO, LEUCEMIA MIELOIDE AGUDA ,E LEUCEMIA PROMIELOCÍTICA AGUDA NA INFÂNCIA E ADOLESCÊNCIA.- 1ª LINHA – FASES TERAPÊUTICAS INICIAIS.",
      "desde": "11/2026",
      "codigo": "304070068",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": ".QUIMIOTERAPIA DE LEUCEMIA LINFOIDE/LINFOBLÁSTICA AGUDA, LEUCEMIA MIELOIDE AGUDA E LEUCEMIA PROMIELOCÍTICA AGUDA NA INFÂNCIA E ADOLESCÊNCIA - 1ª LINHA - FASE DE MANUTENÇÃO",
      "desde": "11/2026",
      "codigo": "304070076",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Principal) - Excludente",
      "quantidade": 0
    },
    {
      "nome": "CUIDADOS COM O MATERIAL DE SUPORTE PARA INFUSÃO DE IMUNOTERAPIA COM MOLÉCULA BISESPECÍFICA ATIVADORA DE CÉLULAS T PARA LEUCEMIA LINFOBLÁSTICA AGUDA (LLA) B DERIVADA PEDIÁTRICA EM PRIMEIRA RECIDIVA MEDULAR DE ALTO RISCO (POR TROCA DE BOLSA)",
      "desde": "11/2026",
      "codigo": "304070092",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 10
    },
    {
      "nome": "FATOR ESTIMULANTE DO CRESCIMENTO DE COLÕNIAS DE GRANULÓCITOS / MACRÓFAGOS",
      "desde": "11/2026",
      "codigo": "304080012",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "QUIMIOTERAPIA INTRA-TECAL",
      "desde": "11/2026",
      "codigo": "304080055",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "IMUNOTERAPIA COM MOLÉCULA BISPECÍIFICA ATIVADORA DE CÉLULAS T PARA LEUCEMIA LINFOBLÁSTICA AGUDA (LLA) B DERIVADA PEDIÁTRICA EM PRIMEIRA RECIDIVA MEDULAR DE ALTO RISCO (POR FRASCO AMPOLA)",
      "desde": "11/2026",
      "codigo": "304080080",
      "categoria": "APAC (Proc. Principal) x APAC (Proc. Secundário) - Compativel",
      "quantidade": 24
    }
  ],
  "304080020": [
    {
      "nome": "IMPLANTAÇÃO DE CATETER DE LONGA PERMANÊNCIA SEMI OU TOTALMENTE IMPLANTAVEL (PROCEDIMENTO ESPECIAL)",
      "desde": "11/2026",
      "codigo": "406020612",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "CATETER DE ACESSO VENOSO CENTRAL POR INSERÇÃO PERIFÉRICA (PICC)",
      "desde": "11/2026",
      "codigo": "702040118",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    }
  ],
  "304080039": [
    {
      "nome": "IMPLANTAÇÃO DE CATETER DE LONGA PERMANÊNCIA SEMI OU TOTALMENTE IMPLANTAVEL (PROCEDIMENTO ESPECIAL)",
      "desde": "11/2026",
      "codigo": "406020612",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    },
    {
      "nome": "CATETER DE ACESSO VENOSO CENTRAL POR INSERÇÃO PERIFÉRICA (PICC)",
      "desde": "11/2026",
      "codigo": "702040118",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    }
  ],
  "304100013": [
    {
      "nome": "CATETER DE ACESSO VENOSO CENTRAL POR INSERÇÃO PERIFÉRICA (PICC)",
      "desde": "11/2026",
      "codigo": "702040118",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    }
  ],
  "304100021": [
    {
      "nome": "CATETER DE ACESSO VENOSO CENTRAL POR INSERÇÃO PERIFÉRICA (PICC)",
      "desde": "11/2026",
      "codigo": "702040118",
      "categoria": "AIH (Proc. Principal) x AIH (Proc. Especial) - Compativel",
      "quantidade": 1
    }
  ]
};

// Normaliza o código removendo zeros à esquerda e qualquer caractere não numérico
function normalizar(codigo: string): string {
  return codigo.replace(/\D/g, "").replace(/^0+/, "");
}

// Índice reverso: para cada procedimento "B" listado dentro do array de "A",
// registra "A" como compatibilidade equivalente de "B".
// As categorias do SIGTAP (Excludente, Concomitantes, Compativel Principal×Secundário)
// são simétricas no nível Principal×Principal, então podem ser espelhadas diretamente.
// Para Principal×Secundário invertemos para Secundário×Principal apenas no rótulo.
function construirIndiceReverso(): Record<string, Compatibilidade[]> {
  const idx: Record<string, Compatibilidade[]> = {};
  // Cache de nomes oficiais quando o procedimento "A" aparece como chave em outro registro
  const nomesPorCodigo: Record<string, string> = {};
  for (const [codA, lista] of Object.entries(compatibilidades)) {
    for (const item of lista) {
      if (!nomesPorCodigo[item.codigo]) nomesPorCodigo[item.codigo] = item.nome;
    }
    if (!nomesPorCodigo[codA]) {
      // Tenta achar o nome em qualquer outra ocorrência
      const ocorrencia = Object.values(compatibilidades)
        .flat()
        .find((c) => normalizar(c.codigo) === normalizar(codA));
      if (ocorrencia) nomesPorCodigo[codA] = ocorrencia.nome;
    }
  }
  for (const [codA, lista] of Object.entries(compatibilidades)) {
    for (const item of lista) {
      const codB = normalizar(item.codigo);
      if (!idx[codB]) idx[codB] = [];
      // Inverte rótulo de Principal×Secundário (a relação reversa enxerga o secundário compatível)
      let categoriaInvertida = item.categoria;
      if (item.categoria.includes("Principal) x APAC (Proc. Secundário)")) {
        categoriaInvertida = item.categoria.replace(
          "APAC (Proc. Principal) x APAC (Proc. Secundário)",
          "APAC (Proc. Secundário) x APAC (Proc. Principal)"
        );
      }
      idx[codB].push({
        categoria: categoriaInvertida,
        codigo: codA,
        nome: nomesPorCodigo[codA] || buscarPorCodigo(codA)?.nome || codA,
        quantidade: item.quantidade,
        desde: item.desde,
      });
    }
  }
  return idx;
}

let indiceReverso = construirIndiceReverso();

/** Substitui os vínculos pela competência baixada e refaz também o índice reverso. */
export function aplicarCompatibilidadesNuvem(novas: Record<string, Compatibilidade[]>) {
  for (const codigo of Object.keys(compatibilidades)) delete compatibilidades[codigo];
  Object.assign(compatibilidades, novas);
  indiceReverso = construirIndiceReverso();
}

export function getCompatibilidades(codigoProcedimento: string): Compatibilidade[] {
  const norm = normalizar(codigoProcedimento);
  const diretas = compatibilidades[norm] || [];
  const reversas = indiceReverso[norm] || [];
  // Deduplica por (categoria + codigo)
  const vistos = new Set<string>();
  const merged: Compatibilidade[] = [];
  for (const c of [...diretas, ...reversas]) {
    const chave = `${c.categoria}|${normalizar(c.codigo)}`;
    if (vistos.has(chave)) continue;
    vistos.add(chave);
    merged.push(c);
  }
  return merged;
}