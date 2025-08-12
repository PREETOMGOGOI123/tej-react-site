import React from "react"
import SectionOne from "./Sections/SectionOne"
import SectionTwo from "./Sections/SectionTwo"
import SectionThree from "./Sections/SectionThree"
import SectionFour from "./Sections/SectionFour"
import SectionFive from "./Sections/SectionFive"

const ProjectDetail = () => {
    return (
        <>
            <div className="bg-[#fffff4]">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
            </div>
        </>
    )
}

export default ProjectDetail
