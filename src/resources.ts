export default {
    models:{
        standard:{
            grill: new GLTFShape('models/grill.glb'),
            tree: new GLTFShape('models/tree.glb'),
            telephoneBoothYellow: new GLTFShape('models/telephone_booth_yellow.glb'),
            telephoneBoothBlack: new GLTFShape('models/telephone_booth_black.glb'),
            base: new GLTFShape('models/Downing_updated.glb'),
            loveCamp: new GLTFShape('models/love_camp.glb'),
            hateCamp: new GLTFShape('models/hate_camp.glb'),
            hateLamp: new GLTFShape('models/hate_street_lamp.glb'),
            loveLamp: new GLTFShape('models/love_street_lamp.glb'),
            streetName: new GLTFShape('models/street_name.glb'),
            downingDoor: new GLTFShape('models/DowningDoor_updated.glb'),
            mainGate: new GLTFShape('models/main_gate.glb'),
            grass: new GLTFShape('models/grass1.glb'),
            flag: new GLTFShape('models/flag.glb'),
            banner: new GLTFShape('models/banner.glb'),
            gateBuilding: new GLTFShape('models/gate_building.glb'),
            christmastree:new GLTFShape('models/ChristmasTree .glb'),
            lovePeople: new GLTFShape('models/Crowd_Y.gltf'),
            hatePeople: new GLTFShape('models/Crowd_R.gltf'),
        },
        robots:{
            person1: new GLTFShape('models/robots/NPC1.glb'),
            police: 'models/robots/police.glb',            
            reporter: 'models/robots/reporter.glb',
            person2: new GLTFShape('models/robots/NPC2.glb'),
            person3: new GLTFShape('models/robots/NPC3.glb'),
            // person4: new GLTFShape('models/robots/person04.glb'),
            // person5: new GLTFShape('models/robots/fperson05.glb'),
            // person6: new GLTFShape('models/robots/fperson06.glb'),
            person7: new GLTFShape('models/robots/NPC7.glb'),
            person8: new GLTFShape('models/robots/NPC8.glb')
        }
    },
    videos: {
      votingScreen: new VideoClip(
        'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
      )
    }
}