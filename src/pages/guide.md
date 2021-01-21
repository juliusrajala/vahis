---
title: Matti Vähä-Heikkilä
draft: false
layout: page.html
---

# Uuden kirjoituksen lisääminen

Sivut löytyvät kansiosta src/pages.

Blogikirjoitukset löytyvät kansiosta src/pages/posts.

Kun kirjoitat uuden blogikirjoituksen, lisää sen yläreunaan ns front-matter.

## Esimerkki

```yaml
---
title: Mimmonen homma?
draft: false
layout: index.html
topics: ehdolla
dateString: '4.4.2017'
---
```

- title kirjoitetaan blogpostauksen otsikoksi.
- draft määrittelee mikäli kirjoitus näytetään sivulla. Kun draft on false, on kirjoitus näkyvissä.
- dateStringiä käytetään kirjoituksen julkaisupäivän määrittelemiseen. Sen tulisi seurata muotoa dd.mm.yyyy.

Kun olet kirjoittanut kirjoituksesi ja olet siihen tyytyväinen, tallenna kirjoitus githubissa. Heroku noutaa automaattisesti master-branchin uusimman julkaisun ja rakentaa sivun uusiksi.

---
# Esimerkkejä eri tyyleistä


# H1 Otsikko

## H2 Otsikko

### H3 Otsikko

- Lista elementti 1
- Lista elementti 2. I think the only card she has is the Lorem card. I write the best placeholder text.
- Lista elementti 3

![alt text](http://placehold.it/1000x300 "Kuvateksti")

Bacon ipsum dolor amet It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?

<a target="_blank" rel="no-referrer" href="http://placehold.it/300x300">
  <div class="BlogPost-ImageContainer">
    <img src="http://placehold.it/300x300" alt="Kuvateksti" />
  </div>
</a>
- Lista elementti 1
- Lista elementti 2
- Lista elementti 3

I think the only card she has is the Lorem card. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured.
