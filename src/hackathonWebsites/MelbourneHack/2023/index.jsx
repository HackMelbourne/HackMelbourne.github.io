import React from 'react';

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from '../../../components/earth';
import './globe.css';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MelbourneHack2023 = () => {

//   return <div>MelbourneHack2023</div>;

    return (
        <CanvasContainer>
        <Canvas>
            <Suspense fallback={null}>
                <Earth/>
            </Suspense>
        </Canvas>
        </CanvasContainer>
    );
};


export default MelbourneHack2023;
