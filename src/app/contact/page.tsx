"use client";

import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "USA",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    console.log("Contact form submitted:", formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "USA",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-0 pb-32">
       {/* Banner */}
       <section className="bg-primary-900 py-32 text-center text-white">
        <div className="section-container relative z-10">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 block">Reach Out to Us</span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Contact Islah Quran Academy</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto italic leading-relaxed">
            Ready to embark on your Quranic journey? Have questions or want to request a free trial? We are here to help.
          </p>
        </div>
      </section>

     {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
             {/* Left: Contact Info */}
             <div className="animate-fade-in-left">
               <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Communication Hub</span>
               <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-8 uppercase tracking-tight">Our Information</h2>
               <p className="text-primary-700/70 text-lg mb-12 italic leading-relaxed">
                 We respond to all queries within 24 hours. For urgent matters, please use our WhatsApp numbers listed below.
               </p>

               <div className="space-y-10">
                  <div className="flex gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-900 flex items-center justify-center shrink-0 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                        <Phone size={28} />
                     </div>
                     <div>
                        <p className="text-xs uppercase font-bold text-gold-600 mb-1 tracking-widest transition-colors group-hover:text-gold-500">Phone &amp; WhatsApp</p>
                        <p className="text-xl font-bold text-primary-900 leading-tight">+92 349 5554421</p>
                        <p className="text-xl font-bold text-primary-900 leading-tight">+92 302 0644414</p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                        <Mail size={28} />
                     </div>
                     <div>
                        <p className="text-xs uppercase font-bold text-emerald-700 mb-1 tracking-widest transition-colors group-hover:text-gold-600">Email Enquiries</p>
                        <p className="text-xl font-bold text-primary-900 leading-tight">info@islahquranacademy.com</p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                        <MapPin size={28} />
                     </div>
                     <div>
                        <p className="text-xs uppercase font-bold text-primary-800 mb-1 tracking-widest transition-colors group-hover:text-gold-600">Location</p>
                        <p className="text-xl font-bold text-primary-900 leading-tight">Mansehra Road,<br /> Abbottabad, Pakistan</p>
                     </div>
                  </div>
               </div>

               {/* Map Placeholder */}
               <div className="mt-16 rounded-3xl overflow-hidden border-8 border-primary-50 shadow-2xl h-64 lg:h-80 relative group animate-fade-in-up">
                  <div className="absolute inset-0 bg-primary-100 flex items-center justify-center text-center p-8">
                     <div>
                        <MapPin className="mx-auto mb-4 text-primary-900/40" size={48} />
                        <p className="text-primary-900/60 italic font-bold">Google Maps Iframe Placeholder</p>
                        <p className="text-xs text-primary-900/40 italic">In production, replace this with actual map embed code.</p>
                     </div>
                  </div>
                  {/* Actual Map Embed Code would go here */}
                  {/* <iframe src="..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
               </div>
             </div>

             {/* Right: Contact Form */}
             <div className="animate-fade-in-right">
               <div className="bg-white p-8 lg:p-12 rounded-3xl border border-primary-100 shadow-2xl shadow-primary-900/5 hover:border-gold-500 transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 border-b border-primary-50 pb-4 uppercase tracking-tight">Request Free Trial</h3>
                  
                  {submitted ? (
                    <div className="py-20 text-center animate-fade-in">
                       <CheckCircle2 color="#059669" size={100} className="mx-auto mb-8 animate-bounce-subtle" />
                       <h4 className="text-2xl font-bold text-primary-900 mb-4 uppercase tracking-widest">Message Sent!</h4>
                       <p className="text-primary-700/70 italic">Thank you for your interest. Our representative will contact you soon.</p>
                       <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-primary-900 uppercase tracking-widest mb-2" htmlFor="fullName">Full Name</label>
                          <input 
                            required 
                            id="fullName"
                            name="fullName" 
                            type="text" 
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white transition-all text-primary-900" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-primary-900 uppercase tracking-widest mb-2" htmlFor="email">Email address</label>
                          <input 
                            required 
                            id="email"
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white transition-all text-primary-900" 
                            placeholder="john@example.com" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-primary-900 uppercase tracking-widest mb-2" htmlFor="phone">Phone Number</label>
                          <input 
                            required 
                            id="phone"
                            name="phone" 
                            type="tel" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white transition-all text-primary-900" 
                            placeholder="+1 234 567 890" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-primary-900 uppercase tracking-widest mb-2" htmlFor="country">Country</label>
                          <select 
                            id="country"
                            name="country" 
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white transition-all text-primary-900 appearance-none"
                          >
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-primary-900 uppercase tracking-widest mb-2" htmlFor="message">Your message</label>
                        <textarea 
                          required 
                          id="message"
                          name="message" 
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-secondary/30 border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:bg-white transition-all text-primary-900 resize-none" 
                          placeholder="Tell us about your learning goals..." 
                        />
                      </div>

                      <Button 
                         type="submit" 
                         disabled={isSubmitting}
                         size="lg" 
                         variant="gold" 
                         className="w-full py-5 text-lg font-bold shadow-xl shadow-gold-600/20 hover:scale-[1.02] active:scale-95 transition-all text-center rounded-2xl flex items-center justify-center gap-3"
                      >
                         {isSubmitting ? (
                           <div className="h-6 w-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                         ) : (
                           <>
                             <Send size={24} />
                             Submit Request
                           </>
                         )}
                      </Button>
                      <p className="text-center text-xs text-primary-700/50 mt-6 italic">By submitting, you agree to our privacy policy and terms of service.</p>
                    </form>
                  )}
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Why Reach Out Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 uppercase tracking-tight mb-4">Why Students Contact Us</h2>
            <p className="text-primary-700/60 max-w-xl mx-auto italic">Common reasons families reach out to us every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: "🎓", title: "Book Free Trial", desc: "Get a no-commitment free lesson to experience our teaching quality first-hand." },
              { emoji: "📅", title: "Schedule Inquiry", desc: "Ask about class timings that fit your or your child&apos;s daily schedule." },
              { emoji: "💰", title: "Payment Options", desc: "Learn about monthly, quarterly, or yearly billing — including sibling discounts." },
              { emoji: "👩‍🏫", title: "Teacher Selection", desc: "Request a specific Qari or ask for a teacher recommendation, including female teachers for sisters and kids." },
              { emoji: "📚", title: "Course Guidance", desc: "Not sure which course to start with? Our team will guide you step by step." },
              { emoji: "🌍", title: "Technical Support", desc: "Need help setting up Zoom, Skype, or another platform? We&apos;ll help you get started." },
            ].map(item => (
              <div key={item.title} className="p-8 rounded-2xl bg-white border border-primary-50 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h4 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                <p className="text-primary-700/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Promise */}
      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="section-container">
          <p className="text-xl font-light text-emerald-100/70 max-w-2xl mx-auto">
            📞 We typically respond within <strong className="text-gold-400">2–4 hours</strong> during business hours. 
            For urgent queries, WhatsApp us directly at <strong className="text-gold-400">+92 349 5554421</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
