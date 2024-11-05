import icon3 from "../assets/icons/guidance_kitchen.svg"
import icon2 from "../assets/icons/hugeicons_paint-brush-02.svg"
import icon4 from "../assets/icons/hugeicons_stars.svg"
import icon1 from "../assets/icons/hugeicons_wardrobe-02.svg"
import icon5 from "../assets/icons/ph_office-chair-thin.svg"
import icon from "../assets/icons/tabler_window.svg"
const services = [  {
    id: 1,
    icon: icon1,
    title: "Modular Wardrobe",
    description:
      "Optimize your storage with our modular wardrobes, designed to fit seamlessly into your room while providing flexible organization options.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Painting",
    description:
      "Refresh your walls with high-quality, professional painting services. We offer a range of colors and finishes to suit every space.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Modular Kitchen",
    description:
      "Our modular kitchen designs maximize storage, ensure easy accessibility, and add a modern aesthetic to your home.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Curtains",
    description:
      "Give your furniture and wooden surfaces a new lease on life with our expert polishing services, enhancing their natural beauty.",
  },
  {
    id: 5,
    icon: icon,
    title: "Aluminium Sliding Windows",
    description:
      "Durable and sleek, our aluminium sliding windows provide easy operation and a modern look, ideal for any room.",
  },
  {
    id: 6,
    icon: icon5,
    title: "Office Tables and Partitions",
    description:
      "Optimize your workspace with our custom office tables and partition solutions, designed for comfort, privacy, and productivity.",
  },
];
export default function Services() {
  return (
    <section className="grid place-items-center h-[89vh] gap-5 w-full pt-5 max-lg:py-10 max-lg:h-full "  id="services">
      <h2 className="font-primarybold text-6xl max-sm:text-2xl">Services We Provide</h2>
      <p className="text-lg max-sm:text-base text-center">Let us help you create a space that reflects your unique vision.</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 px-20 max-sm:grid-cols-1 max-lg:px-5 max-lg:grid-cols-2">
        {services.map((service)=>
        <div key={service.id} className="bg-white rounded-lg p-5 ">
          <img src={service.icon} alt={`icon ${service.id}`} className="w-14"/>
          <h3 className="font-primarybold uppercase">{service.title}</h3>
          <p>{service.description}</p>
        </div>
        )}
      </div>
    </section>
  );
}
