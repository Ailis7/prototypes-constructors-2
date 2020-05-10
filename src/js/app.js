// TODO: write your code here

export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}
Character.prototype.damage = function damage(points) {
  if (this.health > 0) {
    this.health -= points * (1 - this.defence / 100);
    this.health = (this.health < 0) ? 0 : this.health;
    return this.health;
  }
  return 'Персонаж мёртв';
};
const mage = new Character('Миша', 'Magican');
console.log(mage.damage(200));
