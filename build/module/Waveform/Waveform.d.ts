import Konva from 'konva';
import React from 'react';
import { KonvaNodeEvents } from 'react-konva';
import patterns from './patterns';
export declare type PatternType = keyof typeof patterns;
export interface WaveformConfig extends Konva.NodeConfig {
    frame?: number;
    frames?: Array<Array<[number, number]>>;
    pattern?: PatternType;
    fill?: string;
    animated?: boolean;
}
declare const Waveform: React.ForwardRefExoticComponent<Pick<WaveformConfig & KonvaNodeEvents, string | number> & React.RefAttributes<import("konva/types/Shape").Shape<import("konva/types/Shape").ShapeConfig>>>;
export default Waveform;
