import { hud } from "@dcl/builder-hud";
import { Model } from "./model";
import resources from "./resources";

// const road = new Model(resources.models.standard.road, {position: new Vector3(17.9,0.3,15.4), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(0.94,0.9,0.97)}, 'road')

// const whiteBuilding = new Model(resources.models.standard.whiteBuilding, {position: new Vector3(5,0,16), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'whiteBuilding')

// const tree = new Model(resources.models.standard.tree, {position: new Vector3(12,0,27), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'tree')

// const telephoneBooth1 = new Model(resources.models.standard.telephoneBooth, {position: new Vector3(14.5,0,25), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'telephone')
// const telephoneBooth2 = new Model(resources.models.standard.telephoneBooth, {position: new Vector3(17,0,25), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'telephone')
// const telephoneBooth3 = new Model(resources.models.standard.telephoneBooth, {position: new Vector3(19.4,0,25), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'telephone')

// const likeCamp = new Model(resources.models.standard.likeCamp, {position: new Vector3(11.6,0,22), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'likeCamp')
// const dislikeCamp = new Model(resources.models.standard.dislikeCamp, {position: new Vector3(22,0,22), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'dislikeCamp')

// const backGrill = new Model(resources.models.standard.grill,{position: new Vector3(15.22,0.18,27.57), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(2,2,2)}, 'backGrill')
// const frontGrill1 = new Model(resources.models.standard.grill,{position: new Vector3(15.22,1.18,29.57)}, 'frontGrill1')
// const frontGrill2 = new Model(resources.models.standard.grill,{position: new Vector3(15.22,1.18,29.57)}, 'frontGrill2')
const base = new Model(resources.models.standard.base, {position: new Vector3(17,-0.9,16.08), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(0.99,0.99,0.99)}, 'base')

// const rightBuilding = new Model(resources.models.standard.rightBuilding, {position: new Vector3(29,0,12), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'rightBuilding')
// hud.attachToEntity(likeCamp)
// hud.attachToEntity(backGrill)
hud.attachToEntity(base)
// hud.attachToEntity(dislikeCamp)
// hud.attachToEntity(rightBuilding)

const person02 = new Model(resources.models.robots.person3, {position: new Vector3(16.5,0,23), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person2')
const person03 = new Model(resources.models.robots.person3, {position: new Vector3(16.5,0,22), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person3')
const person04 = new Model(resources.models.robots.person4, {position: new Vector3(13.94,0.1,16.36), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person4')

const person11 = new Model(resources.models.robots.person7, {position: new Vector3(12.81,0.1,16.21),rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person4')

const person05 = new Model(resources.models.robots.person5,{position: new Vector3(15,0,23), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person5')
const person06 = new Model(resources.models.robots.person6,{position: new Vector3(15,0,22), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person6')
const person07 = new Model(resources.models.robots.person7,{position: new Vector3(19.69,0.1,21.37), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person7')

const person08 = new Model(resources.models.robots.person8,{position: new Vector3(13,0,23), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person7')
const person09 = new Model(resources.models.robots.person2,{position: new Vector3(13,0,22), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}, 'person7')
const person10 = new Model(resources.models.robots.person6,{position: new Vector3(10.35,0.1,21.92), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(1,1,1)}, 'person7')

const police = new Model(resources.models.robots.police,{position: new Vector3(13.55,0.1,10.41), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person7')
const reporter = new Model(resources.models.robots.reporter,{position: new Vector3(17.81,-1.2,15.6), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, 'person7')
hud.attachToEntity(reporter)

// 11.25,0.95,14.19
// 14.73,0.95,23.70
// 19.86,1.08,12.41