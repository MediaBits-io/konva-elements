import * as d3 from 'd3';
function bars(round) {
    return (context, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }) => {
        context.fillStyle = waveColor;
        const waveHeight = waveBottom - waveTop;
        const baseline = waveTop + waveHeight / 2;
        const barX = d3
            .scaleBand()
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
            const h = height(val[0]) * 2;
            const x = barX(i);
            const y = baseline - height(val[0]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9XYXZlZm9ybS9wYXR0ZXJucy9iYXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBR3pCLFNBQVMsSUFBSSxDQUFDLEtBQWU7SUFDM0IsT0FBTyxDQUNMLE9BQWlDLEVBQ2pDLEVBQ0UsSUFBSSxFQUNKLFVBQVUsRUFDVixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEdBQ1UsRUFDckIsRUFBRTtRQUNGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTlCLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFFeEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFMUMsTUFBTSxJQUFJLEdBQUcsRUFBRTthQUNaLFNBQVMsRUFBVTthQUNuQixZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdCLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE1BQU0sTUFBTSxHQUFHLEVBQUU7YUFDZCxXQUFXLEVBQUU7YUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUVyQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsSUFBSSxDQUFDIn0=