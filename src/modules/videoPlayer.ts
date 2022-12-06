import { hud } from '@dcl/builder-hud'
import { Delay } from '@dcl/ecs-scene-utils'
import { Model } from 'src/model'
import resources from 'src/resources'

const myVideoTexture = new VideoTexture(resources.videos.votingScreen)

const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 2
myMaterial.metallic = 0
myMaterial.emissiveTexture = myVideoTexture
myMaterial.emissiveColor = Color3.White()
myMaterial.emissiveIntensity = 0.6

// export const screen = new Model(resources.models.standard.screen, {position: new Vector3(12.9,11.9,-2.7), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'main screen')

export const screen = new Entity('marathon screen')
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform(
    {
      position: new Vector3(16.46,6,28.72), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(5,4,5)
    }
  )
)

screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

hud.attachToEntity(screen)
export function playVideo(){
  engine.addEntity(screen)
  hud.attachToEntity(screen)
  myVideoTexture.play()
}
