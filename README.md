# jquery.nok
Yet another full-fledged jQuery notification plugin with bare minimum code.
931 bytes only (616 bytes : js, 315 bytes : css

## Dependency
Ofcourse, jQuery library. Make sure it is included, else do that first.

## Instalation

Include `jquery.nok.min.css` from `dist` folder.
```html
<link rel="stylesheet" href="./dist/jquery.nok.min.css">
```

Include `jquery.nok.min.js` from `dist` folder.
```html
<script src="./dist/jquery.nok.min.js"></script>
```
Thats all. Ready to use.

npm?
`npm install jquery.nok`

## Fire a nok
```javascript
$.nok({message: "Knock Knock, anyone home?"});
```
Customize?

```javascript
$.nok({
    message: "OOpSEE!! Mishap!",
    type: "error",
    stay: 0 // Sticky
});
```

## Options
            message: '',    // The message to display
            type: 'info',   // Type of message : info / error / success
            sticky: false,  // Stay or hide after sometimes, bool : DEPRECATED (will be removed in future version)
            stay: 4         // Seconds the message stays (since v.1.1.0 set this value to 0 to make sticky)

## Note
- Values included under `Options` are defaults. Change those as required.
- If message is blank, nok will not knock (appear).
- Pass a second value in number only else the nok will be sticky.
- Click on a sticky nok to dismiss. Simple as that.


![badge](https://img.shields.io/npm/dt/jquery.nok?label=NPM%20Downloads&style=for-the-badge)

## Version History:
1.1.0 : <2018.08.20>
- Deprecate option `sticky`, replaced by `{stay: 0}`

1.0.1 : <2018.08.20>
- Added SASS Partial
- Code Cleanup

1.0.0 : <2018.01.20>
- Initial Stable Release
