import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  // EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_81rgyfl", "template_xhhxi0s", formRef.current, {
        publicKey: "HllQBKPnBV9zqueYQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      id="Contact"
      className="max-w-[1366px] mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      {/* Text */}
      <motion.div
        variants={variants}
        className="textContainer flex flex-col gap-6 flex-1"
      >
        <h1 className="text-8xl font-bold">Let&apos;s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>jerickmalungcutdev@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Bacolor Pampanga Philippines</span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>+639169208102</span>
        </div>
      </motion.div>

      {/* Form */}
      <div className="formContainer flex-1 relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute -top-[90px] left-[90px] -z-10"
        >
          <svg
            width="500px"
            height="500px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={isInView && { pathLength: 1 }}
              initial={{ pathLength: 0 }}
              // whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
              stroke="orange"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="flex flex-col gap-6"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Fullname"
            required
            className="border border-white py-2 px-4 bg-transparent text-[15px] rounded-md placeholder:text-slate-500"
          />
          <input
            name="user_email"
            type="email"
            placeholder="example@gmail.com"
            required
            className="border border-white py-2 px-4 bg-transparent text-[15px] rounded-md placeholder:text-slate-500"
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Message"
            className="border border-white py-2 px-4 bg-transparent text-[15px] rounded-md placeholder:text-slate-500"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-slate-800 py-2 text-center text-[15px] font-bold rounded-md"
          >
            Submit
          </button>
          {/* {error === false ? "Success" : "Error"} */}
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
