import { FootnoteRestartLocationType } from '../shared/footnote-properties';
import { XmlAttributeComponent, XmlComponent } from '../xml-components';
export declare class FootnoteRestartNumberingAttributes extends XmlAttributeComponent<{
    readonly restart: FootnoteRestartLocationType;
}> {
    protected readonly xmlKeys: {
        restart: string;
    };
}
export declare class FootnoteNumberingRestart extends XmlComponent {
    constructor(restart: FootnoteRestartLocationType);
}
