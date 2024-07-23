---
layout: post
title: "Glossario Bitcoin"
date: 2024-07-23
categories: bitcoin-education
image: /assets/images/glossary-bitcoin.png
---

# Glossario Bitcoin

Benvenuti nel nostro glossario completo di termini Bitcoin. Usa l'indice qui sotto per navigare rapidamente tra i termini o scorri per esplorare tutti i concetti.

<div class="glossary-index">
  <a href="#A">A</a> • <a href="#B">B</a> • <a href="#C">C</a> • <a href="#D">D</a> • <a href="#E">E</a> • <a href="#F">F</a> • <a href="#G">G</a> • <a href="#H">H</a> • <a href="#I">I</a> • <a href="#J">J</a> • <a href="#K">K</a> • <a href="#L">L</a> • <a href="#M">M</a> • <a href="#N">N</a> • <a href="#O">O</a> • <a href="#P">P</a> • <a href="#Q">Q</a> • <a href="#R">R</a> • <a href="#S">S</a> • <a href="#T">T</a> • <a href="#U">U</a> • <a href="#V">V</a> • <a href="#W">W</a> • <a href="#X">X</a> • <a href="#Y">Y</a> • <a href="#Z">Z</a>
</div>

<div class="glossary-content">
  <h2 id="A">A</h2>
  
  <dl>
    <dt>Address</dt>
    <dd>Una stringa alfanumerica che rappresenta una possibile destinazione per un pagamento Bitcoin.</dd>

    <dt>ASIC</dt>
    <dd>Application-Specific Integrated Circuit. Un chip specializzato progettato specificamente per il mining di Bitcoin.</dd>
  </dl>

  <h2 id="B">B</h2>
  
  <dl>
    <dt>Block</dt>
    <dd>Un raggruppamento di transazioni Bitcoin, marcato temporalmente e legato al blocco precedente.</dd>

    <dt>Blockchain</dt>
    <dd>Il registro pubblico distribuito che contiene la storia di tutte le transazioni Bitcoin.</dd>
  </dl>

  <!-- Continua con le altre lettere dell'alfabeto -->

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const glossaryIndex = document.querySelector('.glossary-index');
    const glossaryContent = document.querySelector('.glossary-content');

    glossaryIndex.addEventListener('click', function(e) {
        if(e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        }
    });
});
</script>
