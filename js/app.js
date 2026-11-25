/* Renderiza o site a partir de js/data.js — sem dependências. */
(function () {
  'use strict';
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- textos simples ---------- */
  $('[data-hero-escola]').textContent = S.chapa.escola;
  $('[data-hero-nome]').textContent = S.chapa.nome;
  $('[data-hero-completo]').textContent = S.chapa.nomeCompleto;
  $('[data-hero-frase]').textContent = S.chapa.fraseImpacto;
  $('[data-hero-lead]').textContent = S.chapa.apresentacaoCurta;
  $('[data-sobre-titulo]').textContent = S.sobre.titulo;
  $('[data-fecha-titulo]').textContent = S.fechamento.titulo;
  $('[data-fecha-texto]').textContent = S.fechamento.texto;
  $('[data-ig-user]').innerHTML = esc(S.canais.instagramUser) + ' <span aria-hidden="true">↗</span>';
  $('[data-foot-nome]').textContent = S.chapa.nome;
  $('[data-foot-completo]').textContent = S.chapa.nomeCompleto;
  $('[data-foot-escola]').textContent = S.chapa.escola;
  $('[data-acro-lead]').textContent = S.chapa.nome + ' é a sigla de ' + S.chapa.nomeCompleto + '.';
  $('#acro').innerHTML = S.chapa.sigla.map(function (s) {
    return '<li class="acro__i" data-reveal><b aria-hidden="true">' + esc(s.letra) + '</b><span>' + esc(s.palavra) + '</span></li>';
  }).join('');
  $('#foot-copy').textContent = '© ' + new Date().getFullYear() + ' Chapa ' + S.chapa.nome + ' — ' + S.chapa.nomeCompleto + ' · Campanha ao Grêmio Estudantil · Todos os direitos reservados.';
  ['link-wa', 'foot-wa'].forEach(function (id) { $('#' + id).href = S.canais.whatsapp; });
  ['link-ig', 'foot-ig'].forEach(function (id) { $('#' + id).href = S.canais.instagram; });
  $('#props-lead').textContent = S.propostas.length + ' propostas organizadas em ' + S.categorias.length +
    ' perfis de aluno. Escolha o seu perfil abaixo ou veja todas. Toque em "Ler mais" para ver a proposta completa.';

  /* ---------- marquee ---------- */
  var mq = '';
  for (var m = 0; m < 8; m++) mq += '<span>' + esc(S.chapa.nome) + '</span><span class="dot">✺</span><span>faça barulho</span><span class="dot">✺</span>';
  $('#marquee').innerHTML = mq;

  /* ---------- sobre ---------- */
  $('#sobre-texto').innerHTML = S.sobre.texto.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  $('#pilares').innerHTML = S.sobre.pilares.map(function (p, i) {
    return '<li class="pillar"><span class="pillar__n">0' + (i + 1) + '</span><h3>' + esc(p.titulo) + '</h3><p>' + esc(p.texto) + '</p></li>';
  }).join('');
  var team = S.sobre.integrantes;
  if (team.length) {
    $('#team').innerHTML = team.map(function (t) {
      return '<li class="member">' + (t.foto ? '<img src="' + esc(t.foto) + '" alt="Foto de ' + esc(t.nome) + '" loading="lazy">' : '<div class="member__ph" aria-hidden="true">?</div>') +
        '<strong>' + esc(t.nome) + '</strong><span>' + esc(t.cargo || '') + (t.turma ? ' · ' + esc(t.turma) : '') + '</span></li>';
    }).join('');
  } else {
    var ph = '';
    for (var k = 0; k < 4; k++) ph += '<li class="member member--empty"><div class="member__ph" aria-hidden="true">?</div><strong>Nome do integrante</strong><span>Cargo · Turma</span></li>';
    $('#team').innerHTML = ph;
  }

  /* ---------- propostas ---------- */
  var cats = S.categorias;
  var header = $('.header');
  var body = $('#props-body');
  var uid = 0;
  function card(p) {
    var id = 'p' + (++uid);
    return '<article class="card" data-reveal>' +
      '<h4 class="card__h"><button class="card__btn" type="button" aria-expanded="false" aria-controls="' + id + '">' +
        '<span class="card__top">' + window.icon(p.icone, 'ico') + '<span class="card__num">' + esc(p.numero) + '</span></span>' +
        '<span class="card__title">' + esc(p.titulo) + '</span>' +
        '<span class="card__sum">' + esc(p.resumo) + '</span>' +
        '<span class="card__more"><span class="lbl">Ler mais</span><i aria-hidden="true"></i></span>' +
      '</button></h4>' +
      '<div class="card__panel" id="' + id + '" role="region" aria-label="' + esc(p.titulo) + ' — proposta completa"><div><p>' + esc(p.texto) + '</p></div></div>' +
    '</article>';
  }

  var html = cats.map(function (c, ci) {
    var list = S.propostas.filter(function (p) { return p.categoria === c.id; });
    var cards = list.map(function (p) { return card(p); }).join('');
    return '<section class="group" id="cat-' + c.id + '" data-cat="' + c.id + '" aria-labelledby="h-' + c.id + '">' +
      '<header class="group__head" data-reveal><span class="group__n">0' + (ci + 1) + '</span>' +
      '<h3 id="h-' + c.id + '">' + esc(c.nome) + '</h3><span class="group__c">' + list.length + (list.length === 1 ? ' proposta' : ' propostas') + '</span></header>' +
      '<p class="group__intro">' + esc(c.intro) + '</p>' +
      '<div class="grid">' + cards + '</div></section>';
  }).join('');
  body.innerHTML = html;

  /* filtros */
  var filters = $('#filters');
  var fh = '';
  cats.forEach(function (c) {
    var n = S.propostas.filter(function (p) { return p.categoria === c.id; }).length;
    fh += '<button type="button" class="chip" data-f="' + c.id + '" aria-pressed="false">' + esc(c.chip || c.nome) + ' <b>' + n + '</b></button>';
  });
  fh += '<button type="button" class="chip" data-f="all" aria-pressed="false">Ver todos <b>' + S.propostas.length + '</b></button>';
  filters.innerHTML = fh;

  function applyFilter(f, scroll) {
    $$('.chip', filters).forEach(function (b) {
      var on = b.getAttribute('data-f') === f;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var shown = 0;
    $$('.group', body).forEach(function (g) {
      var vis = f === 'all' || g.getAttribute('data-cat') === f;
      g.hidden = !vis;
      if (vis) shown += $$('.card', g).length;
    });
    $('#props-count').textContent = 'Mostrando ' + shown + ' de ' + S.propostas.length + ' propostas';
    if (scroll) $$('.card, .group__head', body).forEach(function (c) { c.classList.add('in'); });
    if (scroll) {
      var g = $('.group:not([hidden])', body);
      var wrapEl = $('.filters-wrap');
      var y = g.getBoundingClientRect().top + window.scrollY - (header.offsetHeight + wrapEl.offsetHeight + 14);
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    applyFilter(b.getAttribute('data-f'), b.getAttribute('data-f') !== 'all');
  });
  /* chip ativo visível na barra horizontal (mobile) */
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    b.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  });
  applyFilter(cats[0].id, false);

  /* expandir cards */
  body.addEventListener('click', function (e) {
    var b = e.target.closest('.card__btn'); if (!b) return;
    var card = b.closest('.card');
    var open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    card.classList.toggle('is-open', open);
    b.querySelector('.lbl').textContent = open ? 'Fechar' : 'Ler mais';
  });

  /* ---------- revelar ao rolar ---------- */
  var revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- header: menu, progresso, link ativo ---------- */
  var burger = $('#burger'), menu = $('#menu');
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Abrir menu'); }
  burger.addEventListener('click', function () {
    var o = !menu.classList.contains('open');
    menu.classList.toggle('open', o);
    burger.setAttribute('aria-expanded', o ? 'true' : 'false');
    burger.setAttribute('aria-label', o ? 'Fechar menu' : 'Abrir menu');
  });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  var bar = $('#progress');
  var secs = ['inicio', 'chapa', 'propostas', 'participe'].map(function (id) { return document.getElementById(id); });
  var links = $$('a', menu);
  var ticking = false;
  function onScroll() {
    var h = document.documentElement;
    var pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    bar.style.transform = 'scaleX(' + pct.toFixed(4) + ')';
    header.classList.toggle('is-stuck', h.scrollTop > 20);
    var cur = 0, y = window.scrollY + 120;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    links.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* link direto para uma categoria (#cat-xxx) */
  var hc = location.hash.indexOf('#cat-') === 0 ? location.hash.replace('#cat-', '') : '';
  if (hc && cats.some(function (c) { return c.id === hc; })) applyFilter(hc, false);
})();
