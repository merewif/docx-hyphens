export declare const FootnoteRestartLocation: {
    readonly CONTINUOUS: "continuous";
    readonly EACH_SECTION: "eachSect";
    readonly EACH_PAGE: "eachPage";
};
export type FootnoteRestartLocationType = (typeof FootnoteRestartLocation)[keyof typeof FootnoteRestartLocation];
export declare const FootnotePositioningLocation: {
    readonly PAGE_BOTTOM: "pageBottom";
    readonly BENEATH_TEXT: "beneathText";
    readonly SECTION_END: "sectEnd";
    readonly DOCUMENT_END: "docEnd";
};
export type FootnotePositioningLocationType = (typeof FootnotePositioningLocation)[keyof typeof FootnotePositioningLocation];
