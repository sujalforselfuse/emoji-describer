# Welcome !!
## Know The Meanings Of Emojis

[![NPM version](https://img.shields.io/npm/v/emoji-describer.svg?style=flat)](https://www.npmjs.com/package/emoji-describer)
[![NPM downloads](https://img.shields.io/npm/dm/emoji-describer.svg?style=flat)](https://www.npmjs.com/package/emoji-describer)

A simple Node.js package to convert emojis to their textual descriptions. It works for all skin tones.

## Installation

You can install the package using npm:

```bash
npm i emoji-describer
``` 


## Usage/Examples

```javascript
import { getEmojiMeaning } from "emoji-describer";
import { hasEmoji } from "emoji-describer";
import { extractEmojis } from "emoji-describer";

console.log(getEmojiMeaning("💎"))
console.log(getEmojiMeaning("👍"))
console.log(getEmojiMeaning("👍🏼")) //works for all skin tones

console.log(hasEmoji("❤️Nature is very beautiful💚🩵"))

console.log(extractEmojis("Lorem 🦁🐹 ipsum 🐓🐳 🤗 lorem 🤣🤲🙌"))

//Outputs
//gem stone
//thumbs up
//thumbs up
//true
//[ '🦁', '🐹', '🐓','🐳', '🤗', '🤣','🤲', '🙌']
```


## Authors

- [@sujalforselfuse](https://www.github.com/sujalforselfuse)


