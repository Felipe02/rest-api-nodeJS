define({ "api": [
  {
    "type": "post",
    "url": "/token",
    "title": "Token autenticado",
    "group": "Credencial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n  \"email\": \"john@connor.net\",\n  \"password\" \"12345\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de usuário autenticado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"token\" : \"xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de autenticação",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/token.js",
    "groupTitle": "Credencial",
    "name": "PostToken"
  },
  {
    "type": "get",
    "url": "/API",
    "title": "Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"NTask API\"}",
          "type": "jso"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "GetApi"
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Exclui uma tarefa",
    "group": "Tarefas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Tarefa</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tarefas",
    "name": "DeleteTasksId"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "Lista tarefas",
    "group": "Tarefas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Lista de tarefas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Título da tarefa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Tarefa foi concluida?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.created_at",
            "description": "<p>Data de cadastrado</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[{\n   \"id\": 1,\n   \"title\": \"Estudar\",\n   \"done\": false,\n   \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n   \"created_at\" : \"2015-09-24T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tarefas",
    "name": "GetTasks"
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Exibe uma tarefa",
    "group": "Tarefas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Tarefa</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título da tarefa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "description": "<p>Tarefa foi concluida?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de cadastrado</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 1,\n   \"title\": \"Estudar\",\n   \"done\": false,\n   \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n   \"created_at\" : \"2015-09-24T15:46:51.778Z\",\n   \"user_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tarefa não existe",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tarefas",
    "name": "GetTasksId"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "Cadastra uma tarefa",
    "group": "Tarefas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título da tarefa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\"title\": \"Estudar\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título da tarefa</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>Tarefa foi concluída?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de cadastrado</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 1,\n   \"title\": \"Estudar\",\n   \"done\": false,\n   \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n   \"created_at\" : \"2015-09-24T15:46:51.778Z\",\n   \"user_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tarefas",
    "name": "PostTasks"
  },
  {
    "type": "put",
    "url": "/tasks/:id",
    "title": "Atualiza uma tarefa",
    "group": "Tarefas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Id da Tarefa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Título da tarefa</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "description": "<p>Tarefa foi concluida?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n   \"title\": \"Estudar\",\n   \"done\": false,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/tasks.js",
    "groupTitle": "Tarefas",
    "name": "PutTasksId"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Exclui usuário autenticado",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro na exclusão",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usuario",
    "name": "DeleteUser"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Exibe usuário autenticado",
    "group": "Usuario",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"John Connor\",\n  \"email\": \"john@connor.net\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usuario",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Cadastra novo usuário",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n   \"name\": \"John Connor\",\n   \"email\": \"john@connor.net\",\n   \"password\": \"12345\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "{\n   \"id\": 1,\n   \"name\": \"John Conner\",\n   \"email\": \"john@connor.net\",\n   \"password\": \"$2$10$SK1B1\",\n   \"updated_at\": \"2015-09-24T15:46:51.778Z\",\n   \"created_at\" : \"2015-09-24T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no cadastro",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usuario",
    "name": "PostUsers"
  },
  {
    "type": "get",
    "url": "/numberToWords",
    "title": "converte número em palavra (Integração com WSDL)",
    "group": "numberToWords",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>número que será convertido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"NumberToWordsResult\": \"eleven\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/numberToWords.js",
    "groupTitle": "numberToWords",
    "name": "GetNumbertowords"
  }
] });