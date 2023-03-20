import { useState } from 'react'

import '../../pages/ProjectsPage/ProjectsPage.css'

function ProjectItem(props) {
    const [isHover, setIsHover] = useState(false);
    function getText() { props.hoverText(props.data) }

    const mouseEnter = () => {
        setIsHover(true);
        getText()
    }
    const mouseLeave = () => {
        setIsHover(false)
    }

    const projectItemStyle = {
        height: '9em',
        backgroundImage: `url(${props.data.imgSrcA})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <>
            <div className='projectItem'
                style={projectItemStyle }
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}>

                <div className='overlay'
                    style={{
                        position: 'fixed',
                        width: '23.5rem',
                        height: '9em',
                                             backgroundColor: 'rgba(75,75,75,.7)'
                    }}>
                    <h2 className='projectName'>{props.data.name}</h2>
                </div>
            </div>
        </>
    )
}
export default ProjectItem
