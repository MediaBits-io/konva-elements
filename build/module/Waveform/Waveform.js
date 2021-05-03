import React, { forwardRef, useCallback } from 'react';
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
    const shapeRef = useSyncedRef(ref);
    const drawShape = useCallback((ctx, shape) => {
        const padding = getPadding(pattern);
        const waveHeight = height - padding.v * 2;
        const waveWidth = width - padding.h * 2;
        const waveLeft = padding.h;
        const waveTop = padding.v;
        const waveRight = waveLeft + waveWidth;
        const waveBottom = waveTop + waveHeight;
        patterns[pattern](ctx._context, {
            data: frames[animated ? window._frame : frame],
            waveLeft,
            waveTop,
            waveRight,
            waveBottom,
            waveColor: fill
        });
        // Fill invisible rect for hit box
        ctx.rect(0, 0, width, height);
        ctx.fillStrokeShape(shape);
    }, [fill, animated, frame, frames, height, pattern, width]);
    return (React.createElement(Shape, Object.assign({}, rest, { frame: frame, ref: shapeRef, width: width, height: height, sceneFunc: drawShape })));
});
export default Waveform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F2ZWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvV2F2ZWZvcm0vV2F2ZWZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN2RCxPQUFPLEVBQW1CLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRCxPQUFPLFFBQVEsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUE0QixFQUFFO0lBQ2pFLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxNQUFNO1lBQ1QsT0FBTztnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7UUFDSixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7U0FDSDtRQUNEO1lBQ0UsT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7S0FDTDtBQUNILENBQUMsQ0FBQztBQVVGLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FDekIsQ0FDRSxFQUNFLFFBQVEsRUFDUixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxDQUFDLEVBQ1YsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsWUFBWSxFQUNyQixJQUFJLEdBQUcsU0FBUyxFQUNoQixPQUFPLEdBQUcsV0FBVyxFQUNyQixHQUFHLElBQUksRUFDUixFQUNELEdBQUcsRUFDSCxFQUFFO0lBQ0YsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5DLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FDM0IsQ0FBQyxHQUFrQixFQUFFLEtBQWtCLEVBQUUsRUFBRTtRQUN6QyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQzlCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxNQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdkQsUUFBUTtZQUNSLE9BQU87WUFDUCxTQUFTO1lBQ1QsVUFBVTtZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUVILGtDQUFrQztRQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxFQUNELENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQ3hELENBQUM7SUFFRixPQUFPLENBQ0wsb0JBQUMsS0FBSyxvQkFDQSxJQUFJLElBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixHQUFHLEVBQUUsUUFBUSxFQUNiLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxTQUFTLEVBQUUsU0FBUyxJQUNwQixDQUNILENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGVBQWUsUUFBUSxDQUFDIn0=