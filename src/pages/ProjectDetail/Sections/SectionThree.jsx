import React from "react"

const sectionThreeData = {
    container1: {
        heading: "Modernizing Mobile Modules",
        subheading: "Strategic redesign of core mobile modules, delivering a modern experience for millions of users.",
        paragraphs: [
            "One of my early projects involved migrating high-traffic mobile Search modules such as definitions, time, and weather, to a new design system.",
            "These modules were widely used, but relied on outdated styles and spacing rules that had drifted from the rest of the platform.",
            "My goal was to bring these surfaces into the updated design language while keeping the experience coherent, predictable, and easy to understand."
        ],
        image: {
            src: "/images/projects/project_one/section_three/container_one/sectionthree_screenshot.png",
            alt: ""
        },
        imageCaption: "Updating the visual language while preserving clarity at scale."
    },
    container2: {
        heading: "What I delivered",
        paragraphs: [
            "As the lead designer for this initiative, I was responsible for translating the strategic goals into a world-class user experience and ensuring a high-quality, performant implementation.",
            "My approach focused on execution and cross-functional partnership:"
        ],
        list: [
            "I owned the end-to-end redesign, creating a new, scalable visual language for the modules that aligned with Google's updated design system.",
            "I partnered closely with engineering to navigate technical constraints, ensure pixel-perfect implementation, and guarantee the redesign had zero impact on load performance—a critical requirement for Search.",
            "In collaboration with my PM, I helped define the testing strategy and closely monitored key engagement and performance metrics throughout the phased rollout to validate the success of the new designs."
        ],
        image: {
            src: "/images/projects/project_one/section_three/container_two/screenshot.webp",
            alt: ""
        },
        imageCaption: "Updating the visual language while preserving clarity at scale."
    },
    container3: {
        heading: "Why it mattered",
        items: [
            {
                icon: "/images/projects/project_one/section_three/container_three/icon_one.png",
                text: "Shipped to over 500 million users with no negative impact on performance or engagement."
            },
            {
                icon: "/images/projects/project_one/section_three/container_three/icon_two.webp",
                text: "The new framework reduced design and engineering effort for subsequent migrations by 40%."
            },
            {
                icon: "/images/projects/project_one/section_three/container_three/icon_three.webp",
                text: "The design patterns I created were adopted as the new standard for development on the Search results page, creating long-term leverage for the organization."
            }
        ]
    }
}

function SectionThree() {
    return (
        <div className="w-[72.8vw] mx-auto bg-[#fffff4] py-[3.6vw]">
            {/* Container 1 */}
            <div className="grid grid-cols-2 pb-[3.5vw]">
                <div className="col-span-2 flex flex-col mb-[2.7vw]">
                    {/* main heading */}
                    <h3 className="font-abril-fc text-[2.67vw] leading-[3.5vw] mb-[0.8vw]">
                        {sectionThreeData.container1.heading}
                    </h3>
                    {/* text supporting heading */}
                    <p className="text-[1.7vw] w-[55.6vw]">
                        {sectionThreeData.container1.subheading}
                    </p>
                </div>

                {/* Left side text near the image */}
                <div className="col-start-1 order-1 w-[35.5vw]">
                    {sectionThreeData.container1.paragraphs.map((text, idx) => (
                        <p
                            key={idx}
                            className="mb-[1.2rem] "
                        >
                            {text}
                        </p>
                    ))}
                </div>

                {/* right side image */}
                <div className="col-start-1 md:col-start-2 flex flex-col gap-4 items-start order-1 md:order-2 ">
                    <img
                        src={sectionThreeData.container1.image.src}
                        alt={sectionThreeData.container1.image.alt}
                        className="w-[63vw] h-auto mb-[0.6vw]"
                    />
                    <p className="text-[0.9vw]">
                        {sectionThreeData.container1.imageCaption}
                    </p>
                </div>
            </div>

            {/* Container 2 */}
            <div className="pb-[4.8vw]">
                {/* Main Heading */}
                <h4 className="font-abril-fc text-[1.8vw] mb-[0.8vw]">
                    {sectionThreeData.container2.heading}
                </h4>

                {/* description */}
                <div className="w-[44.44vw] mb-[2.7vw]">
                    {sectionThreeData.container2.paragraphs.map((text, idx) => (
                        <p
                            key={idx}
                            className="mb-[1.11vw]"
                        >
                            {text}
                        </p>
                    ))}
                    <ul className="list-disc pl-[3vw]">
                        {sectionThreeData.container2.list.map((item, idx) => (
                            <li
                                key={idx}
                                className=""
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image container */}
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={sectionThreeData.container2.image.src}
                        alt={sectionThreeData.container2.image.alt}
                        className="w-[55.55vw] mb-[0.6vw]"
                    />
                    <p className="text-center text-[0.9vw]">
                        {sectionThreeData.container2.imageCaption}
                    </p>
                </div>
            </div>

            {/* Container 3 */}
            <div className="w-full ">
                <h4 className="font-abril-fc text-[1.8vw] mb-[0.8vw]">
                    {sectionThreeData.container3.heading}
                </h4>
                <div className="w-full flex justify-between flex-wrap">
                    {sectionThreeData.container3.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col w-[23vw]"
                        >
                            <div className="w-[3.6vw]">
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="mb-[0.6vw] w-[2.4vw] h-[2.4vw]"
                                />
                            </div>
                            <p className="w-22.2vw">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionThree