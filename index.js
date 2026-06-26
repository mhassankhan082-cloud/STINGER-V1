//base by ES-TEAMS TECH (Stinger-V1 Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//Tiktok: @ayesha.bibi.40
//Instagram: @ayeshabibi011 
//Telegram: t.me/ayeshabibi1111
//Tiktok: @ayesha.bibi.40
//WhatsApp: +923429010160
//want more free bot scripts? subscribe to my WhatsApp channel: https://whatsapp.com/channel/0029Vb7qmxVG8l5LP0E9w61H

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting ᵃʸᵉˢʰᵃ ᵇⁱᵇⁱ...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
