import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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
import mainimage from "../../../public/images/social1.jpg";
import teamcollab from "../../../public/images/teamcollab.jpg";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";



export default function Homepage() {
    const { user, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;

    if (user) return <Navigate to="/dashboard" replace />;
    return (
        <>
            <div className="bg-dark text-light">
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <Layers className="me-2" />
                            <span className="fw-bold">SocialPro</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonials">
                                        Testimonials
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-primary ms-lg-3 px-3" href="#contact">
                                        Get Started
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-5 py-md-7 bg-dark text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="display-4 fw-bold mb-3">Manage All Your Social Media in One Place</h1>
                                <p className="lead mb-4">
                                    Schedule posts, analyze performance, and collaborate with your team - all from a single dashboard. Save
                                    time and grow your social presence.
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <a href="#" className="btn btn-primary btn-lg px-4">
                                        Start Free Trial
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-lg px-4">
                                        Watch Demo
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={mainimage}
                                    alt="Social Media Dashboard"
                                    className="img-fluid rounded-3 shadow"
                                />
                            </div>
                        </div>
                    </div>
                </section>



                {/* Features Section */}
                <section id="features" className="py-5 py-md-7 bg-dark text-light">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="fw-bold mb-3">Powerful Features to Boost Your Social Media</h2>
                                <p className="lead ">Everything you need to manage your social media presence effectively</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <Calendar className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Content Scheduling</h4>
                                        <p className="card-text ">
                                            Plan and schedule your content across multiple platforms. Set it and forget it with our advanced
                                            scheduling tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <BarChart className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Advanced Analytics</h4>
                                        <p className="card-text ">
                                            Track performance with detailed analytics. Understand what works and optimize your social media
                                            strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <Users className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Team Collaboration</h4>
                                        <p className="card-text ">
                                            Work seamlessly with your team. Assign roles, review content, and approve posts in real-time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 mt-2">
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <MessageSquare className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Engagement Tools</h4>
                                        <p className="card-text ">
                                            Respond to comments and messages from all platforms in one unified inbox. Never miss an engagement
                                            opportunity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <Clock className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Auto-Posting</h4>
                                        <p className="card-text ">
                                            Set up automated posting schedules based on when your audience is most active to maximize
                                            engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body text-center p-4">
                                        <div className="rounded-circle bg-primary p-3 d-inline-flex mb-3">
                                            <ArrowRight className="text-white" size={24} />
                                        </div>
                                        <h4 className="card-title mb-3">Content Library</h4>
                                        <p className="card-text ">
                                            Store and organize all your media assets in one place. Easily access and reuse content across
                                            campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5 py-md-7 bg-black text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img
                                    src={teamcollab}
                                    alt="Team collaboration"
                                    className="img-fluid rounded-3 shadow"
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="ps-lg-5">
                                    <h2 className="fw-bold mb-4">How SocialPro Transforms Your Social Media Management</h2>
                                    <p className="lead mb-4">
                                        We help businesses of all sizes streamline their social media workflow, save time, and achieve better
                                        results.
                                    </p>
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <div className="badge bg-primary p-2 rounded-circle">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <h5>Centralized Management</h5>
                                            <p className="text-muted">
                                                Manage all your social accounts from one dashboard, eliminating the need to switch between
                                                platforms.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <div className="badge bg-primary p-2 rounded-circle">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <h5>Time Efficiency</h5>
                                            <p className="text-muted">Save up to 15 hours per week with our scheduling and automation tools.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="badge bg-primary p-2 rounded-circle">
                                                <span>3</span>
                                            </div>
                                        </div>
                                        <div className="ms-3">
                                            <h5>Data-Driven Strategy</h5>
                                            <p className="text-muted">
                                                Make informed decisions with comprehensive analytics and performance reports.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Owners' Testimonials Section */}
                <section id="testimonials" className="py-5 py-md-7 bg-dark text-light">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="fw-bold mb-3">What Our Owners Say</h2>
                                <p className="lead text-muted">Hear from the minds behind SocialPro</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {/* Creator's Testimonial */}
                            <div className="col-md-6">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning">★</span>
                                        </div>
                                        <p className="card-text mb-4">
                                            "When I created SocialPro, my vision was simple: to empower businesses with an effortless way to manage social
                                            media. Seeing our platform transform brands and simplify workflows is incredibly rewarding."
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/creator.jpg" // Update with actual image
                                                alt="John Doe"
                                                className="rounded-circle me-3"
                                                width="50"
                                                height="50"
                                            />
                                            <div>
                                                <h6 className="mb-0">Yuvraj Bhati</h6>
                                                <small className="text-muted">Founder & CEO, SocialPro</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Manager's Testimonial */}
                            <div className="col-md-6">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body p-4">
                                        <div className="d-flex mb-4">
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning me-1">★</span>
                                            <span className="text-warning">★</span>
                                        </div>
                                        <p className="card-text mb-4">
                                            "Our goal at SocialPro is to provide a seamless experience that helps businesses grow. We continuously innovate
                                            and refine our platform to ensure our users get the best tools to enhance their digital presence."
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="/manager.jpg" // Update with actual image
                                                alt="Jane Smith"
                                                className="rounded-circle me-3"
                                                width="50"
                                                height="50"
                                            />
                                            <div>
                                                <h6 className="mb-0">Krushik Dobariya</h6>
                                                <small className="text-muted">Operations Manager, SocialPro</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Pricing Section */}
                <section id="pricing" className="py-5 py-md-7 bg-black text-light">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="fw-bold mb-3">Choose the Perfect Plan for Your Needs</h2>
                                <p className="lead text-muted">Flexible pricing options designed to scale with your business</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body p-4 text-center">
                                        <h5 className="text-uppercase mb-3">Starter</h5>
                                        <h2 className="display-5 fw-bold mb-0">$29</h2>
                                        <p className="text-muted mb-4">per month</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="mb-2">5 Social Profiles</li>
                                            <li className="mb-2">30 Scheduled Posts</li>
                                            <li className="mb-2">Basic Analytics</li>
                                            <li className="mb-2">1 User</li>
                                            <li className="mb-2 text-muted">Team Collaboration</li>
                                            <li className="mb-2 text-muted">Content Library</li>
                                        </ul>
                                        <a href="#" className="btn btn-outline-primary w-100">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-primary border-0 h-100">
                                    <div className="card-body p-4 text-center">
                                        <div className="badge bg-white text-primary mb-3">Most Popular</div>
                                        <h5 className="text-uppercase mb-3">Professional</h5>
                                        <h2 className="display-5 fw-bold mb-0">$79</h2>
                                        <p className="text-light opacity-75 mb-4">per month</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="mb-2">15 Social Profiles</li>
                                            <li className="mb-2">Unlimited Scheduled Posts</li>
                                            <li className="mb-2">Advanced Analytics</li>
                                            <li className="mb-2">5 Users</li>
                                            <li className="mb-2">Team Collaboration</li>
                                            <li className="mb-2 text-light opacity-75">Content Library</li>
                                        </ul>
                                        <a href="#" className="btn btn-light w-100">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark border-secondary h-100">
                                    <div className="card-body p-4 text-center">
                                        <h5 className="text-uppercase mb-3">Platinum</h5>
                                        <h2 className="display-5 fw-bold mb-0">$149</h2>
                                        <p className="text-muted mb-4">per month</p>
                                        <ul className="list-unstyled mb-4">
                                            <li className="mb-2">Unlimited Social Profiles</li>
                                            <li className="mb-2">Unlimited Scheduled Posts</li>
                                            <li className="mb-2">Premium Analytics</li>
                                            <li className="mb-2">Unlimited Users</li>
                                            <li className="mb-2">Team Collaboration</li>
                                            <li className="mb-2">Content Library</li>
                                        </ul>
                                        <a href="#" className="btn btn-outline-primary w-100">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-5 py-md-7 bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-4">Ready to Transform Your Social Media Strategy?</h2>
                                <p className="lead mb-4">
                                    Join thousands of businesses that are saving time and growing their social presence with SocialPro.
                                </p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="#" className="btn btn-light btn-lg px-4">
                                        Start Free Trial
                                    </a>
                                    <a href="#" className="btn btn-outline-light btn-lg px-4">
                                        Schedule Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Bootstrap JS */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            document.addEventListener('DOMContentLoaded', function() {
                // Initialize Bootstrap components
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                    })
                    });
                    `,
                    }}
                />
            </div>
        </>
    )
}

