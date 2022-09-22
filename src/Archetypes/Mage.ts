import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static createdMages = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createdMages += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.createdMages;
  }
}

export default Mage;