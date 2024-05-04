import { FootnotePositioningLocationType } from '../shared/footnote-properties';
import { XmlAttributeComponent, XmlComponent } from '../xml-components';
export declare class FootnotePositioningLocationAttributes extends XmlAttributeComponent<{
    readonly position: FootnotePositioningLocationType;
}> {
    protected readonly xmlKeys: {
        position: string;
    };
}
export declare class FootnotePositioningLocation extends XmlComponent {
    constructor(position: FootnotePositioningLocationType);
}
