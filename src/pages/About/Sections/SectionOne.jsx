import React from 'react'

const SectionOne = () => {
    const content = {
        heading: "What I do now",
        paragraphs: [
            "By day, I'm an Interaction Designer at Google Search, where I wrangle design challenges at scale and advocate for the billions searching for answers.",
            "By night (and often early mornings), I referee two tiny humans and serve as caretaker to a lively cast of 37 adopted backyard creatures. Some furry, feathered, and occasionally imaginary."
        ],
        images: {
            topImage: {
                src: "/images/about/section_one/image_one.webp",
                alt: "SectionImage"
            },
            bottomImage: {
                src: "/images/about/section_one/image_two.png",
                alt: "SectionImage"
            }
        }
    }

    return (
        <div className="container_animated grid grid-cols-[45%_55%] bg-gray-100">
            <div className="left_grid_sticky bg-[#F4EDBA] h-[100vh] sticky top-0 flex flex-col justify-center items-end pr-[8vw]">
                <div className="w-[22.2vw]">
                    <h1 className="text-[2.1vw] font-abril-fc mb-[3vw]">
                        {content.heading}
                    </h1>
                    <p className="text-[1.1vw] leading-relaxed">
                        <span className="inline-block mab-[1vw]">
                            {content.paragraphs[0]}
                        </span>
                        <br />
                        <span className="inline-block">
                            {content.paragraphs[1]}
                        </span>
                    </p>
                </div>
            </div>

            <div className="right_grid_animated pt-[80px] flex flex-col h-[clamp(80rem,120vw,133.3rem)] 2xl:h-[clamp(96rem,144vw,160rem)] bg-[#43b4fe]">
                <div className="right_top_one flex-1 w-full">
                    <img
                        src={content.images.topImage.src}
                        alt={content.images.topImage.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="right_bottom_one flex-1 w-full overflow-hidden">
                    <img
                        src={content.images.bottomImage.src}
                        alt={content.images.bottomImage.alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default SectionOne