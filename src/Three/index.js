import * as THREE from "three";

export default class Three {
  constructor() {
    this.threeNode = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.model = null;
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
    this.camera.position.set(0, 0, 400);
    this.camera.lookAt(0, 0, 0);
  }

  modelInit() {
    const materialColor = { color: 0x00ff00 };
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial(materialColor);

    this.model = new THREE.Mesh(geometry, material);

    this.scene.add(this.model);
    this.camera.position.z = 5;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.model.rotation.x += 0.01;
    this.model.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }
}
