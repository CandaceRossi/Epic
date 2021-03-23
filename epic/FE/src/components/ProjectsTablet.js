import React, { useEffect } from 'react';
import rental from "../images/rental.jpg";
import rental1 from "../images/rental1.jpg";
import officeclean from "../images/officeclean.jpg";
import greenexterior from "../images/greenexterior.jpg";
import commercialclean2 from "../images/commercialclean2.jpg";
import paintsamples from "../images/paintsamples.jpg";
import paintcarousel7 from "../images/paintcarousel7.jpg";
import twodoor from "../images/twodoor.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import '../sass/projects.scss';
import 'bootstrap/dist/css/bootstrap.css';

const ProjectsTablet = ({isNeeded}) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
   
    return (
        <>
        <div className="projectconttablet">
        
            <div id="m1" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-center text-dark">WINNIE'S HOME</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={rental} alt="" />
                            <p className="overlay ctr text-dark">Winnie's Home</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m2" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">SARA & TIM</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={rental1} alt="" />
                            <p className="overlay ctr text-dark">Sara & Tim's House</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m3" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">GRACE LEGAL OFFICE</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={officeclean} alt="" />
                            <p className="overlay ctr text-dark">Grace Legal Office</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m4" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">CABRERA'S RESTAURANT</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={greenexterior} alt="" />
                            <p className="overlay ctr text-dark">Cabrera's Restaurant</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m5" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">FRANK'S PLACE</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={rental} alt="" />
                            <p className="overlay ctr text-dark">Frank's Place</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m6" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">SUZAN & KIP</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={rental} alt="" />
                            <p className="overlay ctr text-dark">Suzan's & Kip</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="m7" className="modal fade" data-backdrop="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title text-dark">DENNIS MORRIS' HOME</h4>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid pb-5" src={rental} alt="" />
                            <p className="overlay ctr text-dark">Dennis Morris' Home</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projecttablet">

            <div className="overlay"> </div>
            <div className="project-styletablet">
                <div className="projy" data-aos="zoom-in">
                    <h1>Epic's Project Photo Gallery!</h1>
                    <h3>Check Out Images Of Our Detailed Work</h3>
                </div>
                </div>
                </div>

                <div className="brickdownchitown">
                    <div className="imgcontainer">
                        <img src={twodoor} alt="" />
                        <img src={commercialclean2} alt="" />
                    </div>
                    <div className="brickup" data-aos="fade-up">
                        <div className="brickup1">
                            <h1>Project Gallery</h1>
                            <div className="line"></div>
                        </div>
                        <div className="bruckup" data-aos="fade-up">
                            <h3>Our team are fully licensed Painters located in the  South West Florida area</h3>
                            <h3>Preparation is 90% of the job. We start each project by protecting surrounding areas, removing handles and electric plates –
                            surfaces are patched and filled while the trim is de-glossed so that the finish coats will be beautiful as well as durable..</h3>
                        </div>
                    </div>
                    <div className="contaflex">
                        <div className="flexin">
                            <div className="flexflexin">
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m1">
                                    <div className="one" ></div>
                                    <p>WINNIE'S HOME</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m2">
                                    <div className="two"></div>
                                    <p>SARA & TIM</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m3">
                                    <div className="three"></div>
                                    <p>GRACE LEGAL OFFICE</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m4">
                                    <div className="four"></div>
                                    <p>CABRERA'S RESTAURANT</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m5">
                                    <div className="five"></div>
                                    <p>FRANK'S PLACE</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m6">
                                    <div className="six"></div>
                                    <p>SUZAN & KIP</p>
                                </div>
                                <div className="photoop" data-aos="zoom-in" data-toggle="modal" data-target="#m7">
                                    <div className="seven"></div>
                                    <p>DENNIS MORRIS' HOME</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</>
    )


}
export default ProjectsTablet;
