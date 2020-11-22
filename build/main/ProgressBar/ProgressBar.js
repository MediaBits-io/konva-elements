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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const konva_1 = __importDefault(require("konva"));
const react_1 = __importStar(require("react"));
const react_konva_1 = require("react-konva");
const ProgressBar = react_1.forwardRef((_a, ref) => {
    var { progress, max, height = 0, width = 0, backgroundColor = 'rgba(120, 120, 120, 0.2)', fill = '#1e429f', animated } = _a, rest = __rest(_a, ["progress", "max", "height", "width", "backgroundColor", "fill", "animated"]);
    const frameRef = react_1.useRef(progress);
    const progressRectRef = react_1.useRef(null);
    react_1.useEffect(() => {
        if (!animated || !progressRectRef.current) {
            return;
        }
        const animation = new konva_1.default.Animation(() => {
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
    return (react_1.default.createElement(react_konva_1.Group, Object.assign({ ref: ref, width: width, height: height }, rest),
        react_1.default.createElement(react_konva_1.Rect, { width: width, height: height, fill: backgroundColor }),
        react_1.default.createElement(react_konva_1.Rect, { ref: progressRectRef, width: (width * progress) / max, height: height, fill: fill })));
});
exports.default = ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLCtDQUE2RDtBQUM3RCw2Q0FBMkQ7QUFTM0QsTUFBTSxXQUFXLEdBQUcsa0JBQVUsQ0FJNUIsQ0FDRSxFQVNDLEVBQ0QsR0FBRyxFQUNILEVBQUU7UUFYRixFQUNFLFFBQVEsRUFDUixHQUFHLEVBQ0gsTUFBTSxHQUFHLENBQUMsRUFDVixLQUFLLEdBQUcsQ0FBQyxFQUNULGVBQWUsR0FBRywwQkFBMEIsRUFDNUMsSUFBSSxHQUFHLFNBQVMsRUFDaEIsUUFBUSxPQUVULEVBREksSUFBSSxjQVJULDZFQVNDLENBRFE7SUFJVCxNQUFNLFFBQVEsR0FBRyxjQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsTUFBTSxlQUFlLEdBQUcsY0FBTSxDQUFhLElBQUksQ0FBQyxDQUFDO0lBRWpELGlCQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDekMsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6QyxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUMzQixLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9DLENBQUM7YUFDSDtZQUVELElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQzFCLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixPQUFPLEdBQUcsRUFBRTtZQUNWLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNMLDhCQUFDLG1CQUFLLGtCQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFNLElBQUk7UUFDckQsOEJBQUMsa0JBQUksSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsR0FBSTtRQUM3RCw4QkFBQyxrQkFBSSxJQUNILEdBQUcsRUFBRSxlQUFlLEVBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQy9CLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLElBQUksR0FDVixDQUNJLENBQ1QsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsV0FBVyxDQUFDIn0=