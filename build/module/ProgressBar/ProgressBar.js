import Konva from 'konva';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Group, Rect } from 'react-konva';
const ProgressBar = forwardRef(({ progress, max, height = 0, width = 0, backgroundColor = 'rgba(120, 120, 120, 0.2)', fill = '#1e429f', animated, ...rest }, ref) => {
    const frameRef = useRef(progress);
    const progressRectRef = useRef(null);
    useEffect(() => {
        if (!animated || !progressRectRef.current) {
            return;
        }
        const animation = new Konva.Animation(() => {
            if (progressRectRef.current) {
                progressRectRef.current.width(width * (max > 0 ? frameRef.current / max : 0));
            }
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
    return (React.createElement(Group, Object.assign({}, rest, { ref: ref, width: width, height: height }),
        React.createElement(Rect, { width: width, height: height, fill: backgroundColor }),
        React.createElement(Rect, { ref: progressRectRef, width: (width * progress) / max, height: height, fill: fill })));
});
export default ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQW1CLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVMzRCxNQUFNLFdBQVcsR0FBRyxVQUFVLENBSTVCLENBQ0UsRUFDRSxRQUFRLEVBQ1IsR0FBRyxFQUNILE1BQU0sR0FBRyxDQUFDLEVBQ1YsS0FBSyxHQUFHLENBQUMsRUFDVCxlQUFlLEdBQUcsMEJBQTBCLEVBQzVDLElBQUksR0FBRyxTQUFTLEVBQ2hCLFFBQVEsRUFDUixHQUFHLElBQUksRUFDUixFQUNELEdBQUcsRUFDSCxFQUFFO0lBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBYSxJQUFJLENBQUMsQ0FBQztJQUVqRCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDekMsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUMzQixLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9DLENBQUM7YUFDSDtZQUVELElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQzFCLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNWLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNMLG9CQUFDLEtBQUssb0JBQUssSUFBSSxJQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNyRCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEdBQUk7UUFDN0Qsb0JBQUMsSUFBSSxJQUNILEdBQUcsRUFBRSxlQUFlLEVBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQy9CLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksR0FDVixDQUNJLENBQ1QsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsZUFBZSxXQUFXLENBQUMifQ==