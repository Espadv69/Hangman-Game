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
}

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
