;(function ($) {
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
      'ur',
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
      'wh',
    ],
    ['are', 'ff', 'ie', 'k', 'll', 'ore', 'ea', 'ss', 'tch', 've', 'y', 'zz'],
  ]

  var dictionary = {
    'a-e': [
      'make',
      'bake',
      'cake',
      'wave',
      'cave',
      'behave',
      'planes',
      'shapes',
      'estimate',
      'grapes',
      'translate',
    ],
    'e-e': [
      'theme',
      'compete',
      'evening',
      'Chinese',
      'concrete',
      'scene',
      'complete',
      'delete',
      'obsolete',
      'sincere',
      'Japanese',
    ],
    ff: [
      'tiff',
      'off',
      'puff',
      'cuff',
      'stuff',
      'staff',
      'sniffing',
      'bluff',
      'stuffed',
      'scoff',
      'affection',
    ],
    nk: [
      'pink',
      'bank',
      'tank',
      'sink',
      'wink',
      'shrink',
      'rethink',
      'skunk',
      'drink',
      'thank',
      'chipmunk',
    ],
    ore: [
      'core',
      'bore',
      'tore',
      'more',
      'sore',
      'chore',
      'score',
      'before',
      'store',
      'adore',
      'boredom',
    ],
    'u-e': [
      'tube',
      'rude',
      'tune',
      'mule',
      'flute',
      'volume',
      'huge',
      'refuse',
      'prune',
      'perfume',
      'include',
    ],
    ai: [
      'rain',
      'aim',
      'fail',
      'laid',
      'pain',
      'chains',
      'mermaid',
      'waiter',
      'failed',
      'painful',
      'explained',
    ],
    ea: [
      'tea',
      'heal',
      'sea',
      'pea',
      'cheat',
      'squeak',
      'please',
      'leave',
      'breath',
      'squeal',
      'kneadea',
    ],
    'i-e': [
      'hide',
      'bike',
      'ride',
      'tide',
      'time',
      'nice',
      'write',
      'mice',
      'slime',
      'while',
      'guide',
    ],
    'o-e': [
      'code',
      'joke',
      'home',
      'vote',
      'stove',
      'smoke',
      'globe',
      'froze',
      'stroke',
      'quote',
      'chose',
    ],
    ou: [
      'out',
      'shout',
      'crouch',
      'slouch',
      'count',
      'mouth',
      'mouse',
      'blouse',
      'bounce',
      'lounge',
      'scrounge',
    ],
    ue: [
      'blue',
      'clue',
      'true',
      'cue',
      'argue',
      'Tuesday',
      'pursue',
      'statue',
      'rescue',
      'value',
      'barbecue',
    ],
    air: [
      'air',
      'chair',
      'fair',
      'pair',
      'hair',
      'dairy',
      'despair',
      'airport',
      'staircase',
      'unfair',
      'hairstylist',
    ],
    ea2: [
      'head',
      'read',
      'dead',
      'thread',
      'spread',
      'breath',
      'feather',
      'leather',
      'weather',
      'meadow',
      'breakfast',
    ],
    ie: [
      'field',
      'brief',
      'chief',
      'grief',
      'relief',
      'mischief',
      'niece',
      'piece',
      'fierce',
      'achieve',
      'hygiene',
    ],
    oa: [
      'goat',
      'boat',
      'toad',
      'coat',
      'foam',
      'moaning',
      'soaked',
      'boasts',
      'cloaks',
      'poached',
      'approach',
    ],
    ow: [
      'now',
      'cow',
      'how',
      'down',
      'town',
      'brown',
      'crowded',
      'crown',
      'growling',
      'prowled',
      'drowning',
    ],
    ur: [
      'turn',
      'hurt',
      'church',
      'burst',
      'Thursday',
      'burning',
      'injured',
      'surprise',
      'purple',
      'turtle',
      'burgundy',
    ],
    ar: [
      'car',
      'bar',
      'star',
      'card',
      'art',
      'arctic',
      'start',
      'arcade',
      'armband',
      'charm',
      'carwash',
    ],
    ear: [
      'ear',
      'bear',
      'near',
      'tear',
      'fear',
      'beard',
      'fearful',
      'tearful',
      'wearing',
      'cleared',
      'appearance',
    ],
    igh: [
      'high',
      'sigh',
      'right',
      'night',
      'light',
      'flight',
      'bright',
      'delight',
      'highlight',
      'slight',
      'nightmare',
    ],
    oe: [
      'toe',
      'aboe',
      'woe',
      'foe',
      'hoe',
      'toes',
      'goes',
      'oboes',
      'foes',
      'woes',
      'tiptoed',
    ],
    ow_long: [
      'blow',
      'snow',
      'row',
      'flow',
      'show',
      'arrow',
      'below',
      'elbow',
      'borrow',
      'meadow',
      'tomorrow',
    ],
    ve: [
      'live',
      'have',
      'give',
      'love',
      'dove',
      'above',
      'captive',
      'massive',
      'extensive',
      'detective',
      'aggressive',
    ],
    are: [
      'care',
      'bare',
      'dare',
      'share',
      'fare',
      'scared',
      'glare',
      'shared',
      'spared',
      'hare',
      'carefulness',
    ],
    ee: [
      'fee',
      'see',
      'bee',
      'three',
      'beep',
      'knee',
      'weekly',
      'beehive',
      'freeze',
      'beetroot',
      'cheetah',
    ],
    ir: [
      'fir',
      'sir',
      'bird',
      'stir',
      'girl',
      'shirt',
      'thirst',
      'squirm',
      'thirteen',
      'thirty',
      'circle',
    ],
    oi: [
      'oil',
      'boil',
      'coin',
      'soil',
      'join',
      'spoil',
      'hoist',
      'noisy',
      'oiled',
      'avoids',
      'moisture',
    ],
    oy: [
      'joy',
      'toy',
      'boy',
      'ahoy',
      'soya',
      'joyful',
      'annoy',
      'royalty',
      'destroys',
      'loyalty',
      'annoyingly',
    ],
    wh: [
      'wheel',
      'wheat',
      'whip',
      'whirl',
      'whisk',
      'whisper',
      'whiskers',
      'whale',
      'while',
      'whistle',
      'overwhelm',
    ],
    au: [
      'fault',
      'maul',
      'fraud',
      'haul',
      'vault',
      'sauce',
      'dinosaur',
      'August',
      'author',
      'launch',
      'astronaut',
    ],
    er_stressed: [
      'her',
      'verb',
      'herb',
      'term',
      'herd',
      'serve',
      'verse',
      'swerve',
      'kerb',
      'person',
      'allergy',
    ],
    k: [
      'Kent',
      'kill',
      'kit',
      'skin',
      'kiss',
      'sketch',
      'skipping',
      'keep',
      'kangaroo',
      'skittle',
      'kennel',
    ],
    oo: [
      'zoo',
      'food',
      'moon',
      'soon',
      'roof',
      'proof',
      'gloomy',
      'scoop',
      'bamboo',
      'moody',
      'noodles',
    ],
    ph: [
      'nephew',
      'orphan',
      'phonics',
      'dolphin',
      'phone',
      'alphabet',
      'autograph',
      'pharmacy',
      'microphone',
      'diagraph',
      'pharmacist',
    ],
    y: [
      'very',
      'happy',
      'funny',
      'party',
      'berry',
      'family',
      'memory',
      'hungry',
      'empty',
      'baby',
      'penalty',
    ],
    aw: [
      'yawn',
      'dawn',
      'raw',
      'claw',
      'draw',
      'drawn',
      'prawn',
      'crawl',
      'shawl',
      'scrawl',
      'squawked',
    ],
    er_unstressed: [
      'better',
      'letter',
      'winter',
      'dinner',
      'sister',
      'understand',
      'sitter',
      'summer',
      'thicker',
      'number',
      'another',
    ],
    ll: [
      'doll',
      'fell',
      'well',
      'will',
      'bull',
      'ball',
      'smell',
      'telling',
      'filled',
      'tallest',
      'smelliest',
    ],
    oo_short: [
      'book',
      'took',
      'foot',
      'wood',
      'good',
      'cookers',
      'unhook',
      'wooden',
      'woolly',
      'shook',
      'workbook',
    ],
    ss: [
      'miss',
      'kiss',
      'boss',
      'fuss',
      'hiss',
      'pass',
      'press',
      'stress',
      'hissed',
      'dress',
      'baldness',
    ],
    zz: [
      'buzz',
      'jazz',
      'fizz',
      'fuzz',
      'frizzy',
      'puzzle',
      'blizzard',
      'fizzy',
      'dazzle',
      'pizza',
      'bedazzled',
    ],
    ay: [
      'may',
      'hay',
      'hay',
      'play',
      'day',
      'way',
      'crayon',
      'frayed',
      'betray',
      'playing',
      'paying',
      'birthdays',
    ],
    ew: [
      'new',
      'few',
      'grew',
      'flew',
      'drew',
      'threw',
      'jewel',
      'chewable',
      'dewdrop',
      'curfews',
      'bejewelled',
    ],
    ng: [
      'bang',
      'ring',
      'king',
      'song',
      'wing',
      'along',
      'swing',
      'kangaroo',
      'roofing',
      'bungalow',
      'stitching',
    ],
    or: [
      'for',
      'sort',
      'born',
      'corn',
      'horn',
      'horse',
      'morning',
      'storms',
      'short',
      'scorch',
      'according',
    ],
    tch: [
      'itch',
      'etch',
      'hatch',
      'fetch',
      'catch',
      'clutch',
      'kitchen',
      'patchy',
      'sketch',
      'witches',
      'matchboxes',
    ],
  }

  var index = 0
  var words = []
  var options = {
    done: "That's all the words!",
    sound: 'Sound: %s',
    pack: 'Spelling set %s',
    select: 'Select a list',
  }
  var success = null

  function getWordList(syl, ln) {
    clearList()
    clearSpellResult()

    words = dictionary[syl]
    index = 0
    loadWord()
    setViewMode()
    $('.sp__pick').removeClass('sp__selected')
    $('.sp__pick--' + syl).addClass('sp__selected')
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
  function getSpellResult() {
    return success
  }
  function setSpellSuccesss() {
    success = true
  }
  function setSpellError() {
    success = false
  }

  function clearSpellResult() {
    success = null
  }

  function getInput() {
    return $('.sp__input').val()
  }
  function isSame() {
    return getInput().toLowerCase() === getCurrentWord().toLowerCase()
  }
  function markInvalid() {
    setSpellError()
    $('.sp__input').removeClass('sp__input--valid')
    $('.sp__input').addClass('sp__input--invalid')
  }
  function markValid() {
    setSpellSuccesss()
    $('.sp__input').removeClass('sp__input--invalid')
    $('.sp__input').addClass('sp__input--valid')
  }
  function clearInput() {
    clearSpellResult()
    $('.sp__input').removeClass('sp__input--invalid')
    $('.sp__input').removeClass('sp__input--valid')
    $('.sp__input').val('')
  }
  function setStartMode() {
    $('.sp__mode--view').hide()
    $('.sp__mode--input').hide()
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
    $('.sp__list').text('')
  }
  function addToList() {
    var s =
      getSpellResult() === true ? 'sp__result--valid' : 'sp__result--invalid'
    $('.sp__list').html(
      $('.sp__list').html() +
        '<div class="sp__result ' +
        s +
        '">' +
        getCurrentWord() +
        '</div>'
    )
  }
  function setListPicker() {
    $('.sp__pick__default').text(options.select)
    $('.sp__pick').click(function () {
      $('.sp__pick__list', this).toggle()
    })
    $('.sp__pick__list').mouseleave(function () {
      $(this).hide()
    })
    var list_tpl = '<div class="sp__pick__list--content"></div>'
    var sublist_tpl = '<div class="sp__pick__list--lists"></div>'
    var item_tpl = '<div class="sp__pick__item sp__pick__item--%s">%s</div>'
    var hdr_tpl = '<div class="sp__pick__list--header"></div>'
    var sec_tpl = '<div class="sp__pick__list--list"></div>'
    var parent = $('.sp__pick__list')
    lists.forEach(function (l, index) {
      var hdr = $(hdr_tpl).text(options.pack.replace('%s', index + 1))

      var content = $(list_tpl).append(hdr)
      var section_container = $(sublist_tpl)
      var sections = [l.slice(0, 10), l.slice(10)]

      sections.forEach(function (section, i) {
        var sec = $(sec_tpl)
        section.forEach(function (s, i) {
          var title = normalizeTitle(s)
          var c = $(item_tpl.replace(/%s/g, title))
            .click(function (e) {
              e.preventDefault()
              getWordList(s, index)
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
    $('.sp__speech').click(function (e) {
      e.preventDefault()
      var utterThis = new SpeechSynthesisUtterance(getCurrentWord())
      synth.speak(utterThis)
    })
  }
  function setCoverFn() {
    $('.sp__cover').click(function (e) {
      e.preventDefault()
      setInputMode()
    })
  }
  function setLookFn() {
    $('.sp__look').click(function (e) {
      e.preventDefault()
      setViewMode()
    })
  }
  function setTryAgainFn() {
    $('.sp__retry').click(function (e) {
      e.preventDefault()
      clearInput()
      setInputMode()
      showCheck()
    })
  }
  function setNextFn() {
    $('.sp__next').click(function (e) {
      e.preventDefault()

      addToList()
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
    $('.sp__check').click(function (e) {
      e.preventDefault()
      showActions()
      if (isSame()) {
        markValid()
      } else markInvalid()
    })
  }
  function toggleAllDone() {
    $('.sp__actions').toggle()
    $('.sp__finished').html(options.done).toggle()
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

  if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis
  }
  $.fn.initSpeller = function (config, cb) {
    for (var attr in config) {
      options[attr] = config[attr]
    }
    if (synth) showSpeech()

    loadClickFns()
    setStartMode()
  }
})(jQuery)
