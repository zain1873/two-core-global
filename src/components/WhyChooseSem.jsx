import { useEffect, useRef } from "react";

const checks = [
  "Professional SEM Campaign Optimization",
  "Experienced Team Managing High-Performance Ad Accounts",
  "Paid Advertising & Digital Growth Solutions",
];

export default function WhyChooseUs() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(-20px)";
      setTimeout(
        () => {
          el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        },
        200 + i * 120,
      );
    });
  }, []);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white flex items-center justify-center px-4 py-16"
    >
      <style>{`
        .check-item:hover { transform: translateX(6px); }
        .check-item { transition: transform 0.2s ease; }
      `}</style>

      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT — Unsplash Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Pink blob behind image */}
            <div
              className="absolute inset-0 z-0 img-bg"
              style={{
                background: "#fde0d0",
                borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                transform: "scale(1.08) translate(4%, 2%)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
              alt="Digital services team at work"
              className="relative z-10 w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: "460px", objectPosition: "center top" }}
            />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Badge */}
          <span
            className="text-white text-sm font-semibold px-4 py-2 rounded-lg mb-5"
            style={{
              background: "#7c3aed",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Why Choose Us
          </span>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We're Professional Digital Services Provider Agency
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
            Boost your online visibility with strategic SEO solutions designed
            to improve rankings, increase organic traffic, and help your
            business reach the right audience through long-term search engine
            growth.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-5 w-full">
            {checks.map((item, i) => (
              <li
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="check-item flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#7c3aed" }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-bold text-gray-900 text-base sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
