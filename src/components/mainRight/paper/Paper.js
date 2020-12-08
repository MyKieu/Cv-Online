import React from 'react'
import RightEducation from './RightEducation'
import RightExperience from './RightExperience'
import RightHeader from './RightHeader'
import RightSkill from './RightSkill'
import '../rightStyle.css';

function Paper() {
    return (
        <div className="paper">
            <div style={{size: 'A4'}}>
                <RightHeader />
                <RightEducation />
                <RightExperience />
                <RightSkill />
            </div>

        </div>
    )
}

export default Paper
