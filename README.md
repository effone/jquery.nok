# jquery.nok
Yet another full-fledged jQuery notification plugin with bare minimum code.
927 bytes only (612 bytes : js, 315 bytes : css).

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
    sticky: true
});
```

## Options
            message: '',    // The message to display
            type: 'info',   // Type of message : info / error / success
            sticky: false,  // Stay or hide after sometimes, bool
            stay: 4         // Seconds the message stays (if not sticky)

## Note
- Values included under `Options` are defaults. Change those as required.
- If message is blank, nok will not knock (appear).
- Pass a second value in number only else the nok will be sticky.
- Click on a sticky nok to dismiss. Simple as that.
