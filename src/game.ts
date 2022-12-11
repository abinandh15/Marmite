import { hud } from "@dcl/builder-hud";
import { Model } from "./model";
import resources from "./resources";
import { NPC, NPCDelay } from '@dcl/npc-scene-utils';
import { Police1Dialog, Reporter1Dialog, } from './modules/dialogData'

export const canvas = new UICanvas()
export const topContainer = new UIContainerRect(canvas)
topContainer.visible = true
topContainer.height = '50%'
topContainer.hAlign = 'center'
topContainer.vAlign = 'center'
topContainer.width = '55%'
topContainer.color = Color4.FromHexString('#00000088')

// export const topContainer2 = new UIContainerRect(canvas)
// topContainer.visible = false
// topContainer.height = '10%'
// topContainer.hAlign = 'center'
// topContainer.vAlign = 'center'
// topContainer.width = '40%'
// topContainer.color = Color4.FromHexString('#00000088')

const Title = new UIText(topContainer)
Title.visible = true
Title.value = 'Welcome to 10, Marmite Street.'
Title.isPointerBlocker = true
Title.vTextAlign = 'center'
Title.hTextAlign = 'center'
Title.vAlign = 'top'
Title.fontSize = 25


const subtitle = new UIText(topContainer)
subtitle.visible = true
subtitle.value = 'A referendum is being held on topics important to us all.'
subtitle.isPointerBlocker = false
subtitle.vTextAlign = 'center'
subtitle.hTextAlign = 'center'
subtitle.vAlign = 'top'
subtitle.fontSize = 20
subtitle.positionY = -35

const subtitle2 = new UIText(topContainer)
subtitle2.visible = true
subtitle2.value = 'Will you declare your love for it? Or will you spread the hate?'
subtitle2.isPointerBlocker = false
subtitle2.vTextAlign = 'center'
subtitle2.hTextAlign = 'center'
subtitle2.vAlign = 'top'
subtitle2.fontSize = 20
subtitle2.positionY = -60

const subtitle3 = new UIText(topContainer)
subtitle3.visible = true
subtitle3.value = 'Choose your side. Cast your vote.'
subtitle3.isPointerBlocker = false
subtitle3.vTextAlign = 'center'
subtitle3.hTextAlign = 'center'
subtitle3.vAlign = 'top'
subtitle3.fontSize = 20
subtitle3.positionY = -85

const subtitle4 = new UIText(topContainer)
subtitle4.visible = true
subtitle4.value = 'And win cool NFTs of our next Prime Marmite based on your vote.'
subtitle4.isPointerBlocker = false
subtitle4.vTextAlign = 'center'
subtitle4.hTextAlign = 'center'
subtitle4.vAlign = 'top'
subtitle4.fontSize = 20
subtitle4.positionY = -110

const subtitle5 = new UIText(topContainer)
subtitle5.visible = true
subtitle5.value = 'May the best Marmite win'
subtitle5.isPointerBlocker = false
subtitle5.vTextAlign = 'center'
subtitle5.hTextAlign = 'center'
subtitle5.vAlign = 'top'
subtitle5.fontSize = 20
subtitle5.positionY = -165







// const brandsContainer = new UIContainerRect(canvas)
// brandsContainer.width = "100%"
// brandsContainer.height = "100%"
// brandsContainer.vAlign = "bottom"
// brandsContainer.positionY = -345
// brandsContainer.positionX = 150
// brandsContainer.visible = false

// const brandSelectTextContainer = new UIContainerRect(canvas)
// brandSelectTextContainer.width = "40%"
// brandSelectTextContainer.height = "30%"
// brandSelectTextContainer.positionY = 100
// brandSelectTextContainer.visible = false
// brandSelectTextContainer.color = Color4.Black()
// brandSelectTextContainer.opacity = 0.8

// const container = new UIContainerRect(canvas)
// container.width = "100%"
// container.height = "20%"


// const brandSelectMessage = new UIText(brandSelectTextContainer);
// brandSelectMessage.fontSize = 20
// brandSelectMessage.hAlign = "center"
// brandSelectMessage.vAlign = "top"
// brandSelectMessage.positionX = -110
// brandSelectMessage.font = new Font(Fonts.SansSerif_Heavy)
// brandSelectMessage.value = "Welcome to 10, Marmite Street."
// brandSelectMessage.color = Color4.White()





// ----MODELS----

