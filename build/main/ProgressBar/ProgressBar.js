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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_konva_1 = require("react-konva");
const ProgressBar = react_1.forwardRef((_a, ref) => {
    var { progress, max, height = 0, width = 0, backgroundColor = 'rgba(120, 120, 120, 0.2)', fill = '#1e429f', animated } = _a, rest = __rest(_a, ["progress", "max", "height", "width", "backgroundColor", "fill", "animated"]);
    const progressRectRef = react_1.useRef(null);
    const drawShape = react_1.useCallback(() => {
        if (progressRectRef.current) {
            const frame = animated ? window._frame : progress;
            progressRectRef.current.width(width * (max > 0 ? frame / max : 0));
        }
    }, [animated, progress, max]);
    return (react_1.default.createElement(react_konva_1.Group, Object.assign({}, rest, { ref: ref, width: width, height: height }),
        react_1.default.createElement(react_konva_1.Rect, { width: width, height: height, fill: backgroundColor }),
        react_1.default.createElement(react_konva_1.Rect, { ref: progressRectRef, width: (width * progress) / max, height: height, fill: fill }),
        react_1.default.createElement(react_konva_1.Shape, { width: 0, height: 0, sceneFunc: drawShape, progress: progress })));
});
exports.default = ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQStEO0FBQy9ELDZDQUFrRTtBQVNsRSxNQUFNLFdBQVcsR0FBRyxrQkFBVSxDQUk1QixDQUNFLEVBU0MsRUFDRCxHQUFHLEVBQ0gsRUFBRTtRQVhGLEVBQ0UsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEdBQUcsQ0FBQyxFQUNWLEtBQUssR0FBRyxDQUFDLEVBQ1QsZUFBZSxHQUFHLDBCQUEwQixFQUM1QyxJQUFJLEdBQUcsU0FBUyxFQUNoQixRQUFRLE9BRVQsRUFESSxJQUFJLGNBUlQsNkVBU0MsQ0FEUTtJQUlULE1BQU0sZUFBZSxHQUFHLGNBQU0sQ0FBYSxJQUFJLENBQUMsQ0FBQztJQUVqRCxNQUFNLFNBQVMsR0FBRyxtQkFBVyxDQUFDLEdBQUcsRUFBRTtRQUNqQyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBRSxNQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0QsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU5QixPQUFPLENBQ0wsOEJBQUMsbUJBQUssb0JBQUssSUFBSSxJQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNyRCw4QkFBQyxrQkFBSSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxHQUFJO1FBQzdELDhCQUFDLGtCQUFJLElBQ0gsR0FBRyxFQUFFLGVBQWUsRUFDcEIsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFDL0IsTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUUsSUFBSSxHQUNWO1FBQ0YsOEJBQUMsbUJBQUssSUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxHQUFJLENBQ2xFLENBQ1QsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsV0FBVyxDQUFDIn0=