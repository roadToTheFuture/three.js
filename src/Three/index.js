import * as THREE from "three";

export default class Three {
  constructor() {
    this.threeNode = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  init() {
    this.nodeInit();
    this.sceneInit();
    this.sceneConfigInit();
    this.modelInit();
  }

  nodeInit() {
    const threeNode = document.createElement("div");
    threeNode.id = "three";

    this.threeNode = threeNode;
    document.body.appendChild(threeNode);
  }

  sceneInit() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    this.renderer = new THREE.WebGLRenderer();
    this.threeNode.appendChild(this.renderer.domElement);
  }

  sceneConfigInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
  }

  modelInit() {
    const materialParameters = { color: "tomato" };
    const material = new THREE.LineBasicMaterial(materialParameters);
    const geometry = new THREE.BufferGeometry().setFromPoints(this.vector);

    const line = new THREE.Line(geometry, material);

    this.scene.add(line);
  }

  get vector() {
    return [
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(10, 0, 0),
    ];
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }
}
