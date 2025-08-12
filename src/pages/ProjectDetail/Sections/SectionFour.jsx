import React from "react"

const sectionFourData = {
    main: {
        heading: "Responsive Desktop Design",
        subheading:
            "Key Search modules for desktop, ensuring a seamless, uncropped experience for millions of users across all screen sizes.",
        description:
            "On desktop, the Google Search Results Page (SRP) was not fully responsive. For over 10% of users on different screen sizes and densities, key content modules were cropped, creating a broken and frustrating experience. My task was to design a responsive solution for these critical modules.",
        image: {
            src: "/images/projects/project_one/section_four/container_one/screenshot.png",
            alt: "screenshot",
            caption: "Updating the visual language while preserving clarity at scale.",
        },
    },
    role: {
        heading: "My role and approach",
        description:
            "As the lead designer for this initiative, I was responsible for the end-to-end design execution, ensuring that our most important content was accessible and usable on any desktop screen.",
        points: [
            "I designed responsive layouts for a set of pre-identified, high-traffic modules, using Google's design system to ensure consistency.",
            "I championed accessibility and internationalization, working through complex challenges like right-to-left (RTL) languages and ensuring our designs met WCAG standards for all users.",
            "I partnered closely with engineering to define breakpoint logic and ensure a robust, flexible implementation that worked across countless screen variations.",
            "Working with my PM, I monitored key usability metrics post-launch to validate that the new responsive layouts were successful and had no negative impact.",
        ],
        image: {
            src: "/images/projects/project_one/section_four/container_two/screenshot.png",
            alt: "screenshot",
            caption: "Updating the visual language while preserving clarity at scale.",
        },
    },
    outcome: {
        heading: "Outcome & Impact",
        items: [
            {
                icon: "/images/projects/project_one/section_four/container_three/icon_one.webp",
                text:
                    "Solved content cropping for over 10% of desktop viewports, improving the core experience for a millions of users.",
            },
            {
                icon: "/images/projects/project_one/section_four/container_three/icon_two.webp",
                text:
                    "Shipped responsive designs for all targeted modules, creating a more consistent and professional feel across the platform.",
            },
            {
                icon: "/images/projects/project_one/section_four/container_three/icon_three.webp",
                text:
                    "The responsive patterns I created became the new standard for all future desktop module development, ensuring a scalable solution for the organization.",
            },
        ],
    },
}


const SectionFour = () => {
    return (
        <div className="w-full bg-[#E5FBFF] py-[3.6vw]">
            <div className="w-[72.8vw] mx-auto">
                {/* Container One */}
                <div className="pb-[4.8vw]">
                    <div className="mb-[1.33vw]">
                        {/* Main heading */}
                        <h3 className="font-abril-fc text-[2.67vw] leading-[3.5vw] mb-[0.8vw]">
                            {sectionFourData.main.heading}
                        </h3>
                        {/* Main Heading supporting text */}
                        <p className="text-[1.7vw] w-[55.6vw]">
                            {sectionFourData.main.subheading}
                        </p>
                    </div>

                    {/* Description text */}
                    <div className="w-[44.44vw] mb-[2.7vw]">
                        <p>{sectionFourData.main.description}</p>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col items-center">
                        <img
                            src={sectionFourData.main.image.src}
                            alt={sectionFourData.main.image.alt}
                            className="w-[66.7vw] mb-[0.6vw]"
                        />
                        <p className="text-center text-[0.9vw]">
                            {sectionFourData.main.image.caption}
                        </p>
                    </div>
                </div>

                {/* Container Two */}
                <div className="pb-[4.8vw]">
                    <h4 className="font-abril-fc text-[1.8vw] mb-[0.8vw]">
                        {sectionFourData.role.heading}
                    </h4>

                    {/* Description */}
                    <div className="w-[44.44vw] mb-[2.7vw]">
                        <p className="mb-[1.11vw]">
                            {sectionFourData.role.description}
                        </p>
                        <ul className="list-disc pl-[3vw]">
                            {sectionFourData.role.points.map((point, idx) => (
                                <li
                                    key={idx}
                                    className=""
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={sectionFourData.role.image.src}
                            alt={sectionFourData.role.image.alt}
                            className="w-[55.55vw] mb-[0.6vw]"
                        />
                        <p className="text-center text-[0.9vw]">
                            {sectionFourData.role.image.caption}
                        </p>
                    </div>
                </div>

                {/* Container Three */}
                <div>
                    <h4 className="font-abril-fc text-[1.8vw] mb-[0.8vw]">
                        {sectionFourData.outcome.heading}
                    </h4>
                    {/* Container Info */}
                    <div className="w-full flex justify-between flex-wrap">
                        {sectionFourData.outcome.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col w-[23vw]"
                            >
                                <img
                                    src={item.icon}
                                    alt="icon"
                                    className="w-[2.4vw] h-[2.4vw]"
                                />
                                <p className="w-22.2vw">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
