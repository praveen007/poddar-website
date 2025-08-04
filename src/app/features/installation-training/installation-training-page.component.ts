import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-installation-training-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="installation-training-wrapper">
      <section class="banner__wrapper installation__training__banner">
        <div class="banner-bg" style="background-image: url('assets/installation-training/installation-training-banner.jpg')">
          <div class="banner_contents_wrapper">
            <div class="container">
              <div class="banner_contents_wrapper">
                <div class="container h-100">
                  <nav class="breadcrumb__wrapper" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item disabled">
                        <a href="javascript:void(0)">Services & Offerings</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Installation & Training</li>
                    </ol>
                  </nav>
                  <div class="row align-items-center h-90">
                    <div class="col-12 col-md-11 col-lg-10 mx-auto">
                      <div class="banner_contents">
                        <h1>Installation & Training</h1>
                        <p>We provide comprehensive installation support and training programs to ensure proper implementation of our plumbing solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="installation__services__wrapper bg-lightBlue">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <div class="img_box_wrapper" data-aos="fade-up">
                <img src="assets/installation-training/custom-solutions.jpg" alt="Installation Services" class="img-fluid" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-5 offset-lg-1">
              <div class="contents_card_wrapper" data-aos="fade-up">
                <h2>Installation Services</h2>
                <p>Our expert team provides comprehensive installation services for all our plumbing solutions. We ensure proper implementation with attention to detail and quality standards.</p>
                <div class="cta-wrapper">
                  <a href="/contact-us" class="btn-danger arrow">
                    Request Installation Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="training__programs__wrapper bg-lightBlue">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-5">
              <div class="contents_card_wrapper" data-aos="fade-up">
                <h2>Training Programs</h2>
                <p>We offer specialized training programs for plumbers, contractors, and engineers to ensure proper installation and maintenance of our products.</p>
                <div class="cta-wrapper">
                  <a href="/contact-us" class="btn-danger arrow">
                    Enroll in Training
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6 offset-lg-1">
              <div class="img_box_wrapper" data-aos="fade-up">
                <img src="assets/installation-training/product-training-sessions.jpg" alt="Training Programs" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="technical__support__wrapper bg-lightBlue">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <div class="img_box_wrapper" data-aos="fade-up">
                <img src="assets/installation-training/custom-solutions.jpg" alt="Technical Support" class="img-fluid" />
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-5 offset-lg-1">
              <div class="contents_card_wrapper" data-aos="fade-up">
                <h2>Technical Support</h2>
                <p>Our technical support team is available to assist with installation queries, troubleshooting, and best practices for optimal system performance.</p>
                <div class="cta-wrapper">
                  <a href="/contact-us" class="btn-danger arrow">
                    Get Technical Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./installation-training-page.component.scss']
})
export class InstallationTrainingPageComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    // Initialize any required data or services
  }
} 