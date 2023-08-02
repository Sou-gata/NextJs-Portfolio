import Circles from "../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
    const [error, setError] = useState({
        err: false,
        message: "",
        success: false,
    });

    const sendMessage = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const subject = e.target[2].value;
        const message = e.target[3].value;
        if (name == "" || email == "" || subject == "" || message == "") {
            setError({
                err: true,
                message: "Please fill all the details",
                success: false,
            });
            setTimeout(() => {
                setError({ err: false, message: "", success: false });
            }, 3000);
        } else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
            };
            const submit = await fetch("/api/submit-message", requestOptions);
            const res = await submit.json();
            if (res.success) {
                setError({ err: false, message: "", success: true });
                e.target[0].value = "";
                e.target[1].value = "";
                e.target[2].value = "";
                e.target[3].value = "";
                setTimeout(() => {
                    setError((prev) => {
                        return { ...prev, success: false };
                    });
                }, 3000);
            } else {
                setError({ err: true, message: res.message, success: false });
            }
        }
    };

    return (
        <div className="h-full bg-primary/30">
            <div>
                <Circles />
            </div>
            <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px] bg-black/10 p-7 rounded-3xl">
                    <motion.h2
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2 text-center mb-12"
                    >
                        Let&apos;s{" "}
                        <span className="text-crimson">contact.</span>
                    </motion.h2>
                    <div className="mb-5 h-[30px]">
                        {error.err && (
                            <p className="text-center text-crimson">
                                {error.message}
                            </p>
                        )}
                        {error.success && (
                            <p className="text-center text-green-600">
                                Message sent successfully
                            </p>
                        )}
                    </div>
                    <motion.form
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        onSubmit={sendMessage}
                        className="flex-1 flex flex-col gap-6 mx-auto"
                    >
                        <div className="flex gap-x-6 w-full">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input capitalize"
                                maxLength={255}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input lowercase"
                                maxLength={255}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="input"
                            maxLength={255}
                        />
                        <textarea
                            placeholder="Message"
                            className="textarea"
                            maxLength={510}
                        ></textarea>
                        <button className="btn overflow-hidden rounded-full border border-white/50 max-w-[170px] px-0 transition-all duration-300 flex items-center justify-center hover:border-crimson group">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Let&apos;s talk
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
