muqube:autoform-nouislider
=========================

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

## Installation

`meteor add muqube:autoform-nouislider`

There are two ways to import the package: dynamic and static. 
The default way is dynamic, where you import a function, containing a dynamic import.
This prevents this package from being added to the initial client bundle and allows
you to import it only at that point when it's really required.

```js
import loadAfNoUiSlider from 'meteor/muqube:autoform-nouislider'

// This is only an example of how to reactively track
// if the extension has been loaded.
// You can, of course, track it anyway you want!
Template.myTemplate.onCreated(async function () {
  const instance = this
  instance.state = new ReactiveDict()
  await loadAfNoUiSlider.default()
  instance.state.set('afNoUiSliderLoaded', true)
})
```

If you really need this package being added to the initial bundle, thus being present at
startup time, then you should use the static import:

```javascript
import 'meteor/muqube:autoform-nouislider/static'
```

## Configuration
Adds the `noUiSlider` type to [autoform](https://github.com/aldeed/meteor-autoform). It uses `min`, `max`, and `step` attributes like a normal slider, so it can be a drop in replacement, but options passed as `noUiSliderOptions` are passed directly to [nouislider](http://refreshless.com/nouislider/) for advanced control.

### Simple Usage

```
{{> afFieldInput type="noUiSlider" name="foo" min=5 max=10 step=1}}
```

### Single values Schema
    CollectionSchema = new SimpleSchema({
      slider: {
        type: Number,
        max: 150,
        min: 30,
        autoform: {
          type: "noUiSlider",
          step: 10,
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
      }
    });


### Range Silder Schema
    RangeSchema = new SimpleSchema({
      lower: {
        type: Number
      },
      upper: {
        type: Number
      }
    });

    CollectionSchema = new SimpleSchema({
      slider: {
        type: RangeSchema,
        max: 150,
        min: 30,
        autoform: {
          type: "noUiSlider",
          noUiSliderOptions: {
            step: 10
          },
          noUiSlider_pipsOptions: {
            mode: 'steps',
            density: 5
          }
        }
      }
    });

### Vertical Slider

To get a vertical slider, do `noUiSliderOptions: {orientation: 'vertical'}` and specify an exact `height` in the CSS for the `nouislider` class.

### Overridding start and range
You can override start and range by passing the options in.

Be sure that the values passed in match the format below.

    {{> afQuickField name='slider' start="[50,60]"}}
    {{> afQuickField name='singleSlider' range='{"min": 2,"max":50}'}}

### Labels
Show a label left and/or right of the slider
```
{{> afFieldInput type="noUiSlider" name="foo" labelLeft="ugly" labelRight="delicious" min=0 max=1 step=0.1}}
```

## History
Refer to [HISTORY.md](HISTORY.md)
