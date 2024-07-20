---
layout: default
title: Home
---

<div class="hero">
    <div class="container">
        <h1>Benvenuto nel mio sito Jekyll</h1>
        <p>Questo è un esempio di sito creato con Jekyll e personalizzato con vari componenti.</p>
        <a href="#" class="button">Scopri di più</a>
    </div>
</div>

<main class="container">
    <section class="featured-posts">
        <h2>Post in evidenza</h2>
        <div class="post-grid">
            {% for post in site.posts limit:3 %}
                <div class="post-card">
                    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                    {% include post-meta.html %}
                    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    <a href="{{ post.url | relative_url }}" class="button">Leggi di più</a>
                </div>
            {% endfor %}
        </div>
    </section>

    <section class="about-section">
        <h2>Chi sono</h2>
        <p>Sono un appassionato di web development e questo è il mio sito personale creato con Jekyll.</p>
        <a href="{{ '/about/' | relative_url }}" class="button">Scopri di più su di me</a>
    </section>

    <section class="contact-form">
        <h2>Contattami</h2>
        <form id="contact-form">
            <input type="text" name="name" placeholder="Il tuo nome" required>
            <input type="email" name="email" placeholder="La tua email" required>
            <textarea name="message" placeholder="Il tuo messaggio" required></textarea>
            <button type="submit" class="button">Invia messaggio</button>
        </form>
    </section>
</main>

<div id="modal" class="modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h2>Grazie per il tuo messaggio!</h2>
        <p>Ti risponderò al più presto.</p>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Qui andrebbe la logica per inviare il form
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
</script>
