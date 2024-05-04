import { XmlComponent } from '../xml-components';
import { FootnotePositioningLocationType, FootnoteRestartLocationType } from '../shared/footnote-properties';
import { NumberFormat } from '../shared/number-format';
export interface IFootnoteProperties {
    readonly restartLocation?: FootnoteRestartLocationType;
    readonly positioningLocation?: FootnotePositioningLocationType;
    readonly numberFormat?: (typeof NumberFormat)[keyof typeof NumberFormat];
    readonly startingNumber?: number;
}
export declare class FootnoteProperties extends XmlComponent {
    constructor(options: IFootnoteProperties);
}
