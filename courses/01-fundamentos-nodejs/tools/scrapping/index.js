const puppeteer = require('puppeteer')

;(async () => {
  // Nuestro código
  console.log('Lanzamos navegador!')
  // const browser = await puppeteer.launch({})
  const browser = await puppeteer.launch({
    headless: 'new'
  })

  const page = await browser.newPage()

  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  const titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1 > span')

    console.log(h1.innerHTML)

    return h1.innerHTML
  })

  console.log(titulo1)

  console.log('Cerramos el navegador')
  browser.close()

  console.log('Navegador cerrado')
})()
