import { useState } from 'react';
import { toast } from 'react-toastify';
import { VscLoading } from "react-icons/vsc";
export default function ContactUs() {  
  const [isLoading, setIsLoading] = useState(false)
  const sendContactusMessage = async (event) => {
    event.preventDefault();
    setIsLoading(true)

    const formData = new FormData(event.target);

    formData.append("access_key", "2ec64207-6d8b-4e43-aed2-f88946774177");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    if (response.ok) {
      toast.success("Thanks for contacting us! We will get back to you shortly.",{
        hideProgressBar: true,
      });
    }else{
      toast.error("Something went wrong. Please try again later.")
    }

    event.target.reset();
    setIsLoading(false)
  };
  return (
    <section
      className=" h-[89vh] flex justify-center items-center px-20 gap-5 max-sm:flex-col max-lg:px-5 max-2xl:my-10"
      id="contact"
    >
      <div className="w-1/2 flex flex-col gap-5 max-lg:w-full">
        <h3 className="text-6xl font-primarybold max-lg:text-4xl">
          Get in Touch
        </h3>
        <p className="font-primarymedium max-lg:font-primarylight">
          We&apos;re here to help! Reach out to us with any inquiries. Our team
          is ready to assist you and ensure you have a seamless experience.
        </p>
        <form
          className="grid grid-cols-2 grid-rows-4 gap-5 font-primarymedium"
          onSubmit={sendContactusMessage}
        >
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              className="bg-transparent border border-black rounded-lg p-2"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              className="bg-transparent border border-black rounded-lg p-2"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2 col-span-2">
            <label htmlFor="phone">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              className="bg-transparent border border-black rounded-lg p-2"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2 col-span-2">
            <label htmlFor="email">Email ID</label>
            <input
              name="email"
              id="email"
              type="email"
              className="bg-transparent border border-black rounded-lg p-2"
            />
          </div>
          <button disabled={isLoading} className="w-full bg-[#FF6201] text-white rounded-lg p-2 col-span-2 h-fit text-xl font-primarymedium grid place-items-center">
            {isLoading? <VscLoading size={24} className="animate-spin"/> : 'Send'}
          </button>
        </form>
      </div>
      <div className="w-1/2 max-lg:hidden">
        <iframe
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Sowparnika%20The%20Designer%20Boutique,%2068/1,%20Manjunatha%20Layout%20Seegehalli,%20Medahalli%20Main%20Rd,%20Virgonagar,%20Bengaluru,%20Karnataka%20560049+(Deconestry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}
