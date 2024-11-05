export default function Footer() {
  return (
    <footer className="grid grid-cols-2 grid-rows-2 bg-black text-white px-20 py-5 gap-x-52 max-md:flex max-md:flex-col max-md:gap-10 max-md:items-center">
      <div className="flex gap-3 col-span-2 text-4xl max-md:flex-col max-md:text-5xl">
        <h2>DecoNest</h2>
        <h2 className="text-[#FF6201]">Interiors.</h2>
      </div>
      <div className="w-[60%] ">
        <p>
          Address - #23, Sowparnika, 7th Cross, 2nd Main,
          <br /> Mallappa Layout, Seegehalli, Virgo Nagar Post <br />
          Bengaluru-560049.
        </p>
      </div>
      <div className="max-md:w-[60%]">
        <p className="font-primarybold text-lg">For more details</p>
        <p>
          Bakelal Viswakarma - 8050703397 <br /> M V Prakasha - 9243131456
        </p>
      </div>
    </footer>
  );
}
