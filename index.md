---
layout: default
title: Home
---

<body class="home">
<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Benvenuto nel Mio Sito Jekyll</h1>
    <p>Esplora il mondo dello sviluppo web e del design creativo</p>
    <a href="#" class="cta-button">Scopri di più</a>
  </div>
</section>

<!-- Features Section -->
<section class="features">
  <div class="container">
    <h2>Cosa offriamo</h2>
    <div class="feature-grid">
      <div class="feature-item">
        <i class="fas fa-code"></i>
        <h3>Sviluppo Web</h3>
        <p>Creiamo siti web performanti e responsive utilizzando le ultime tecnologie.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-paint-brush"></i>
        <h3>Design Creativo</h3>
        <p>Progettiamo interfacce utente intuitive e visivamente accattivanti.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-mobile-alt"></i>
        <h3>Mobile First</h3>
        <p>Sviluppiamo con un approccio mobile-first per un'esperienza ottimale su tutti i dispositivi.</p>
      </div>
    </div>
  </div>
</section>

<!-- Recent Posts Section -->
<section class="recent-posts">
  <div class="container">
    <h2>Articoli Recenti</h2>
    <div class="post-grid">
      {% for post in site.posts limit:3 %}
        <div class="post-card">
          <img src="{{ post.image | default: '/assets/images/post-default.jpg' | relative_url }}" alt="{{ post.title }}">
          <div class="post-content">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            <a href="{{ post.url | relative_url }}" class="read-more">Leggi di più</a>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
</body>
