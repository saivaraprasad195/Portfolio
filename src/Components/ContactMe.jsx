import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Connect from "../assets/connect.png";
import { listContainerStagger } from "../utils/animateUtils";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMesg, setErrorMesg] = useState("");
  const [successMesg, setSuccessMesg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || name === "" || subject === "" || message === "") {
      console.log("they are mepty");
      setErrorMesg("All fields are mandatory");
      setTimeout(() => {
        setErrorMesg("");
      }, 4000);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "service_4tpeffw",
        "template_9zidfu9",
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        "NGFLqkZZmgxak2vwa"
      );

      setSuccessMesg(
        `Thank you, ${name}, your message has been sent successfully!`
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => {
        setSuccessMesg("");
      }, 4000);
    } catch (error) {
      setErrorMesg("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <section id="contactme" className="max-w-[1200px] mx-auto py-10">
      <motion.h3 className="text-5xl font-bold text-center">
        Contact Me
      </motion.h3>
      <motion.div
        variants={listContainerStagger}
        initial="hidden"
        whileInView={"visible"}
        className="flex flex-col md:flex-row gap-14 items-center justify-center py-5"
      >
        <motion.div
          className="overflow-hidden rounded-lg bg-purple-400 h-fit"
          whileHover={{ borderRadius: "50%" }}
        >
          <img src={Connect} alt="" className="sm-w-[320px] w-[280px]" />
        </motion.div>

        <motion.div className="w-[60%]">
          <form action="" method="post" className="flex flex-col gap-3">
            <motion.div className="flex flex-col">
              <label htmlFor="name" className="text-[#DC2626] pb-1">
                YOUR NAME
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Your Name..."
                className=" outline-none focus:outline-[#DC2626] h-[45px] px-2 rounded-lg bg-zinc-900 text-[18px] "
                type="text"
                name="name"
                id="name"
              />
            </motion.div>
            <motion.div className="flex flex-col">
              <label htmlFor="email" className="text-[#DC2626] pb-1">
                EMAIL
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="outline-none focus:outline-[#DC2626] h-[45px] px-2 rounded-lg bg-zinc-900 text-[18px]"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </motion.div>
            <motion.div className="flex flex-col">
              <label htmlFor="subject" className=" text-[#DC2626] pb-1">
                SUBJECT
              </label>
              <input
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="outline-none  focus:outline-[#DC2626] h-[45px] px-2 rounded-lg bg-zinc-900 text-[18px]"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </motion.div>
            <motion.div className="flex flex-col">
              <label htmlFor="message" className=" text-[#DC2626] pb-1">
                Message
              </label>
              <textarea
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="outline-none focus:outline-[#DC2626] h-[100px] max px-2 rounded-lg bg-zinc-900 text-[18px]"
                placeholder="Message..."
                rows={30}
                cols={30}
              ></textarea>
            </motion.div>
            {!loading && !errorMesg && !successMesg && (
              <motion.button
                style={{
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                onClick={handleSubmit}
                className=" bg-zinc-900 max-w-[300px] text-purple-500 text-[20px] shadow-lg w-full font-bold my-4 rounded-lg py-2 self-center"
                whileHover={{ color: "#DC2626" }}
                disabled={loading}
              >
                Send
              </motion.button>
            )}

            {successMesg && (
              <p className="bg-green-800 rounded-xl text-center text-white m-3 p-2">
                {successMesg}
              </p>
            )}
            {errorMesg && (
              <p className="bg-red-600 rounded-xl text-center text-white m-3 p-2">
                {errorMesg}
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
