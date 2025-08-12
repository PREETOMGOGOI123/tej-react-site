import React from 'react'

const About = () => {
    const content = {
        title: "Where I've lived",
        description: "I grew up in the green hills of Coorg, India, a place steeped in tradition and coffee. After formative years in Bangalore, I moved to the US in 2016. Since then, I've lived in Raleigh before landing in the SF Bay Area, where my roots are now replanted.",
        images: {
            main: "/images/about/section_four/image_one.webp",
            grid: [
                "/images/about/section_four/image_two.webp",
                "/images/about/section_four/image_three.webp",
                "/images/about/section_four/image_four.webp",
                "/images/about/section_four/image_five.webp"
            ]
        }
    }

    return (
        <div className="sticky_container grid grid-cols-[45%_55%] bg-gray-100 ">
            <div className="left_grid_sticky bg-[#F3FFE6] h-[100vh]  sticky top-[4.4vw] flex flex-col justify-center items-end pr-[8vw]">
                <div className="w-[22vw]">
                    <h1 className="text-[2.1vw] mb-[1.1vw] font-abril-fc">
                        {content.title}
                    </h1>
                    <p className="text-[1.1vw] leading-relaxed">
                        {content.description}
                    </p>
                </div>
            </div>

            <div className="right_grid_animated ">
                {/* First section: Main image */}
                <div className="right_top_one flex w-[55.55vw] h-[100vh] items-center justify-center">
                    <img
                        src={content.images.main}
                        alt="Main section image"
                        className="w-[52.22vw] h-[29.5vw] mx-auto"
                    />
                </div>

                {/* Second section: Image grid */}
                <div className="right_bottom_one flex w-[55.6vw] ">
                    <div className="flex flex-col gap-[0.11vw]">
                        <img
                            src={content.images.grid[0]}
                            alt="Grid image 1"
                            className="w-full h-full"
                        />
                        <img
                            src={content.images.grid[1]}
                            alt="Grid image 2"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col gap-[0.11vw]">
                        <img
                            src={content.images.grid[2]}
                            alt="Grid image 3"
                            className="w-full h-full"
                        />
                        <img
                            src={content.images.grid[3]}
                            alt="Grid image 4"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About