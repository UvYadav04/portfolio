import React from 'react'
import SkillNode from './SkillNode'

// Static — no motion, no measurement. A glowing category name, and the skills that
// belong to it listed normally underneath.
export default function CapabilityLayer({ layer }) {
    return (
        <div className='capability-layer' style={{ '--layer-accent': layer.color }}>
            <h3 className='capability-layer__name'>{layer.title}</h3>
            <div className='capability-layer__pills'>
                {layer.skills.map((name) => (
                    <SkillNode key={name} name={name} color={layer.color} />
                ))}
            </div>
        </div>
    )
}
