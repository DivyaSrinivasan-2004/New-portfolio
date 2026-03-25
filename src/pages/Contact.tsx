import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Send, Mail, MapPin, Linkedin, Github, MessageCircle, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RESUME_PATH = "/Divya%20Resume.pdf";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzvpvwv";

const contactInfo = [
  { icon: Mail, label: "Email", value: "divyas161104@gmail.com", href: "mailto:divyas161104@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8939205504", href: "tel:+918939205504" },
  { icon: MapPin, label: "Location", value: "Chennai, India", href: "#" },
  { icon: MessageCircle, label: "Response Time", value: "Within 24 hours", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/DivyaSrinivasan-2004" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/divyasrinivasan04" },
  { icon: Download, label: "Resume", href: RESUME_PATH, download: true },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 hero-glow" />
          <div className="floating-shape w-[400px] h-[400px] bg-primary/5 -top-20 -right-20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Have a project in mind or want to discuss an opportunity? 
                I'd love to hear from you. Reach out by email, phone, LinkedIn, or download my resume here.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 pb-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[180px] resize-none"
                        required
                      />
                    </div>
                    <Button variant="hero" size="lg" type="submit" className="w-full">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </Button>
                    {submitStatus && (
                      <p
                        className={`text-sm ${
                          submitStatus.type === "success" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {submitStatus.message}
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Contact Info Card */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-start gap-4 group"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Connect on Social
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        download={social.download ? "Divya Resume.pdf" : undefined}
                        type={social.download ? "application/pdf" : undefined}
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-accent rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Currently available
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open for full-time opportunities and project discussions. Feel free to connect through email, phone, or LinkedIn.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
