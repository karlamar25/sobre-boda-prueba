import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

const canvas = document.querySelector("#scene");
const intro = document.querySelector("#intro");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: false
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


/* =========================
   ESCENA
========================= */

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xffffff);


/* =========================
   CAMARA
========================= */

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.set(0, 0.35, 7.5);


/* =========================
   ILUMINACIÓN
========================= */

const ambient = new THREE.HemisphereLight(
  0xffffff,
  0xe9e4dc,
  2.3
);

scene.add(ambient);


const keyLight = new THREE.DirectionalLight(
  0xffffff,
  3.2
);

keyLight.position.set(-3.5, 5.5, 5);

keyLight.castShadow = true;

keyLight.shadow.mapSize.set(2048, 2048);

scene.add(keyLight);


const fillLight = new THREE.DirectionalLight(
  0xf7f1e7,
  1.2
);

fillLight.position.set(4, 2, 2);

scene.add(fillLight);


/* =========================
   SUELO / SOMBRA
========================= */

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.ShadowMaterial({
    opacity: 0.10
  })
);

floor.rotation.x = -Math.PI / 2;

floor.position.y = -2;

floor.receiveShadow = true;

scene.add(floor);


/* =========================
   MATERIALES
========================= */

const verde = new THREE.MeshStandardMaterial({
  color: 0x2f3b2d,
  roughness: 0.72,
  metalness: 0
});


const verdeOscuro = new THREE.MeshStandardMaterial({
  color: 0x263125,
  roughness: 0.78,
  metalness: 0
});


const marfil = new THREE.MeshStandardMaterial({
  color: 0xf8f4ec,
  roughness: 0.82,
  metalness: 0
});


/* =========================
   SOBRE
========================= */

const envelope = new THREE.Group();

envelope.rotation.set(
  -0.10,
  0.02,
  0
);

envelope.position.y = -0.05;

scene.add(envelope);


const envelopeWidth = 4.25;
const envelopeHeight = 2.55;
const thickness = 0.035;


/* CUERPO */

const back = new THREE.Mesh(
  new THREE.BoxGeometry(
    envelopeWidth,
    envelopeHeight,
    thickness
  ),
  verde
);

back.castShadow = true;
back.receiveShadow = true;

envelope.add(back);


/* PARTE INFERIOR */

const bottomFold = new THREE.Mesh(
  new THREE.PlaneGeometry(
    envelopeWidth * 0.96,
    envelopeHeight * 0.54
  ),
  verdeOscuro
);

bottomFold.position.set(
  0,
  -0.42,
  0.045
);

bottomFold.material.side = THREE.DoubleSide;

bottomFold.castShadow = true;

envelope.add(bottomFold);


/* =========================
   SOLAPA
========================= */

const flapGroup = new THREE.Group();

flapGroup.position.set(
  0,
  envelopeHeight / 2,
  0.075
);

envelope.add(flapGroup);


const flap = new THREE.Mesh(
  new THREE.PlaneGeometry(
    envelopeWidth * 0.99,
    envelopeHeight * 0.92
  ),
  verde
);

flap.position.set(
  0,
  -envelopeHeight * 0.46,
  0
);

flap.rotation.x = Math.PI;

flap.material.side = THREE.DoubleSide;

flap.castShadow = true;

flapGroup.add(flap);


/* =========================
   TARJETA
========================= */

const card = new THREE.Group();

card.position.set(
  0,
  -0.15,
  0.20
);

scene.add(card);


/* CUERPO DE LA TARJETA */

const cardBody = new THREE.Mesh(
  new THREE.BoxGeometry(
    3.55,
    2.15,
    0.045
  ),
  marfil
);

cardBody.castShadow = true;
cardBody.receiveShadow = true;

card.add(cardBody);


/* =========================
   TEXTO DE LA TARJETA
========================= */

function crearTexturaTarjeta() {

  const canvas = document.createElement("canvas");

  canvas.width = 1400;
  canvas.height = 900;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#F8F4EC";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  ctx.textAlign = "center";
  ctx.textBaseline = "middle";


  ctx.fillStyle = "#2F3B2D";

  ctx.font =
    '600 88px Georgia, "Times New Roman", serif';

  ctx.fillText(
    "BODA",
    canvas.width / 2,
    330
  );


  ctx.font =
    '400 64px Georgia, "Times New Roman", serif';

  ctx.fillText(
    "Karla y Ricardo",
    canvas.width / 2,
    470
  );


  ctx.font =
    '400 34px Georgia, "Times New Roman", serif';

  ctx.fillText(
    "05 · 12 · 2026",
    canvas.width / 2,
    585
  );


  return new THREE.CanvasTexture(canvas);
}


