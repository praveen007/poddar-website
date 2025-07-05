import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  template: `
    <section class="contact-cta">
      <h2>Contact Us</h2>
      <p>Ready to work with Astral? Reach out to our team today or visit our <a href="https://www.astralpipes.com/contact-us/" target="_blank">Contact Page</a>.</p>
      <a class="cta-btn" href="https://www.astralpipes.com/contact-us/" target="_blank">Get in Touch</a>
    </section>
  `,
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent {}
