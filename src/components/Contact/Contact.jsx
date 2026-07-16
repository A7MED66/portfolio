import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const colors = darkMode
    ? {
        text: "text-white",
        subText: "text-gray-300",
        card: "backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl",
        input:
          "bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500 focus:border-orange-400",
        iconBox: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
        socialBtn:
          "border border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400",
      }
    : {
        text: "text-gray-900",
        subText: "text-gray-600",
        card: "backdrop-blur-xl bg-white/80 border border-gray-200 shadow-xl",
        input:
          "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500",
        iconBox: "bg-orange-50 text-orange-600 border border-orange-200",
        socialBtn:
          "border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500",
      };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`,
    );
    window.location.href = `mailto:ahmedragheb@example.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmed.ragheb3232@gmail.com",
      href: "mailto:ahmed.ragheb3232@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 102 379 9696",
      href: "tel:+20 102 379 9696",
    },
    { icon: MapPin, label: "Location", value: "Damietta, Egypt", href: null },
  ];

  const socials = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/A7MED66",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-ragheb-/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col body-font"
    >
      {/* Glow */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex items-start justify-center pointer-events-none">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl opacity-20 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-24 w-full">
        {/* Header */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-orange-500 mb-2">
            Contact
          </h1>
          <div className="w-12 h-1 bg-orange-500 rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Info */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className={`lg:col-span-2 rounded-3xl p-6 sm:p-8 ${colors.card} flex flex-col`}
          >
            <h2 className={`text-xl font-bold mb-6 ${colors.text}`}>
              Contact Information
            </h2>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${colors.iconBox}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p
                      className={`text-xs uppercase tracking-wide ${colors.subText}`}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className={`text-sm font-medium hover:text-orange-500 transition-colors ${colors.text}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <p
                className={`text-xs uppercase tracking-wide mb-3 ${colors.subText}`}
              >
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 rounded-xl transition-colors duration-300 ${colors.socialBtn}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className={`lg:col-span-3 rounded-2xl p-6 sm:p-8 ${colors.card}`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className={`text-sm font-medium ${colors.text}`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={`rounded-xl px-4 py-3 text-sm outline-none transition-colors ${colors.input}`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className={`text-sm font-medium ${colors.text}`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={`rounded-xl px-4 py-3 text-sm outline-none transition-colors ${colors.input}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className={`text-sm font-medium ${colors.text}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className={`rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none ${colors.input}`}
                />
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] text-white text-sm font-semibold rounded-full transition duration-300"
              >
                <Send size={16} />
                Send Message
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-sm text-orange-500">
                  <CheckCircle2 size={16} />
                  Opening your email client…
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
