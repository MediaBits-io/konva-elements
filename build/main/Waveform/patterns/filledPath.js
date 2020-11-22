"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
// TODO: this pattern does not need baseline (second value in samples) but others maybe do
function filledPath(interpolator) {
    return (context, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }) => {
        context.fillStyle = waveColor;
        context.strokeStyle = waveColor;
        context.lineWidth = 2;
        const line = d3.line().context(context);
        if (interpolator) {
            line.curve(interpolator);
        }
        const waveHeight = waveBottom - waveTop;
        const baseline = waveTop + waveHeight / 2;
        const x = d3
            .scalePoint()
            .padding(0.2)
            .domain(d3.range(data.length))
            .range([waveLeft, waveRight]);
        const height = d3
            .scaleLinear()
            .domain([0, 1])
            .range([0, waveHeight / 2]);
        const top = data.map((d, i) => [
            x(i),
            baseline - height(d[0]),
        ]);
        const bottom = data
            .map((d, i) => [x(i), baseline + height(d[0])])
            .reverse();
        // Adjust starting position to smoothen out the curve
        const mid = Math.floor(top.length / 2) - 1;
        const topLeft = top.slice(0, mid);
        const topRight = top.slice(mid);
        topLeft.push(topRight[0]);
        const bottomRight = bottom.slice(0, mid);
        const bottomLeft = bottom.slice(mid);
        const points = [...topRight, ...bottomRight, ...bottomLeft, ...topLeft];
        // Fill waveform
        context.beginPath();
        line(points);
        context.fill();
        // Stroke waveform edges / ensure baseline
        context.beginPath();
        line(points);
        context.stroke();
    };
}
exports.default = filledPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbGVkUGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9XYXZlZm9ybS9wYXR0ZXJucy9maWxsZWRQYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUd6QiwwRkFBMEY7QUFDMUYsU0FBUyxVQUFVLENBQUMsWUFBOEI7SUFDaEQsT0FBTyxDQUNMLE9BQWlDLEVBQ2pDLEVBQ0UsSUFBSSxFQUNKLFVBQVUsRUFDVixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEdBQ1UsRUFDckIsRUFBRTtRQUNGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxQjtRQUVELE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFFeEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFMUMsTUFBTSxDQUFDLEdBQUcsRUFBRTthQUNULFVBQVUsRUFBVTthQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdCLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE1BQU0sTUFBTSxHQUFHLEVBQUU7YUFDZCxXQUFXLEVBQUU7YUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQ0wsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSTthQUNoQixHQUFHLENBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO2FBQ2xFLE9BQU8sRUFBRSxDQUFDO1FBRWIscURBQXFEO1FBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLFdBQVcsRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsMENBQTBDO1FBQzFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9