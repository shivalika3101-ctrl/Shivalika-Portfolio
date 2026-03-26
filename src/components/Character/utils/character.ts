import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  onProgress?: (progress: number) => void
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      if (onProgress) onProgress(0);
      decryptFile(
        "/models/character.enc",
        "Character3D#@",
        (decryptProgress) => {
          if (onProgress) {
            onProgress(Math.floor(decryptProgress * 0.2));
          }
        }
      )
        .then((encryptedBlob) => {
          if (onProgress) onProgress(20);

          const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

          let character: THREE.Object3D;
          loader.load(
            blobUrl,
            async (gltf) => {
              character = gltf.scene;

              if (onProgress) onProgress(90);

              await renderer.compileAsync(character, camera, scene);

              if (onProgress) onProgress(95);

              character.traverse((child: THREE.Object3D) => {
                if (child instanceof THREE.Mesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                  child.frustumCulled = true;
                }
              });

              if (onProgress) onProgress(100);

              resolve(gltf);
              setCharTimeline(character, camera);
              setAllTimeline();
              character!.getObjectByName("footR")!.position.y = 3.36;
              character!.getObjectByName("footL")!.position.y = 3.36;
              dracoLoader.dispose();
            },
            (xhr) => {
              if (xhr.lengthComputable) {
                const loadProgress = (xhr.loaded / xhr.total) * 70;
                const totalProgress = 20 + loadProgress;
                if (onProgress) {
                  onProgress(Math.floor(totalProgress));
                }
              } else {
                const estimatedProgress = Math.min(
                  20 + (xhr.loaded / 1000000) * 10,
                  85
                );
                if (onProgress) {
                  onProgress(Math.floor(estimatedProgress));
                }
              }
            },
            (error) => {
              console.error("Error loading GLTF model:", error);
              reject(error);
            }
          );
        })
        .catch((err) => {
          reject(err);
          console.error(err);
        });
    });
  };

  return { loadCharacter };
};

export default setCharacter;
