import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'text';
type Size = 'sm' | 'md' | 'lg';
type ColorScheme = 'default' | 'mtech' | 'marketing' | 'studio';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  colorScheme?: ColorScheme;
  href?: string;
  to?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  colorScheme = 'default',
  href,
  to,
  fullWidth = false,
  children,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded';
  
  // Variant classes
  const variantClasses = {
    primary: {
      default: 'bg-primary-gold text-primary-dark hover:bg-yellow-400 shadow-sm',
      mtech: 'bg-mtech-accent text-white hover:bg-blue-600 shadow-sm',
      marketing: 'bg-marketing-accent text-white hover:bg-red-600 shadow-sm',
      studio: 'bg-studio-accent text-white hover:bg-purple-600 shadow-sm',
    },
    secondary: {
      default: 'bg-neutral-800 text-white hover:bg-neutral-700',
      mtech: 'bg-mtech-light text-mtech-accent hover:bg-blue-100',
      marketing: 'bg-marketing-light text-marketing-accent hover:bg-red-100',
      studio: 'bg-studio-light text-studio-accent hover:bg-purple-100',
    },
    outline: {
      default: 'border-2 border-primary-gold text-primary-gold hover:bg-primary-gold/10',
      mtech: 'border-2 border-mtech-accent text-mtech-accent hover:bg-mtech-light',
      marketing: 'border-2 border-marketing-accent text-marketing-accent hover:bg-marketing-light',
      studio: 'border-2 border-studio-accent text-studio-accent hover:bg-studio-light',
    },
    text: {
      default: 'text-primary-gold hover:bg-primary-gold/10',
      mtech: 'text-mtech-accent hover:bg-mtech-light',
      marketing: 'text-marketing-accent hover:bg-marketing-light',
      studio: 'text-studio-accent hover:bg-studio-light',
    },
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant][colorScheme]} ${sizeClasses[size]} ${widthClasses}`;
  
  // Render based on whether it's a link or button
  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={classes} aria-label={typeof children === 'string' ? children : undefined}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props} aria-label={props['aria-label'] || (typeof children === 'string' ? children : undefined)}>
      {children}
    </button>
  );
};

export default Button;