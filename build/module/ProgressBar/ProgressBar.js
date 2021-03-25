import Konva from 'konva';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import { Group, Rect, Shape } from 'react-konva';
const ProgressBar = forwardRef(({ progress, max, height = 0, width = 0, backgroundColor = 'rgba(120, 120, 120, 0.2)', fill = '#1e429f', animated, ...rest }, ref) => {
    const frameRef = useRef(progress);
    const progressRectRef = useRef(null);
    useEffect(() => {
        if (!animated || !progressRectRef.current) {
            return;
        }
        const animation = new Konva.Animation(() => {
            if (frameRef.current < max) {
                frameRef.current += 1;
            }
            else {
                animation.stop();
            }
        }, [progressRectRef.current.getLayer()]);
        animation.start();
        return () => {
            animation.stop();
        };
    }, [animated]);
    const drawShape = useCallback(() => {
        if (progressRectRef.current) {
            progressRectRef.current.width(width * (max > 0 ? frameRef.current / max : 0));
        }
    }, []);
    return (React.createElement(Group, Object.assign({}, rest, { ref: ref, width: width, height: height }),
        React.createElement(Rect, { width: width, height: height, fill: backgroundColor }),
        React.createElement(Rect, { ref: progressRectRef, width: (width * progress) / max, height: height, fill: fill }),
        React.createElement(Shape, { width: 0, height: 0, sceneFunc: drawShape })));
});
export default ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMxRSxPQUFPLEVBQUUsS0FBSyxFQUFtQixJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU2xFLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FJNUIsQ0FDRSxFQUNFLFFBQVEsRUFDUixHQUFHLEVBQ0gsTUFBTSxHQUFHLENBQUMsRUFDVixLQUFLLEdBQUcsQ0FBQyxFQUNULGVBQWUsR0FBRywwQkFBMEIsRUFDNUMsSUFBSSxHQUFHLFNBQVMsRUFDaEIsUUFBUSxFQUNSLEdBQUcsSUFBSSxFQUNSLEVBQ0QsR0FBRyxFQUNILEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFhLElBQUksQ0FBQyxDQUFDO0lBRWpELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxPQUFPO1NBQ1I7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3pDLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQzFCLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNWLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUNqQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQzNCLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNMLG9CQUFDLEtBQUssb0JBQUssSUFBSSxJQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNyRCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEdBQUk7UUFDN0Qsb0JBQUMsSUFBSSxJQUNILEdBQUcsRUFBRSxlQUFlLEVBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQy9CLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksR0FDVjtRQUNGLG9CQUFDLEtBQUssSUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBSSxDQUM5QyxDQUNULENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGVBQWUsV0FBVyxDQUFDIn0=