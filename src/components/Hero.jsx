import zigzac from "../assets/icons/zigzac.svg";
import heroImg from "../assets/images/hero-image.png";
import subImg1 from "../assets/images/subHero-image1.png";
import subImg2 from "../assets/images/subHero-image2.png";
import subImg3 from "../assets/images/subHero-image3.png";
export default function Hero() {
  return (
    <section className="flex h-[89vh] w-full justify-center items-center px-8 max-sm:px-5 max-sm:text-center max-lg:px-2 max-2xl:pt-20 max-2xl:mb-20">
      <div className="w-1/2 flex flex-col gap-10 hero-left max-lg:gap-8 max-sm:w-full max-sm:items-center">
        <h2 className="text-6xl font-primarymedium w-[70%] relative max-lg:text-4xl max-sm:w-[90%] max-sm:text-4xl ">
          Interior Design In a modern way
          <img
            src={zigzac}
            alt="zigzac"
            className="-bottom-8 right-3 absolute max-sm:w-20 max-sm:-bottom-5 max-sm:right-5"
          />
        </h2>
        <p className="font-primarymedium w-[45%] text-xl max-xl:text-lg max-sm:w-full max-sm:text-lg max-sm:font-primarylight">
          Where the mind creates beauty, the heart creates a home. Welcome to
          home sweet home
        </p>
        <div className="flex gap-5 font-primarymedium text-lg">
          <a href="#contact" className="bg-black text-white rounded-xl px-4 py-2">
            Contact <span className="text-[#FF6201]">Us</span>
          </a>
          <a href="#about" className="border border-black rounded-xl px-4 py-2">
            Explore
          </a>
        </div>
        <div className="flex gap-5 max-lg:hidden">
          <img src={subImg1} alt="subImg1" className="w-32" />
          <img src={subImg2} alt="subImg2" className="w-32" />
          <img src={subImg3} alt="subImg3" className="w-32" />
        </div>
      </div>
      <figure className="w-1/2 grid place-items-center hero-right max-sm:hidden">
        <img src={heroImg} alt="hero image" className="h-[35rem] max-lg:h-[25rem]"/>
      </figure>
      
    </section>
  );
}
