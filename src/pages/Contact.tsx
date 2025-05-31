import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    document.title = "My Portfolio | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyNN5yrtMcCOQfU8MBrKsHoCZdI9Wcljdo5MjHDeJMAgVzE-SxGjnMj-OM8ilNSWKj7hw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: "Something went wrong while submitting the form.",
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screenflex flex-col ">
      <main className="flex flex-col min-h-screen">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-text border-b-2 border-portfolio-primary pb-2 inline-block">
            Contact Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-6 text-portfolio-primary">
                Get In Touch
              </h2>
              <p className="text-portfolio-text/80 mb-8">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat. Feel free to reach out through the contact form
                or via the contact information below.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center">
                    <Mail size={18} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text/70">Email</p>
                    <a
                      href="mailto:poriyaprem2612@gmail.com"
                      className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                    >
                      poriyaprem2612@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center">
                    <Phone size={18} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text/70">Phone</p>
                    <a
                      href="tel:+14376610376"
                      className="text-portfolio-text hover:text-portfolio-primary transition-colors"
                    >
                      +1 (437) 661-0376
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center">
                    <MapPin size={18} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text/70">Location</p>
                    <p className="text-portfolio-text">Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-portfolio-primary">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-portfolio-text/70 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-portfolio-text focus:outline-none focus:border-portfolio-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-portfolio-text/70 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-portfolio-text focus:outline-none focus:border-portfolio-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-portfolio-text/70 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-portfolio-text focus:outline-none focus:border-portfolio-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-portfolio-text/70 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-portfolio-text focus:outline-none focus:border-portfolio-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-8 bg-white/5 backdrop-blur-sm mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-portfolio-text/70">
            © {new Date().getFullYear()} Prem Poriya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
