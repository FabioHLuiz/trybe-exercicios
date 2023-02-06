// tests/integration/chocolates.test.js

const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const fs = require("fs");
const app = require("../../src/app");
const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: "Lindt & Sprungli",
    },
    {
      id: 2,
      name: "Ferrero",
    },
    {
      id: 3,
      name: "Ghirardelli",
    },
  ],
  chocolates: [
    {
      id: 1,
      name: "Mint Intense",
      brandId: 1,
    },
    {
      id: 2,
      name: "White Coconut",
      brandId: 1,
    },
    {
      id: 3,
      name: "Mon Chéri",
      brandId: 2,
    },
    {
      id: 4,
      name: "Mounds",
      brandId: 3,
    },
  ],
});

describe("Testando a API Cacau Trybe", function () {
  beforeEach(function () {
    sinon.stub(fs.promises, "readFile").resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe("Usando o método GET em /chocolates", function () {
    it("Retorna a lista completa de chocolates!", async function () {
      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];

      const response = await chai.request(app).get("/chocolates");
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe("Usando o método GET em /chocolates/:id para buscar o ID 4", function () {
    it("Retorna o chocolate Mounds", async function () {
      const response = await chai.request(app).get("/chocolates/4");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: "Mounds",
        brandId: 3,
      });
    });
  });

  describe("Usando o método GET em /chocolates/:id para buscar o ID 99", function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai.request(app).get("/chocolates/99");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: "Chocolate not found" });
    });
  });

  describe("Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1", function () {
    it("Retorna os chocolates da marca Lindt & Sprungli", async function () {
      const response = await chai.request(app).get("/chocolates/brand/1");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: "Mint Intense",
          brandId: 1,
        },
        {
          id: 2,
          name: "White Coconut",
          brandId: 1,
        },
      ]);
    });
  });
  //   Exercício 1
  // Crie os testes de integração para o endpoint GET /chocolates/total

  // Crie um caso para o código retornado
  // Crie outro caso para o retorno esperado
  // Atenção: Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍
  describe("Usando o método GET em /chocolates/total", function () {
    it("Retorna a quantidade total de chocolates", async function () {
      const response = await chai.request(app).get("/chocolates/total");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });
//   Exercício 3
// Crie os testes de integração para o endpoint GET /chocolates/search

// Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado;
// Crie um caso para quando não existirem chocolates com o nome informado;
// Verifique se os testes falham com sucesso.+
describe('Usando o método GET em /chocolates/search', function () {
  it('Retorna os chocolates que contém "Mo" no nome', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ]);
  });

  it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});
// Exercício 5
// Crie os testes de integração para o endpoint PUT /chocolates/:id

// Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado;
// Crie um caso para quando não existe chocolate com o id informado;
// Verifique se os testes falham com sucesso.
describe('Usando o método PUT em /chocolates/:id', function () {
  it('Atualiza um chocolate existente', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/1').send({
      name: 'Mint Pretty Good',
      brandId: 2,
    });

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 1,
      name: 'Mint Pretty Good',
      brandId: 2,
    });
  });
    
  it('Se o chocolate não existe, gera um erro', async function () {
    const response = await chai
      .request(app)
      .put('/chocolates/555').send({
      name: 'Mint Pretty Good',
      brandId: 2,
      });
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({
      message: 'chocolate not found',
    });
  });
});
});
