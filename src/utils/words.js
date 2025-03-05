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
}

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
