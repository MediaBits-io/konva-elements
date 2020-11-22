import { WaveformProperties } from './utils';
declare function bars(round?: boolean): (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: WaveformProperties) => void;
export default bars;
