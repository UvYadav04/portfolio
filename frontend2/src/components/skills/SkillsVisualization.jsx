import React from 'react'
import { layers } from './layerConfig'
import CapabilityLayer from './CapabilityLayer'

export default function SkillsVisualization() {
    return (
        <div className='skillpage capabilities' id='skills'>
            <h2 className='capabilities__title'>Engineering Capabilities</h2>
            <div className='capabilities__layers'>
                {layers.map((layer) => (
                    <CapabilityLayer key={layer.id} layer={layer} />
                ))}
            </div>
        </div>
    )
}
