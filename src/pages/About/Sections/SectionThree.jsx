import React from 'react'

const SectionThree = () => {
    const content = {
        heading: "Outside of work",
        paragraphs: ["Design is how I think. Storytelling is how I connect. Sustainability is how I live. I spend weekends at farmers markets, on kid-friendly trails, or sketching book ideas drawn from my Kodava heritage. I believe small decisions — in parenting, in pixels, in what we choose to buy — add up.",
            "I write and illustrate books for my kids that preserve traditions from Coorg. I also dabble in cross-stitch and textile art — a craft passed down by my mother. Lately, I've been exploring beginner-friendly needlepoint kits for other curious hands."],
        images: {
            stickyLeft: [
                {
                    src: "/images/about/section_three/image_one.webp",
                    alt: "Section Three Image 1"
                },
                {
                    src: "/images/about/section_three/image_four.webp",
                    alt: "Section Three Image 2"
                }
            ],
            rightColumnLeft: [
                {
                    src: "/images/about/section_three/image_two.webp",
                    alt: "Section Three Image 3"
                },
                {
                    src: "/images/about/section_three/image_five.webp",
                    alt: "Section Three Image 4"
                },
                {
                    src: "/images/about/section_three/image_seven.webp",
                    alt: "Section Three Image 5"
                },
                {
                    src: "/images/about/section_three/image_nine.webp",
                    alt: "Section Three Image 6"
                }
            ],
            rightColumnRight: [
                {
                    src: "/images/about/section_three/image_three.webp",
                    alt: "Section Three Image 7"
                },
                {
                    src: "/images/about/section_three/image_six.webp",
                    alt: "Section Three Image 8"
                },
                {
                    src: "/images/about/section_three/image_eight.webp",
                    alt: "Section Three Image 9"
                },
                {
                    src: "/images/about/section_three/image_ten.webp",
                    alt: "Section Three Image 10"
                }
            ],
            additionalSection: {
                topImage: {
                    src: "/images/about/section_three/image_eleven.webp",
                    alt: "section_image"
                },
                bottomGrid: [
                    {
                        src: "/images/about/section_three/image_twelve.webp",
                        alt: "section-image"
                    },
                    {
                        src: "/images/about/section_three/image_thirteen.webp",
                        alt: "section-image"
                    },
                    {
                        src: "/images/about/section_three/image_fourteen.webp",
                        alt: "section-image"
                    },
                    {
                        src: "/images/about/section_three/image_fifteen.webp",
                        alt: "section-image"
                    }
                ]
            }
        }
    }

    return (
        <div className="container_three grid grid-cols-[45%_55%] bg-[#FFE6E2]">
            <div className="left_grid_three bg-[#FFE6E2] h-[100vh] sticky top-[4.4vw] flex items-center justify-end pr-[8vw]">
                <div className="w-[22.2vw] ">
                    <h1 className="text-[2.1vw] mb-[1.1vw] font-abril-fc">
                        {content.heading}
                    </h1>
                    <p className="text-[1.1vw] leading-relaxed">
                        <span className="inline-block mb-[1vw]">
                            {content.paragraphs[0]}
                        </span>

                        <span className="inline-block mb-[1vw]">
                            {content.paragraphs[1]}
                        </span>
                    </p>
                </div>
            </div>

            <div className="right_grid_three_container flex flex-col">
                {/* Original sticky and non-sticky section */}
                <div className="right_grid_three grid grid-cols-3">
                    {/* Left side sticky bar - 2 rows, total height responsive */}
                    <div className="sticky-container h-full">
                        <div className="right_sticky_bar bg-blue-300 h- w-full flex flex-col sticky top-[4.4vw]">
                            {/* Each row is responsive height */}
                            <div className=" w-full h-[22.2vw] flex items-center justify-center">
                                <img
                                    src={content.images.stickyLeft[0].src}
                                    alt={content.images.stickyLeft[0].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className=" w-full h-[22.2vw] flex items-center justify-center">
                                <img
                                    src={content.images.stickyLeft[1].src}
                                    alt={content.images.stickyLeft[1].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - 4 rows, total height responsive */}
                    <div className="non_sticky h-[88.8vw] w-[37vw] flex">
                        <div className="w-1/2 h-full rounded flex flex-col">
                            {content.images.rightColumnLeft.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[22.2vw] flex items-center justify-center"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="w-1/2 h-full rounded flex flex-col">
                            {content.images.rightColumnRight.map((image, index) => (
                                <div
                                    key={index}
                                    className=" w-full h-[22.2vw]  flex items-center justify-center"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* First additional row */}
                <div className="additional_row_one w-full bg-[#FFF9EC] ">
                    <div className=" w-[53vw] py-[8.8vw] mx-auto ">
                        <img
                            src={content.images.additionalSection.topImage.src}
                            alt={content.images.additionalSection.topImage.alt}
                            className="w-full h-[27vw]"
                        />
                    </div>
                    <div className=" w-full h-1/2 flex">
                        <div className="w-[25vw] bg-amber-200 flex flex-col">
                            <img
                                src={content.images.additionalSection.bottomGrid[0].src}
                                alt={content.images.additionalSection.bottomGrid[0].alt}
                                className="w-[25vw] h-[22.2vw]"
                            />
                            <img
                                src={content.images.additionalSection.bottomGrid[1].src}
                                alt={content.images.additionalSection.bottomGrid[1].alt}
                                className="w-[25vw] h-[22.2vw]"
                            />
                        </div>
                        <div className=" flex flex-col">
                            <img
                                src={content.images.additionalSection.bottomGrid[2].src}
                                alt={content.images.additionalSection.bottomGrid[2].alt}
                                className="w-[29vw] h-[22.2vw]"
                            />
                            <img
                                src={content.images.additionalSection.bottomGrid[3].src}
                                alt={content.images.additionalSection.bottomGrid[3].alt}
                                className="w-[29vw] h-[22.2vw]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree