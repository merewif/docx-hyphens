export declare enum FootnoteRestartLocation {
    Continuous = "continuous",
    EachSection = "eachSect",
    EachPage = "eachPage"
}
export type FootnoteRestartLocationType = (typeof FootnoteRestartLocation)[keyof typeof FootnoteRestartLocation];
export declare enum FootnotePositioningLocation {
    PageBottom = "pageBottom",
    BeneathText = "beneathText",
    SectionEnd = "sectEnd",
    DocumentEnd = "docEnd"
}
export type FootnotePositioningLocationType = (typeof FootnotePositioningLocation)[keyof typeof FootnotePositioningLocation];
