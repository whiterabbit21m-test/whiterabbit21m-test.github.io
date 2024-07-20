---
layout: default
title: Home
---

# Benvenuto nel Mio Sito

Ciao! Sono [Il Tuo Nome], e questo è il mio sito personale.

## Ultimi Post

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%d/%m/%Y" }}
{% endfor %}

[Vedi tutti i post](/blog)

## Chi Sono

Sono un appassionato di tecnologia e sviluppo web. 
[Inserisci qui una breve descrizione di te stesso]

## Progetti

Ecco alcuni dei miei progetti recenti:

1. [Nome Progetto 1](link-al-progetto)
2. [Nome Progetto 2](link-al-progetto)
3. [Nome Progetto 3](link-al-progetto)

## Contattami

Puoi trovarmi su:

- [GitHub](link-al-tuo-github)
- [LinkedIn](link-al-tuo-linkedin)
- [Twitter](link-al-tuo-twitter)

O inviami un'email a [tua@email.com]
