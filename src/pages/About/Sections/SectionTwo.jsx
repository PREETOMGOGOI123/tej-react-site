import React from 'react'

const SectionTwo = () => {
    const content = {
        heading: "Where I worked",
        paragraphs: [
            "My design journey spans 15 years and has taken me from roles at PayPal and Citrix, and now Google.",
            "As a passion project, I was also part of a core founding team of a startup that was later acquired by Zomato.",
            "Whether shaping analytics tools or streamlining knowledge systems, I've always been driven by clarity, curiosity, and care."
        ],
        image: {
            src: "/images/about/section_two/image_one.png",
            alt: "Section Two"
        }
    }

    return (
        <div className="container_fixed grid grid-cols-[45%_55%] bg-white">
            <div className="left_grid h-full bg-[#E5FBFF] flex flex-col my-auto items-end pr-[8vw] py-[5vw] ">
                <div className="w-[22.2vw] h-fit my-auto">
                    <h1 className="text-[2.1vw] font-abril-fc mb-[1.1vw]">
                        {content.heading}
                    </h1>
                    <p className="text-[1.1vw] leading-relaxed">
                        <span className="inline-block mb-[1vw]">
                            {content.paragraphs[0]}
                        </span>
                        <br />
                        <span className="inline-block mb-[1vw]">
                            {content.paragraphs[1]}
                        </span>
                        <br />
                        <span className="inline-block ">
                            {content.paragraphs[2]}
                        </span>
                    </p>
                </div>
            </div>
            <div className="right_grid h-full flex items-center justify-center">
                <img
                    src={content.image.src}
                    alt={content.image.alt}
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default SectionTwo