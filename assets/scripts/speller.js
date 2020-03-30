;(function($) {
  var lists = [
    [
      'ai',
      'air',
      'ar',
      'ear',
      'ee',
      'er_stressed',
      'er_unstressed',
      'igh',
      'ng',
      'nk',
      'oa',
      'oi',
      'oo_short',
      'oo',
      'or',
      'ow',
      'ur'
    ],
    [
      'a-e',
      'au',
      'aw',
      'ay',
      'e-e',
      'ea',
      'ew',
      'i-e',
      'ie',
      'ir',
      'o-e',
      'oe',
      'ou',
      'ow',
      'oy',
      'ph',
      'u-e',
      'ue',
      'wh'
    ],
    ['are', 'ff', 'ie', 'k', 'll', 'ore', 'ea', 'ss', 'tch', 've', 'y', 'zz']
  ]

  function loadWordList(syl, ln, cb) {
    if (!lists[ln].includes(syl)) syl = lists[0][0]
    var list = './assets/lists/' + syl + '.json'
    const p = $.getJSON(list).done(function(data) {
      words = data
      index = 0
      loadWord()
      setViewMode()
      $('.sp__pick').removeClass('sp__selected')
      $('.sp__pick--' + syl).addClass('sp__selected')

      cb()
    })
  }
  function loadWord() {
    toggleChallenge()
    $('.sp__word').text(getCurrentWord())
  }
  function toggleChallenge() {
    if (index === words.length - 1) {
      $('.sp__word').addClass('sp__challenge')
    } else {
      $('.sp__word').removeClass('sp__challenge')
    }
  }
  function getCurrentWord() {
    return words[index]
  }
  function getInput() {
    return $('.sp__input').val()
  }
  function isSame() {
    return getInput().toLowerCase() === getCurrentWord().toLowerCase()
  }
  function markInvalid() {
    $('.sp__input').removeClass('sp__input--valid')
    $('.sp__input').addClass('sp__input--invalid')
  }
  function markValid() {
    $('.sp__input').removeClass('sp__input--invalid')
    $('.sp__input').addClass('sp__input--valid')
  }
  function clearInput() {
    $('.sp__input').removeClass('sp__input--invalid')
    $('.sp__input').removeClass('sp__input--valid')
    $('.sp__input').val('')
  }
  function setInputMode() {
    $('.sp__mode--view').hide()
    $('.sp__mode--input').fadeIn()
  }
  function setViewMode() {
    $('.sp__mode--input').hide()
    $('.sp__mode--view').fadeIn()
  }
  function showActions() {
    $('.sp__check').hide()
    $('.sp__actions').fadeIn()
  }
  function showCheck() {
    $('.sp__actions').hide()
    $('.sp__check').fadeIn()
  }
  function clearList() {
    $('.sp__list').text()
  }
  function addToList() {
    $('.sp__list').html($('.sp__list').html() + getCurrentWord() + '<br/>')
  }
  function setListPicker() {
    $('.sp__pick__default').text(options.select)
    $('.sp__pick').click(function() {
      $('.sp__pick__list', this).toggle()
    })
    $('.sp__pick__list').mouseleave(function() {
      $(this).hide()
    })
    var list_tpl = '<div class="sp__pick__list--content"></div>'
    var sublist_tpl = '<div class="sp__pick__list--lists"></div>'
    var item_tpl = '<div class="sp__pick__item sp__pick__item--%s">%s</div>'
    var hdr_tpl = '<div class="sp__pick__list--header"></div>'
    var sec_tpl = '<div class="sp__pick__list--list"></div>'
    var parent = $('.sp__pick__list')
    lists.forEach(function(l, index) {
      var hdr = $(hdr_tpl).text(options.pack.replace('%s', index + 1))

      var content = $(list_tpl).append(hdr)
      var section_container = $(sublist_tpl)
      var sections = [l.slice(0, 10), l.slice(10)]

      sections.forEach(function(section, i) {
        var sec = $(sec_tpl)
        section.forEach(function(s, i) {
          var title = normalizeTitle(s)
          var c = $(item_tpl.replace(/%s/g, title))
            .click(function(e) {
              e.preventDefault()
              loadWordList(s, index, function() {})
              setListTitle(title)
            })
            .appendTo(sec)
        })
        sec.appendTo(section_container)
      })
      section_container.appendTo(content)
      content.appendTo(parent)
    })
  }
  function normalizeTitle(t) {
    if (t.match('_')) {
      t = t.replace('_', ' (') + ')'
    }
    return t
  }
  function setListTitle(t) {
    $('.sp__picked').text(options.sound.replace('%s', t))
  }
  function setSpeechFn() {
    $('.sp__speech').click(function(e) {
      e.preventDefault()
      var utterThis = new SpeechSynthesisUtterance(getCurrentWord())
      synth.speak(utterThis)
    })
  }
  function setCoverFn() {
    $('.sp__cover').click(function(e) {
      e.preventDefault()
      setInputMode()
    })
  }
  function setLookFn() {
    $('.sp__look').click(function(e) {
      e.preventDefault()
      setViewMode()
    })
  }
  function setTryAgainFn() {
    $('.sp__retry').click(function(e) {
      e.preventDefault()
      clearInput()
      setInputMode()
      showCheck()
    })
  }
  function setNextFn() {
    $('.sp__next').click(function(e) {
      e.preventDefault()
      index = index + 1
      if (index === words.length) {
        toggleAllDone()
      } else {
        loadWord()
        showCheck()
        clearInput()
        setViewMode()
      }
    })
  }
  function setCheckFn() {
    $('.sp__check').click(function(e) {
      e.preventDefault()
      showActions()
      if (isSame()) {
        markValid()
        addToList()
      } else markInvalid()
    })
  }
  function toggleAllDone() {
    $('.sp__actions').toggle()
    $('.sp__finished')
      .html(options.done)
      .toggle()
  }

  function showSpeech() {
    $('.sp__row--say').show()
  }

  function loadClickFns() {
    setSpeechFn()
    setCoverFn()
    setLookFn()
    setCheckFn()
    setTryAgainFn()
    setNextFn()
    setListPicker()
  }

  var index = 0
  var words = []
  var options = {
    done: "That's all the words!",
    sound: 'Sound: %s',
    pack: 'Spelling set %s',
    select: 'Select a list'
  }

  if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis
  }
  $.fn.initSpeller = function(config, cb) {
    for (var attr in config) {
      options[attr] = config[attr]
    }
    if (synth) showSpeech()
    loadClickFns()
    loadWordList(lists[0][0], 0, cb)
  }
})(jQuery)
