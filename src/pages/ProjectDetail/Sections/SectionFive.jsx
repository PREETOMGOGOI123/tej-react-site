import React from "react"

const sectionFiveData = {
    main: {
        heading: "Inclusivity at Scale",
        subheading:
            "Critical accessibility fixes and designing an AI tool to proactively solve internationalization issues",
        description: [
            "To proactively enhance product quality for a global audience, I audited Google Search surfaces for accessibility and internationalization opportunities. This work focused on optimizing layouts for high magnification, ensuring flawless behavior in international languages, and improving keyboard navigation.",
            "Addressing these areas was key to creating a more robust and inclusive experience for millions of users who rely on assistive technologies or use our product in non-English languages.",
        ],
        image: {
            src: "/images/projects/project_one/section_five/container_one/screenshot.png",
            alt: "screenshot",
            caption: "Updating the visual language while preserving clarity at scale.",
        },
    },
    approach: {
        heading: "My approach",
        description:
            "My strategy was twofold: address the most critical user-facing issues immediately, while simultaneously building a scalable system to prevent this class of problems from recurring.",
        steps: [
            {
                text:
                    "I designed and shipped foundational accessibility improvements, fixing dialogs at 200% zoom and redesigning carousel behavior users who cannot swipe.",
                image: {
                    src: "/images/projects/project_one/section_five/container_two/screenshot_one.png",
                    alt: "screenshot_one",
                    caption: "Updating the visual language while preserving clarity at scale.",
                },
            },
            {
                text:
                    "I identified that our i18n issues were a process problem, not a design problem. To solve this at scale, I designed and pitched an AI-powered detection tool to automatically surface i18n layout bugs. I partnered with engineering to define the model's output and successfully embedded it into our team's standard review workflow.",
                image: {
                    src: "/images/projects/project_one/section_five/container_two/screenshot_two.png",
                    alt: "screenshot_two",
                    caption: "Updating the visual language while preserving clarity at scale.",
                },
            },
            {
                text:
                    "I also scoped and began developing robust documentation for scalable solutions covering spacing, token use, and multilingual edge cases—to empower all teams to build more resilient layouts from the start.",
                image: {
                    src: "/images/projects/project_one/section_five/container_two/screenshot_three.png",
                    alt: "screenshot_three",
                    caption: "Updating the visual language while preserving clarity at scale.",
                },
            },
        ],
    },
    outcome: {
        heading: "Outcome and Impact",
        items: [
            {
                icon: "/images/projects/project_one/section_five/container_three/icon_one.webp",
                text:
                    "Shipped to over 500 million users with no negative impact on performance or engagement.",
            },
            {
                icon: "/images/projects/project_one/section_five/container_three/icon_two.webp",
                text:
                    "The new framework reduced design and engineering effort for subsequent migrations by 40%.",
            },
            {
                icon: "/images/projects/project_one/section_five/container_three/icon_three.webp",
                text:
                    "The design patterns I created were adopted as the new standard for development on the Search results page, creating long-term leverage for the organization.",
            },
        ],
    },
}

const SectionFive = () => {
    return (
        <div className="w-full bg-[#FFECE9] py-[3.6vw]">
            <div className="bg-[#FFECE9] w-[72.8vw] mx-auto ">
                {/* Container 1 */}
                <div className=" pb-[3.8vw] ">
                    <div className="flex flex-col mb-[2.7vw]">
                        <h3 className="font-abril-fc text-[2.67vw] leading-[3.5vw] mb-[0.8vw]">
                            {sectionFiveData.main.heading}
                        </h3>
                        <p className="text-[1.7vw] w-[55.6vw]">
                            {sectionFiveData.main.subheading}
                        </p>
                    </div>
                    {/* Left text near image */}
                    <div className="w-full flex gap-[2.2vw]">
                        <div className="w-[27vw]">
                            {sectionFiveData.main.description.map((desc, idx) => (
                                <p
                                    key={idx}
                                    className="mb-[1.2rem]"
                                >
                                    {desc}
                                </p>
                            ))}
                        </div>
                        {/* Right image container */}
                        <div className="flex flex-col gap-[0.5vw] items-start order-1 md:order-2">
                            <img
                                src={sectionFiveData.main.image.src}
                                alt={sectionFiveData.main.image.alt}
                                className=" h-auto mb-[0.6vw]"
                            />
                            <p className="text-[0.9vw]">
                                {sectionFiveData.main.image.caption}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Container 2 */}
                <div className="pb-[4.8vw] w-full ">
                    <div className="mb-[2.7vw]">
                        <h4 className="font-abril-fc text-[1.7vw] mb-[1.1vw]">
                            {sectionFiveData.approach.heading}
                        </h4>
                        {/* Text supporting heading */}
                        <p className="w-[55.6vw]">
                            {sectionFiveData.approach.description}
                        </p>
                    </div>
                    {sectionFiveData.approach.steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="w-full flex gap-[2.2vw] mb-[2vw]"
                        >
                            <div className="w-[27vw] bg-amber-900">
                                <p className="mb-[1.2rem]">
                                    {step.text}
                                </p>
                            </div>
                            <div className="flex flex-col gap-[0.5vw] items-start">
                                <img
                                    src={step.image.src}
                                    alt={step.image.alt}
                                    className="mb-[0.6vw] bg-amber-300"
                                />
                                <p className="text-[0.9vw]">
                                    {step.image.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Container 3 */}
                <div>
                    <h4 className="text-[1.7vw] font-abril-fc mb-[0.5vw]">
                        {sectionFiveData.outcome.heading}
                    </h4>
                    <div className="w-full flex justify-between flex-wrap">
                        {sectionFiveData.outcome.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col w-[23vw]"
                            >
                                <img src={item.icon} alt="icon" className="mb-[0.6vw] w-[2.4vw] h-[2.4vw]" />
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

export default SectionFive