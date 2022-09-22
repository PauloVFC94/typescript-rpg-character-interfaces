import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static createdDwarfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.createdDwarfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf.createdDwarfs;
  }
}

export default Dwarf;
