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
const konva_1 = __importDefault(require("konva"));
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
    const frameRef = react_1.useRef(frame);
    const shapeRef = useSyncedRef_1.default(ref);
    react_1.useEffect(() => {
        if (!animated || !shapeRef.current) {
            return;
        }
        const animation = new konva_1.default.Animation(() => {
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
    const drawShape = react_1.useCallback((ctx, shape) => {
        const padding = getPadding(pattern);
        const waveHeight = height - padding.v * 2;
        const waveWidth = width - padding.h * 2;
        const waveLeft = padding.h;
        const waveTop = padding.v;
        const waveRight = waveLeft + waveWidth;
        const waveBottom = waveTop + waveHeight;
        patterns_1.default[pattern](ctx._context, {
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
    return (react_1.default.createElement(react_konva_1.Shape, Object.assign({ ref: shapeRef, width: width, height: height, sceneFunc: drawShape }, rest)));
});
exports.default = Waveform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F2ZWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvV2F2ZWZvcm0vV2F2ZWZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLCtDQUEwRTtBQUMxRSw2Q0FBcUQ7QUFDckQsMERBQWtDO0FBQ2xDLGtFQUEwQztBQUMxQyxrRUFBMEM7QUFJMUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUE0QixFQUFFO0lBQ2pFLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxNQUFNO1lBQ1QsT0FBTztnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7UUFDSixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7U0FDSDtRQUNEO1lBQ0UsT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7S0FDTDtBQUNILENBQUMsQ0FBQztBQVVGLE1BQU0sUUFBUSxHQUFHLGtCQUFVLENBQ3pCLENBQ0UsRUFTQyxFQUNELEdBQUcsRUFDSCxFQUFFO1FBWEYsRUFDRSxRQUFRLEVBQ1IsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsQ0FBQyxFQUNWLEtBQUssR0FBRyxDQUFDLEVBQ1QsTUFBTSxHQUFHLHNCQUFZLEVBQ3JCLElBQUksR0FBRyxTQUFTLEVBQ2hCLE9BQU8sR0FBRyxXQUFXLE9BRXRCLEVBREksSUFBSSxjQVJULHFFQVNDLENBRFE7SUFJVCxNQUFNLFFBQVEsR0FBRyxjQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsc0JBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuQyxpQkFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksZUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsT0FBTyxHQUFHLEVBQUU7WUFDVixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVmLE1BQU0sU0FBUyxHQUFHLG1CQUFXLENBQzNCLENBQUMsR0FBa0IsRUFBRSxLQUFrQixFQUFFLEVBQUU7UUFDekMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sVUFBVSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sU0FBUyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDdkMsTUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUV4QyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzlCLFFBQVE7WUFDUixPQUFPO1lBQ1AsU0FBUztZQUNULFVBQVU7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUMsRUFDRCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQzlDLENBQUM7SUFFRixPQUFPLENBQ0wsOEJBQUMsbUJBQUssa0JBQ0osR0FBRyxFQUFFLFFBQVEsRUFDYixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsU0FBUyxFQUFFLFNBQVMsSUFDaEIsSUFBSSxFQUNSLENBQ0gsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsUUFBUSxDQUFDIn0=