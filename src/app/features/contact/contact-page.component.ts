import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-wrapper">
      <section class="banner__wrapper contact__banner">
        <div class="banner-bg" style="background-image: url('assets/contact/banner-bg.jpg')">
          <div class="banner_contents_wrapper">
            <div class="container">
              <div class="banner_contents_wrapper">
                <div class="container h-100">
                  <div class="row align-items-center h-90">
                    <div class="col-12 col-md-11 col-lg-10 mx-auto">
                      <div class="banner_contents">
                        <h1>Contact Us</h1>
                        <p>Get in touch with our team for any queries, support, or collaboration opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact__info__wrapper bg-lightBlue">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <div class="contact_info_card" data-aos="fade-up">
                <h2>Get in Touch</h2>
                <div class="contact_details">
                                     <div class="contact_item">
                     <h4>Email</h4>
                     <p><a href="mailto:info&#64;ashirvad.com">info&#64;ashirvad.com</a></p>
                     <p><a href="mailto:customercare&#64;ashirvad.com">customercare&#64;ashirvad.com</a></p>
                   </div>
                  <div class="contact_item">
                    <h4>Phone</h4>
                    <p><a href="tel:08028061000">080 28061000</a></p>
                    <p><a href="tel:08061342222">080 61342222</a></p>
                  </div>
                  <div class="contact_item">
                    <h4>Address</h4>
                    <p>Ashirvad Pipes Limited<br>
                    Plot No. 1, Phase 1, KIADB Industrial Area<br>
                    Malur, Kolar District, Karnataka - 563130</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-5 offset-lg-1">
              <div class="contact_form_card" data-aos="fade-up">
                <h2>Send us a Message</h2>
                <form class="contact_form">
                  <div class="form_group">
                    <input type="text" placeholder="Your Name" required>
                  </div>
                  <div class="form_group">
                    <input type="email" placeholder="Your Email" required>
                  </div>
                  <div class="form_group">
                    <input type="tel" placeholder="Your Phone">
                  </div>
                  <div class="form_group">
                    <select required>
                      <option value="">Select Inquiry Type</option>
                      <option value="product">Product Information</option>
                      <option value="support">Technical Support</option>
                      <option value="installation">Installation Services</option>
                      <option value="training">Training Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="form_group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <div class="form_group">
                    <button type="submit" class="btn-danger">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map__wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="map_container" data-aos="fade-up">
                <h2>Find Us</h2>
                <div class="map_placeholder">
                  <p>Interactive map will be embedded here</p>
                  <p>Location: Malur, Kolar District, Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    // Initialize any required data or services
  }
} 