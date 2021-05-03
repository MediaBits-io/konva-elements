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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_konva_1 = require("react-konva");
const patterns_1 = __importDefault(require("./patterns"));
const sampleFrames_1 = __importDefault(require("./sampleFrames"));
const useSyncedRef_1 = __importDefault(require("./useSyncedRef"));
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
const Waveform = react_1.forwardRef((_a, ref) => {
    var { animated, frame = 0, height = 0, width = 0, frames = sampleFrames_1.default, fill = '#1e429f', pattern = 'roundBars' } = _a, rest = __rest(_a, ["animated", "frame", "height", "width", "frames", "fill", "pattern"]);
    const shapeRef = useSyncedRef_1.default(ref);
    const drawShape = react_1.useCallback((ctx, shape) => {
        const padding = getPadding(pattern);
        const waveHeight = height - padding.v * 2;
        const waveWidth = width - padding.h * 2;
        const waveLeft = padding.h;
        const waveTop = padding.v;
        const waveRight = waveLeft + waveWidth;
        const waveBottom = waveTop + waveHeight;
        patterns_1.default[pattern](ctx._context, {
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
    return (react_1.default.createElement(react_konva_1.Shape, Object.assign({}, rest, { frame: frame, ref: shapeRef, width: width, height: height, sceneFunc: drawShape })));
});
exports.default = Waveform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F2ZWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvV2F2ZWZvcm0vV2F2ZWZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQXVEO0FBQ3ZELDZDQUFxRDtBQUNyRCwwREFBa0M7QUFDbEMsa0VBQTBDO0FBQzFDLGtFQUEwQztBQUkxQyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQWlCLEVBQTRCLEVBQUU7SUFDakUsUUFBUSxJQUFJLEVBQUU7UUFDWixLQUFLLE1BQU07WUFDVCxPQUFPO2dCQUNMLENBQUMsRUFBRSxFQUFFO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0wsQ0FBQztRQUNKLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixPQUFPO2dCQUNMLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ0wsQ0FBQztTQUNIO1FBQ0Q7WUFDRSxPQUFPO2dCQUNMLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ0wsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBVUYsTUFBTSxRQUFRLEdBQUcsa0JBQVUsQ0FDekIsQ0FDRSxFQVNDLEVBQ0QsR0FBRyxFQUNILEVBQUU7UUFYRixFQUNFLFFBQVEsRUFDUixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxDQUFDLEVBQ1YsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsc0JBQVksRUFDckIsSUFBSSxHQUFHLFNBQVMsRUFDaEIsT0FBTyxHQUFHLFdBQVcsT0FFdEIsRUFESSxJQUFJLGNBUlQscUVBU0MsQ0FEUTtJQUlULE1BQU0sUUFBUSxHQUFHLHNCQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkMsTUFBTSxTQUFTLEdBQUcsbUJBQVcsQ0FDM0IsQ0FBQyxHQUFrQixFQUFFLEtBQWtCLEVBQUUsRUFBRTtRQUN6QyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXhDLGtCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3ZELFFBQVE7WUFDUixPQUFPO1lBQ1AsU0FBUztZQUNULFVBQVU7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsRUFDRCxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUN4RCxDQUFDO0lBRUYsT0FBTyxDQUNMLDhCQUFDLG1CQUFLLG9CQUNBLElBQUksSUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLEdBQUcsRUFBRSxRQUFRLEVBQ2IsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLFNBQVMsRUFBRSxTQUFTLElBQ3BCLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsUUFBUSxDQUFDIn0=