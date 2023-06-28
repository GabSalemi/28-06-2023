import "./index.css"

const RandomSection = ({ src }) => {
    return <div className="random__section">
        <div className="random__img">
            <img src={src} alt="random__img" />
        </div>
        <div className="random__info">
            <h2>Random__name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut maxime tempore. Voluptas porro assumenda magnam commodi eius recusandae neque, obcaecati ab quos rem exercitationem fugit magni iusto quas deserunt.</p>
        </div>
    </div>
}

export default RandomSection;