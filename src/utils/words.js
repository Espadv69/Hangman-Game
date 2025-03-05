const wordsByCategory = {
  animals: [
    'ELEPHANT',
    'GIRAFFE',
    'KANGAROO',
    'PENGUIN',
    'DOLPHIN',
    'CHEETAH',
    'FLAMINGO',
    'RACCOON',
  ],
  countries: [
    'CANADA',
    'BRAZIL',
    'JAPAN',
    'GERMANY',
    'AUSTRALIA',
    'ITALY',
    'FRANCE',
    'MEXICO',
  ],
  technology: [
    'JAVASCRIPT',
    'REACT',
    'COMPUTER',
    'ALGORITHM',
    'DATABASE',
    'NETWORK',
    'KEYBOARD',
    'MONITOR',
  ],
  fruits: [
    'BANANA',
    'WATERMELON',
    'PINEAPPLE',
    'STRAWBERRY',
    'BLUEBERRY',
    'ORANGE',
    'GRAPEFRUIT',
    'MANGO',
  ],
}

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
