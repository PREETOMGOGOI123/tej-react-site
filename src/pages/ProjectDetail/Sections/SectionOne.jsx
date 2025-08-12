
import React from "react"

const sectionOneData = {
    hero_image: {
        src: "/images/projects/project_one/section_one_main.png",
        alt: "Google Search Project Main"
    },
    heading: "Designing at Planetary Scale",
    description: "High-impact, super quick contributions across Google Search",
    role: "Google | Intereaction Designer | 2024 onwards"
}

const SectionOne = () => {
    return (
        <div className="py-[4.6vw] flex flex-col items-center justify-end gap-[2.2vw]">
            <div className="container_picture mt-[6.5vw]">
                <img
                    src={sectionOneData.hero_image.src}
                    alt={sectionOneData.hero_image.alt}
                    className="h-[21.2vw] "
                />
            </div>
            <div className="flex flex-col items-center justify-center ">
                <h2 className="font-abril-fc text-[3.6vw] leading-[3.6vw] mb-[1vw]">
                    {sectionOneData.heading}
                </h2>
                <p className="text-[1.3vw] leading-[1.3vw] mb-[1.6vw]">
                    {sectionOneData.description}
                </p>
                <p className=" leading-[1vw] text-[1vw] ">
                    {sectionOneData.role}
                </p>
            </div>
        </div>
    )
}

export default SectionOne
