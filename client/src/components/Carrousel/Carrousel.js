import React from 'react'

const Carrousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" width="200" height="200">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/5BC3/production/_90319432_poke5.png"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/07/181536-asi-funciona-truco-elegir-pikachu-pokemon-go.jpg?itok=tAzg7eo9" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPpNexP4i0hk9fHENTvKGzSseWkaLGd2K_YU4dGwALUadBrw442Vgu4YJMeN-pHaFpRc&usqp=CAU" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    )
}

export default Carrousel
