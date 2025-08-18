import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-soft transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-hero rounded-lg text-primary-foreground">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};