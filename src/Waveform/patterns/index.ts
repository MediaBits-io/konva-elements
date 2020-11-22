import * as d3 from 'd3';
import barsPattern from './bars';
import filledPath from './filledPath';
import strokedPath from './strokedPath';

const patterns = {
  wave: filledPath(d3.curveCardinal.tension(0.1)),
  pixel: filledPath(d3.curveStep),
  bars: barsPattern(),
  roundBars: barsPattern(true),
  line: strokedPath(),
  curve: strokedPath(d3.curveCardinal.tension(0.1)),
};

export default patterns;
