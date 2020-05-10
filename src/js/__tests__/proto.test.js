import Character from '../app';

test('kill mage', () => {
  const mage = new Character('Миша', 'Magican');
  const result = mage.damage(200);
  expect(result).toEqual(0);
});

test('damge Bowman', () => {
  const bowman = new Character('Инокентий', 'Саблежуй');
  const result = bowman.damage(10);
  expect(result).toEqual(94);
});

test('pers dead', () => {
  const ironMan = new Character('Том', 'Летяга');
  ironMan.damage(200);
  const result = ironMan.damage(10);
  expect(result).toEqual('Персонаж мёртв');
});
