

const workDetails = [
    {
        title: "Google Search",
        image: "/images/projects/project_one/home_image.webp",
        flying_text: "Coherence, AI, Design systems",
    },
    {
        title: "Google Knowledge Graph",
        image: "/images/projects/project_two/home_image.webp",
        flying_text: "Knowledge Panel, AI, Analytics",
    },
    {
        title: "Citrix: Analytics, data visualization, AI/ML ",
        image: "/images/projects/project_three/home_image.webp",
        flying_text: "Data visualization, Reporting, Search",
    },
    {
        title: "Citrix: Design mangement",
        image: "/images/projects/project_four/home_image.webp",
        flying_text: "Hiring, Brand update, design strategy",
    },
    {
        title: "Citrix: Remote desktop product suite ",
        image: "/images/projects/project_five/home_image.webp",
        flying_text: "Concept to launch, iPad, iPhone, desktop, web",
    },
    {
        title: "Citrix: Adding delight to designs",
        image: "/images/projects/project_six/home_image.webp",
        flying_text: "Illustrations, Visual design, Interactions",
    },
    {
        title: "Wotu: Farm to market startup",
        image: "/images/projects/project_seven/home_image.webp",
        flying_text: "Concept to launch, multiple hats, core founding team",
    },
    {
        title: "PayPal: Digital wallet  ",
        image: "/images/projects/project_eight/home_image.webp",
        flying_text: "System design, Mobile app",
    },
]

function WorkHighlights() {
    return (
        <section className="bg-[#f9ffe3] grid grid-cols-2 gap-x-[4.4vw] px-[14.4vw] py-[8.5vw]" id="work">
            {workDetails.map((item, idx) => (
                <div key={idx} className="py-[4.3vw]">
                    <a href="/project" className="group">
                        <div className="aspect-[3/2] relative rounded-[1.1vw] border-[5px] border-black/10 bg-cover bg-no-repeat overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="hover_screen aspect-[3/2] absolute inset-0 bg-white/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out transform -translate-y-[5%] group-hover:translate-y-0 rounded-[1.1vw]" />
                            {/* Text appears only on hover */}
                            <div className="absolute inset-0 flex items-center justify-center h-full w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out pointer-events-none z-20">
                                <p className="font-dm font-light w-[24vw] text-[2.7vw] text-center">
                                    {item.flying_text}
                                </p>
                            </div>
                        </div>
                    </a>
                    <div>
                        <p className="mt-[1.2vw] text-[1.8vw] font-light">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default WorkHighlights