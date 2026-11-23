/*
 * Camila May Missio — Biomédica Esteta
 * Comportamentos do site (JavaScript puro, sem dependências).
 *
 * - Cabeçalho compacto e com fundo ao rolar a página.
 * - Menu mobile (abrir/fechar, Esc, foco, trava a rolagem).
 * - Carrossel de procedimentos (setas e barra de progresso).
 * - Entradas suaves dos elementos com [data-reveal] ao aparecerem na tela.
 * - Ano atual no rodapé.
 */
;(function () {
  'use strict'

  var root = document.documentElement
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  /* ——— Cabeçalho: compacto depois de 24px de rolagem ——— */
  var header = document.querySelector('.site-header')

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 24)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  /* ——— Menu mobile ——— */
  var toggle = document.querySelector('.menu-toggle')
  var menu = document.getElementById('menu-mobile')
  var menuItems = menu.querySelectorAll('.mobile-menu__item')
  var menuLinks = menu.querySelectorAll('a')
  var isOpen = false

  function onKeydown(event) {
    if (event.key === 'Escape') {
      setMenu(false)
      toggle.focus()
    }
  }

  function setMenu(open) {
    if (open === isOpen) return
    isOpen = open

    header.classList.toggle('is-open', open)
    menu.classList.toggle('is-open', open)
    menu.setAttribute('aria-hidden', String(!open))
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
    root.style.overflow = open ? 'hidden' : ''

    // Itens entram em sequência ao abrir; ao fechar, somem juntos.
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.transitionDelay = open ? 120 + i * 70 + 'ms' : '0ms'
    }
    for (var j = 0; j < menuLinks.length; j++) {
      menuLinks[j].tabIndex = open ? 0 : -1
    }

    if (open) window.addEventListener('keydown', onKeydown)
    else window.removeEventListener('keydown', onKeydown)
  }

  toggle.addEventListener('click', function () {
    setMenu(!isOpen)
  })

  menu.querySelectorAll('.mobile-menu__item a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false)
    })
  })

  // Fecha o menu se a tela crescer para o layout desktop.
  var desktop = window.matchMedia('(min-width: 1024px)')
  desktop.addEventListener('change', function () {
    if (desktop.matches) setMenu(false)
  })

  /* ——— Carrossel de procedimentos ———
     Rolagem nativa (deslizar no celular, trackpad e setas no desktop). As setas
     e a barra só aparecem quando há mais cards do que cabem na tela. */
  var track = document.getElementById('procedimentos-lista')
  var controls = document.querySelector('.carousel__controls')

  if (track && controls) {
    var progressBar = controls.querySelector('.carousel__progress')
    var prevButton = controls.querySelector('[data-step="-1"]')
    var nextButton = controls.querySelector('[data-step="1"]')

    var updateCarousel = function () {
      var max = track.scrollWidth - track.clientWidth
      var progress = max > 0 ? track.scrollLeft / max : 0
      var visible = Math.min(1, track.clientWidth / track.scrollWidth)

      controls.hidden = !(visible < 1)
      progressBar.style.width = visible * 100 + '%'
      progressBar.style.transform = 'translateX(' + (progress * (1 - visible) * 100) / visible + '%)'
      prevButton.disabled = track.scrollLeft <= 2
      nextButton.disabled = track.scrollLeft >= max - 2
    }

    // Avança ou volta exatamente um card.
    var go = function (step) {
      var card = track.querySelector('li')
      if (!card) return
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0
      track.scrollBy({
        left: step * (card.offsetWidth + gap),
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
      })
    }

    prevButton.addEventListener('click', function () {
      go(-1)
    })
    nextButton.addEventListener('click', function () {
      go(1)
    })
    track.addEventListener('scroll', updateCarousel, { passive: true })
    window.addEventListener('resize', updateCarousel)
    updateCarousel()
  }

  /* ——— Entradas ao rolar ——— */
  var revealed = document.querySelectorAll('[data-reveal]')

  if (!('IntersectionObserver' in window)) {
    revealed.forEach(function (el) {
      el.classList.add('is-visible')
    })
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    revealed.forEach(function (el) {
      observer.observe(el)
    })
  }

  /* ——— Ano no rodapé ——— */
  var year = String(new Date().getFullYear())
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = year
  })
})()
