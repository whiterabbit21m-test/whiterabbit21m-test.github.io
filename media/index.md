---
layout: page
title: Media Appearances
subtitle: Interviews, Movies, and more.
redirect_from: /interviews

---


**✨ Recent** | [🧹 All][all] | [⭐ Best][favs] | [🇺🇸 English][en] | [🇮🇹 Italian][it] | [🇩🇪 German][de]

[home]: {{ '/media' | absolute_url }}
[all]: {{ '/media/all' | absolute_url }}
[favs]: {{ '/media/best' | absolute_url }}
[de]: {{ '/media/de' | absolute_url }}
[en]: {{ '/media/en' | absolute_url }}
[it]: {{ '/media/it' | absolute_url }}

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/82bSw5uAkBQ?si=WLdDVAPHqX7u4xid&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> Money, Money, Money - Bitcoin is sound money in a fiat world
>
> <cite>[The Crypto Couple]</cite>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9tuBn_FEFdg?si=48_NA0MYCr7R6nqt&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

>Bitcoin is Defiance - Bitcoin is a peaceful revolution
>
><cite>[The Crypto Couple]</cite>

---

{% assign sorted_sodes = site.episodes | sort: 'date' | reverse %}

<ul class="sodes">
{% for sode in sorted_sodes limit:6 %}
{% include sode.html sode=sode %}
{% endfor %}
</ul>

[More...][all]


---

### Talks


---

### Videos and other Remixes


---

### Twitter Threads



---

### Other


---

### Guest Posts



[contact]: {{ '/contact' | absolute_url }}
[license]: {{ '/license' | absolute_url }}
[The Crypto Couple]: https://twitter.com/thecryptoc0up1e
