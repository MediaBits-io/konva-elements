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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
const bars_1 = __importDefault(require("./bars"));
const filledPath_1 = __importDefault(require("./filledPath"));
const strokedPath_1 = __importDefault(require("./strokedPath"));
const patterns = {
    wave: filledPath_1.default(d3.curveCardinal.tension(0.1)),
    pixel: filledPath_1.default(d3.curveStep),
    bars: bars_1.default(),
    roundBars: bars_1.default(true),
    line: strokedPath_1.default(),
    curve: strokedPath_1.default(d3.curveCardinal.tension(0.1)),
};
exports.default = patterns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvV2F2ZWZvcm0vcGF0dGVybnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLGtEQUFpQztBQUNqQyw4REFBc0M7QUFDdEMsZ0VBQXdDO0FBRXhDLE1BQU0sUUFBUSxHQUFHO0lBQ2YsSUFBSSxFQUFFLG9CQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsS0FBSyxFQUFFLG9CQUFVLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUMvQixJQUFJLEVBQUUsY0FBVyxFQUFFO0lBQ25CLFNBQVMsRUFBRSxjQUFXLENBQUMsSUFBSSxDQUFDO0lBQzVCLElBQUksRUFBRSxxQkFBVyxFQUFFO0lBQ25CLEtBQUssRUFBRSxxQkFBVyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2xELENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUMifQ==