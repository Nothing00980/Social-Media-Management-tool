import "bootstrap/dist/css/bootstrap.min.css";
import {
    ArrowRight,
    BarChart,
    Calendar,
    Clock,
    Facebook,
    Instagram,
    Layers,
    Linkedin,
    MessageSquare,
    Twitter,
    Users,
} from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="py-5 bg-dark text-light border-top border-secondary">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center mb-3">
                                <Layers className="me-2 text-white" />
                                <span className="h4 mb-0 text-white">SocialPro</span>
                            </div>
                            <p className="text-white mb-4">
                                The all-in-one platform for social media management, helping businesses grow their online presence.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="#" className="text-white">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-white">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-white">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-white">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                            <h5 className="mb-3 text-white">Product</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Features</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Pricing</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Integrations</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Updates</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
                            <h5 className="mb-3 text-white">Company</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">About</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Careers</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Blog</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-white text-decoration-none">Press</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-top border-secondary mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <p className="text-white mb-3 mb-md-0">&copy; {new Date().getFullYear()} SocialPro. All rights reserved.</p>
                        <div>
                            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
