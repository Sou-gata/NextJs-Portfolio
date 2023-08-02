import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiNodedotjs,
    SiAdobeillustrator,
    SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "../variants";

const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Web Development",
                icons: [
                    <FaHtml5 key={Math.random()} />,
                    <FaCss3 key={Math.random()} />,
                    <FaJs key={Math.random()} />,
                    <FaReact key={Math.random()} />,
                    <SiNextdotjs key={Math.random()} />,
                    <FaWordpress key={Math.random()} />,
                    <SiNodedotjs key={Math.random()} />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [
                    <FaFigma key={Math.random()} />,
                    <SiAdobeillustrator key={Math.random()} />,
                    <SiAdobephotoshop key={Math.random()} />,
                ],
            },
        ],
    },
    {
        title: "awards",
        info: [
            {
                title: "Webby Awards - Honoree",
                stage: "2011 - 2012",
            },
            {
                title: "Adobe Design Achievement Awards - Finalist",
                stage: "2009 - 2010",
            },
        ],
    },
    {
        title: "experience",
        info: [
            {
                title: "UX/UI Designer - XYZ Company",
                stage: "2012 - 2023",
            },
            {
                title: "Web Developer - ABC Agency",
                stage: "2010 - 2012",
            },
            {
                title: "Intern - DEF Corporation",
                stage: "2008 - 2010",
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Web Development - ABC University, LA, CA",
                stage: "2011",
            },
            {
                title: "Computer Science Diploma - AV Technical Institute",
                stage: "2009",
            },
            {
                title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
                stage: "2006",
            },
        ],
    },
];
const counterData = [
    {
        title: "Years of experience",
        max: 7,
        border: true,
    },
    {
        title: "Satisfied clients",
        max: 250,
        border: true,
    },
    {
        title: "Finished projects",
        max: 650,
        border: true,
    },
    {
        title: "Winning awards",
        max: 8,
        border: false,
    },
];

const About = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px] -z-10 opacity-50"
            >
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                <div className="flex-1 flex flex-col justify-center ">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2"
                    >
                        Captivating{" "}
                        <span className="text-crimson">stories</span> birth
                        magnificent degins.
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                    >
                        4 years ago, I began freelancing as a developer. Since
                        then, I&apos;ve done remote work for agencies,
                        counsulted for startups, and collaborated on digital
                        products for business and consumer use.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                    >
                        <div className="flex flex-1 xl:gap-x-6 items-center">
                            {counterData.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`relative flex-1 ${
                                            i < counterData.length - 1 &&
                                            "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                                        }`}
                                    >
                                        <div className="text-2xl xl:text-4xl font-extrabold text-crimson mb-2">
                                            <CountUp
                                                start={0}
                                                end={item.max}
                                                duration={5}
                                            />{" "}
                                            +
                                        </div>
                                        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                            {item.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[50%]"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, id) => (
                            <div
                                key={id}
                                className={`${
                                    index === id &&
                                    "text-crimson after:w-full after:bg-crimson after:transition-all after:duration-300"
                                } cursor-pointer capitalize xl:text-ellipsis relative after:w-0 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(id)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
                        {aboutData[index].info.map((item, id) => (
                            <div
                                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                key={id}
                            >
                                <div className="font-light mb-2 md:mb-0">
                                    {item.title}
                                </div>
                                <div className="hidden md:flex">-</div>
                                <div>{item.stage}</div>
                                <div className="flex gap-x-4">
                                    {item.icons?.map((icon, itemId) => {
                                        return (
                                            <div
                                                className="text-2xl text-white"
                                                key={itemId}
                                            >
                                                {icon}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
