import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a192f] to-[#112240] text-gray-100">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl text-white">
          Connect. Collaborate. Grow.
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          SkillLink bridges the gap between local freelancers and real-world clients.
          Discover, hire, and collaborate with trusted professionals in your area.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={()=>navigate('/auth/login')} className="px-6 flex items-center py-3 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Local Connections",
            desc: "Find skilled freelancers nearby, ready to work on your next project.",
          },
          {
            title: "Smart Search",
            desc: "Grab the best deals on searching for any type of service",
          },
          {
            title: "Secure & Simple",
            desc: "JWT based Auth, MongoDB, and verified profiles ensure safe and reliable deals.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0b2239] border border-[#1e3a5f] hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Ready to Link Skills with Opportunity?
        </h2>
        <button onClick={()=>navigate('/auth/login')} className="px-8 py-4 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
          Join SkillLink Now
        </button>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SkillLink. All rights reserved.
      </footer>
    </div>
  );
}
