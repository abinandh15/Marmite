import { hud } from "@dcl/builder-hud";
import { Model } from "./model";
import resources from "./resources";

// const road = new Model(resources.models.standard.road, {position: new Vector3(17.9,0,15.4), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(0.94,0.9,0.97)}, 'road')

// const whiteBuilding = new Model(resources.models.standard.whiteBuilding, {position: new Vector3(16,0,15.5), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(0.95,1,0.95)}, 'whiteBuilding')

// const tree = new Model(resources.models.standard.tree, {position: new Vector3(12,0,27), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'tree')
// 4.7

const grass = new Model(resources.models.standard.grass, { position: new Vector3(16,0,5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1) }, 'base')
const telephoneBooth1 = new Model(resources.models.standard.telephoneBoothRed, {position: new Vector3(13.5,0,29.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'telephoneRed1')
const telephoneBooth2 = new Model(resources.models.standard.telephoneBoothYellow, {position: new Vector3(15.2,0,29.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'telephoneYellow2')
const telephoneBooth3 = new Model(resources.models.standard.telephoneBoothRed, {position: new Vector3(16.9,0,29.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'telephoneRed2')
const telephoneBooth4 = new Model(resources.models.standard.telephoneBoothYellow, {position: new Vector3(18.6,0,29.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'telephoneYellow2')
hud.attachToEntity(grass)
const hateCamp = new Model(resources.models.standard.hateCamp, {position: new Vector3(10.6,0,26.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'hateCamp')
const loveCamp = new Model(resources.models.standard.loveCamp, {position: new Vector3(21.3,0,26.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'loveCamp')

// const backGrill = new Model(resources.models.standard.grill,{position: new Vector3(15.22,0.18,27.57), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(2,2,2)}, 'backGrill')
// const frontGrill1 = new Model(resources.models.standard.grill,{position: new Vector3(15.22,1.18,29.57)}, 'frontGrill1')
const frontGrill2 = new Model(resources.models.standard.grill,{position: new Vector3(16,0,36.45), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(2.5,2,1)}, 'frontGrill2')
const base = new Model(resources.models.standard.base, {position: new Vector3(16.5,0,21.1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'base')
const door1 = new Model(resources.models.standard.downingDoor, {position: new Vector3(25.4,1.8,21.23), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'door1')
const door2 = new Model(resources.models.standard.downingDoor, {position: new Vector3(25.4,1.8,15.46), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'door2')

// const rightBuilding = new Model(resources.models.standard.rightBuilding, {position: new Vector3(29,0,12), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'rightBuilding')

// hud.attachToEntity(dislikeCamp)
// hud.attachToEntity(rightBuilding)

const hateLamp1 = new Model(resources.models.standard.hateLamp,{position: new Vector3(11.5,0,23.5), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp1')
const hateLamp2 = new Model(resources.models.standard.hateLamp,{position: new Vector3(11.5,0,10.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp2')
const hateLamp3 = new Model(resources.models.standard.hateLamp,{position: new Vector3(20.5,0,15.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')
const hateLamp4 = new Model(resources.models.standard.hateLamp,{position: new Vector3(8.5,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')
const hateLamp5 = new Model(resources.models.standard.hateLamp,{position: new Vector3(24,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')

const loveLamp1 = new Model(resources.models.standard.loveLamp,{position: new Vector3(20.5,0,23.5), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp1')
const loveLamp2 = new Model(resources.models.standard.loveLamp,{position: new Vector3(20.5,0,10.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp2')
const loveLamp3 = new Model(resources.models.standard.loveLamp,{position: new Vector3(11.5,0,15.7), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')
const loveLamp4 = new Model(resources.models.standard.loveLamp,{position: new Vector3(29,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')
const loveLamp5 = new Model(resources.models.standard.loveLamp,{position: new Vector3(3.5,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'hateLamp3')

const streetNameL = new Model(resources.models.standard.streetName,{position: new Vector3(13.5,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'streetNameL')
const streetNameR = new Model(resources.models.standard.streetName,{position: new Vector3(19,0,1), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'streetNameR')

const flag = new Model(resources.models.standard.flag,{position: new Vector3(17,0,22), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)},'flag')
hud.attachToEntity(base)
hud.attachToEntity(flag)

const banner = new Model(resources.models.standard.banner,{position: new Vector3(16,4,11), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'banner')



const person02 = new Model(resources.models.robots.person3, {position: new Vector3(18.5,0,27.7), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person2')
const person03 = new Model(resources.models.robots.person3, {position: new Vector3(18.5,0,26.7), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person3')
// const person04 = new Model(resources.models.robots.person4, {position: new Vector3(13.94,0.1,16.36), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person4')

const person11 = new Model(resources.models.robots.person7,  {position: new Vector3(12.81,0.1,20.91), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(1,1,1)}, 'person11')

// const person05 = new Model(resources.models.robots.person5,{position: new Vector3(15,0,23), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person5')
// const person06 = new Model(resources.models.robots.person6,{position: new Vector3(15,0,22), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person6')
const person07 = new Model(resources.models.robots.person7,{position: new Vector3(21.69,0.1,26.07), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person7')

const person08 = new Model(resources.models.robots.person8,{position: new Vector3(14,0,27.7), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person8')
const person09 = new Model(resources.models.robots.person7,{position: new Vector3(14,0,26.7), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person9')
const person10 = new Model(resources.models.robots.person8,{position: new Vector3(11.35,0.1,26.62), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(1,1,1)}, 'person10')

const police = new Model(resources.models.robots.police,{position: new Vector3(13.73,0.1,4.62), rotation: Quaternion.Euler(0,135,0), scale: new Vector3(1,1,1)}, 'police')
const reporter = new Model(resources.models.robots.reporter,{position: new Vector3(20.81,-1.2,20.3), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'reporter')
hud.attachToEntity(person02)
hud.attachToEntity(person03)
hud.attachToEntity(person11)
hud.attachToEntity(person07)
hud.attachToEntity(person08)
hud.attachToEntity(person09)
hud.attachToEntity(person10)
hud.attachToEntity(police)
hud.attachToEntity(reporter)

const mainGate = new Model(resources.models.standard.mainGate,{position: new Vector3(14.6,0,4.8), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(0.87,1,1)}, 'mainGate')
hud.attachToEntity(mainGate)

// 11.25,0.95,14.19
// 14.73,0.95,23.70
// 19.86,1.08,12.41