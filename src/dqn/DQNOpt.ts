import { Opt } from '../Opt';

export class DQNOpt extends Opt {
  protected numberOfHiddenUnits: number = 100;
  protected epsilonMax: number = 1.0;
  protected epsilonMin: number = 0.1;
  protected epsilonPeriod: number = 1e6;
  
  protected alpha: number = 0.01;
  protected doRewardClipping: boolean = true;
  protected gamma: number = 0.75;
  protected experienceSize: number = 5000;

  protected learningStepsPerIteration: number = 10;
  protected experienceAddEvery: number = 25;
  protected delta: number = 1.0;

  /**
   * Sets the Value Function Learning Rate
   * @param alpha defaults to 0.005
   */
  public setAlpha(alpha: number): void {
    this.alpha = alpha;
  }

  /**
   * Defines a linear annealing of Epsilon for an Epsilon Greedy Policy
   * @param epsilonMax upper bound of epsilon; defaults to 1.0
   * @param epsilonMin lower bound of epsilon; defaults to 0.2
   * @param epsilonPeriod number of timesteps; defaults to 0.2
   */
  public setEpsilon(epsilonMax: number, epsilonMin: number, epsilonPeriod: number): void {
    this.epsilonMax = epsilonMax;
    this.epsilonMin = epsilonMin;
    this.epsilonPeriod = epsilonPeriod;
  }

  /**
   * Sets the Future Reward Discount Factor
   * @param gamma value from [0,1); defaults to 0.9
   */
  public setGamma(gamma: number): void {
    this.gamma = gamma;
  }

  /**
   * Sets the Number of Time Steps before another Experience is added to Replay Memory
   * @param timesteps defaults to 5
   */
  public setExperienceAddEvery(experienceAddEvery: number): void {
    this.experienceAddEvery = experienceAddEvery;
  }

  /**
   * Sets Replay Memory Size
   * @param experienceReplay defaults to 10000
   */
  public setExperienceSize(experienceSize: number): void {
    this.experienceSize = experienceSize;
  }

  /**
   * Sets the learning steps per iteration
   * @param steps defaults to 5
   */
  public setLearningStepsPerIteration(learningStepsPerIteration: number): void {
    this.learningStepsPerIteration = learningStepsPerIteration;
  }

  /**
   * Sets the delta (loss clamp) of the huber loss function for robustness
   * @param delta defaults to 1.0
   */
  public setDelta(delta: number): void {
    this.delta = delta;
  }

  /**
   * Sets the number of neurons in hidden layer
   * @param numberOfHiddenUnits defaults to 100
   */
  public setNumberOfHiddenUnits(numberOfHiddenUnits: number): void {
    this.numberOfHiddenUnits = numberOfHiddenUnits;
  }

  /**
   * Activates or deactivates the Reward clipping to -1 or +1.
   * @param doRewardClipping defaults to true
   */
  public setRewardClipping(doRewardClipping: boolean): void {
    this.doRewardClipping = doRewardClipping;
  }
}
