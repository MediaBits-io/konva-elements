import * as d3 from 'd3';
import { WaveformProperties } from './utils';
declare function filledPath(interpolator?: d3.CurveFactory): (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: WaveformProperties) => void;
export default filledPath;
