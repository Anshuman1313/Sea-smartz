import { Warp } from '@paper-design/shaders-react';

export default function Frame() {
  return (
    <div style={{ boxSizing: 'border-box', contain: 'layout', height: '100%', overflowWrap: 'break-word', transformOrigin: '0% 0%', width: '100%' }}>
      <Warp className='w-full' colors={['#151310', '#FF470D', '#FFFFFFCC']} speed={1.3} scale={2} softness={1} proportion={0.12} swirl={0.65} swirlIterations={8} shape="edge" distortion={0.74} shapeScale={0.74} frame={789278.4499999906} style={{ height: '800px', left: '0', position: 'fixed', top: '0', transform: 'translate(0px, 0px)' }} />
    
    </div>
  );
}
