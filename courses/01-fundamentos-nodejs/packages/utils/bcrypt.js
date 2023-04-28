const bcrypt = require('bcrypt')

const password = 'WelcomeSecure123!'

const generateHash = async () => {
  const hash = await bcrypt.hash(password, 10)

  console.log(hash)

  const verifyHash = await bcrypt.compare(hash, password)

  console.log(verifyHash)
}

generateHash()
