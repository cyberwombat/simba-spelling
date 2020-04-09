# Spelling widget

## Install

### Asssets

Place in head - adjust paths accordingly.
```
<link rel="stylesheet" href="./assets/styles/speller.css?v=3" />
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
<script src="./assets/scripts/speller.js?v=3"></script>
````

Place just before closing body tag. Function accepts the following options (shown with defaults) for paths, button texts, etc.
```
<script>
    $(function() {
      // Options can be passed - listed are the defaults
      var options = {
        // lists: './assets/lists/', // Path to lists
        // done: "That's all the words!", // End of lits text
        // sound: 'Sound: %s', // List title
        // pack: 'Spelling set %s', // Dropdown list label
        // select: 'Select a list' // Dropdown header
      }
      $().initSpeller(options, function() {})
    })
 </script>
```

### Widget
Place wherever widget should appear. 

```
 <div class="sp">
    <div class="sp__box">
      <div class="sp__row sp__row--pick">
        <div class="sp__cell">
          <div class="sp__pick">
            <div class="sp__pick__default"></div>
            <div class="sp__pick__list" style="display: none"></div>
          </div>
        </div>
        <div class="sp__cell">
          <div class="sp__picked"></div>
        </div>
      </div>
      <div class="sp__row">
        <div class="sp__cell sp__cell--cmds">
          <div class="sp__row sp__row--look">
            <div class="sp__cell sp__key">Look</div>
            <div class="sp__cell sp__value">
              <div class="sp__word sp__mode--view"></div>
            </div>
          </div>
          <div class="sp__row sp__row--say" style="display:none;">
            <div class="sp__cell sp__key">Say</div>
            <div class="sp__cell sp__value">
              <div class="sp__speech"></div>
            </div>
          </div>
          <div class="sp__row sp__row--cover">
            <div class="sp__cell sp__key">Cover</div>
            <div class="sp__cell sp__value">
              <div class="sp__button sp__cover sp__mode--view">Cover</div>
              <div class="sp__button sp__look sp__mode--input"
                style="display: none;">
                Look Again
              </div>
            </div>
          </div>
          <div class="sp__row sp__row--write">
            <div class="sp__cell sp__key">Write</div>
            <div class="sp__cell sp__value">
              <input type="text" maxlength="10" style="display:none"
                class="sp__input sp__mode--input" />
            </div>
          </div>
          <div class="sp__row sp__row--check">
            <div class="sp__cell sp__key">Check</div>
            <div class="sp__cell sp__value">
              <div class="sp__button sp__check  sp__mode--input" style="display:
                none">
                Check
              </div>
              <div class="sp__finished" style="display: none;"></div>
              <div class="sp__actions sp__button sp__retry"
                style="display: none;">
                Try Again
              </div>
              <div class="sp__actions sp__button sp__next"
                style="display: none;">
                Next Word
              </div>
            </div>
          </div>
        </div>
        <div class="sp__cell sp__cell--list">
          <div class="sp__list"></div>
        </div>
      </div>
    </div>
  </div>
  
```
Note that current CSS may conflict/modify the widget.