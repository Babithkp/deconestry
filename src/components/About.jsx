import zigzac from "../assets/icons/zigzac.svg";
import aboutImg1 from "../assets/images/about-image1.png";
import aboutImg2 from "../assets/images/about-image2.png";
import aboutImg3 from "../assets/images/about-image3.png";
import aboutImg4 from "../assets/images/about-image4.png";
import aboutImg5 from "../assets/images/about-image5.png";
import aboutImg6 from "../assets/images/about-image6.png";


export default function About() {
  return (
    <section className="h-screen w-[90%] flex justify-center items-center relative max-2xl:my-20 " id="about">
      <h2 className="relative  text-6xl max-sm:text-lg">
        A unique perspective on every 
        <span className="relative ml-5 max-sm:ml-2">
        detail...{" "}
        <img src={zigzac} alt="zigzac" className="absolute w-[8rem] -bottom-8 right-14 max-sm:w-[3rem] max-sm:right-2 max-sm:-bottom-4" />
        </span>
      </h2>
        <img src={aboutImg2} alt="aboutImg2" className="w-[15rem] absolute left-10 top-28 max-sm:left-0 max-sm:w-[10rem] max-sm:top-48" />
        <img src={aboutImg6} alt="aboutImg5" className="w-[10rem] absolute right-10 top-20 max-sm:right-0 max-sm:w-[9rem] max-sm:top-30"  />
        <img src={aboutImg3} alt="aboutImg3" className="w-34 absolute top-20 right-96 max-sm:hidden" />
        <img src={aboutImg1} alt="aboutImg1" className="w-[20rem] absolute bottom-10 max-sm:w-[10rem] max-sm:bottom-48 max-sm:left-5" />
        <img src={aboutImg4} alt="aboutImg4" className="w-[15rem] absolute bottom-0 left-0 max-sm:w-[8rem] " />
        <img src={aboutImg5} alt="aboutImg5" className="w-[15rem] absolute bottom-0 right-0 max-sm:w-[9rem] max-sm:h-[15rem]"  />
    </section>
  );
}
