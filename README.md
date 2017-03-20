# Valid Web Color
A simple utility function returning a boolean for whether or not a string is a valid web color

[![NPM][nodei-image]][nodei-url]

## Example
```js
import validWebColor from 'valid-web-color';

console.log(validWebColor('#fff')); // true, short hex
console.log(validWebColor('#ffffff')); // true, long hex
console.log(validWebColor('white')); // true, named color
console.log(validWebColor('rgb(255,255,255)')); // true, RedGreenBlue
console.log(validWebColor('rgba(255,255,255, 1)')); // true, RedGreenBlueAlpha
console.log(validWebColor('hsl(0, 0%,100%)')); // true, HueSaturationLightness
console.log(validWebColor('hsla(0, 0%, 100%, 1)')); // true, HueSaturationLightnessAlpha

console.log(validWebColor('#sagdfhdfjd')); // false, random invalid string
console.log(validWebColor({})); // false, non-string
```

## License

  [MIT](LICENSE)

[nodei-image]: https://nodei.co/npm/valid-web-color.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://www.npmjs.com/package/valid-web-color
