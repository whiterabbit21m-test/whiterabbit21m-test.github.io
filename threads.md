---
layout: page
title: Threads
subtitle: Early thoughts that might turn into something longer.
description: A collection of twitter threads on Bitcoin.
---

{% for thread in site.threads %}
  * [{{ thread.title }}]({{ thread.url }}) - {{ thread.subtitle }}
{% endfor %}



[contact]: {{ '/contact' | absolute_url }}
