import { Dialog } from '@dcl/npc-scene-utils'
import resources from 'src/resources'
import { police1, reporter1} from '../game'


export const Police1Dialog: Dialog[] = [
   
    {
      text: "C’mon now, no lollygagging. Follow the markers to cast your vote.",
      isEndOfDialog: true,
      triggeredByNext: () => {
        police1.playAnimation('wave', true, 2)
      },
    }
    
  ]




  export const Reporter1Dialog: Dialog[] = [
   
    {
      text: "Oh look, we have a new voter! Smile for the cameras!",
      isEndOfDialog: true,
      triggeredByNext: () => {
        reporter1.playAnimation('wave', true, 2)
      },
    }
    
  ]