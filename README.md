# image-2-base64

> Generate a complete base64 encoded string from an image through a URL or a path in Node.js.

Prefix `data:${mimetype};base64,` to the result of [image-to-base64](https://www.npmjs.com/package/image-to-base64)to make a ready to go base64 encoded string.

That's All!

## Usage

```javascript
const { imageToBase64 } = require('image-2-base64');

async function main() {
  // from view-source:https://open.weixin.qq.com/?lang=en
  const input = 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico';
  const actual = await imageToBase64(input);
  const expected = 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADAklEQVRYhe2WQWgUZxiGn/ffuFlrLkoIMbOsWQxWikcvPRVFqKaKyQhejKcipfRUPPQUiAcpHrx5kSL1IK0HXQ2SKqXUSo/VHkREZFNjM7OVZSkeQtls43wesqmandmMzUYP7Xub/3/ne56BYf6B/3qUtpi/lh+yhu1GtgtsyKAX1Le4a1VBDVTGdFNZ/RgcCMqrFhj6bihbn/9rLDI7jvFeWtnm5PtOOp3rfudCebjceG0B74o3Zhadxuh7LXAroSq54+FoeCGVwLZrA71zf/MVZiOrAreQdLVnHcceHqjUEgUGpwb7G/XGTbDtHYW/wD3I5rK7Zj6aedIiUJws9s0vzN9aO/gLie6u7g8eHXxUBXBLy41n81+3g0t6CkQpCFGzmxDbvshajIOlF86GY8Go4ZTZF/qVjcJtkXS3jeRd4baEfmWjU2afUOzbb2bD3hVvDMBN2IQjslOJvuJS4Ac3AMJDYWDGeGLXGA8PhQFA4Ac3TFxK6mL25YRNOHdu8uwewwaSi69eZtp8OVr2LLbW5Fv+3OTZPS6KOJJcA8Fhr+TtByhOFQsRnEzqRnCyOFUsAHglb7/gcLvZUaQj8kqbfzFjZ7ti02QO6Gn3VEvGwBxGz4ojxe0ug8KKcCDNwGYPSNc1KLjUg9ck6nHAzFvDQ+AkpTo21yJmzDikW29LQNJ1h3FeqP7m6SzkyH3jQj/8E7j45vlcnPanqw4gp/VfAE9WuKeDdNXW5zZ8Ds3DaNqfrnZJR9P/Ia4GDk7uk/JwufaPAMDvfuUHTJ+R7sj993DTsWA0KL209GrylzePGPrWsFxn2arj9Gk4Gp5f5tSafCm/N7Jn1zvIv71O2aOP/ccPlm+4uHbkonsdwYr7zunjbZvefT8ODtAVe1+k3fbSsSdUQfxq2A6MwbZM6SHYT85xeXbkj+8BAiqJ/VgBwz5sDnsKOtFf6D9zZ+edBYCtpa19ddV3mKxXpk1ERJJqjqhqmcxvswdnk2lxwnGLA6WBn2Xc25BlfPl//P/pdJ4DItcX43LWrMQAAAAASUVORK5CYII=';

  console.log(actual === expected);
});

main();
```

Read more in [imageToBase64.test.js](https://raw.githubusercontent.com/legend80s/image-2-base64/main/tests/imageToBase64.test.js).
