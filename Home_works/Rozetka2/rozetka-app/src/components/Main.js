import React from 'react'

export default function Main (){
    return (
        <div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e1e926a4%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e1e926a4%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.203125%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                             data-src="holder.js/900x400?theme=social" alt="900x400" data-holder-rendered="true"
                             style="width: 900px; height: 400px;"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"
                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22900%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20900%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176e1e9262e%20text%20%7B%20fill%3A%23C2F200%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A45pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176e1e9262e%22%3E%3Crect%20width%3D%22900%22%20height%3D%22400%22%20fill%3D%22%23434A52%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22333.203125%22%20y%3D%22220.1%22%3E900x400%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                             data-src="holder.js/900x400?theme=industrial" alt="900x400" data-holder-rendered="true"
                             style="width: 900px; height: 400px;"/>
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


        </div>
    );
}