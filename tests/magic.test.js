const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função getMagicCard', () => {
  afterEach(() => {
    favoriteCards.pop(favoriteCards.length-1);
  }) 

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');

    // implemente seus testes aqui
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[favoriteCards.length-1].name).toEqual('Beacon of Immortality');

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);

    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui

    const nomes = favoriteCards.map((c) => c.name );
    const nomesX = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(nomes).toEqual(nomesX);

  });
});
