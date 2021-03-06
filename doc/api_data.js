define({ "api": [
  {
    "type": "get",
    "url": "/admin",
    "title": "Listar Admins cadastradas",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Get",
    "group": "Admins",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"_id\": \"5df54d031d0e803a50fe8141\",\n \"nome\": \"Exemplo de Admin\",\n \"email\": \"exemplo@exemplo.com.br\",\n \"senha\": \"$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/adminRouter.js",
    "groupTitle": "Admins"
  },
  {
    "type": "post",
    "url": "/admin",
    "title": "Cadastro de Admins",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "PostAdmin",
    "group": "Admins",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeCompleto",
            "description": "<p>Nome da Admin.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email da Admin.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de acesso do Admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Admin",
            "description": "<p>Admin cadastrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Admin cadastrada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/adminRouter.js",
    "groupTitle": "Admins"
  },
  {
    "type": "post",
    "url": "/admin/auth",
    "title": "Geração de Token de acesso",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "TokenAutenticacao",
    "group": "Admins",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email da Admin.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de acesso do Admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Admin",
            "description": "<p>Admin cadastrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {},\n  \"token\": \"tokengerado\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Digitar senha incorreta.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"senha incorreta\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/adminRouter.js",
    "groupTitle": "Admins"
  },
  {
    "type": "delete",
    "url": "/cursos/:id",
    "title": "Remover curso",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Delete",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cursoId",
            "description": "<p>ID do curso que será removido.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Curso removido com sucesso\" \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Curso não encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"mensagem\": \"Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "Listar todos os Cursos cadastrados",
    "name": "Get",
    "group": "Cursos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"inscritas\": [],\n    \"_id\": \"5df55a1d9e71e33a70f10562\",\n    \"nomeCurso\": \"BackEnd\",\n    \"local\": \"Mercado Livre\",\n    \"periodo\": \"Noturno\",\n    \"inicioInscricao\": \"02/06/2019\",\n    \"terminoInscricao\": \"02/07/2019\",\n    \"dataInicio\": \"10/08/2019\",\n    \"dataTermino\": \"23/11/2019\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos/nome/:nomeCurso",
    "title": "Listar o Curso cadastrado por nome",
    "name": "Get",
    "group": "Cursos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"inscritas\": [],\n    \"_id\": \"5df55a1d9e71e33a70f10562\",\n    \"nomeCurso\": \"BackEnd\",\n    \"local\": \"Mercado Livre\",\n    \"periodo\": \"Noturno\",\n    \"inicioInscricao\": \"02/06/2019\",\n    \"terminoInscricao\": \"02/07/2019\",\n    \"dataInicio\": \"10/08/2019\",\n    \"dataTermino\": \"23/11/2019\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos/:id",
    "title": "Listar o Curso cadastrado por ID",
    "name": "Get",
    "group": "Cursos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"inscritas\": [],\n    \"_id\": \"5df55a1d9e71e33a70f10562\",\n    \"nomeCurso\": \"BackEnd\",\n    \"local\": \"Mercado Livre\",\n    \"periodo\": \"Noturno\",\n    \"inicioInscricao\": \"02/06/2019\",\n    \"terminoInscricao\": \"02/07/2019\",\n    \"dataInicio\": \"10/08/2019\",\n    \"dataTermino\": \"23/11/2019\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "post",
    "url": "/cursos",
    "title": "Cadastro de Cursos",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Post",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeCurso",
            "description": "<p>Nome do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "local",
            "description": "<p>Local de realizacao do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "periodo",
            "description": "<p>Período de realizacao do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "inicioInscricao",
            "description": "<p>Data do inicio da inscricao do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "terminoInscricao",
            "description": "<p>Data do termino da inscricao do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataInicio",
            "description": "<p>Data de inicio do Curso.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataTermino",
            "description": "<p>Data de termino do Curso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Curso",
            "description": "<p>Curso cadastrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Curso cadastrado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "put",
    "url": "/cursos/inscricao/:cursoId/:participanteId",
    "title": "Inscricao de participante no curso",
    "name": "Put",
    "group": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cursoId",
            "description": "<p>ID do curso em que será feita a inscrição.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participanteId",
            "description": "<p>ID da participante que será inscrita.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "resultadosProcesso",
            "description": "<p>Processo de inscrição da participante iniciado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "inscritas",
            "description": "<p>Participante inscrita no curso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Participante inscrita com sucesso\" \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Curso ou participante não encontrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"mensagem\": \"Inscrição não realizada\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/cursosRouter.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/participantes/:id",
    "title": "Listar a Participante cadastrada por ID",
    "name": "Get",
    "group": "Participantes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"_id\": \"5df39d375b305d3298e820b4\",\n    \"nomeCompleto\": \"teste inscritas\",\n    \"email\": \"kamillylouisefogaca_@jonasmartinez.com\",\n    \"dataNascimento\": \"18/08/1996\",\n    \"estadoCivil\": \"Solteira\",\n    \"rg\": 305924758,\n    \"cpf\": 60110719883,\n    \"telefoneResidencial\": 1939320015,\n    \"telefoneCelular\": 19983253194,\n    \"cep\": 13460970,\n    \"rua\": \"Rua Rio Branco\",\n    \"numero\": 468,\n    \"bairro\": \"Centro\",\n    \"cidade\": \"Nova Odessa\",\n    \"estado\": \"SP\",\n    \"formacaoAcademica\": \"Superior Cursando\",\n    \"resultadosProcesso\": [\n        {\n            \"_id\": \"5df3a053e61c9a24ac308060\",\n            \"curso\": \"5df39495da77b9323846c551\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Participantes"
  },
  {
    "type": "get",
    "url": "/participantes/:nomeCompleto",
    "title": "Listar a Participante cadastrada",
    "name": "Get",
    "group": "Participantes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"_id\": \"5df39d375b305d3298e820b4\",\n    \"nomeCompleto\": \"teste inscritas\",\n    \"email\": \"kamillylouisefogaca_@jonasmartinez.com\",\n    \"dataNascimento\": \"18/08/1996\",\n    \"estadoCivil\": \"Solteira\",\n    \"rg\": 305924758,\n    \"cpf\": 60110719883,\n    \"telefoneResidencial\": 1939320015,\n    \"telefoneCelular\": 19983253194,\n    \"cep\": 13460970,\n    \"rua\": \"Rua Rio Branco\",\n    \"numero\": 468,\n    \"bairro\": \"Centro\",\n    \"cidade\": \"Nova Odessa\",\n    \"estado\": \"SP\",\n    \"formacaoAcademica\": \"Superior Cursando\",\n    \"resultadosProcesso\": [\n        {\n            \"_id\": \"5df3a053e61c9a24ac308060\",\n            \"curso\": \"5df39495da77b9323846c551\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Participantes"
  },
  {
    "type": "get",
    "url": "/participantes",
    "title": "Listar todas Participantes cadastradas",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Get",
    "group": "Participantes",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n      \"_id\": \"5df39d375b305d3298e820b4\",\n      \"nomeCompleto\": \"teste inscritas\",\n      \"email\": \"kamillylouisefogaca_@jonasmartinez.com\",\n      \"dataNascimento\": \"18/08/1996\",\n      \"estadoCivil\": \"Solteira\",\n      \"rg\": 305924758,\n      \"cpf\": 60110719883,\n      \"telefoneResidencial\": 1939320015,\n      \"telefoneCelular\": 19983253194,\n      \"cep\": 13460970,\n      \"rua\": \"Rua Rio Branco\",\n      \"numero\": 468,\n      \"bairro\": \"Centro\",\n      \"cidade\": \"Nova Odessa\",\n      \"estado\": \"SP\",\n      \"formacaoAcademica\": \"Superior Cursando\",\n      \"resultadosProcesso\": [\n          {\n              \"_id\": \"5df3a053e61c9a24ac308060\",\n              \"curso\": \"5df39495da77b9323846c551\"\n          }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Participantes"
  },
  {
    "type": "post",
    "url": "/participantes",
    "title": "Cadastro de Participantes",
    "name": "Post",
    "group": "Participantes",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nomeCompleto",
            "description": "<p>Nome completo da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Data de nascimento da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estadoCivil",
            "description": "<p>Estado civil ['Casada', 'Solteira', 'Viúva', 'Divorciada'] da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "rg",
            "description": "<p>Numero do RG da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>Numero do CPF da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefoneResidencial",
            "description": "<p>Numero do telefone residencial da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefoneCelular",
            "description": "<p>Numero do telefone celular da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "cep",
            "description": "<p>Numero do CEP da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "rua",
            "description": "<p>Rua da residencia da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero da residencia da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>Bairro da residencia da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Cidade da residencia da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado da residencia da Participante.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "formacaoAcademica",
            "description": "<p>Formacao academica ['Superior Completo', 'Superior Cursando', 'Ensino Médio Completo'] da Participante .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Participante",
            "description": "<p>Participante cadastrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Participante cadastrada com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Participantes"
  },
  {
    "type": "put",
    "url": "/participates/processoseletivo/:processoId",
    "title": "Atualizar status do processo seletivo por participante",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Put",
    "group": "Participantes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "processoId",
            "description": "<p>ID do processo iniciado em que será feita a atualização.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "resultadosProcesso",
            "description": "<p>Processo de inscrição da participante atualizado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Processo atualizado\" \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Processo não encontrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"mensagem\": \"Erro\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Participantes"
  },
  {
    "type": "delete",
    "url": "/participantes/:id",
    "title": "Remover participante",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Delete",
    "group": "Partipantes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participanteID",
            "description": "<p>ID da participante que será removida.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Participante foi removida com sucesso\" \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Participante não encontrada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"mensagem\": \"Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/participantesRouter.js",
    "groupTitle": "Partipantes"
  }
] });
