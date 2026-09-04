// Estado inicial (seed) usado apenas na primeira leitura, antes de o banco
// (Redis) ter qualquer estado salvo. Depois do primeiro acesso, o banco
// manda — este arquivo nao e mais lido.
module.exports = [
  {
    "codigo": "P001",
    "produto": "Abóbora cabotiá",
    "itens": [
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Cubos pequenos para cozido",
        "g_unid": 400,
        "qtd": 1,
        "total": 400
      }
    ],
    "qtd_kit": 1,
    "total_kit": 400,
    "ativo": true
  },
  {
    "codigo": "P002",
    "produto": "Alface higienizada",
    "itens": [
      {
        "ingrediente": "Alface",
        "corte": "Higienizada",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P003",
    "produto": "Batata-doce em cubos",
    "itens": [
      {
        "ingrediente": "Batata-doce",
        "corte": "Cubos grandes",
        "g_unid": 400,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P019",
    "produto": "Batata-doce em rodelas",
    "itens": [
      {
        "ingrediente": "Batata-doce",
        "corte": "Rodelas",
        "g_unid": 400,
        "qtd": 1,
        "total": 400
      }
    ],
    "qtd_kit": 1,
    "total_kit": 400,
    "ativo": true
  },
  {
    "codigo": "P005",
    "produto": "Couve cortada",
    "itens": [
      {
        "ingrediente": "Couve",
        "corte": "Fatiada / cortada",
        "g_unid": 150,
        "qtd": 1,
        "total": 150
      }
    ],
    "qtd_kit": 1,
    "total_kit": 150,
    "ativo": true
  },
  {
    "codigo": "P006",
    "produto": "Kit maionese",
    "itens": [
      {
        "ingrediente": "Batata",
        "corte": "Cubinhos cabrita",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Cubinhos cabrita",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Vagem",
        "corte": "Cortada em pedaços",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P020",
    "produto": "Kit seleta",
    "itens": [
      {
        "ingrediente": "Cenoura",
        "corte": "Cubinhos cabrita",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubinhos cabrita",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Vagem",
        "corte": "Cortada em pedaços",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P007",
    "produto": "Kit sopa com abóbora",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cheiro-verde",
        "corte": "Picado",
        "g_unid": 0,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Couve-flor",
        "corte": "Floretes pequenos",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P008",
    "produto": "Kit sopa com brócolis",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes pequenos",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Mandioca",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P009",
    "produto": "Kit sopinha",
    "itens": [
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Cubinhos cabrita",
        "g_unid": 140,
        "qtd": 1,
        "total": 140
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Cubinhos cabrita",
        "g_unid": 130,
        "qtd": 1,
        "total": 130
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubinhos cabrita",
        "g_unid": 130,
        "qtd": 1,
        "total": 130
      }
    ],
    "qtd_kit": 1,
    "total_kit": 400,
    "ativo": true
  },
  {
    "codigo": "P021",
    "produto": "Kit sopão",
    "itens": [
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Cubos grandes",
        "g_unid": 120,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubos grandes",
        "g_unid": 140,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Mandioca",
        "corte": "Cubos grandes",
        "g_unid": 140,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P010",
    "produto": "Código não encontrado",
    "itens": [
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Palito",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Couve-flor",
        "corte": "Floretes grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P011",
    "produto": "Legumes ao forno com abóbora",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Cubos grandes",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes pequenos",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P012",
    "produto": "Legumes ao forno com chuchu",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes médio",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubos Grandes",
        "g_unid": 113,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P013",
    "produto": "Legumes temperados com chuchu",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes médio",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P014",
    "produto": "Macarrão de abobrinha",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Macarrão",
        "g_unid": 250,
        "qtd": 1,
        "total": 250
      }
    ],
    "qtd_kit": 1,
    "total_kit": 250,
    "ativo": true
  },
  {
    "codigo": "P022",
    "produto": "Melão 220 g",
    "itens": [
      {
        "ingrediente": "Melão",
        "corte": "Cubos",
        "g_unid": 220,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P023",
    "produto": "Mix 3 cores",
    "itens": [
      {
        "ingrediente": "Beterraba",
        "corte": "Ralada",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Ralada",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Couve",
        "corte": "Fatiada",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P015",
    "produto": "Mix legumes temperados",
    "itens": [
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Abóbora cabotiá",
        "corte": "Filete com casca",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Batata-doce",
        "corte": "Rodela cortada ao meio",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes médios",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Rodelas",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Tempero",
        "corte": "chimichurri + páprica",
        "g_unid": 7,
        "qtd": 1,
        "total": 7
      }
    ],
    "qtd_kit": 1,
    "total_kit": 407,
    "ativo": true
  },
  {
    "codigo": "P024",
    "produto": "Mix tradicional",
    "itens": [
      {
        "ingrediente": "Brócolis",
        "corte": "Floretes grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Palito",
        "g_unid": 200,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Couve-flor",
        "corte": "Floretes grandes",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P025",
    "produto": "Repolho 250 g",
    "itens": [
      {
        "ingrediente": "Repolho",
        "corte": "Fatiado",
        "g_unid": 250,
        "qtd": 1,
        "total": 250
      }
    ],
    "qtd_kit": 1,
    "total_kit": 250,
    "ativo": true
  },
  {
    "codigo": "P026",
    "produto": "Salada colorida",
    "itens": [
      {
        "ingrediente": "Alface Crespa",
        "corte": "Cortada",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Ralada",
        "g_unid": 150,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P027",
    "produto": "Salada gourmet",
    "itens": [
      {
        "ingrediente": "Alface crespa",
        "corte": "Higienizado",
        "g_unid": 50,
        "qtd": 1,
        "total": 50
      },
      {
        "ingrediente": "Pepino",
        "corte": "Fatiado",
        "g_unid": 120,
        "qtd": 1,
        "total": 120
      },
      {
        "ingrediente": "Rúcula",
        "corte": "Cortada",
        "g_unid": 30,
        "qtd": 1,
        "total": 30
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 1,
        "total": 50
      }
    ],
    "qtd_kit": 1,
    "total_kit": 250,
    "ativo": true
  },
  {
    "codigo": "P016",
    "produto": "Salada mista",
    "itens": [
      {
        "ingrediente": "Alface",
        "corte": "Cortada",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cebola roxa",
        "corte": "Fatiada",
        "g_unid": 10,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Manga",
        "corte": "Cubos médios",
        "g_unid": 70,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Pepino",
        "corte": "Fatiado",
        "g_unid": 70,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P017",
    "produto": "Salada mix",
    "itens": [
      {
        "ingrediente": "Alface Crespa",
        "corte": "Cortada",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Ralada",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Rúcula",
        "corte": "Cortada",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomatinho",
        "corte": "Inteiro",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P018",
    "produto": "Salada tradicional",
    "itens": [
      {
        "ingrediente": "Couve",
        "corte": "Fatiado",
        "g_unid": 50,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Pepino",
        "corte": "Fatiado",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Tomate",
        "corte": "Fatiado",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P030",
    "produto": "Yakisoba",
    "itens": [
      {
        "ingrediente": "Acelga",
        "corte": "Fatiado",
        "g_unid": 80,
        "qtd": 1,
        "total": 80
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Florete pequeno",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      },
      {
        "ingrediente": "Cenoura",
        "corte": "Filete rodela cortada ao meio",
        "g_unid": 120,
        "qtd": 1,
        "total": 120
      },
      {
        "ingrediente": "Repolho roxo",
        "corte": "Fatiado",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      }
    ],
    "qtd_kit": 1,
    "total_kit": 400,
    "ativo": true
  },
  {
    "codigo": "P031",
    "produto": "Kit Refogado",
    "itens": [
      {
        "ingrediente": "Cenoura",
        "corte": "Cubinhos cabrita",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Batata ingleza",
        "corte": "Cubinhos cabrita",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Abobrilha",
        "corte": "Cubinhos cabrita",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Chuchu",
        "corte": "Cubinhos cabrita",
        "g_unid": 100,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P032",
    "produto": "Mix repolho verde e cenoura",
    "itens": [
      {
        "ingrediente": "Cenoura",
        "corte": "Ralado",
        "g_unid": 120,
        "qtd": 1,
        "total": 120
      },
      {
        "ingrediente": "Repolho",
        "corte": "Ralado",
        "g_unid": 120,
        "qtd": 1,
        "total": 120
      }
    ],
    "qtd_kit": 1,
    "total_kit": 240,
    "ativo": true
  },
  {
    "codigo": "P033",
    "produto": "Arroz a grega",
    "itens": [
      {
        "ingrediente": "Cenoura",
        "corte": "Cubinhos cabrita",
        "g_unid": 220,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Pintão Vermelho",
        "corte": "Picado",
        "g_unid": 60,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Pintão Amarelo",
        "corte": "Picado",
        "g_unid": 60,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Pintão Verde",
        "corte": "Picado",
        "g_unid": 60,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P034",
    "produto": "Bled abacate, banana, aveia, chia",
    "itens": [
      {
        "ingrediente": "abacate",
        "corte": "Picado",
        "g_unid": 85,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "banana",
        "corte": "Picado",
        "g_unid": 60,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "aveia",
        "corte": "Picado",
        "g_unid": 2.5,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "chia",
        "corte": "Picado",
        "g_unid": 3,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P035",
    "produto": "Bled abacaxi, Morango, Maracujá",
    "itens": [
      {
        "ingrediente": "Abacaxi",
        "corte": "Picado",
        "g_unid": 75,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Morango",
        "corte": "Picado",
        "g_unid": 45,
        "qtd": 0,
        "total": 0
      },
      {
        "ingrediente": "Maracujá",
        "corte": "Picado",
        "g_unid": 30,
        "qtd": 0,
        "total": 0
      }
    ],
    "qtd_kit": 0,
    "total_kit": 0,
    "ativo": false
  },
  {
    "codigo": "P036",
    "produto": "Bled Abacaxi, couve, hortelã, gengibre",
    "itens": [
      {
        "ingrediente": "Abacaxi",
        "corte": "Picado",
        "g_unid": 130,
        "qtd": 2,
        "total": 260
      },
      {
        "ingrediente": "Couve",
        "corte": "Picado",
        "g_unid": 10,
        "qtd": 2,
        "total": 20
      },
      {
        "ingrediente": "Hortelã",
        "corte": "Picado",
        "g_unid": 5,
        "qtd": 2,
        "total": 10
      },
      {
        "ingrediente": "Gengibre",
        "corte": "Picado",
        "g_unid": 5,
        "qtd": 2,
        "total": 10
      }
    ],
    "qtd_kit": 2,
    "total_kit": 300,
    "ativo": true
  },
  {
    "codigo": "P037",
    "produto": "Kit forno Airfree",
    "itens": [
      {
        "ingrediente": "Abobora",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      },
      {
        "ingrediente": "Abobrinha",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      },
      {
        "ingrediente": "Batata doce",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      },
      {
        "ingrediente": "Brócolis",
        "corte": "Cubos grandes",
        "g_unid": 100,
        "qtd": 1,
        "total": 100
      }
    ],
    "qtd_kit": 1,
    "total_kit": 400,
    "ativo": true
  },
  {
    "codigo": "P038",
    "produto": "Mandioca 1kg",
    "itens": [
      {
        "ingrediente": "Mandioca",
        "corte": "A definir",
        "g_unid": 1000,
        "qtd": 1,
        "total": 1000
      }
    ],
    "qtd_kit": 1,
    "total_kit": 1000,
    "ativo": true
  },
  {
    "codigo": "P039",
    "produto": "Manga, abacaxi e maracujá 150g",
    "itens": [
      {
        "ingrediente": "Manga, abacaxi e maracujá",
        "corte": "A definir",
        "g_unid": 150,
        "qtd": 1,
        "total": 150
      }
    ],
    "qtd_kit": 1,
    "total_kit": 150,
    "ativo": true
  },
  {
    "codigo": "P040",
    "produto": "Cenoura ralada 250g",
    "itens": [
      {
        "ingrediente": "Cenoura",
        "corte": "Ralada",
        "g_unid": 250,
        "qtd": 1,
        "total": 250
      }
    ],
    "qtd_kit": 1,
    "total_kit": 250,
    "ativo": true
  },
  {
    "codigo": "P041",
    "produto": "Mix 5 cores 250g",
    "itens": [
      {
        "ingrediente": "Mix 5 cores",
        "corte": "A definir",
        "g_unid": 250,
        "qtd": 1,
        "total": 250
      }
    ],
    "qtd_kit": 1,
    "total_kit": 250,
    "ativo": true
  }
];
