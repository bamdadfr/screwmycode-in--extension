import speedToPercentage from 'speed-to-percentage';
import speedToSemitones from 'speed-to-semitones';
import {State, StateObserver} from '../common/state';

export class ControlsView implements StateObserver {
  public readonly percentage: HTMLSpanElement;

  public readonly semitones: HTMLSpanElement;

  public readonly increase: HTMLSpanElement;

  public readonly decrease: HTMLSpanElement;

  private state: State;

  private parent: HTMLDivElement = document.getElementsByClassName('ytp-time-display notranslate')[0] as HTMLDivElement;

  private readonly node: HTMLDivElement;

  private readonly percentageDefaultText = '%';

  private readonly semitonesDefaultText = 'st';

  constructor(state: State) {
    this.state = state;

    this.node = ControlsView.createContainer();
    this.increase = ControlsView.createSpan('up');
    this.decrease = ControlsView.createSpan('down');
    this.percentage = ControlsView.createSpan(this.percentageDefaultText);
    this.semitones = ControlsView.createSpan(this.semitonesDefaultText);

    this.node.appendChild(this.decrease);
    this.node.appendChild(ControlsView.createSpacer());
    this.node.appendChild(this.increase);
    this.node.appendChild(ControlsView.createSpacer());
    this.node.appendChild(this.percentage);
    this.node.appendChild(ControlsView.createSpacer());
    this.node.appendChild(this.semitones);

    this.renderPercentage();
    this.renderSemitones();
    this.renderNode();

    this.parent.appendChild(this.node);
  }

  private static createSpacer() {
    const spacer = document.createElement('span');
    spacer.style.marginRight = '5px';
    return spacer;
  }

  private static createSpan(text: string) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.cursor = 'pointer';
    return span;
  }

  private static createContainer() {
    const container = document.createElement('div');
    container.classList.add('ytp-time-display', 'notranslate');
    container.style.userSelect = 'none';
    return container;
  }

  public onActiveChange(): void {
    this.renderNode();
    this.onSpeedChange();
  }

  public onSpeedChange(): void {
    this.renderPercentage();
    this.renderSemitones();
  }

  private renderNode() {
    this.node.style.display = this.state.isActive ? 'inline' : 'none';
  }

  private renderPercentage() {
    if (this.state.isActive === true) {
      this.percentage.textContent = `${speedToPercentage(this.state.speed, 1)} %`;
      this.percentage.style.display = 'inline';
    } else {
      this.percentage.style.display = 'none';
    }
  }

  private renderSemitones() {
    if (this.state.isActive === true) {
      this.semitones.textContent = `${speedToSemitones(this.state.speed, 1)} st`;
    } else {
      this.semitones.textContent = this.semitonesDefaultText;
    }
  }
}