const cardFace = new THREE.Mesh(
  new THREE.PlaneGeometry(
    3.42,
    2.02
  ),
  new THREE.MeshBasicMaterial({
    map: crearTexturaTarjeta()
  })
);

cardFace.position.z = 0.027;

card.add(cardFace);


/* =========================
   SELLO
========================= */

const seal = new THREE.Group();

seal.position.set(
  0,
  -0.02,
  0.14
);

envelope.add(seal);


/* DISCO */

const sealDisc = new THREE.Mesh(
  new THREE.CylinderGeometry(
    0.34,
    0.34,
    0.055,
    64
  ),
  marfil
);

sealDisc.rotation.x = Math.PI / 2;

sealDisc.castShadow = true;

seal.add(sealDisc);


/* ARO */

const sealRing = new THREE.Mesh(
  new THREE.TorusGeometry(
    0.25,
    0.012,
    12,
    64
  ),
  new THREE.MeshStandardMaterial({
    color: 0xd8d0c2,
    roughness: 0.65
  })
);

sealRing.rotation.x = Math.PI / 2;

sealRing.position.z = 0.031;

seal.add(sealRing);


/* =========================
   INICIALES K & R
========================= */

function crearIniciales() {

  const canvas = document.createElement("canvas");

  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(
    0,
    0,
    500,
    500
  );

  ctx.fillStyle = "#2F3B2D";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font =
    '600 145px Georgia, "Times New Roman", serif';

  ctx.fillText(
    "K & R",
    250,
    255
  );

  return new THREE.CanvasTexture(canvas);
}


const initials = new THREE.Mesh(
  new THREE.PlaneGeometry(
    0.52,
    0.52
  ),
  new THREE.MeshBasicMaterial({
    map: crearIniciales(),
    transparent: true
  })
);

initials.position.z = 0.07;

seal.add(initials);


/* =========================
   ANIMACIÓN
========================= */

const clock = new THREE.Clock();

let finished = false;


function easeInOut(t) {

  if (t < 0.5) {

    return 4 * t * t * t;

  }

  return 1 -
    Math.pow(-2 * t + 2, 3) / 2;
}


function limitar(valor) {

  return Math.max(
    0,
    Math.min(1, valor)
  );
}


/* =========================
   LOOP
========================= */

function animate() {

  requestAnimationFrame(animate);


  const elapsed =
    clock.getElapsedTime();


  /* Entrada suave */

  const entrada =
    limitar(elapsed / 1);

  const entradaSuave =
    easeInOut(entrada);


  envelope.rotation.y =
    -0.08 +
    entradaSuave * 0.08;


  envelope.position.y =
    -0.05 +
    entradaSuave * 0.05;


  /* =====================
     ABRIR SOBRE
  ===================== */

  const apertura =
    limitar(
      (elapsed - 0.8) / 1.15
    );


  const aperturaSuave =
    easeInOut(apertura);


  flapGroup.rotation.x =
    aperturaSuave * -1.18;


  seal.scale.setScalar(
    1 -
    aperturaSuave * 0.92
  );


  /* =====================
     SALIDA DE TARJETA
  ===================== */

  const tarjeta =
    limitar(
      (elapsed - 1.35) / 1.30
    );


  const tarjetaSuave =
    easeInOut(tarjeta);


  card.position.y =
    -0.15 +
    tarjetaSuave * 1.65;


  card.rotation.x =
    0.02 -
    tarjetaSuave * 0.04;


  card.scale.setScalar(
    0.94 +
    tarjetaSuave * 0.06
  );


  /* =====================
     MOVIMIENTO DE CÁMARA
  ===================== */

  const movimiento =
    limitar(
      (elapsed - 1) / 2
    );


  const movimientoSuave =
    easeInOut(movimiento);


  camera.position.z =
    7.5 -
    movimientoSuave;


  camera.position.y =
    0.35 +
    movimientoSuave * 0.12;


  camera.lookAt(
    0,
    0.15 +
    movimientoSuave * 0.45,
    0
  );


  /* =====================
     MOSTRAR INVITACIÓN
  ===================== */

  if (
    elapsed > 3.35 &&
    !finished
  ) {

    finished = true;

    intro.classList.add(
      "fade-out"
    );


    setTimeout(() => {

      intro.remove();

    }, 950);

  }


  renderer.render(
    scene,
    camera
  );
}


/* =========================
   RESPONSIVE
========================= */

function resize() {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio,
      2
    )
  );
}


window.addEventListener(
  "resize",
  resize
);


/* INICIAR */

animate();
