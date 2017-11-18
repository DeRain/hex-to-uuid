# Convert HEX string to UUID string

[![Build Status](https://travis-ci.org/DeRain/hex-to-uuid.svg?branch=master)](https://travis-ci.org/DeRain/hex-to-uuid)

## Examples of using

```javascript
const hexToUuid = require('hex-to-uuid');
const uuidStringFromHexWithLeadingZero = hexToUuid('0xd3fd354067184687956bc8618a26e335');
console.log(uuidStringFromHexWithLeadingZero); //d3fd3540-6718-4687-956b-c8618a26e335

const uuidStringFromHexWithoutLeadingZero = hexToUuid('e13b23e91dcb41c8ab0be65b84161d20');
console.log(uuidStringFromHexWithoutLeadingZero); //e13b23e9-1dcb-41c8-ab0b-e65b84161d20
```

[UUID to HEX converter](https://www.npmjs.com/package/uuid-to-hex)
