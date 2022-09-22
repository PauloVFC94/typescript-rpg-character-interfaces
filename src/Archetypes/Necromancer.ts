import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static createdNecromancers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.createdNecromancers += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.createdNecromancers;
  }
}

export default Necromancer;