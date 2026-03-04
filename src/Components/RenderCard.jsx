export default function ({ actors }) {

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            {actors.map((actor) => {
                return (
                    <div className="col col-sm-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-4">
                                    <img src={actor.image} className="card-img-top" alt={actor.name} />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{actor.name}</h5>
                                        <p className="card-text"
                                        >Born in {actor.birth_year}</p>
                                        <p className="card-text">From {actor.nationality}</p>
                                        <p className="card-text">{actor.biography}</p>
                                    </div>
                                </div>
                                <div className="card-footer col-12">Known for: {actor.known_for.join(", ")}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}