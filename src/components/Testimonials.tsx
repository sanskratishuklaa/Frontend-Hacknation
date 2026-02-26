import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Student, IIT Delhi", quote: "HackNation transformed my hackathon experience. The platform is seamless — from registration to submission, everything just works.", avatar: "PS" },
  { name: "Dr. Rajesh Kumar", role: "Judge, National Innovation Board", quote: "The evaluation dashboard is phenomenal. Structured rubrics and real-time scoring made judging 200+ projects actually enjoyable.", avatar: "RK" },
  { name: "Ananya Patel", role: "Organizer, TechFest Mumbai", quote: "We managed 3000+ participants with zero chaos. The analytics and team management tools are a game-changer for organizers.", avatar: "AP" },
  { name: "Vikram Singh", role: "Mentor, Google Developer Expert", quote: "The mentorship tools make it easy to track teams, provide feedback, and ensure everyone gets the guidance they need.", avatar: "VS" },
  { name: "Sneha Reddy", role: "Participant, Smart India Hackathon", quote: "The team formation feature matched me with the perfect teammates. We won first place in our category!", avatar: "SR" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Loved by <span className="gradient-text">Innovators</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 rounded-2xl text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-all">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/40 transition-all">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
