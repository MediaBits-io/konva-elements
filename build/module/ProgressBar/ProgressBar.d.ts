import Konva from 'konva';
import React from 'react';
import { KonvaNodeEvents } from 'react-konva';
export declare type ProgressBarConfig = Konva.NodeConfig & {
    animated?: boolean;
    backgroundColor?: string;
    progress: number;
    max: number;
};
declare const ProgressBar: React.ForwardRefExoticComponent<Pick<import("konva/types/Node").NodeConfig & {
    animated?: boolean | undefined;
    backgroundColor?: string | undefined;
    progress: number;
    max: number;
} & KonvaNodeEvents, string | number> & React.RefAttributes<import("konva/types/Group").Group>>;
export default ProgressBar;
