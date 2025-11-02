import React from 'react';
import { Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content py-5">
                <div className="row py-5">
                    <div className="col-md-4 footer-section">
                        <h3 className="footer-title">LOCATION</h3>
                        <p className="footer-text">2215 John Daniel Drive</p>
                        <p className="footer-text">Clark, MO 65243</p>
                    </div>

                    <div className="col-md-4 footer-section">
                        <h3 className="footer-title fs-3">AROUND THE WEB</h3>
                        <div className="social-buttons">
                            <button className="social-btn">
                                <Facebook size={20} />
                            </button>
                            <button className="social-btn">
                                <Twitter size={20} />
                            </button>
                            <button className="social-btn">
                                <Linkedin size={20} />
                            </button>
                            <button className="social-btn">
                                <Globe size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="col-md-4 footer-section">
                        <h3 className="footer-title fs-3">ABOUT FREELANCER</h3>
                        <p className="footer-text">
                            Freelance is a free to use, licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-center py-3">
                <p className="footer-copyright fs-6">Copyright © Your Website 2021</p>
            </div>
        </footer>
    );
}