// BASE
const grass = new Model(resources.models.standard.grass, { position: new Vector3(16, 0, 5), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'base')
const base = new Model(resources.models.standard.base, { position: new Vector3(16.5, 0, 21.1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'base')
const door1 = new Model(resources.models.standard.downingDoor, { position: new Vector3(25.4, 1.8, 21.23), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'door1')
const door2 = new Model(resources.models.standard.downingDoor, { position: new Vector3(25.4, 1.8, 15.46), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'door2')
const backGrill = new Model(resources.models.standard.grill, { position: new Vector3(16, 0, 36.45), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(2.5, 2, 1) }, 'frontGrill2')
const mainGate = new Model(resources.models.standard.mainGate, { position: new Vector3(14.6, 0, 4.8), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(0.87, 1, 1) }, 'mainGate')


// TELEPHONE BOOTH
const telephoneBooth1 = new Model(resources.models.standard.telephoneBoothBlack, { position: new Vector3(13.5, 0, 29.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'telephoneRed1')
const telephoneBooth2 = new Model(resources.models.standard.telephoneBoothYellow, { position: new Vector3(15.2, 0, 29.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'telephoneYellow2')
const telephoneBooth3 = new Model(resources.models.standard.telephoneBoothBlack, { position: new Vector3(16.9, 0, 29.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'telephoneRed2')
const telephoneBooth4 = new Model(resources.models.standard.telephoneBoothYellow, { position: new Vector3(18.6, 0, 29.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'telephoneYellow2')


// HATE AND LOVE CAMP
const hateCamp = new Model(resources.models.standard.hateCamp, { position: new Vector3(10.6, 0, 26.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateCamp')
const loveCamp = new Model(resources.models.standard.loveCamp, { position: new Vector3(21.3, 0, 26.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveCamp')

// HATE STREET LAMP
const hateLamp1 = new Model(resources.models.standard.hateLamp, { position: new Vector3(11.5, 0, 23.5), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateLamp1')
const hateLamp2 = new Model(resources.models.standard.hateLamp, { position: new Vector3(11.5, 0, 10.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateLamp2')
const hateLamp3 = new Model(resources.models.standard.hateLamp, { position: new Vector3(20.5, 0, 15.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateLamp3')
const hateLamp4 = new Model(resources.models.standard.hateLamp, { position: new Vector3(8.5, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateLamp4')
const hateLamp5 = new Model(resources.models.standard.hateLamp, { position: new Vector3(24, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'hateLamp5')

// LOVE STREET LAMP
const loveLamp1 = new Model(resources.models.standard.loveLamp, { position: new Vector3(20.5, 0, 23.5), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveLamp1')
const loveLamp2 = new Model(resources.models.standard.loveLamp, { position: new Vector3(20.5, 0, 10.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveLamp2')
const loveLamp3 = new Model(resources.models.standard.loveLamp, { position: new Vector3(11.5, 0, 15.7), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveLamp3')
const loveLamp4 = new Model(resources.models.standard.loveLamp, { position: new Vector3(29, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveLamp3')
const loveLamp5 = new Model(resources.models.standard.loveLamp, { position: new Vector3(3.5, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'loveLamp3')

// STREET NAME
const streetNameL = new Model(resources.models.standard.streetName, { position: new Vector3(13.5, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'streetNameL')
const streetNameR = new Model(resources.models.standard.streetName, { position: new Vector3(19, 0, 1), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'streetNameR')

// DECORATIONS
const flag = new Model(resources.models.standard.flag, { position: new Vector3(17, 0, 22), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'flag')
const banner = new Model(resources.models.standard.banner, { position: new Vector3(16, 4, 11), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'banner')

// NPC
const person02 = new Model(resources.models.robots.person3, { position: new Vector3(18.5, 0, 27.7), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'person2')
const person03 = new Model(resources.models.robots.person3, { position: new Vector3(18.5, 0, 26.7), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'person3')
const person11 = new Model(resources.models.robots.person7, { position: new Vector3(12.81, 0.1, 20.91), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(1, 1, 1) }, 'person11')
const person07 = new Model(resources.models.robots.person7, { position: new Vector3(21.69, 0.1, 26.07), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'person7')
const person08 = new Model(resources.models.robots.person8, { position: new Vector3(14, 0, 27.7), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'person8')
const person09 = new Model(resources.models.robots.person7, { position: new Vector3(14, 0, 26.7), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'person9')
const person10 = new Model(resources.models.robots.person8, { position: new Vector3(11.35, 0.1, 26.62), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(1, 1, 1) }, 'person10')
// const police = new Model(resources.models.robots.police, { position: new Vector3(13.73, 0.1, 4.62), rotation: Quaternion.Euler(0, 135, 0), scale: new Vector3(1, 1, 1) }, 'police')
// const reporter = new Model(resources.models.robots.reporter, { position: new Vector3(20.81, -1.1, 20.3), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) }, 'reporter')
//adding christmas trees
const christmastree = new Model(resources.models.standard.christmastree, { position: new Vector3(24,0,18.5), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'ChristmasS')
const christmastree2 = new Model(resources.models.standard.christmastree, { position: new Vector3(24,0,25), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'ChristmasQ')
const christmastree3 = new Model(resources.models.standard.christmastree, { position: new Vector3(24,0,33.5), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'ChristmasW')
const christmastree4 = new Model(resources.models.standard.christmastree, { position: new Vector3(24,0,10), rotation: Quaternion.Euler(0, 0, 0), scale: new Vector3(1, 1, 1) }, 'ChristmasE')

//Crowd
const loveCrowd = new Model(resources.models.standard.lovePeople, { position: new Vector3(20, 0.2, 12.5), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(1, 1, 1) }, 'lovePeople')
const hateCrowd = new Model(resources.models.standard.hatePeople, { position: new Vector3(15, 0.2, 12.5), rotation: Quaternion.Euler(0, 90, 0), scale: new Vector3(1, 1, 1) }, 'hatePeople')


// // adding police NPC
export const police1 = new NPC(
    {
      position: new Vector3(13, 0 ,10),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    },
    resources.models.robots.police,
    () => {
      // animations
      // police1.playAnimation('wave', true, 2)
  
      police1.talk(Police1Dialog)
    },
    {
      faceUser: true,
      portrait: {
        path: 'images/portraits/alice.png',
        height: 256,
        width: 256,
        section: {
          sourceHeight: 512,
          sourceWidth: 512
        }
      }
      // ,
      // onWalkAway: () => {
      //  police1.playAnimation('wave', true, 2)
      // }
    }
  )






//adding reporter NPC
  export const reporter1 = new NPC(
    {
      position: new Vector3(18,-1,18),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    },
    resources.models.robots.reporter,
    () => {
      // dialog UI
      reporter1.talk(Reporter1Dialog)
    },
    {
      faceUser: true,
      portrait: {
        path: 'images/portraits/alice.png',
        height: 256,
        width: 256,
        section: {
          sourceHeight: 512,
          sourceWidth: 512
        }
      }
      // ,
      // onWalkAway: () => {
      //  reporter1.playAnimation('wave', true, 2)
      // }
    }
  )


void hud.attachToEntity(reporter1)


// export const displayUI = function (){
//   Title.visible = true
//   topContainer.visible = true
//   subtitle.visible=true
//   subtitle2.visible=true
//   subtitle3.visible=true
//   subtitle4.visible=true
//   subtitle5.visible=true
//   brandSelectTextContainer.visible=true
//   brandSelectSubmit.visible=true
//   }

  const brandSelectTextContainer = new UIContainerRect(canvas)
  brandSelectTextContainer.width = "0%"
  brandSelectTextContainer.height = "0%"
  brandSelectTextContainer.positionY = 0
  brandSelectTextContainer.visible = true
  brandSelectTextContainer.color = Color4.Black()
  brandSelectTextContainer.opacity = 0.9



  const brandSelectSubmit = new UIImage(brandSelectTextContainer, new Texture("images/enternow.png"))
brandSelectSubmit.sourceWidth = 360
brandSelectSubmit.sourceHeight = 130
brandSelectSubmit.width = 140
brandSelectSubmit.height = 50
brandSelectSubmit.positionX = -90
brandSelectSubmit.positionY = -100
brandSelectSubmit.visible = true;
brandSelectSubmit.isPointerBlocker = true
brandSelectSubmit.onClick = new OnClick((): void=>{  
  subtitle.visible = false
  subtitle2.visible = false
  subtitle3.visible = false
  subtitle4.visible = false
  subtitle5.visible = false
  brandSelectSubmit.visible = false
  brandSelectTextContainer.visible = false
  topContainer.visible = false
  Title.visible = false
})