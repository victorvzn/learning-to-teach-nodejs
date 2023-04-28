const sharp = require('sharp')

sharp('./original.png')
  .resize(80)
  .grayscale()
  .blur(5)
  .toFile('resized.png')
