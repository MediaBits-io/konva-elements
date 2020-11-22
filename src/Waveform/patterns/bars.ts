import * as d3 from 'd3';
import { WaveformProperties } from './utils';

function bars(round?: boolean) {
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

    const waveHeight = waveBottom - waveTop;

    const baseline = waveTop + waveHeight / 2;

    const barX = d3
      .scaleBand<number>()
      .paddingInner(0.5)
      .paddingOuter(0.01)
      .domain(d3.range(data.length))
      .range([waveLeft, waveRight]);

    const height = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, waveHeight / 2]);

    const barWidth = barX.bandwidth();

    data.forEach((val, i) => {
      const h = height(val[0])! * 2;
      const x = barX(i)!;
      const y = baseline - height(val[0])!;

      context.beginPath();
      context.fillRect(x, y, barWidth, h);

      if (round) {
        context.arc(x + barWidth / 2, y, barWidth / 2, 0, 2 * Math.PI);
        context.moveTo(x + barWidth / 2, y + h);
        context.arc(x + barWidth / 2, y + h, barWidth / 2, 0, 2 * Math.PI);
        context.fill();
      }
    });
  };
}

export default bars;
