import { MdCheckCircle } from "react-icons/md";

const highlights = [
  "Custom Web & Mobile Solutions",
  "Experienced Development Team",
  "Modern UI/UX & Scalable Architecture",
];

export default function AboutCompany() {
  return (
    <section className="bg-white w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

        {/* ── LEFT: Overlapping Images ── */}
        <div className="w-full lg:w-[48%] flex-shrink-0 relative min-h-[480px]">

          {/* Top-right large image */}
          <div className="absolute top-0 right-0 w-[72%] z-10 shadow-xl rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop"
              alt="Web development team"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Bottom-left smaller image */}
          <div className="absolute bottom-0 left-0 w-[58%] z-20 shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop"
              alt="Team meeting"
              className="w-full h-[240px] object-cover"
            />
          </div>

        </div>

        {/* ── RIGHT: Text Content ── */}
        <div className="w-full lg:w-[52%] pt-2">

          {/* About Us badge */}
          <div className="inline-block border border-gray-400 rounded-full px-5 py-1.5 text-sm text-gray-600 mb-6">
            About Us
          </div>

          {/* Subheading */}
          <p className="text-[#1aa3c1] text-lg font-semibold mb-5">
            Building Digital Solutions That Drive Growth
          </p>

          {/* Intro paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-5">
            We are a passionate team of developers, designers, and digital
            strategists dedicated to helping businesses grow through innovative
            technology solutions. From startups to established brands, we create
            products that combine performance, creativity, and scalability.
          </p>

          {/* Detail paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-7">
            Our software house specializes in modern web development, mobile
            applications, UI/UX design, and custom software solutions tailored
            to your business goals. With a strong focus on quality, user
            experience, and long-term success, we deliver digital products that
            help companies stand out in today’s competitive market.
          </p>

          {/* Bullet highlights */}
          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-700 text-base"
              >
                <MdCheckCircle className="text-[#1aa3c1] text-xl flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}