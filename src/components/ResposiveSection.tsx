import "../styles/responsive.css";

const ResponsiveSection: React.FC = () => {
  return (
    <section className="responsive-section">
      <div className="responsive-container">
        <div className="responsive-content">
          <h1 className="responsive-title">Responsive Design</h1>
          <p className="responsive-description">
            Our designs adapt seamlessly to any device, ensuring a consistent
            user experience across all platforms.
          </p>
        </div>
        <div className="responsive-container-image slider">
          <img
            src="/img/phone-png.webp"
            alt="Responsive Example 1"
            className="responsive-image"
          />{" "}
           <img
            src="/img/Macbook-Air-egguzmassage.com.png"
            alt="Responsive Example 1"
            className="responsive-image"
          />{" "}
           <img
            src="/img/phone-png.webp"
            alt="Responsive Example 1"
            className="responsive-image"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;
