const Footer = () => {
  return (
    <>
      <section className="bg-[#F3C623] text-white text-center px-6 sm:px-8 py-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Ready to launch your token?
        </h3>
        <p className="text-xs sm:text-sm mb-4">
          Tag <span className="font-bold">@TokenBot</span> on Twitter or TikTok
          — we'll do the rest.
        </p>
        <button className="bg-white text-[#F3C623] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-100 transition">
          Get Started Now
        </button>
      </section>

      <footer className=" bg-[#F3C623] text-[#4B5563] text-center text-xs pt-5 pb-5 border-t border-[#F3C623]/20">
        © {new Date().getFullYear()} TokenBot. All rights reserved.
      </footer>
    </>
  )
}
export default Footer;
