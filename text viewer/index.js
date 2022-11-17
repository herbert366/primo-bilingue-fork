const script = `
Jessica, {it}{'s} important!
Jéssica, {isso} {é} importante!

you {have to} admit that {you went to the restaurant}
você {tem que} admitir que {você foi ao restaurante}

Yes, I {have to} admit, 
Sim, eu {tenho que} admitir,

I {actually} {went} {to the} restaurant
{Na verdade} eu {fui} {ao} restaurante

{and} did {you like it}?
{e} {você gostou}?

yes {I liked it},
sim {eu gostei},

but that restaurant {has} strange things 😨
mas esse restaurante {tem} coisas estranhas 😨

why? {what happened} there? 😮
porque? {o que aconteceu} lá? 😮

{honestly} i think {it}{'s} happening {anywhere}
{honestamente} eu acho que {isso} {está} acontecendo {em qualquer lugar}

{I don't understand}, what happened? 🤔
{Eu não entendo}, o que aconteceu? 🤔

{what happens} {is that} 
{o que acontece} {é que}

{they didn't} {let me leave} {without paying}
{eles não} {me deixaram sair} {sem pagar}

{am} i {a} {joke} {to you}? 😂
eu {sou} {uma} {piada} {para você}? 😂

`
const data = script.split('\n\n').map(v => v.split('\n').filter(Boolean))

const cores = [
  'hsl(344, 100%, 54%)',
  'hsl(217, 100%, 61%)',
  'hsl(162, 70%, 34%)',
  'hsl(265, 83%, 57%)',
  'hsl(19, 97%, 51%)',
]

const spanTemplate = sentence => {
  const keys = sentence.match(/\{(.*?)\}/g) || []
  let countColor = 0

  const result = keys.reduce((acc, cur) => {
    if (countColor > cores.length - 1) countColor = 0

    const newCur = cur.replace(/[{}]/g, '')

    const result = acc.replace(
      cur,
      `<span style="color:${cores[countColor]}">${newCur}</span>`
    )
    countColor++
    return result
  }, sentence)

  return result
}

const template = (pt, en) => `
<div class="paragraph">
<div class="text en">${spanTemplate(en)}</div>
  <div class="text pt">${spanTemplate(pt)}</div>
</div>
`

const app = document.querySelector('.app')

for (let [en, pt] of data) {
  app.innerHTML += template(pt, en)
}
