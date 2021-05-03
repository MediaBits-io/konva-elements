import Konva from 'konva';
import React, { forwardRef, useCallback } from 'react';
import { KonvaNodeEvents, Shape } from 'react-konva';
import patterns from './patterns';
import sampleFrames from './sampleFrames';
import useSyncedRef from './useSyncedRef';

export type PatternType = keyof typeof patterns;

const getPadding = (type: PatternType): { v: number; h: number } => {
  switch (type) {
    case 'line':
      return {
        v: 10,
        h: 1
      };
    case 'curve': {
      return {
        v: 3,
        h: 1
      };
    }
    default:
      return {
        v: 3,
        h: 0
      };
  }
};

export interface WaveformConfig extends Konva.ShapeConfig {
  frame?: number;
  frames?: [number, number][][];
  pattern?: PatternType;
  fill?: string;
  animated?: boolean;
}

const Waveform = forwardRef<Konva.Shape, WaveformConfig & KonvaNodeEvents>(
  (
    {
      animated,
      frame = 0,
      height = 0,
      width = 0,
      frames = sampleFrames,
      fill = '#1e429f',
      pattern = 'roundBars',
      ...rest
    },
    ref
  ) => {
    const shapeRef = useSyncedRef(ref);

    const drawShape = useCallback(
      (ctx: Konva.Context, shape: Konva.Shape) => {
        const padding = getPadding(pattern);
        const waveHeight = height - padding.v * 2;
        const waveWidth = width - padding.h * 2;
        const waveLeft = padding.h;
        const waveTop = padding.v;
        const waveRight = waveLeft + waveWidth;
        const waveBottom = waveTop + waveHeight;

        patterns[pattern](ctx._context, {
          data: frames[animated ? (window as any)._frame : frame],
          waveLeft,
          waveTop,
          waveRight,
          waveBottom,
          waveColor: fill
        });

        // Fill invisible rect for hit box
        ctx.rect(0, 0, width, height);
        ctx.fillStrokeShape(shape);
      },
      [fill, animated, frame, frames, height, pattern, width]
    );

    return (
      <Shape
        {...rest}
        frame={frame}
        ref={shapeRef}
        width={width}
        height={height}
        sceneFunc={drawShape}
      />
    );
  }
);

export default Waveform;
