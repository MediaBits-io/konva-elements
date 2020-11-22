import * as d3 from 'd3';
import { WaveformProperties } from './utils';

function strokedPath(interpolator?: d3.CurveFactoryLineOnly) {
  return (
    context: CanvasRenderingContext2D,
    {
      data,
      waveBottom,
      waveLeft,
      waveRight,
      waveTop,
      waveColor,
    }: WaveformProperties
  ) => {
    context.fillStyle = waveColor;
    context.strokeStyle = waveColor;
    context.lineWidth = 5;

    const line = d3.line().context(context);

    if (interpolator) {
      line.curve(interpolator);
    }

    const x = d3
      .scalePoint<number>()
      .padding(0.1)
      .domain(d3.range(data.length))
      .range([waveLeft, waveRight]);

    const y = d3.scaleLinear().domain([-1, 1]).range([waveBottom, waveTop]);

    const points = data.map<[number, number]>((d, i) => [x(i)!, y(d[1])!]);

    // Fill waveform
    context.beginPath();
    line(points);
    context.stroke();
  };
}

export default strokedPath;
