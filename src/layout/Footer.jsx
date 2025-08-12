import React, { useEffect, useState } from "react"

const videos = [
    {
        video: "/videos/1.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Paws</strong> and reflect—</span><br><span>you've reached the end.</span>`,
    },
    {
        video: "/videos/2cat.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Feline</strong> like this</span><br><span>is the end?</span>`,
    },
    {
        video: "/videos/3otter.webm",
        text: `<span>Thanks for scrolling.</span><br><span>You <strong class='highlight font-abril-fc'>otter</strong> come back soon.</span>`,
    },
    {
        video: "/videos/3otter.webm",
        text: `<span>Thanks for scrolling.</span><br><span>You <strong class='highlight font-abril-fc'>otter</strong> come back soon.</span>`,
    },
    {
        video: "/videos/5 cat.mp4",
        text: `<span>You've reached the bottom.</span><br><span>It's <strong class='highlight font-abril-fc'>un-fur-gettable</strong> down here.</span>`,
    },
    {
        video: "/videos/6 bear.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Bear</strong> with me,</span><br><span>it's the footer.</span>`,
    },
    {
        video: "/videos/7 fox.mp4",
        text: `<span>That's all,</span><br><span><strong class='highlight font-abril-fc'>fox</strong>!</span>`,
    },
    {
        video: "/videos/8 bushy tail.mp4",
        text: `<span>You've reached</span><br><span>the <strong class='highlight font-abril-fc'>tail</strong> end.</span>`,
    },
    {
        video: "/videos/9 alpaca.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Alpaca</strong> some links</span><br><span>before you go.</span>`,
    },
    {
        video: "/videos/10. seal.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Seal</strong> you</span><br><span>later!</span>`,
    },
    {
        video: "/videos/11. koi.mp4",
        text: `<span>You've reached the bottom.</span><br><span>It's <strong class='highlight font-abril-fc'>un-fur-gettable</strong> down here.</span>`,
    },
    {
        video: "/videos/12. bird.mp4",
        text: `<span>You've reached the bottom.</span><br><span>It's <strong class='highlight font-abril-fc'>un-fur-gettable</strong> down here.</span>`,
    },
    {
        video: "/videos/13. alpaca.mp4",
        text: `<span><strong class='highlight font-abril-fc'>Alpaca</strong> some links</span><br><span>before you go.</span>`,
    },
]

function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length)
    return videos[randomIndex]
}

const Footer = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        setSelectedVideo(getRandomVideo())
    }, [])

    return (
        <footer>
            <div className="w-full py-[3.2vw] flex items-center justify-center gap-[2.2vw] bg-[#C6F0F7]">
                {selectedVideo ? (
                    <>
                        {/* Video Container */}
                        <div className="video-container">
                            <video
                                src={selectedVideo.video}
                                autoPlay
                                muted
                                loop
                                className="w-[20vw] h-[20vw]"
                                alt="Footer animation"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* Text Container */}
                        <div className="flex flex-col items-start">
                            <p className="text-[1.8vw]" dangerouslySetInnerHTML={{ __html: selectedVideo.text }} />
                            <p className="text-[1.1vw]" id="contact">
                                <span>Want to get in touch</span><br />
                                <span>
                                    <a href="mailto:tejkalianda@gmail.com">tejkalianda@gmail.com</a>
                                </span>
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="text-white">Loading...</div>
                )}
            </div>

            <div className="bg-[#1E2611] flex justify-between items-center text-white h-[4.4vw] px-[1.1vw] text-[1.1vw]">
                <p className="flex items-center">
                    <a
                        href="https://ankitaamavita.wixsite.com/my-site-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        Illustrations by Ankita Gogoi
                    </a>
                </p>
                <p className="flex items-center">
                    <a
                        href="https://wa.me/+917002812274"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Website developed by Preetom Gogoi
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
