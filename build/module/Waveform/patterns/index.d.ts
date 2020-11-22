declare const patterns: {
    wave: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
    pixel: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
    bars: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
    roundBars: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
    line: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
    curve: (context: CanvasRenderingContext2D, { data, waveBottom, waveLeft, waveRight, waveTop, waveColor, }: import("./utils").WaveformProperties) => void;
};
export default patterns;
