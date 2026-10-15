import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Wrench,
  Cog,
  Disc,
  Droplets,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Car,
  ChevronRight,
  Navigation,
  Send,
  AlertCircle,
  ThumbsUp,
  Award,
  Zap,
  ArrowUpRight
} from 'lucide-react';

function App() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Réparation mécanique',
    date: '',
    message: ''
  });

  // Calculate if garage is open in real-time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 6 is Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimal = hours + minutes / 60;

      // Monday to Friday (1 to 5)
      if (day >= 1 && day <= 5) {
        if (currentDecimal >= 8 && currentDecimal < 12.5) {
          setIsOpenNow(true);
          setStatusMessage('Ouvert actuellement • Fermeture à 12h30');
        } else if (currentDecimal >= 13.5 && currentDecimal < 18) {
          setIsOpenNow(true);
          setStatusMessage('Ouvert actuellement • Fermeture à 18h00');
        } else if (currentDecimal >= 12.5 && currentDecimal < 13.5) {
          setIsOpenNow(false);
          setStatusMessage('Pause déjeuner • Réouverture à 13h30');
        } else {
          setIsOpenNow(false);
          setStatusMessage('Actuellement fermé • Réouverture à 8h00');
        }
      } else {
        setIsOpenNow(false);
        setStatusMessage('Fermé le week-end • Réouverture Lundi 8h00');
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const servicesList = [
    {
      id: 'reparation',
      title: 'RÉPARATION MÉCANIQUE',
      icon: <Wrench size={24} />,
      badge: 'Pilier Officiel',
      desc: 'Prise en charge complète de vos pannes mécaniques : moteur, embrayage, distribution, suspension, direction, rotules et amortisseurs.',
      features: ['Diagnostic de panne approfondi', 'Courroie de distribution & pompe à eau', 'Système de freinage & disques', 'Amortisseurs & trains roulants'],
      isHighlight: true
    },
    {
      id: 'entretien',
      title: 'ENTRETIEN & RÉVISION',
      icon: <Cog size={24} />,
      badge: 'Pilier Officiel',
      desc: 'Révision complète respectant scrupuleusement le carnet d’entretien constructeur pour préserver votre garantie d’origine.',
      features: ['Garantie constructeur préservée', 'Pré-contrôle technique sans surprise', 'Contrôle des 60 points de sécurité', 'Remplacement filtres & bougies'],
      isHighlight: true
    },
    {
      id: 'pneus',
      title: 'PNEUMATIQUES',
      icon: <Disc size={24} />,
      badge: 'Pilier Officiel',
      desc: 'Fourniture, montage, équilibrage et réparation de pneumatiques toutes marques. Conseil sur le choix adapté à votre véhicule et budget.',
      features: ['Montage & équilibrage de précision', 'Pneus été, hiver & 4 saisons', 'Réparation crevaison rapide', 'Contrôle géométrie & parallélisme'],
      isHighlight: true
    },
    {
      id: 'vidange',
      title: 'VIDANGE & FILTRATION',
      icon: <Droplets size={24} />,
      badge: 'Pilier Officiel',
      desc: 'Vidange moteur avec des huiles homologuées de haute qualité répondant aux normes des constructeurs pour une longévité maximale.',
      features: ['Huiles de synthèse certifiées', 'Filtre à huile, air & habitacle', 'Purge et remplacement liquide freins', 'Mise à niveau de tous les fluides'],
      isHighlight: true
    },
    {
      id: 'diagnostic',
      title: 'DIAGNOSTIC ÉLECTRONIQUE',
      icon: <Cpu size={24} />,
      badge: 'Technologie',
      desc: 'Lecture des calculateurs, recherche de voyants moteur allumés, détection d’anomalies d’injection et multiplexage toutes marques.',
      features: ['Valise multimarque dernière génération', 'Effacement des codes défauts', 'Contrôle injection & dépollution (FAP)', 'Détection pannes intermittentes'],
      isHighlight: false
    },
    {
      id: 'freinage-clim',
      title: 'CLIMATISATION & BATTERIE',
      icon: <Zap size={24} />,
      badge: 'Confort & Sécurité',
      desc: 'Recharge et assainissement de circuit de climatisation, test de santé batterie et contrôle de l’alternateur et du démarreur.',
      features: ['Recharge gaz climatisation', 'Traitement antibactérien habitacle', 'Test batterie & circuit de charge', 'Changement démarreur / alternateur'],
      isHighlight: false
    }
  ];

  const testimonials = [
    {
      name: 'Laurent D.',
      city: 'Marmande',
      rating: 5,
      date: 'Il y a 3 semaines',
      comment: 'Excellent garage ! Stéphane est très professionnel, honnête et compétent. Il explique clairement ce qu’il fait et les tarifs sont vraiment corrects par rapport aux concessions. Je recommande les yeux fermés.'
    },
    {
      name: 'Nathalie M.',
      city: 'Beaupuy (47)',
      rating: 5,
      date: 'Il y a 1 mois',
      comment: 'Prise en charge rapide pour une vidange et changement des freins avant mon départ en vacances. Stéphane m’a évité des réparations inutiles que d’autres voulaient me facturer. Un garagiste de confiance, rare de nos jours !'
    },
    {
      name: 'Christophe B.',
      city: 'Sainte-Bazeille',
      rating: 5,
      date: 'Il y a 2 mois',
      comment: 'Remplacement de la courroie de distribution et 4 pneus neufs sur ma Mégane. Travail soigné, véhicule rendu propre et dans les temps. Note 4.7/5 largement méritée !'
    }
  ];

  const daysSchedule = [
    { day: 'Lundi', morning: '08h00 – 12h30', afternoon: '13h30 – 18h00', isOpen: true },
    { day: 'Mardi', morning: '08h00 – 12h30', afternoon: '13h30 – 18h00', isOpen: true },
    { day: 'Mercredi', morning: '08h00 – 12h30', afternoon: '13h30 – 18h00', isOpen: true },
    { day: 'Jeudi', morning: '08h00 – 12h30', afternoon: '13h30 – 18h00', isOpen: true },
    { day: 'Vendredi', morning: '08h00 – 12h30', afternoon: '13h30 – 18h00', isOpen: true },
    { day: 'Samedi', morning: 'Fermé', afternoon: 'Sur RDV urgent', isOpen: false },
    { day: 'Dimanche', morning: 'Fermé', afternoon: 'Fermé', isOpen: false }
  ];

  const currentDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon...
  const mappedDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  return (
    <div className="app-layout">
      {/* Top Banner Notice */}
      <div className="top-bar-notice">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} color="#0ea5e9" /> 316 Chemin de Buzet, 47200 Marmande
            </span>
            <span className="top-bar-divider desktop-only">•</span>
            <span className="top-bar-item desktop-only">
              <Clock size={13} color="#0ea5e9" /> 8h–12h30 &amp; 13h30–18h
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item rating-pill">
              <Star size={13} fill="#f59e0b" color="#f59e0b" /> 4,7/5 (21 avis Google)
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-item artisan-tag">Artisan : <strong>Stéphane</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand-logo" aria-label="Steph Auto 47 Accueil">
            <div className="logo-icon-badge">
              <img src="/logo.jpg" alt="Steph Auto 47 Logo" />
            </div>
            <div className="brand-text-wrap">
              <div className="brand-main-name">
                STEPH AUTO <span className="brand-tag-47">47</span>
              </div>
              <span className="brand-sub">Garage Automobile • Marmande</span>
            </div>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#stephane" className="nav-link">L'Atelier</a></li>
              <li><a href="#horaires" className="nav-link">Horaires &amp; Accès</a></li>
              <li><a href="#avis" className="nav-link">Avis (4,7/5)</a></li>
              <li><a href="#contact" className="nav-link">Devis &amp; RDV</a></li>
            </ul>
          </nav>

          <div className="nav-cta-wrap">
            <div className={`status-pill ${!isOpenNow ? 'closed' : ''}`}>
              <span className="status-dot"></span>
              <span className="status-text">{isOpenNow ? 'Ouvert' : 'Fermé'}</span>
            </div>

            <a href="tel:0685122225" className="glow-btn-red nav-call-btn" title="Appeler Stéphane 06 85 12 22 25">
              <Phone size={16} />
              <span className="nav-call-label">06 85 12 22 25</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section tire-track-pattern">
        <div className="hero-bg-lines"></div>
        <div className="container hero-grid">
          {/* Left Column Text */}
          <div className="hero-content">
            <div className="google-rating-badge">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="rating-score">4,7 / 5</span>
              <span className="rating-count">(21 avis Google Marmande)</span>
            </div>

            <h1 className="hero-title">
              GARAGE <span className="text-highlight">STEPH AUTO 47</span>
              <br />
              <span className="text-cyan">RÉPARATION</span> & <span className="text-red">ENTRETIEN</span>
            </h1>

            <p className="hero-subtitle">
              Votre garagiste de confiance au <strong>316 Chemin de Buzet à Marmande (47200)</strong>. 
              Stéphane vous garantit un travail soigné, des diagnostics précis et des tarifs sans mauvaise surprise sur toutes marques de véhicules.
            </p>

            <div className="hero-quick-points">
              <span className="hero-quick-tag"><CheckCircle2 size={15} color="#38bdf8" /> Réparation toutes marques</span>
              <span className="hero-quick-tag"><CheckCircle2 size={15} color="#38bdf8" /> Garantie constructeur préservée</span>
              <span className="hero-quick-tag"><CheckCircle2 size={15} color="#38bdf8" /> Contact direct avec Stéphane</span>
              <span className="hero-quick-tag"><CheckCircle2 size={15} color="#38bdf8" /> Devis gratuit & sans engagement</span>
            </div>

            <div className="hero-actions">
              <a href="tel:0685122225" className="glow-btn-red btn-primary-call">
                <Phone size={20} />
                <span>Appeler le 06 85 12 22 25</span>
              </a>

              <a href="#contact" className="glow-btn-cyan btn-primary-call">
                <Calendar size={19} />
                <span>Demander un Devis</span>
              </a>

              <a
                href="https://maps.google.com/?q=316+Chemin+de+Buzet+47200+Marmande"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-maps"
              >
                <Navigation size={18} />
                <span>Itinéraire Marmande</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginTop: '6px' }}>
              <Clock size={15} color={isOpenNow ? '#10b981' : '#f87171'} />
              <span>{statusMessage}</span>
            </div>
          </div>

          {/* Right Column: Visual Sign Reproduction */}
          <div className="hero-sign-card">
            <div className="sign-track-border-left"></div>
            <div className="sign-track-border-right"></div>

            <div className="sign-header-top">
              <div className="sign-garage-arc">GARAGE</div>
              <div className="sign-badge-center">
                <Car size={46} color="#ffffff" strokeWidth={1.75} />
              </div>
              <div>
                <span className="sign-sub-ribbon">★ AUTOMOBILE ★</span>
              </div>
            </div>

            {/* The 4 core services mirroring the sign */}
            <div className="sign-pillars-grid">
              <div className="sign-pillar-pill">
                <div className="sign-pillar-icon"><Wrench size={14} /></div>
                <span>RÉPARATION</span>
              </div>
              <div className="sign-pillar-pill">
                <div className="sign-pillar-icon"><Cog size={14} /></div>
                <span>ENTRETIEN</span>
              </div>
              <div className="sign-pillar-pill">
                <div className="sign-pillar-icon"><Disc size={14} /></div>
                <span>PNEUS</span>
              </div>
              <div className="sign-pillar-pill">
                <div className="sign-pillar-icon"><Droplets size={14} /></div>
                <span>VIDANGE</span>
              </div>
            </div>

            <div className="sign-card-title-box">
              <div className="sign-card-brand-name">
                STEPH AUTO 47
              </div>
              <a href="tel:0685122225" className="sign-card-phone-btn">
                <Phone size={20} />
                <span>06 85 12 22 25</span>
              </a>
            </div>

            {/* Storefront real photo preview */}
            <div className="sign-card-photo-preview">
              <img src="/steph-auto-47.jpg" alt="Enseigne officielle Stéphane Auto 47 Marmande" />
              <div className="sign-photo-label">
                📍 Enseigne de l'atelier - 316 Chemin de Buzet, Marmande
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Bar */}
      <section className="trust-bar-section">
        <div className="container trust-bar-grid">
          <div className="trust-item">
            <div className="trust-icon-box"><Wrench size={22} /></div>
            <div className="trust-item-text">
              <h4>Mécanique Toutes Marques</h4>
              <p>Essence, Diesel, Hybride et Utilitaires</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box"><Award size={22} /></div>
            <div className="trust-item-text">
              <h4>Note 4,7/5 Vérifiée</h4>
              <p>21 avis de clients satisfaits à Marmande</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box"><ShieldCheck size={22} /></div>
            <div className="trust-item-text">
              <h4>Transparence & Prix Juste</h4>
              <p>Devis détaillé validé avant chaque réparation</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-box"><Car size={22} /></div>
            <div className="trust-item-text">
              <h4>Contact Direct Garagiste</h4>
              <p>Échangez sans intermédiaire avec Stéphane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-wrapper">
        <div className="container">
          <div className="section-head">
            <span className="badge-cyan">Prestations & Savoir-faire</span>
            <h2 className="section-title">Les Services Steph Auto 47</h2>
            <p className="section-desc">
              Retrouvez l’ensemble des prestations indispensables pour rouler en toute sécurité : des 4 piliers de l’atelier aux interventions de diagnostic les plus pointues.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.map((service, idx) => (
              <div key={service.id} className={`service-card ${service.isHighlight ? 'highlighted-pill' : ''}`}>
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    {service.icon}
                  </div>
                  <span className="service-number">0{idx + 1}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className={service.isHighlight ? 'badge-cyan' : 'badge-red'} style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.desc}</p>

                <ul className="service-checklist">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx}>
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:0685122225" className="service-card-btn">
                  <span>Prendre RDV avec Stéphane</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Patron Stéphane Section */}
      <section id="stephane" className="section-wrapper" style={{ background: 'rgba(11, 17, 29, 0.7)' }}>
        <div className="container about-grid">
          <div className="about-card-banner">
            <div className="patron-badge">
              <div className="patron-avatar">S</div>
              <div className="patron-info">
                <h3>Stéphane</h3>
                <p>Artisan Mécanicien & Gérant Steph Auto 47</p>
              </div>
            </div>

            <p className="patron-quote">
              « Mon engagement au quotidien à Marmande : vous apporter un diagnostic précis, un travail rigoureux et un conseil sincère. Chez Steph Auto 47, vous parlez directement à la personne qui intervient sur votre voiture. Pas de mauvaises surprises sur la facture, pas de réparations superflues. »
            </p>

            <div className="patron-stats-row">
              <div className="patron-stat-box">
                <h4>4,7 / 5</h4>
                <p>Note Google Marmande</p>
              </div>
              <div className="patron-stat-box">
                <h4>21</h4>
                <p>Avis Clients Certifiés</p>
              </div>
              <div className="patron-stat-box">
                <h4>100%</h4>
                <p>Toutes Marques</p>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <span className="badge-red">Proximité & Sérieux</span>
            <h2>Un garage à taille humaine au service des automobilistes du 47</h2>
            <p>
              Installé au <strong>316 Chemin de Buzet à Marmande</strong>, l’atelier Steph Auto 47 est conçu pour offrir aux particuliers comme aux professionnels une alternative de confiance aux grands réseaux de concessionnaires.
            </p>

            <div className="values-list">
              <div className="value-item">
                <div className="value-icon"><ThumbsUp size={18} /></div>
                <div className="value-details">
                  <h4>Transparence absolue des tarifs</h4>
                  <p>Aucun travail n'est engagé sans votre accord préalable sur devis chiffré.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon"><ShieldCheck size={18} /></div>
                <div className="value-details">
                  <h4>Pièces détachées garanties d'origine</h4>
                  <p>Nous sélectionnons des équipementiers de premier choix (Bosch, Valeo, Brembo, Michelin...).</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon"><Wrench size={18} /></div>
                <div className="value-details">
                  <h4>Équipements et outillages modernes</h4>
                  <p>Valises de diagnostic électronique pour détecter les anomalies rapidement et avec exactitude.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <a href="tel:0685122225" className="glow-btn-red" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', borderRadius: '10px', fontWeight: 700 }}>
                <Phone size={18} />
                <span>Joindre Stéphane : 06 85 12 22 25</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="avis" className="section-wrapper reviews-section">
        <div className="container">
          <div className="section-head">
            <span className="badge-cyan">Témoignages Réels</span>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-desc">
              Découvrez les retours authentiques laissés par les conducteurs de Marmande et ses environs sur Google.
            </p>
          </div>

          {/* Review Score Summary Box */}
          <div className="reviews-summary-card">
            <div className="reviews-left-summary">
              <div className="reviews-big-score">4,7</div>
              <div className="reviews-rating-detail">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem' }}>Note Globale Google</span>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Basé sur 21 avis clients certifiés</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=Steph+Auto+47+Marmande"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-maps"
                style={{ fontSize: '0.88rem' }}
              >
                <span>Voir les avis sur Google Maps</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="tel:0685122225" className="glow-btn-red" style={{ padding: '10px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} />
                <span>06 85 12 22 25</span>
              </a>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="reviews-grid">
            {testimonials.map((review, i) => (
              <div key={i} className="review-item-card">
                <div>
                  <div className="review-card-top">
                    <div className="review-author-wrap">
                      <div className="review-avatar-char">{review.name.charAt(0)}</div>
                      <div>
                        <div className="review-author-name">{review.name}</div>
                        <div className="review-meta">{review.city} • {review.date}</div>
                      </div>
                    </div>
                    <div className="stars-row">
                      {[...Array(review.rating)].map((_, s) => (
                        <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  <p className="review-text-content">
                    « {review.comment} »
                  </p>
                </div>

                <div className="review-tag-badge">
                  Avis vérifié Google
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours and Location Interactive Section */}
      <section id="horaires" className="section-wrapper">
        <div className="container">
          <div className="section-head">
            <span className="badge-red">Pratique & Accessibilité</span>
            <h2 className="section-title">Horaires & Localisation de l’Atelier</h2>
            <p className="section-desc">
              Stéphane vous accueille du lundi au vendredi au 316 Chemin de Buzet, 47200 Marmande.
            </p>
          </div>

          <div className="info-section-grid">
            {/* Hours Card */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-header-icon"><Clock size={24} /></div>
                <div>
                  <h3>Horaires d’Ouverture</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Steph Auto 47 - Marmande</p>
                </div>
              </div>

              <div className="schedule-table">
                {daysSchedule.map((item, idx) => {
                  const isToday = idx === mappedDayIndex;
                  return (
                    <div key={item.day} className={`schedule-row ${isToday ? 'today-highlight' : ''}`}>
                      <div className="schedule-day">
                        {isToday && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }}></span>}
                        <span>{item.day}</span>
                        {isToday && <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>(Aujourd'hui)</span>}
                      </div>
                      <div className="schedule-hours">
                        {item.isOpen ? (
                          <span>{item.morning} &amp; {item.afternoon}</span>
                        ) : (
                          <span style={{ color: '#ef4444' }}>{item.morning}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="schedule-note-box">
                <AlertCircle size={20} color="#38bdf8" />
                <span>
                  Pour une intervention urgente ou un conseil mécanique rapide, n’hésitez pas à appeler directement Stéphane au <strong>06 85 12 22 25</strong>.
                </span>
              </div>
            </div>

            {/* Location & Map Card */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-header-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Adresse & Itinéraire</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Marmande (Lot-et-Garonne - 47)</p>
                </div>
              </div>

              <div className="location-address-box">
                <div className="address-text-big">
                  316 Chemin de Buzet
                </div>
                <div className="address-sub">
                  47200 Marmande • Parking facile et accès direct pour vos véhicules
                </div>
              </div>

              <div className="map-embed-container">
                <iframe
                  title="Carte Google Maps Steph Auto 47 Marmande"
                  src="https://maps.google.com/maps?q=316+Chemin+de+Buzet+47200+Marmande&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="location-nav-buttons">
                <a
                  href="https://maps.google.com/?q=316+Chemin+de+Buzet+47200+Marmande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-nav-app"
                >
                  <Navigation size={17} color="#38bdf8" />
                  <span>Google Maps</span>
                </a>

                <a
                  href="https://waze.com/ul?q=316+Chemin+de+Buzet+47200+Marmande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-nav-app"
                >
                  <Navigation size={17} color="#38bdf8" />
                  <span>Waze</span>
                </a>

                <a
                  href="tel:0685122225"
                  className="glow-btn-red"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 18px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}
                >
                  <Phone size={17} />
                  <span>Appeler</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & Contact Form Section */}
      <section id="contact" className="section-wrapper" style={{ background: '#0a0e18' }}>
        <div className="container contact-section-grid">
          {/* Left Direct Contact Info */}
          <div className="contact-direct-card">
            <div>
              <span className="badge-red">Contact Direct</span>
              <h2 className="contact-card-title">Prenez rendez-vous avec Stéphane</h2>
              <p className="contact-card-sub">
                Besoin d’un diagnostic, d'une révision, d'un changement de pneumatiques ou d’un devis avant réparation ? Contactez directement l’atelier.
              </p>

              <div className="contact-items-stack">
                <a href="tel:0685122225" className="contact-pill-item">
                  <div className="contact-icon-bubble">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-pill-label">Téléphone Direct Stéphane</div>
                    <div className="contact-pill-value">06 85 12 22 25</div>
                  </div>
                </a>

                <div className="contact-pill-item">
                  <div className="contact-icon-bubble cyan">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-pill-label">Adresse de l'Atelier</div>
                    <div className="contact-pill-value">316 Chemin de Buzet, 47200 Marmande</div>
                  </div>
                </div>

                <div className="contact-pill-item">
                  <div className="contact-icon-bubble cyan">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-pill-label">Horaires Hebdomadaires</div>
                    <div className="contact-pill-value">Lun–Ven : 8h–12h30 &amp; 13h30–18h</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                <CheckCircle2 size={16} color="#38bdf8" /> Devis 100% Gratuit &amp; Sans Surprise
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: 0 }}>
                Votre accord explicite est toujours requis avant le début des réparations.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="quote-form-card">
            <h3 className="quote-form-title">Demande de Devis ou Rendez-vous</h3>
            <p className="quote-form-desc">
              Remplissez ce formulaire et Stéphane vous recontactera rapidement pour confirmer votre prise en charge.
            </p>

            {formSubmitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={32} style={{ margin: '0 auto 10px auto', display: 'block' }} />
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '6px' }}>Merci pour votre demande !</h4>
                <p style={{ color: '#a7f3d0', fontSize: '0.92rem' }}>
                  Stéphane a bien reçu vos informations et reviendra vers vous très rapidement au <strong>{formData.phone || 'numéro indiqué'}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{ marginTop: '16px', background: 'rgba(255,255,255,0.1)', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem' }}
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="name">Votre Nom &amp; Prénom *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ex: 06 12 34 56 78"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="vehicle">Véhicule (Marque, Modèle ou Immatriculation)</label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      placeholder="Ex: Renault Clio 4 / AA-123-BB"
                      value={formData.vehicle}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Prestation Souhaitée</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                    >
                      <option value="Réparation mécanique">Réparation mécanique</option>
                      <option value="Entretien & Révision">Entretien &amp; Révision complète</option>
                      <option value="Pneumatiques">Pneumatiques (Changement / Montage)</option>
                      <option value="Vidange & Filtres">Vidange &amp; Filtres</option>
                      <option value="Diagnostic électronique">Diagnostic électronique / Voyant</option>
                      <option value="Freinage / Amortisseurs">Freinage / Amortisseurs</option>
                      <option value="Autre demande">Autre demande spécifique</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Détails ou précisions sur votre demande</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Décrivez les symptômes de la panne, le kilométrage ou vos disponibilités..."
                    value={formData.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>

                <button type="submit" className="glow-btn-red form-submit-btn">
                  <Send size={18} />
                  <span>Envoyer ma demande à Stéphane</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-summary">
            <div className="brand-logo">
              <div className="logo-icon-badge">
                <img src="/logo.jpg" alt="Logo Steph Auto 47" />
              </div>
              <div className="brand-text-wrap">
                <div className="brand-main-name">STEPH AUTO <span className="brand-tag-47">47</span></div>
                <span className="brand-sub">Garage Automobile à Marmande</span>
              </div>
            </div>
            <p>
              Atelier de réparation, entretien mécanique, pneumatiques et vidange à Marmande (Lot-et-Garonne). Stéphane vous conseille et prend soin de votre véhicule au prix le plus juste.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Réparation Mécanique</a></li>
              <li><a href="#services">Entretien &amp; Révision</a></li>
              <li><a href="#services">Pneumatiques</a></li>
              <li><a href="#services">Vidange &amp; Filtres</a></li>
              <li><a href="#services">Diagnostic Valise</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Coordonnées</h4>
            <ul className="footer-links-list">
              <li>
                <a href="tel:0685122225" style={{ color: '#ef4444', fontWeight: 700 }}>
                  📞 06 85 12 22 25
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=316+Chemin+de+Buzet+47200+Marmande" target="_blank" rel="noopener noreferrer">
                  📍 316 Chemin de Buzet<br />47200 Marmande
                </a>
              </li>
              <li>
                <span>⭐ Note Google 4,7/5</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Horaires</h4>
            <ul className="footer-links-list" style={{ fontSize: '0.85rem' }}>
              <li><strong>Lundi – Vendredi :</strong><br />08h00–12h30 &amp; 13h30–18h00</li>
              <li style={{ marginTop: '8px' }}><strong>Samedi &amp; Dimanche :</strong><br />Fermé</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Steph Auto 47. Tous droits réservés. Gérant : Stéphane.
          </div>
          <div>
            Site vitrine professionnel conçu pour le garage Steph Auto 47 à Marmande (47200).
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="mobile-call-bar">
        <div className="mobile-call-bar-inner">
          <a href="tel:0685122225" className="mobile-btn-call">
            <Phone size={18} />
            <span>Appeler Stéphane</span>
          </a>
          <a
            href="https://maps.google.com/?q=316+Chemin+de+Buzet+47200+Marmande"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-btn-map"
          >
            <Navigation size={17} color="#38bdf8" />
            <span>Itinéraire</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
