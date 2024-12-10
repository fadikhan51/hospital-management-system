  import React from 'react';
  import doctorImage from '../assets/bg_1.jpg';
  import { useDispatch, useSelector } from 'react-redux'



  const styles = {
    appBar: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2196f3',
      textDecoration: 'none',
    },
    navButtons: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      padding: '0.5rem 1.5rem',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    signupBtn: {
      backgroundColor: '#2196f3',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1976d2',
      },
    },
    registerBtn: {
      backgroundColor: 'white',
      color: '#2196f3',
      border: '2px solid #2196f3',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
    heroSection: {
        backgroundImage: `url(${doctorImage})`,
        backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    cta: {
      position: 'relative',
      color: 'white',
      textAlign: 'left',
      padding: '2rem',
      marginLeft: '4rem',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      padding: '2rem',
      borderRadius: '15px',
      transition: 'transform 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      '&:hover': {
        transform: 'translateY(-10px)',
      },
    },
    doctorsSection: {
      padding: '4rem 2rem',
      backgroundColor: '#e3f2fd',
      textAlign: 'center',
    },
    doctorCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '15px',
      margin: '1rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
    doctorImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
      border: '4px solid #2196f3',
    },
    testimonialSection: {
      padding: '4rem 2rem',
      backgroundColor: '#bbdefb',
      textAlign: 'center',
    },
    testimonialScroll: {
      display: 'flex',
      overflowX: 'auto',
      gap: '2rem',
      padding: '2rem 0',
      maxWidth: '1200px',
      margin: '0 auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    testimonialCard: {
      minWidth: '300px',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
    footer: {
      backgroundColor: '#4f4f4f',
      color: 'white',
      padding: '4rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    copyright: {
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '2rem',
      marginTop: '2rem',
    },
  };
    const LandingPage = () => {
      const dispatch = useDispatch()

      return (
        <div>
          <header style={styles.appBar}>
            <div style={styles.logo}>Diabeto</div>
            <div style={styles.navButtons}>
              <button 
                onClick={() => window.location.href = '/signup'} 
                style={{...styles.button, ...styles.signupBtn}}
              >
                Register
              </button>
              <button 
                onClick={() => window.location.href = '/signin'} 
                style={{...styles.button, ...styles.registerBtn}}
              >
                Signin
              </button>
            </div>
          </header>

          <section style={styles.heroSection}>
            <div style={styles.overlay}></div>
            <div style={styles.cta}>
              <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Your Vision Is Our Priority</h1>
              <p style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Get Expert Eye Care Services Today</p>
              <button style={{...styles.button, ...styles.signupBtn, padding: '1rem 2rem'}}>Book Appointment</button>
            </div>
          </section>

          <section style={{backgroundColor: '#f5f5f5', padding: '4rem 0'}}>
            <div style={styles.servicesGrid}>
              <div style={{...styles.serviceCard, backgroundColor: '#e3f2fd'}}>
                <h2 style={{marginBottom: '1rem', color: '#1565c0'}}>Skilled Ophthalmologists</h2>
                <p>Our team of expert ophthalmologists brings years of experience in treating various eye conditions.</p>
              </div>
              <div style={{...styles.serviceCard, backgroundColor: '#bbdefb'}}>
                <h2 style={{marginBottom: '1rem', color: '#1565c0'}}>Urgent Eye Care</h2>
                <p>Immediate attention for emergency eye care needs with minimal waiting time.</p>
              </div>
              <div style={{...styles.serviceCard, backgroundColor: '#90caf9'}}>
                <h2 style={{marginBottom: '1rem', color: '#1565c0'}}>Comprehensive Eye Examinations</h2>
                <p>Thorough eye examinations using state-of-the-art equipment for accurate diagnosis.</p>
              </div>
              <div style={{...styles.serviceCard, backgroundColor: '#64b5f6'}}>
                <h2 style={{marginBottom: '1rem', color: '#1565c0'}}>24 Hours Service</h2>
                <p>Round-the-clock availability for emergency eye care needs.</p>
              </div>
            </div>
          </section>

          <section style={styles.doctorsSection}>
            <h2 style={{marginBottom: '3rem', color: '#1565c0'}}>Our Expert Doctors</h2>
            <div style={styles.servicesGrid}>
              <div style={styles.doctorCard}>
                <img src="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg" alt="Doctor" style={styles.doctorImage}/>
                <h3 style={{marginBottom: '0.5rem'}}>Dr. Sarah Johnson</h3>
                <p style={{color: '#666'}}>Retina Specialist</p>
              </div>
              <div style={styles.doctorCard}>
                <img src="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg" alt="Doctor" style={styles.doctorImage}/>
                <h3 style={{marginBottom: '0.5rem'}}>Dr. Michael Chen</h3>
                <p style={{color: '#666'}}>Glaucoma Specialist</p>
              </div>
              <div style={styles.doctorCard}>
                <img src="https://t4.ftcdn.net/jpg/06/32/90/79/360_F_632907942_M6CVHD1ivhUrWK1X49PkBlSH3ooNPsog.jpg" alt="Doctor" style={styles.doctorImage}/>
                <h3 style={{marginBottom: '0.5rem'}}>Dr. Emily Brown</h3>
                <p style={{color: '#666'}}>Cornea Specialist</p>
              </div>
            </div>
          </section>

          <section style={styles.testimonialSection}>
            <h2 style={{marginBottom: '3rem', color: '#1565c0'}}>What Our Patients Say</h2>
            <div style={styles.testimonialScroll}>
              <div style={styles.testimonialCard}>
                <p style={{fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic'}}>"Excellent care and professional staff. Highly recommended!"</p>
                <h4 style={{color: '#2196f3'}}>John Doe</h4>
              </div>
              <div style={styles.testimonialCard}>
                <p style={{fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic'}}>"The doctors are very knowledgeable and caring."</p>
                <h4 style={{color: '#2196f3'}}>Jane Smith</h4>
              </div>
              <div style={styles.testimonialCard}>
                <p style={{fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic'}}>"Best eye care facility I've ever visited."</p>
                <h4 style={{color: '#2196f3'}}>Robert Johnson</h4>
              </div>
            </div>
          </section>

          <footer style={styles.footer}>
            <div style={styles.container}>
              <div style={styles.footerGrid}>
                <div>
                  <h3 style={{marginBottom: '1rem', color: '#90caf9'}}>Contact Us</h3>
                  <p style={{lineHeight: '1.8'}}>Email: support@diabeto.com<br />Phone: +1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 style={{marginBottom: '1rem', color: '#90caf9'}}>Quick Links</h3>
                  <p style={{lineHeight: '1.8'}}>About Us<br />Services<br />Privacy Policy</p>
                </div>
                <div>
                  <h3 style={{marginBottom: '1rem', color: '#90caf9'}}>Follow Us</h3>
                  <p style={{lineHeight: '1.8'}}>Facebook<br />Twitter<br />LinkedIn</p>
                </div>
              </div>
              <p style={styles.copyright}>© 2024 Diabeto. All rights reserved.</p>
            </div>
          </footer>
        </div>
      );
    };

    export default LandingPage;