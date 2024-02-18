import React from "react";

interface SectionSubheaderInterface {
    subHeader: string;
    mainHeader: string;
}

function SectionSubheader({
    subHeader,
    mainHeader,
}: SectionSubheaderInterface) {
    return (
        <div className="text-center">
            <h3 className="uppercase text-black/80 font-semibold leading-8">
                {subHeader}
            </h3>
            <h2 className="text-orange font-bold text-4xl italic">
                {mainHeader}
            </h2>
        </div>
    );
}

export default SectionSubheader;
