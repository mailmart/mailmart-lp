import React, { useState } from 'react';
import { Mail, Filter, Store, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';
import { FeatureCard } from '@/components/FeatureCard';
import heroImage from '@/assets/hero-image.jpg';
import logoImage from '@/assets/mailmart-logo-nobg.png';

const Index = () => {
  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // FAQ data with state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does MailMart protect my email privacy and security?",
      answer: "At MailMart, your privacy is the top priority. We never share, sell, or expose your personal email address. When you connect your inbox, we only access promotional emails - no personal or sensitive conversations. Data is processed securely using encrypted connections, and you remain in full control: you can revoke access or unsubscribe from unwanted emails at any time. MailMart acts as a protective layer - decluttering promotions while keeping your inbox private."
    },
    {
      question: "Which email providers does MailMart support?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What's in it for brands?",
      answer: "MailMart gives brands a smarter way to reach customers. Instead of getting lost in crowded inboxes or spam folders, your offers are displayed in a clean, standardized format - name, logo, deal, category, directly where customers are actively looking for deals. This means higher visibility, better engagement, and more conversions, while giving brands a trusted channel to showcase their promotions to an interested audience."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    // keep top padding so sticky header doesn't cover content
    <div className="min-h-screen bg-gradient-subtle pt-24">
      {/* Sticky Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="MailMart Logo" className="h-14 w-14 rounded-md logo-gold" />
            <span className="text-2xl font-bold">MailMart</span>
          </div>
          <nav className="flex items-center gap-6">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, 'features')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              onClick={(e) => handleSmoothScroll(e, 'faq')}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              FAQ
            </a>
            <button className="bg-gradient-hero text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-300">
            Join Waitlist
          </button>
          </nav>
        </div>
      </header>

      {/* Centered hero content */}
      <section className="container mx-auto px-6 py-20 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            The Future Of <span className="text-gold">Offers</span> for Users and Brands
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Where savings meet simplicity. Where brands meet shoppers who care.
          </p>

          <div className="mb-6">
            <p className="mb-2 font-medium">Join the waitlist for early access</p>

            {/* Waitlist form with centered wider layout */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <WaitlistForm />
                <p className="mt-3 text-sm text-muted-foreground text-left">💡 Be the first to know when we launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why MailMart?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform the chaos of promotional emails into organized, actionable savings opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Store className="h-5 w-5" />}
            title="Storefront Experience"
            description="Browse your personalized offers in a clean, store-like interface that makes finding deals effortless and enjoyable."
          />
          <FeatureCard
            icon={<Zap className="h-5 w-5" />}
            title="Never Miss Deals"
            description="Get notified about expiring offers and trending deals from your favorite brands before they disappear."
          />
          <FeatureCard
            icon={<Mail className="h-5 w-5" />}
            title="Declutter your inbox"
            description="Keep your inbox clean for important messages. Let us handle the noise."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How MailMart Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your email offers into an organized shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">1. Connect Gmail</h3>
            <p className="text-muted-foreground">
              Securely connect your Gmail account to automatically sync promotional emails and offers.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
              <Filter className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">2. AI Categorizes</h3>
            <p className="text-muted-foreground">
              Our smart filtering categorizes offers into Fashion, Electronics, Groceries, and more.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
              <Store className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">3. Browse & Save</h3>
            <p className="text-muted-foreground">
              Shop your personalized storefront with search, filters, and never miss another deal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about MailMart.
          </p>
        </div>
        
        {/* FAQ Content */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              {/* Animated answer section */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 MailMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;