import React from 'react';
import { Mail, Filter, Store, Zap } from 'lucide-react';
import { WaitlistForm } from '@/components/WaitlistForm';
import { FeatureCard } from '@/components/FeatureCard';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">MailMart</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Your Email 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Offers</span> Into 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Savings</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Stop missing great deals buried in your inbox. MailMart curates and organizes all your promotional emails into a beautiful, easy-to-browse storefront.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Join the waitlist for early access</p>
              <WaitlistForm />
              <p className="text-sm text-muted-foreground">
                💡 Be the first to know when we launch
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="MailMart email organization interface"
              className="w-full rounded-2xl shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
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
            icon={<Filter className="h-5 w-5" />}
            title="Smart Curation"
            description="AI-powered filtering automatically identifies and categorizes your promotional emails, separating deals from clutter."
          />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-card rounded-2xl shadow-card border border-border p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to transform your inbox?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of savvy shoppers who never miss a deal. Get early access to MailMart.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 MailMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
