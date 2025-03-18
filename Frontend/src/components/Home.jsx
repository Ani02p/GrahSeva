import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Nav-bar.css'; 
import { loginUser } from "../Api/grahSevaAPI";


function Home() {
  return (
    <div>
     
      <nav>
        <div className="logo-section">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        </div>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About Us</a> 
          </li>
          <li>
            <a href="#why-choose-us">Why Choose Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a> 
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
          <Link to="/Dashboard">dashboard</Link>
          </li>
        </ul>
      </nav>

   
      <div className="home-content">
        <h1>Welcome to Grah Seva</h1>
        <p>Your one-stop solution for various household services
        <strong>Grah Sevaa</strong> is your one-stop solution for reliable and professional home services.
      Whether you need a plumber to fix leaks, an electrician for repairs, or a gardener to enhance your backyard,
      we connect you with verified professionals in your area.
      Our mission is to make home services accessible, efficient, and hassle-free for everyone.</p>
      </div>

    
      <section className="services" id="services">
        <h2>Services <span>+</span></h2>
        <p>We offer a wide range of professional home services. Our skilled professionals are ready to assist you with various tasks such as plumbing, electrical work, cleaning, and more.</p>
        
        <div className="services-marquee">
          <div className="marquee-container">
           
            <div className="marquee-item">
              <img src="/plumber.jpg" alt="Plumber" />
              <h3>Plumber</h3>
              <p>Professional plumbing services for leaks, pipes, and repairs.</p>
            </div>
            <div className="marquee-item">
              <img src="/electrician.jpg" alt="Electrician" />
              <h3>Electrician</h3>
              <p>Safe and reliable electrical services for your home or office.</p>
            </div>
            <div className="marquee-item">
              <img src="/gardner.jpg" alt="Gardener" />
              <h3>Gardener</h3>
              <p>Expert gardening and landscaping services to enhance your garden.</p>
            </div>
            <div className="marquee-item">
              <img src="/carpainter.jpg" alt="Carpenter" />
              <h3>Carpenter</h3>
              <p>Custom carpentry solutions for furniture and repairs.</p>
            </div>
            <div className="marquee-item">
              <img src="/cleaner.jpg" alt="Cleaner" />
              <h3>Cleaner</h3>
              <p>Efficient cleaning services for homes and offices.</p>
            </div>
            <div className="marquee-item">
              <img src="/painter.jpg" alt="Painter" />
              <h3>Painter</h3>
              <p>Interior and exterior painting services to brighten up your space.</p>
            </div>
            <div className="marquee-item">
              <img src="/Technician.jpg" alt="Technician" />
              <h3>Technician</h3>
              <p>Tech repairs and installations for all your devices and appliances.</p>
            </div>
            <div className="marquee-item">
              <img src="/COOK.jpg" alt="Cook" />
              <h3>Chef</h3>
              <p>Crafting delicious dishes with passion and precision.</p>
            </div>
            <div className="marquee-item">
              <img src="/patient-care.jpg" alt="Patient Care" />
              <h3>Patient Care</h3>
              <p>Compassionate care services for your loved ones' well-being.</p>
            </div>
            <div className="marquee-item">
              <img src="/baby-sitter.jpg" alt="Baby Sitter" />
              <h3>Baby Sitter</h3>
              <p>Trusted childcare services ensuring safety and happiness for kids.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="why-choose-us">
    <h1>Why Choose Us</h1>
    <h3>Security You Can Trust</h3>
    <p>
      We take your safety and security seriously. All our professionals are verified through a stringent background check and are insured to provide you with peace of mind. Our platform ensures that only trustworthy and qualified professionals are connected with our customers.
    </p>
    <h3>Transparent Pricing</h3>
    <p>
      We believe in clear and upfront pricing with no hidden fees. Our pricing is competitive and ensures that you only pay for the services you need. Whether you're booking a plumber, electrician, or any other professional, you’ll always know the cost before the job begins.
    </p>
    <h3>Strict Policies for Users and Workers</h3>
    <p>
      We uphold strict policies that protect both users and workers. For users, we ensure that only skilled professionals are allowed on our platform. Workers are expected to maintain high standards of professionalism, punctuality, and integrity. We enforce guidelines to ensure that everyone benefits from a safe, respectful, and efficient service.
    </p>
  </section>
  <section id="about">
    <h1>About Us</h1>
    <p>
      <strong>Grah Sevaa</strong> is committed to providing reliable, efficient, and top-quality home services to our customers. Our professional team includes expert plumbers, electricians, cleaners, gardeners, and other professionals who are trained to handle various household tasks. 
    </p>
    <p>
      We aim to make life easier for homeowners by connecting them with verified professionals who are available when you need them most. Whether you're a homeowner looking for reliable services or a service provider seeking more opportunities, Grah Sevaa is here to help.
    </p>
  </section>
  <section id="contact">
    <h1>Contact Us</h1>
    <p><strong>Email:</strong> <a href="mailto:GrahSeva.gamil.com">GrahSeva.gamil.com</a></p>
    <p><strong>Phone:</strong> <a href="tel:+8602180745"> +91 8602180745</a></p>
    <p><strong>Address:</strong> Tusliana Chandan 404 - Near Kank Corridor Near Aurobindo Hospital Bhawarsala Indore</p>
  </section>
      <footer className="footer">
        <p>&copy; 2024 Grah Seva. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
