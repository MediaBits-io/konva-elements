import Konva from 'konva';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
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

export interface WaveformConfig extends Konva.NodeConfig {
  frame?: number;
  frames?: Array<Array<[number, number]>>;
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
    const frameRef = useRef(frame);
    const shapeRef = useSyncedRef(ref);

    useEffect(() => {
      if (!animated || !shapeRef.current) {
        return;
      }

      const animation = new Konva.Animation(() => {
        if (frameRef.current < frames.length - 1) {
          frameRef.current += 1;
        } else {
          animation.stop();
        }
      }, [shapeRef.current.getLayer()]);

      animation.start();

      return () => {
        animation.stop();
      };
    }, [animated]);

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
          data: frames[frameRef.current],
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
      [fill, frame, frames, height, pattern, width]
    );

    return (
      <Shape
        ref={shapeRef}
        width={width}
        height={height}
        sceneFunc={drawShape}
        {...rest}
      />
    );
  }
);

export default Waveform;
