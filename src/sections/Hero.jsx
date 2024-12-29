import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import Camera from "../components/Camera"


function Hero() {

    return (
        <section className="min-h-screen border-4 text-white p-16 border-blue-500 w-full items-center flex md:flex-row flex-col-reverse relative justify-between" style={{ background: 'linear-gradient(135deg, #0A192F, black)' }}>
            <div className="md:w-1/2 flex flex-col gap-3 md:mt-24 md:text-start text-center" >
                <h1 className="sm:text-3xl text-xl">Protect What Matters Most</h1>
                <p className="sm:text-lg text-base"> Advanced security solutions for your home and business, ensuring 24/7 peace of mind.</p>
                <div className="flex gap-4 md:justify-start justify-center w-full">
                    <button className="py-4 px-8 text-base text-white hover:bg-slate-900 transition-colors bg-blue-950 border-none rounded-md cursor-pointer mr-4">
                        Get a Free Consultation
                    </button>
                    <button className="py-4 px-8 text-base text-slate-900 hover:bg-white-800 font-bold transition-colors bg-slate-400 border-none rounded-md cursor-pointer mr-4">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="flex h-72 flex-col sm:mt-40 mt-20 c-space gap-3 text-white">
                <Canvas className="w-full h-72 items-center">
                    <Suspense className='w-full h-full' fallback={<CanvasLoader />}>
                        <OrbitControls enableZoom={false} enableRotate={true} dampingFactor={0.04} rotateSpeed={0.4} />
                        <PerspectiveCamera makeDefault  position={[0,0, 9]} />
                        <Camera scale={0.4} position={[-1,-2,0]} rotation={[0,-1.4,0]} />
                        <ambientLight intensity={4} color={'white'} />
                        <directionalLight position={[10, 10, 10]} intensity={3} color={'white'}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero