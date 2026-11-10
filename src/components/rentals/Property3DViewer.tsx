import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Layers,
  Sun,
  Eye,
  Maximize2,
  Compass,
  Box,
  RotateCw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { Property } from '../../data/properties.ts';

interface Property3DViewerProps {
  property: Property;
}

export const Property3DViewer: React.FC<Property3DViewerProps> = ({ property }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'dollhouse' | 'wireframe' | 'topdown'>('3d');
  const [lightingMode, setLightingMode] = useState<'day' | 'sunset' | 'night'>('day');
  const [activeRoom, setActiveRoom] = useState<string>('all');
  const [showLiveEmbed, setShowLiveEmbed] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const buildingGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0f0f11);
    scene.fog = new THREE.FogExp2(0x0f0f11, 0.025);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(12, 10, 14);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffaed, 1.2);
    dirLight.position.set(15, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xf59e0b, 1.5, 15);
    pointLight.position.set(0, 3, 0);
    scene.add(pointLight);

    // Building Structure Group
    const buildingGroup = new THREE.Group();
    buildingGroupRef.current = buildingGroup;
    scene.add(buildingGroup);

    // 1. Hardwood Floor Base
    const floorGeo = new THREE.BoxGeometry(10, 0.2, 8);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x2b1e16,
      roughness: 0.4,
      metalness: 0.1
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -0.1;
    floorMesh.receiveShadow = true;
    buildingGroup.add(floorMesh);

    // Floor outline accent grid
    const gridHelper = new THREE.GridHelper(10, 10, 0xd4af37, 0x333333);
    gridHelper.position.y = 0.01;
    buildingGroup.add(gridHelper);

    // 2. Exterior & Interior Walls
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xe5e5e5,
      roughness: 0.8
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      transmission: 0.9,
      opacity: 0.4,
      transparent: true,
      roughness: 0.1
    });

    const createWall = (x: number, z: number, w: number, h: number, d: number, mat = wallMat) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, h / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      buildingGroup.add(mesh);
      return mesh;
    };

    // Outer perimeter walls (Cutaway height 2.2 for dollhouse effect)
    const wallH = 2.2;

    // Back wall
    createWall(0, -4, 10, wallH, 0.2);
    // Left wall
    createWall(-5, 0, 0.2, wallH, 8);
    // Right wall (with glass balcony sliding doors)
    createWall(5, -2, 0.2, wallH, 4);
    createWall(5, 2, 0.2, wallH, 2, glassMat);

    // Interior Divider Walls
    createWall(-1, 0, 0.15, wallH, 4); // Bedroom / Living divider
    createWall(2, 2, 4, wallH, 0.15); // Kitchen divider

    // 3. Furniture Models & Room Geometry

    // Living Room Sofa
    const sofaGroup = new THREE.Group();
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.7 });
    const sofaBase = new THREE.Mesh(new THREE.BoxGeometry(3, 0.5, 1.2), sofaMat);
    const sofaBack = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 0.4), sofaMat);
    sofaBack.position.set(0, 0.5, -0.4);
    sofaGroup.add(sofaBase, sofaBack);
    sofaGroup.position.set(2, 0.25, -2);
    buildingGroup.add(sofaGroup);

    // Coffee Table & TV Stand
    const tableMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.6, roughness: 0.2 });
    const table = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 0.8), tableMat);
    table.position.set(2, 0.18, -0.4);
    buildingGroup.add(table);

    // Master Bed
    const bedGroup = new THREE.Group();
    const bedFrame = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.4, 2.6), new THREE.MeshStandardMaterial({ color: 0x374151 }));
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(2, 0.3, 2.4), new THREE.MeshStandardMaterial({ color: 0xf9fafb }));
    mattress.position.y = 0.35;
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 0.6), new THREE.MeshStandardMaterial({ color: 0xd4af37 }));
    pillow.position.set(0, 0.5, -0.8);
    bedGroup.add(bedFrame, mattress, pillow);
    bedGroup.position.set(-3, 0.2, -2);
    buildingGroup.add(bedGroup);

    // Balcony & Deck
    const balconyFloor = new THREE.Mesh(
      new THREE.BoxGeometry(3, 0.1, 8),
      new THREE.MeshStandardMaterial({ color: 0x4b5563 })
    );
    balconyFloor.position.set(6.5, -0.05, 0);
    buildingGroup.add(balconyFloor);

    // Balcony Glass Railing
    const railing = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 1.1, 8),
      glassMat
    );
    railing.position.set(8, 0.5, 0);
    buildingGroup.add(railing);

    // Room Label 3D Floating Markers
    const createRoomMarker = (name: string, pos: [number, number, number], colorHex = 0xf59e0b) => {
      const pMat = new THREE.MeshBasicMaterial({ color: colorHex, wireframe: true });
      const pGeo = new THREE.OctahedronGeometry(0.3);
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(...pos);
      buildingGroup.add(pMesh);
    };

    createRoomMarker('Living Room', [2, 2.8, -1]);
    createRoomMarker('Master Suite', [-3, 2.8, -2]);
    createRoomMarker('Chef Kitchen', [2.5, 2.8, 2.5]);
    createRoomMarker('Executive Terrace', [6.5, 2.5, 0], 0x10b981);

    // Animation Loop
    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating && buildingGroupRef.current) {
        angle += 0.003;
        buildingGroupRef.current.rotation.y = angle;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement) {
        renderer.domElement.remove();
      }
    };
  }, []);

  // Handle View Mode toggles
  useEffect(() => {
    if (!buildingGroupRef.current || !cameraRef.current) return;
    const camera = cameraRef.current;
    const group = buildingGroupRef.current;

    if (viewMode === 'topdown') {
      camera.position.set(0, 18, 0.01);
      camera.lookAt(0, 0, 0);
      setIsRotating(false);
    } else if (viewMode === 'dollhouse') {
      camera.position.set(10, 14, 10);
      camera.lookAt(0, 0, 0);
      setIsRotating(true);
    } else if (viewMode === 'wireframe') {
      camera.position.set(12, 10, 14);
      camera.lookAt(0, 1, 0);
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.wireframe = true;
        }
      });
    } else {
      camera.position.set(12, 10, 14);
      camera.lookAt(0, 1, 0);
      group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.wireframe = false;
        }
      });
      setIsRotating(true);
    }
  }, [viewMode]);

  // Lighting Mode toggle
  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    if (lightingMode === 'sunset') {
      scene.background = new THREE.Color(0x2a1b18);
      scene.fog = new THREE.FogExp2(0x2a1b18, 0.02);
    } else if (lightingMode === 'night') {
      scene.background = new THREE.Color(0x050811);
      scene.fog = new THREE.FogExp2(0x050811, 0.03);
    } else {
      scene.background = new THREE.Color(0x0f0f11);
      scene.fog = new THREE.FogExp2(0x0f0f11, 0.025);
    }
  }, [lightingMode]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
      {/* 3D Header Control Bar */}
      <div className="bg-neutral-950/90 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4 z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <span>3D Spatial Structure Model</span>
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Interactive WebGL
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              {property.title} • {property.sizeSqM} m² Residence Architectural View
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          <button
            onClick={() => setViewMode('3d')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              viewMode === '3d' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>3D Model</span>
          </button>

          <button
            onClick={() => setViewMode('dollhouse')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              viewMode === 'dollhouse' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dollhouse</span>
          </button>

          <button
            onClick={() => setViewMode('topdown')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              viewMode === 'topdown' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Floorplan</span>
          </button>

          <button
            onClick={() => setViewMode('wireframe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              viewMode === 'wireframe' ? 'bg-amber-500 text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>
        </div>

        {/* Lighting & Origin Link Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-2 rounded-xl border text-xs transition ${
              isRotating
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
            title="Toggle 360 Auto-Rotation"
          >
            <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() =>
              setLightingMode(
                lightingMode === 'day' ? 'sunset' : lightingMode === 'sunset' ? 'night' : 'day'
              )
            }
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 text-xs transition flex items-center gap-1"
            title="Cycle Daylight / Ambient Lighting"
          >
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="capitalize text-[11px] hidden sm:inline">{lightingMode}</span>
          </button>

          <a
            href={`/proxy-raw?path=${encodeURIComponent(property.path || '/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs text-amber-300 font-semibold border border-neutral-700 flex items-center gap-1.5 transition"
            title="Inspect original upstream 3D tour in proxy"
          >
            <span>Origin 3D Proxy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main 3D Canvas Viewport */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-neutral-950">
        {showLiveEmbed ? (
          <iframe
            src={`/proxy-raw?path=${encodeURIComponent(property.path || '/')}`}
            className="w-full h-full border-none"
            title="Origin Live Property 3D Virtual Tour Proxy"
          />
        ) : (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        )}

        {/* Floating Interactive HUD Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          <div className="bg-neutral-950/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-neutral-800 text-xs text-neutral-300 pointer-events-auto flex items-center gap-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              <strong className="text-white">Active Specs:</strong> {property.bedrooms} Bed • {property.baths} Bath • Floor {property.floor}
            </span>
          </div>

          <div className="bg-neutral-950/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-neutral-800 text-xs text-neutral-300 pointer-events-auto flex items-center gap-2 shadow-lg">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Click & Drag to rotate • Scroll to zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
};
