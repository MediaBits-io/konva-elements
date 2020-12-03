import Konva from 'konva';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Group, KonvaNodeEvents, Rect } from 'react-konva';

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
    const frameRef = useRef(progress);
    const progressRectRef = useRef<Konva.Rect>(null);

    useEffect(() => {
      if (!animated || !progressRectRef.current) {
        return;
      }

      const animation = new Konva.Animation(() => {
        if (progressRectRef.current) {
          progressRectRef.current.width(
            width * (max > 0 ? frameRef.current / max : 0)
          );
        }

        if (frameRef.current < max) {
          frameRef.current += 1;
        } else {
          animation.stop();
        }
      }, [progressRectRef.current.getLayer()]);

      animation.start();

      return () => {
        animation.stop();
      };
    }, [animated]);

    return (
      <Group {...rest} ref={ref} width={width} height={height}>
        <Rect width={width} height={height} fill={backgroundColor} />
        <Rect
          ref={progressRectRef}
          width={(width * progress) / max}
          height={height}
          fill={fill}
        />
      </Group>
    );
  }
);

export default ProgressBar;
