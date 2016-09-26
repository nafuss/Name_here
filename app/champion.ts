
export class Champion{
  id: number;
  name: string;
  nickname: string;
  skins: Skins[];
  spells: Spells;
  stats: Stats;
}

export class Stats{
  health: number[];
  healthRegen: number[];
  // energy?: number;
  // energyRegen?: number;
  attackDamage: number[];
  armor: number[];
  attackSpeed: number[];
  magicResist: number[];
  movementSpeed: number;
}

export class Spells{
  P: string;
  Q: string;
  W: string;
  E: string;
  R: string;
}

export class Skins{
  _id: number;
  title: string;
}
