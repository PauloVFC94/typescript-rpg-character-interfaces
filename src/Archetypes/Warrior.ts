import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static createdWarriors = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.createdWarriors += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.createdWarriors;
  }
}

export default Warrior;