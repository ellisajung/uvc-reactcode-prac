import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, CameraControls, PerspectiveCamera, Center } from '@react-three/drei';
import { ObjectModel } from "../components/object";
import { Floor } from '../components/floor';
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
      <div className='three'>
        <Canvas>
          <Center>
            <ObjectModel
              showModal={showModal}
              handleMeshClick={handleMeshClick}
            />
            <Floor />
          </Center>
          <Environment background={false} preset="city" />
          <CameraControls makeDefault enableZoom={true} />
          <PerspectiveCamera
            ref={cameraRef} makeDefault={true}
            far={10000} near={0.2} fov={13}
            position={[120, 40, -100]}
          />
        </Canvas>
        {showModal ? <Modal setShowModal={setShowModal} info={clickInfo} /> : null}
      </div>
    </>
  )
}