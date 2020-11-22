import * as d3 from 'd3';
import { WaveformProperties } from './utils';
declare function strokedPath(interpolator?: d3.CurveFactoryLineOnly): (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: WaveformProperties) => void;
export default strokedPath;
