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

export const getRandomWord = (category = 'all') => {
  if (category === 'all') {
    const allWords = Object.values(wordsByCategory).flat()
    return allWords[Math.floor(Math.random() * allWords.length)]
  }
  const categoryWords = wordsByCategory[category]
  return categoryWords[Math.floor(Math.random() * categoryWords.length)]
}
