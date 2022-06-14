import hello from './hello';
import addLogo from './add-logo.js'
import HelloAuguste from './hello-auguste/hello-auguste'

hello()
addLogo()

const btn = new HelloAuguste()
btn.render()
