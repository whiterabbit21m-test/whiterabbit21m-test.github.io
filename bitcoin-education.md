---
layout: page
title: Bitcoin Education
permalink: /bitcoin-education/
---

Esplora il mondo di Bitcoin attraverso i nostri articoli educativi. Clicca su un argomento per saperne di più!

<div class="education-grid">
  {% for post in site.categories.bitcoin-education %}
    <div class="education-item">
      <a href="{{ post.url | relative_url }}">
        <img src="{{ post.image | default: '/assets/images/default-bitcoin.jpg' | relative_url }}" alt="{{ post.title }}">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
      </a>
    </div>
  {% endfor %}
</div>
