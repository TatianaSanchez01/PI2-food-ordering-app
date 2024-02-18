import React from "react";

import MenuItem from "../menu/MenuItem";
import SectionSubheader from "./SectionSubheader";

function HomeMenu() {
    return (
        <section className="my-16">
            <SectionSubheader
                subHeader="Encuentra"
                mainHeader="Los más vendidos"
            />
            <div className="grid grid-cols-3 gap-4 my-5">
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}

export default HomeMenu;
