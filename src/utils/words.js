const WORDS = [
  'REACT',
  'VITE',
  'JAVASCRIPT',
  'DEVELOPER',
  'HANGMAN',
  'COMPONENT',
  'HOOK',
  'STATE',
  'PROPS',
  'RENDER',
]

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
