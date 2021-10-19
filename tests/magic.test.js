const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    expect.assertions(6);
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const card = await getMagicCardSimulator('130550');

    // implemente seus testes aqui    
    expect(expected).toEqual(card);                   // I & II
    expect(typeof card.types).toEqual(typeof []);     // teste III
    expect(card.subtypes.length).toEqual(2);          // teste IV
    expect(card.rarity).toEqual(expected.rarity);     // teste V
    expect(card.name).toEqual(expected.name);         // teste VI
    expect(card.manaCost).toEqual(expected.manaCost); // teste VI
    
  });
});
