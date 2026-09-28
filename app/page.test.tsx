import { render, screen } from '@testing-library/react';
import Home from './page';

// Mock the nested components that might have complex animations or use browser APIs
jest.mock('./components/Reveal', () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('./components/Parallax', () => ({
  Parallax: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('Home Page', () => {
  it('renders main hero section', () => {
    render(<Home />);
    expect(screen.getByText(/Precision Automotive Components/i)).toBeInTheDocument();
    expect(screen.getByText(/Maximum Uptime/i)).toBeInTheDocument();
  });

  it('renders part search tool', () => {
    render(<Home />);
    expect(screen.getByText('Find Your Part')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search Inventory/i })).toBeInTheDocument();
  });

  it('renders inventory categories', () => {
    render(<Home />);
    expect(screen.getByText('Our Inventory Categories')).toBeInTheDocument();
    expect(screen.getAllByText('Engine Parts').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Suspension').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Electrical').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Braking').length).toBeGreaterThan(0);
  });

  it('renders why choose us section', () => {
    render(<Home />);
    expect(screen.getByText('Why Partner With Us?')).toBeInTheDocument();
    expect(screen.getByText('100% Genuine & Certified')).toBeInTheDocument();
  });
});
