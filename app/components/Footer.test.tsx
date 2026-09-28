import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    const logoImg = screen.getByAltText('Bab Al Sajaah Logo');
    expect(logoImg).toBeInTheDocument();
  });

  it('renders company name in English and Arabic', () => {
    render(<Footer />);
    expect(screen.getByText('باب الصجعة')).toBeInTheDocument();
    expect(screen.getByText('BAB AL SAJAAH AUTO SPARE PARTS TR. L.L.C')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText('Sharjah, United Arab Emirates')).toBeInTheDocument();
    expect(screen.getByText(/06-5360431/i)).toBeInTheDocument();
    expect(screen.getByText(/056-4997292/i)).toBeInTheDocument();
    expect(screen.getByText(/sajaauto@gmail.com/i)).toBeInTheDocument();
  });

  it('renders legal and customer care links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Shipping Info')).toBeInTheDocument();
    expect(screen.getByText('Returns')).toBeInTheDocument();
    expect(screen.getByText('Technical Support')).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 Bab Al Sajaah Industrial./i)).toBeInTheDocument();
  });
});
