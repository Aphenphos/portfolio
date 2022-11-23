import { abouts } from '../../data'
import './About.sass'
export default function About() {
    return (
        <>
        <div id="about-container">
        {abouts.map((a, index) => (
            <div key={index} className='a-container' style={{ animation: `${(index / 2) + .75}s ease-out 0s 1 slideInLeft`}}>
            <h2>
                {a.title}
            </h2>
            <p>
                {a.content}
            </p>
            </div>
        ))}
        </div>
        </>
    )
} 