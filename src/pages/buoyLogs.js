const buoyModel = require("../media/buoyModels/buoyEzo.glb");
const powerModel = require("../media/buoyModels/powerModule.gltf");
const electronicsModel = require("../media/buoyModels/electronicsModule.gltf");
const antennaModel = require("../media/buoyModels/antennaModule.gltf");

const projectData = [
    {
        index: 0,
        title: "Introduction",
        description: "Introduction description",
        videoUrl: "https://youtu.be/H5-q7LB6a0U",
        model: buoyModel,
        scale:1,
        backdropVariants: {
            initial: {
                scale: 1.8,
                rotate: 10,
                borderRadius: "10%",
            },
            final: {
                scaleX: 1.8,
                scaleY: 0.8,
                translateY: "25vh",
                rotate: 120,
                borderRadius: "50%",
            },
        },
    },
    {
        index: 1,
        title: "Power Module",
        description: "Power module description",
        videoUrl: "https://youtu.be/8BMjckJIcNY",
        model: powerModel,
        scale:.75,
        backdropVariants: {
            initial: {
                scale: 1.8,
                rotate: 10,
                borderRadius: "10%",
            },
            final: {
                scaleX: 1.8,
                scaleY: 0.8,
                translateY: "20vh",
                rotate: 120,
                borderRadius: "50%",
            },
        },
    },
    {
        index: 2,
        title: "Electronics Module",
        description: "Electronics module description",
        videoUrl: "https://youtu.be/iC_qjDVsC6s",
        model: electronicsModel,
        scale:.75,
        backdropVariants: {
            initial: {
                scale: 1.8,
                rotate: 10,
                borderRadius: "10%",
            },
            final: {
                scaleX: 1.8,
                scaleY: 0.8,
                translateY: "20vh",
                rotate: 120,
                borderRadius: "50%",
            },
        },
    },
    {
        index: 3,
        title: "Antenna Module",
        description: "Antenna module description",
        videoUrl: "https://youtu.be/6TMmcjmH8XI",
        model: antennaModel,
        scale:.75,
        backdropVariants: {
            initial: {
                scale: 1.8,
                rotate: 10,
                borderRadius: "10%",
            },
            final: {
                scaleX: 1.8,
                scaleY: 0.8,
                translateY: "20vh",
                rotate: 120,
                borderRadius: "50%",
            },
        },
    },
];

export default projectData;
