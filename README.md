# konva-elements

Custom elements for [react-konva](https://github.com/konvajs/react-konva) as used in [mediabits.io](https://mediabits.io).

### Waveform

Represents audio waveform. Requires pcm data for every frame.

Props:

- `animated` - will start from specified `frame` and animate every frame until all frames are over.
- `frame` - index of current frame.
- `frames` - pcm data: `[number, number][][]` - low-high x samples x frames.
- `pattern` - one of `wave`, `pixel`, `bars`, `roundBars`, `line`, `curve` - different styles of waveform
- other `Konva.Shape` props like `fill`, `width`, `height`, `x`, y`

```
<Waveform />
```

### ProgressBar

Props:

- `animated` - will start from specified `progress` and animate every frame until `max`
- `progress` - number indicating progress until `max` - [0..1]
- `max` - limit for progress
- `backgroundColor` - color of area between progress and max
- `fill` - color of area between 0 and progress
- other `Konva.Group` element props
