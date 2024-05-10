---
layout: page
title: Media Appearances
subtitle: Interviews, Movies, and more.
redirect_from: /interviews

---

[✨ Recent][home] | [🧹 All][all] | [⭐ Best][favs] | [🇺🇸 English][en] | **🇮🇹 Italian** | [🇩🇪 German][de]

[home]: {{ '/media' | absolute_url }}
[all]: {{ '/media/all' | absolute_url }}
[favs]: {{ '/media/best' | absolute_url }}
[de]: {{ '/media/de' | absolute_url }}
[en]: {{ '/media/en' | absolute_url }}
[it]: {{ '/media/it' | absolute_url }}

{% assign sorted_sodes = site.episodes | where: 'lang', 'IT' | sort: 'date' | reverse %}

<ul class="sodes">
{% for sode in sorted_sodes %}
{% include sode.html sode=sode %}
{% endfor %}
</ul>
