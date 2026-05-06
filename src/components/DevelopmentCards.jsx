

import '../css/developmentCards.css';

const SERVICES = [
  {
    id: 1,
    label: 'Development',
    title: 'Custom Web Development',
    description:
      'We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to create a fully customized web solution that meets both your functional and aesthetic goals.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop',
    alt: 'Two professionals reviewing work at a computer',
  },
  {
    id: 2,
    label: 'Development',
    title: 'Mobile App Development',
    description:
      'From concept to launch, we craft high-performance mobile apps for iOS and Android. Cross-platform expertise ensures your app is scalable, intuitive, and drives real engagement on every device.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    alt: 'Mobile phones and development tools',
  },
  {
    id: 3,
    label: 'Development',
    title: 'Ecommerce Development',
    description:
      'Launch high-converting online stores built for scale. We architect ecommerce experiences that are fast, secure, and optimised to turn browsers into buyers — on every screen size.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
    alt: 'Shopping cart and ecommerce concept',
  },
  {
    id: 4,
    label: 'Design',
    title: 'UI / UX Design',
    description:
      'We design interfaces that are as beautiful as they are functional. Through deep user research and iterative prototyping, every interaction feels natural, delightful, and perfectly on-brand.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop',
    alt: 'Designer working on a UI mockup',
  },
  {
    id: 5,
    label: 'Design',
    title: 'Graphic Design',
    description:
      'Bold visuals that tell your brand story. From logos and brand identities to marketing collateral, we create graphics that leave a lasting impression across every touchpoint.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&auto=format&fit=crop',
    alt: 'Graphic design tools and color palette',
  },
  {
    id: 6,
    label: 'Marketing',
    title: 'Digital Marketing & SEO',
    description:
      'Drive measurable growth with data-driven strategies. We combine SEO, SEM, and social media marketing to maximise your online visibility and convert traffic into loyal customers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    alt: 'Analytics dashboard showing growth metrics',
  },
];

function ServiceCard({ label, title, description, image, alt }) {
  return (
    <div className="service-card">
      {/* Background image */}
      <img className="service-card__img" src={image} alt={alt} />

      {/* Idle gradient overlay */}
      <div className="service-card__overlay-idle" />

      {/* Hover dark overlay */}
      <div className="service-card__overlay-hover" />

      {/* Content */}
      <div className="service-card__content">
        {/* Title — always visible */}
        <div>
          <span className="service-card__label">{label}</span>
          <h3 className="service-card__title">{title}</h3>
        </div>

        {/* Description — slides in right → left on hover */}
        <div className="service-card__desc">
          <p>{description}</p>
        </div>

        {/* CTA — always visible */}
        <div className="service-card__cta-wrap">
          <button className="service-card__cta">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <section>
      <div className="service-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}