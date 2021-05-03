import Konva from 'konva';
import React, { forwardRef, useCallback, useRef } from 'react';
import { Group, KonvaNodeEvents, Rect, Shape } from 'react-konva';

export type ProgressBarConfig = Konva.ShapeConfig & {
  animated?: boolean;
  backgroundColor?: string;
  progress: number;
  max: number;
};

const ProgressBar = forwardRef<
  Konva.Group,
  ProgressBarConfig & KonvaNodeEvents
>(
  (
    {
      progress,
      max,
      height = 0,
      width = 0,
      backgroundColor = 'rgba(120, 120, 120, 0.2)',
      fill = '#1e429f',
      animated,
      ...rest
    },
    ref
  ) => {
    const progressRectRef = useRef<Konva.Rect>(null);

    const drawShape = useCallback(() => {
      if (progressRectRef.current) {
        const frame = animated ? (window as any)._frame : progress;
        progressRectRef.current.width(width * (max > 0 ? frame / max : 0));
      }
    }, [animated, progress, max]);

    return (
      <Group {...rest} ref={ref} width={width} height={height}>
        <Rect width={width} height={height} fill={backgroundColor} />
        <Rect
          ref={progressRectRef}
          width={(width * progress) / max}
          height={height}
          fill={fill}
        />
        <Shape width={0} height={0} sceneFunc={drawShape} progress={progress} />
      </Group>
    );
  }
);

export default ProgressBar;
