import { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ObjectModel({ showModal, handleMeshClick }) {
  const { nodes, materials } = useGLTF('./models/factory.glb');

  const [hoverColor, setHoverColor] = useState();
  const [clickMesh, setClickMesh] = useState();

  const defaultColor = materials.lambert26SG;
  const hoveredColor = defaultColor.clone();
  hoveredColor.color.set('#333');

  const onClickMesh = (info) => {
    handleMeshClick(info);
    setClickMesh(info);
  }

  useEffect(() => {
    if (showModal == false) {
      setClickMesh(null)
    }
  }, [showModal])

  const onMeshOver = (meshId) => {
    setHoverColor(meshId); // 현재 호버된 메쉬의 ID 저장
  };
  
  const onMeshOut = () => {
    setHoverColor(null); // 호버 상태 해제
  };

  const getColor = (meshId) => {
    if (clickMesh?.id === meshId) return hoveredColor; // 클릭된 메쉬일 때
    if (hoverColor === meshId) return hoveredColor; // 호버된 메쉬일 때
    return defaultColor; // 기본 재질
  };

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[-3, 0, -10]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert34SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert51SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.lambert58SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.lambert12SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.lambert13SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.lambert14SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.lambert18SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.lambert19SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.lambert19SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.lambert21SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.lambert24SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.lambert24SG}
        />
        <mesh
          onClick={() => onClickMesh({ name: nodes.Object_30.name, text: '저장통'})}
          onPointerOver={() => onMeshOver(nodes.Object_30.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_30.name)}
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.lambert27SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.lambert28SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.lambert29SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.lambert29SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.lambert30SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.lambert31SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.lambert31SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.lambert32SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.lambert33SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.lambert34SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.lambert35SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.lambert36SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.lambert37SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.lambert38SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.lambert39SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.lambert40SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.lambert42SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.lambert42SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.lambert42SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.lambert42SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.lambert46SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.lambert47SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.lambert48SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.lambert49SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.lambert50SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.lambert50SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.lambert50SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.lambert51SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.lambert53SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          onClick={() => onClickMesh({ name: nodes.Object_60.name, text: '중앙 건물'})}
          onPointerOver={() => onMeshOver(nodes.Object_60.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_60.name)}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          onClick={() => onClickMesh({ name: nodes.Object_61.name, text: '중앙 건물'})}
          onPointerOver={() => onMeshOver(nodes.Object_61.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_61.name)}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.lambert59SG}
        />
        <mesh
          onClick={() => onClickMesh({ name: nodes.Object_63.name, text: '중앙센터'})}
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          onPointerOver={() => onMeshOver(nodes.Object_63.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_63.name)}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          onClick={() => onClickMesh({ name: nodes.Object_64.name, text: '중앙 건물'})}
          onPointerOver={() => onMeshOver(nodes.Object_64.name)}
          onPointerOut={onMeshOut}
          material={getColor(nodes.Object_64.name)}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.lambert62SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.lambert62SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.lambert6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.lambert8SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.phong2SG}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/factory.glb')