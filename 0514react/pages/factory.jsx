import { useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { FactoryModel } from "../components/factoryModel";
import { CameraControls, Center, Environment, PerspectiveCamera } from "@react-three/drei";
import { Floor } from "../components/floor";
import { Modal } from '../components/modal';

export default function Index() {
  const cameraRef = useRef();
  const [showModal, setShowModal] = useState();
  const [clickInfo, setClickInfo] = useState();
  
  const handleMeshClick = (info) => {
    setShowModal(true);
    setClickInfo(info); // 클릭된 메쉬의 정보를 상태에 저장
  };
  return (
    <>
      factory page
      <div className='three'>
        <Canvas>
          <Center>
            <FactoryModel
              showModal={showModal}
              handleMeshClick={handleMeshClick}
            />
            <Floor />
          </Center>
          <Environment preset="city" background={false} />
          <CameraControls makeDefault enableZoom={true} />
          <PerspectiveCamera
            ref={cameraRef} makeDefault={true}
            far={10000} near={0.2} fov={13}
            position={[100, 70, -100]}
          />
        </Canvas>
        {showModal ? <Modal setShowModal={setShowModal} info={clickInfo} /> : null}
      </div>
    </>
  )
}