<template>
  <div class="track-container">
    <span class="range-value min"
      ><span class="uppercase text-sm text-gray-300">Min:</span> {{ minValue }}
    </span>
    <span class="range-value max"
      ><span class="uppercase text-sm text-gray-300">Max:</span>
      {{ maxValue }}</span
    >
    <div ref="_vpcTrack" class="track bg-gray-300"></div>
    <div
      ref="trackHighlight"
      class="track-highlight absolute h-2 rounded-full w-0"
    ></div>
    <button
      ref="track1"
      class="
        absolute
        track-btn
        track1
        h-4
        flex
        items-center
        justify-center
        w-4
        rounded-full
        bg-blue
        shadow
        border border-gray-300
        -ml-2
        top-0
        cursor-pointer
      "
    ></button>
    <button
      ref="track2"
      class="
        absolute
        track-btn
        track2
        h-4
        flex
        items-center
        justify-center
        w-4
        rounded-full
        bg-blue
        shadow
        border border-gray-300
        -ml-2
        top-0
        cursor-pointer
      "
    ></button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type fn = (_ev: Event, track: string) => void

@Component
export default class PriceRangeSlider extends Vue {
  @Prop()
  defaultMin: number = 0

  @Prop()
  defaultMax: number = 10000



  minValue = this.$props.defaultMin
  maxValue = this.$props.defaultMax
  min = this.$props.defaultMin
  max = this.$props.defaultMax
  step = 5
  totalSteps = 0
  percentPerStep = 1
  trackWidth = null
  isDragging = false
  pos = {
    curTrack: '',
  }

  moveTrack(track: string, ev: Touch) {
    const percentInPx = this.getPercentInPx()

    const trackX = Math.round(
      (this.$refs?._vpcTrack as HTMLElement)?.getBoundingClientRect().left
    )
    const clientX = ev.clientX
    const moveDiff = clientX - trackX
    const moveInPct = moveDiff / percentInPx
    if (moveInPct < 1 || moveInPct > 100) return
    const value =
      Math.round(moveInPct / this.percentPerStep) * this.step + this.min
    if (track === 'track1') {
      if (value >= this.maxValue - this.step) return
      this.minValue = value
    }

    if (track === 'track2') {
      if (value <= this.minValue + this.step) return
      this.maxValue = value
    }

    ;(this.$refs[track] as HTMLElement).style.left = moveInPct + '%'

    console.log({min : this.minValue, max : this.maxValue})
    this.setTrackHightlight()
     this.$emit('set-filter',  {min : this.minValue, max : this.maxValue})

  }

  mousedown: fn = (_ev, track) => {
    if (this.isDragging) return
    this.isDragging = true
    this.pos.curTrack = track
  }

  touchstart: fn = (ev, track) => {
    this.mousedown(ev, track)
  }

  mouseup: fn = (_ev, _track) => {
    if (!this.isDragging) return
    this.isDragging = false
  }

  touchend: fn = (ev, track) => {
    this.mouseup(ev, track)
  }

  mousemove = (ev: Touch, track: string) => {
    if (!this.isDragging) return
    this.moveTrack(track, ev)
  }

  touchmove = (ev: TouchEvent, track: string) => {
    console.log({ ev, track })
    this.mousemove(ev.changedTouches[0], track)
  }

  valueToPercent(value) {
    return ((value - this.min) / this.step) * this.percentPerStep
  }

  setTrackHightlight() {
    (this.$refs.trackHighlight as HTMLElement).style.left =
      String(this.valueToPercent(this.minValue)) + '%';
    (this.$refs.trackHighlight as HTMLElement).style.width =
      this.valueToPercent(this.maxValue) -
      this.valueToPercent(this.minValue) +
      '%';
  }

  getPercentInPx() {
    const trackWidth = (this.$refs._vpcTrack as HTMLElement).offsetWidth
    const oneStepInPx = trackWidth / this.totalSteps
    // 1 percent in px
    const percentInPx = oneStepInPx / this.percentPerStep
    return percentInPx
  }

  setClickMove(ev: Touch) {
    const track1Left = (
      this.$refs.track1 as HTMLElement
    ).getBoundingClientRect().left
    const track2Left = (
      this.$refs.track2 as HTMLElement
    ).getBoundingClientRect().left
    // console.log('track1Left', track1Left)
    if (ev.clientX < track1Left) {
      this.moveTrack('track1', ev)
    } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
      this.moveTrack('track1', ev)
    } else {
      this.moveTrack('track2', ev)
    }
  }

  mounted() {





    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // set track1 initilal
    (document.querySelector('.track1') as HTMLElement).style.left =
      this.valueToPercent(this.minValue) + '%';
    // track2 initial position
    (document.querySelector('.track2') as HTMLElement).style.left =
      this.valueToPercent(this.maxValue) + '%';
    // set initila track highlight
    this.setTrackHightlight()

    const self = this

    ;['mouseup', 'mousemove'].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack)
        }
      })
    })
    ;[
      'mousedown',
      'mouseup',
      'mousemove',
      'touchstart',
      'touchmove',
      'touchend',
    ].forEach((type) => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function (ev) {
      ev.stopPropagation()
      self.setClickMove(ev)
    })

    document
      .querySelector('.track-highlight')
      .addEventListener('click', function (ev) {
        ev.stopPropagation()
        self.setClickMove(ev)
      })
  }
}
</script>

<style>
.range-value {
  position: absolute;
  top: -2rem;
}
.range-value.min {
  left: 0;
}

.range-value.max {
  right: 0;
}
.track-container {
  width: 300px;
  position: relative;
  cursor: pointer;
  height: 0.5rem;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
}

.track {
  background-color: #cacaca;
}

.track-highlight {
  background-color: rgb(37, 99, 235);
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 1rem;
  height: 1rem;
  top: calc(-50%);
  border: none;
  background-color: rgba(37, 99, 233);
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
</style>
