---
layout: page
title: Media Appearances
subtitle: Interviews, Movies, and more.
redirect_from: /interviews

---

[✨ Recent][home] | [🧹 All][all] | [⭐ Best][favs] | [🇺🇸 English][en] | [🇮🇹 Italian][it] | **🇩🇪 German**

[home]: {{ '/media' | absolute_url }}
[all]: {{ '/media/all' | absolute_url }}
[favs]: {{ '/media/best' | absolute_url }}
[de]: {{ '/media/de' | absolute_url }}
[en]: {{ '/media/en' | absolute_url }}
[it]: {{ '/media/it' | absolute_url }}

{% assign sodes_it = site.episodes | where: 'lang', 'IT' %}
{% assign sodes_de = site.episodes | where: 'lang', 'DE' %}
{% assign sodes_at = site.episodes | where: 'lang', 'AT' %}
{% assign sodes_ch = site.episodes | where: 'lang', 'CH' %}
{% assign all_sodes = sodes_de | concat: sodes_at | concat: sodes_ch %}
{% assign sorted_sodes = all_sodes | sort: 'date' | reverse %}

<ul class="sodes">
{% for sode in sorted_sodes %}
{% include sode.html sode=sode %}
{% endfor %}
</ul>
