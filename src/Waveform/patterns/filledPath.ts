import * as d3 from 'd3';
import { WaveformProperties } from './utils';

// TODO: this pattern does not need baseline (second value in samples) but others maybe do
function filledPath(interpolator?: d3.CurveFactory) {
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
    context.lineWidth = 2;

    const line = d3.line().context(context);

    if (interpolator) {
      line.curve(interpolator);
    }

    const waveHeight = waveBottom - waveTop;

    const baseline = waveTop + waveHeight / 2;

    const x = d3
      .scalePoint<number>()
      .padding(0.2)
      .domain(d3.range(data.length))
      .range([waveLeft, waveRight]);

    const height = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, waveHeight / 2]);

    const top = data.map<[number, number]>((d, i) => [
      x(i)!,
      baseline - height(d[0])!,
    ]);
    const bottom = data
      .map<[number, number]>((d, i) => [x(i)!, baseline + height(d[0])!])
      .reverse();

    // Adjust starting position to smoothen out the curve
    const mid = Math.floor(top.length / 2) - 1;
    const topLeft = top.slice(0, mid);
    const topRight = top.slice(mid);

    topLeft.push(topRight[0]);

    const bottomRight = bottom.slice(0, mid);
    const bottomLeft = bottom.slice(mid);

    const points = [...topRight, ...bottomRight, ...bottomLeft, ...topLeft];

    // Fill waveform
    context.beginPath();
    line(points);
    context.fill();

    // Stroke waveform edges / ensure baseline
    context.beginPath();
    line(points);
    context.stroke();
  };
}

export default filledPath;
