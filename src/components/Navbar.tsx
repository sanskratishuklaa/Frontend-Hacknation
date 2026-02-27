import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Judge Fatigue", href: "#judge-fatigue" },
  { label: "Hack DNA", href: "#hack-dna" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Dashboards", href: "#dashboards" },
  { label: "Impact", href: "#impact" },
];

const themeOptions = [
  { value: "cosmic", label: "Cosmic Blue" },
  { value: "aurora", label: "Aurora Green" },
  { value: "sunset", label: "Sunset Purple" },
  { value: "oceanic", label: "Oceanic Teal" },
  { value: "graphite", label: "Graphite Dark" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("sunset");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("nova-theme") || "sunset";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const onThemeChange = (nextTheme: string) => {
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("nova-theme", nextTheme);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
            <Zap className="w-5 h-5 text-primary-foreground drop-shadow" />
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            Hack<span className="text-primary">Nation</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group rounded-lg hover:bg-muted/40"
            >
              <span className="relative">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 rounded-full" />
              </span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          {/* Theme Selector */}
          <div className="relative group">
            <select
              value={theme}
              onChange={(event) => onThemeChange(event.target.value)}
              aria-label="Select background theme"
              className="h-10 rounded-xl border border-border/60 bg-muted/40 backdrop-blur-sm px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/60 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background transition-all duration-300 cursor-pointer appearance-none pr-8"
            >
              {themeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Sign In Button */}
          <Link
            to="/auth"
            className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 hover:bg-muted/40 border border-transparent hover:border-border/50"
          >
            Sign In
          </Link>

          {/* Get Started Button */}
          <Link
            to="/auth"
            className="relative px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/40 transition-colors duration-300 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-border/30"
        >
          <div className="glass-card mx-4 my-3 rounded-xl p-4 space-y-2 backdrop-blur-xl">
            {/* Mobile Nav Links */}
            <div className="space-y-1 pb-3 border-b border-border/30">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Theme Selector */}
            <div className="pt-2 space-y-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Theme
              </label>
              <select
                value={theme}
                onChange={(event) => onThemeChange(event.target.value)}
                aria-label="Select background theme"
                className="w-full h-10 rounded-lg border border-border/60 bg-muted/40 backdrop-blur-sm px-3 py-2 text-sm font-medium text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 cursor-pointer appearance-none pr-8"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Get Started Button */}
            <Link
              to="/auth"
              onClick={() => setMobileOpen(false)}
              className="block w-full mt-3 px-5 py-3 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
