const emojiDescriptions = {
    '😀': 'grinning face',
    '😃': 'grinning face with big eyes',
    '😄': 'grinning face with smiling eyes',
    '😁': 'beaming face with smiling eyes',
    '😆': 'grinning squinting face',
    '😅': 'grinning face with sweat',
    '🤣': 'rolling on the floor laughing',
    '😂': 'face with tears of joy',
    '🙂': 'slightly smiling face',
    '🙃': 'upside-down face',
    '🫠': 'melting face',
    '😉': 'winking face',
    '😊': 'smiling face with smiling eyes',
    '😇': 'smiling face with halo',
    '🥰': 'smiling face with hearts',
    '😍': 'smiling face with heart-eyes',
    '🤩': 'star-struck',
    '😘': 'face blowing a kiss',
    '😗': 'kissing face',
    '😚': 'kissing face with closed eyes',
    '😙': 'kissing face with smiling eyes',
    '🥲': 'smiling face with tear',
    '😋': 'face savoring food',
    '😛': 'face with tongue',
    '😜': 'winking face with tongue',
    '🤪': 'zany face',
    '😝': 'squinting face with tongue',
    '🤑': 'money-mouth face',
    '🤗': 'smiling face with open hands',
    '🤭': 'face with hand over mouth',
    '🫢': 'face with open eyes and hand over mouth',
    '🫣': 'face with peeking eye',
    '🤫': 'shushing face',
    '🤔': 'thinking face',
    '🫡': 'saluting face',
    '🤐': 'zipper-mouth face',
    '🤨': 'face with raised eyebrow',
    '😐': 'neutral face',
    '😑': 'expressionless face',
    '😶': 'face without mouth',
    '🫥': 'dotted line face',
    '😶‍🌫️': 'face in clouds',
    '😏': 'smirking face',
    '😒': 'unamused face',
    '🙄': 'face with rolling eyes',
    '😬': 'grimacing face',
    '😮‍💨': 'face exhaling',
    '🤥': 'lying face',
    '😌': 'relieved face',
    '😔': 'pensive face',
    '😪': 'sleepy face',
    '🤤': 'drooling face',
    '😴': 'sleeping face',
    '😷': 'face with medical mask',
    '🤒': 'face with thermometer',
    '🤕': 'face with head-bandage',
    '🤢': 'nauseated face',
    '🤮': 'face vomiting',
    '🤧': 'sneezing face',
    '🥵': 'hot face',
    '🥶': 'cold face',
    '🥴': 'woozy face',
    '😵': 'face with crossed-out eyes',
    '😵‍💫': 'face with spiral eyes',
    '🤯': 'exploding head',
    '🤠': 'cowboy hat face',
    '🥳': 'partying face',
    '🥸': 'disguised face',
    '😎': 'smiling face with sunglasses',
    '🤓': 'nerd face',
    '🧐': 'face with monocle',
    '😕': 'confused face',
    '😟': 'worried face',
    '🙁': 'slightly frowning face',
    '☹️': 'frowning face',
    '😮': 'face with open mouth',
    '😯': 'hushed face',
    '😲': 'astonished face',
    '😳': 'flushed face',
    '🥺': 'pleading face',
    '🥹': 'face holding back tears',
    '😦': 'frowning face with open mouth',
    '😧': 'anguished face',
    '😨': 'fearful face',
    '😰': 'anxious face with sweat',
    '😥': 'sad but relieved face',
    '😢': 'crying face',
    '😭': 'loudly crying face',
    '😱': 'face screaming in fear',
    '😖': 'confounded face',
    '😣': 'persevering face',
    '😞': 'disappointed face',
    '😓': 'downcast face with sweat',
    '😩': 'weary face',
    '😫': 'tired face',
    '🥱': 'yawning face',
    '😤': 'face with steam from nose',
    '😡': 'pouting face',
    '😠': 'angry face',
    '🤬': 'face with symbols on mouth',
    '😈': 'smiling face with horns',
    '👿': 'angry face with horns',
    '💀': 'skull',
    '☠️': 'skull and crossbones',
    '💩': 'pile of poo',
    '🤡': 'clown face',
    '👻': 'ghost',
    '👽': 'alien',
    '👾': 'alien monster',
    '🤖': 'robot',
    '😺': 'grinning cat',
    '😸': 'grinning cat with smiling eyes',
    '😹': 'cat with tears of joy',
    '😻': 'smiling cat with heart-eyes',
    '😼': 'cat with wry smile',
    '😽': 'kissing cat',
    '🙀': 'weary cat',
    '😿': 'crying cat',
    '😾': 'pouting cat',
    '🙈': 'see-no-evil monkey',
    '🙉': 'hear-no-evil monkey',
    '🙊': 'speak-no-evil monkey',
    '💋': 'kiss mark',
    '💌': 'love letter',
    '💘': 'heart with arrow',
    '💝': 'heart with ribbon',
    '💖': 'sparkling heart',
    '💗': 'growing heart',
    '💓': 'beating heart',
    '💞': 'revolving hearts',
    '💕': 'two hearts',
    '💟': 'heart decoration',
    '❣️': 'heart exclamation',
    '💔': 'broken heart',
    '❤️‍🔥': 'heart on fire',
    '❤️‍🩹': 'mending heart',
    '❤️': 'red heart',
    '🧡': 'orange heart',
    '💛': 'yellow heart',
    '💚': 'green heart',
    '💙': 'blue heart',
    '💜': 'purple heart',
    '🤎': 'brown heart',
    '🖤': 'black heart',
    '🤍': 'white heart',
    '💯': 'hundred points',
    '💢': 'anger symbol',
    '💥': 'collision',
    '💫': 'dizzy',
    '💦': 'sweat droplets',
    '💨': 'dashing away',
    '🕳️': 'hole',
    '💣': 'bomb',
    '💤': 'zzz',
    '⏳': 'hourglass',
    '🧢': 'billed cap',
    '🎯': 'bullseye',
    '👋': 'waving hand',
    '👌': 'OK hand',
    '🤌': 'pinched fingers',
    '🤏': 'pinching hand',
    '✌️': 'victory hand',
    '🤞': 'crossed fingers',
    '🤟': 'love-you gesture',
    '🤘': 'sign of the horns',
    '🤙': 'call me hand',
    '👈': 'backhand index pointing left',
    '👉': 'backhand index pointing right',
    '👆': 'backhand index pointing up',
    '🖕': 'middle finger',
    '👇': 'backhand index pointing down',
    '☝️': 'index pointing up',
    '👍': 'thumbs up',
    '👎': 'thumbs down',
    '✊': 'raised fist',
    '👊': 'oncoming fist',
    '👏': 'clapping hands',
    '🙌': 'raising hands',
    '🫶': 'heart hands',
    '👐': 'open hands',
    '🤲': 'palms up together',
    '🤝': 'handshake',
    '🙏': 'folded hands',
    '💅': 'nail polish',
    '✍️': 'writing hand',
    '💪': 'flexed biceps',
    '🧠': 'brain',
    '🫀': 'anatomical heart',
    '🫁': 'lungs',
    '👀': 'eyes',
    '👁️': 'eye',
    '👅': 'tongue',
    '👄': 'mouth',
    '🫦': 'biting lip',
    '👶': 'baby',
    '🙅': 'person gesturing NO',
    '🙆': 'person gesturing OK',
    '💁': 'person tipping hand',
    '🙋': 'person raising hand',
    '🧏': 'deaf person',
    '🙇': 'person bowing',
    '🤦': 'person facepalming',
    '🤷': 'person shrugging',
    '🧑‍💻': 'technologist',
    '👼': 'baby angel',
    '🦸': 'superhero',
    '🦹': 'supervillain',
    '🧚': 'fairy',
    '🧜': 'merperson',
    '🧞': 'genie',
    '🧟': 'zombie',
    '🧌': 'troll',
    '💆': 'person getting massage',
    '💇': 'person getting haircut',
    '🏃': 'person running',
    '💃': 'woman dancing',
    '🕺': 'man dancing',
    '👯': 'people with bunny ears',
    '🧖': 'person in steamy room',
    '✨': 'sparkles',
    '⭐️': 'star',
    '🌟': 'glowing star',
    '⚡️': 'high voltage',
    '🔥': 'fire',
    '💎': 'gem stone',
    '❄️': 'snowflake',
    '🍋': 'lemon',
    '🍌': 'banana',
    '🍒': 'cherries',
    '🍑': 'peach',
    '🍍': 'pineapple',
    '🍆': 'eggplant',
    '🥑': 'avocado',
    '🌶️': 'chili pepper',
    '🌽': 'corn',
    '🌮': 'taco',
    '🚁': 'helicopter',
    '🌿': 'herb',
    '🍃': 'leaf fluttering in wind',
    '🔌': 'plug',
    '🔒': 'lock',
    '💊': 'pill',
    '🪑': 'chair',
    '🚩': 'triangular flag',
    '🦄': 'unicorn',
    '🎣': 'fishing pole'
};


export function getEmojiMeaning(emoji) {    
    if (emojiDescriptions.hasOwnProperty(emoji)) {
        return emojiDescriptions[emoji];
    } else {
        return 'Meaning not found for this emoji.';
    }
}

