import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx, spanStyle}) => {
    return (
        <span>  
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`} style={spanStyle}>
                        {char}  
                    </span>
                ))
            }
            
        </span>
    )
}

export default AnimatedLetters;