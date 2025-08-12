import React from "react"

const sectionTwoData = {
    heading: "What I do",
    paragraphs: [
        "I'm part of the Search Design Systems team at Google, where we build and maintain the foundational patterns of Google Search. This includes everything users see on the results page before they click into a link.",
        "It is one of the most visible surfaces on the internet, and every change must scale reliably, load quickly, and meet a high bar for clarity.",
        "In this role, I collaborate with Search and AI teams, as well as verticals like Weather, Flights, Ads, Sports, Shopping etc. If it shows up on the results page, I've likely contributed to it. My focus is on delivering consistent, accessible, and high-quality interaction design that helps Search feel coherent and trustworthy across use cases.",
        "All projects required fast (typically <24 hours) decision-making, systems thinking, and tight collaboration.",
        "What follows is a snapshot of that work."
    ],
    image: {
        src: "/images/projects/project_one/section_two/screenshot.webp",
        alt: "screenshot"
    },
    imageCaption: "Updating the visual language while preserving clarity at scale."
}

const SectionTwo = () => {
    return (
        <div className="bg-[#F7F9C6] h-fit grid grid-cols-2 gap-x-[6vw] gap-y-[3.6vw] py-[3.5vw]">
            <div className="left-grid  flex justify-self-end">
                <div className="w-[33.3vw]">
                    <h3 className="font-abril-fc text-[2.67vw] h-[3.5vw] mb-[1.1vw]">
                        {sectionTwoData.heading}
                    </h3>
                    <div className="">
                        {sectionTwoData.paragraphs.map((text, idx) => (
                            <p
                                key={idx}
                                className="mb-[1.2vw]"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-grid flex justify-self-start">
                <div className="flex flex-col gap-[1.2vw] justify-center">
                    <img
                        src={sectionTwoData.image.src}
                        alt={sectionTwoData.image.alt}
                        className="h-[30vw]"
                    />
                    <p className="text-[0.9vw] mt-[]">
                        {sectionTwoData.imageCaption}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
