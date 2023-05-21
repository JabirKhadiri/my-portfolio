import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [succes,setSucces] = useState(false); 

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current) {
      emailjs
        .sendForm(
          "service_30sltzo",
          "template_fd672zf",
          ref.current,
          "Oi0eP94hMrXfyHuJU"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSucces(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-medium 
              mb-2 tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 
          pb-24 p-6 items-start"
            onSubmit={sendEmail}
            ref={ref}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all
            resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">Send</button>
            {succes && <span>Your message has been sent!</span>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
