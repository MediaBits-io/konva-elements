import Konva from 'konva';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import { Shape } from 'react-konva';
import patterns from './patterns';
import sampleFrames from './sampleFrames';
import useSyncedRef from './useSyncedRef';
const getPadding = (type) => {
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
const Waveform = forwardRef(({ animated, frame = 0, height = 0, width = 0, frames = sampleFrames, fill = '#1e429f', pattern = 'roundBars', ...rest }, ref) => {
    const frameRef = useRef(frame);
    const shapeRef = useSyncedRef(ref);
    useEffect(() => {
        if (!animated || !shapeRef.current) {
            return;
        }
        const animation = new Konva.Animation(() => {
            if (frameRef.current < frames.length - 1) {
                frameRef.current += 1;
            }
            else {
                animation.stop();
            }
        }, [shapeRef.current.getLayer()]);
        animation.start();
        return () => {
            animation.stop();
        };
    }, [animated]);
    const drawShape = useCallback((ctx, shape) => {
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
    }, [fill, frame, frames, height, pattern, width]);
    return (React.createElement(Shape, Object.assign({}, rest, { ref: shapeRef, width: width, height: height, sceneFunc: drawShape })));
});
export default Waveform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F2ZWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvV2F2ZWZvcm0vV2F2ZWZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMxRSxPQUFPLEVBQW1CLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRCxPQUFPLFFBQVEsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUE0QixFQUFFO0lBQ2pFLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxNQUFNO1lBQ1QsT0FBTztnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7UUFDSixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7U0FDSDtRQUNEO1lBQ0UsT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7S0FDTDtBQUNILENBQUMsQ0FBQztBQVVGLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FDekIsQ0FDRSxFQUNFLFFBQVEsRUFDUixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxDQUFDLEVBQ1YsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsWUFBWSxFQUNyQixJQUFJLEdBQUcsU0FBUyxFQUNoQixPQUFPLEdBQUcsV0FBVyxFQUNyQixHQUFHLElBQUksRUFDUixFQUNELEdBQUcsRUFDSCxFQUFF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