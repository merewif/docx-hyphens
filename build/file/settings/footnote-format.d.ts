import { XmlAttributeComponent, XmlComponent } from '../xml-components';
import { NumberFormat } from '../shared/number-format';
export declare class FootnoteNumberingFormatAttributes extends XmlAttributeComponent<{
    readonly numberFormat: (typeof NumberFormat)[keyof typeof NumberFormat];
}> {
    protected readonly xmlKeys: {
        numberFormat: string;
    };
}
export declare class FootnoteNumberingFormat extends XmlComponent {
    constructor(numberFormat: (typeof NumberFormat)[keyof typeof NumberFormat]);
}
