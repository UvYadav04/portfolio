import React from 'react'

export default function SkillNode({ name, color }) {
    return (
        <span className='skill-pill' style={{ '--accent': color }}>
            {name}
        </span>
    )
}
