import { Component } from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';
import { TabbedBoxComponent } from '../tabbed-box/tabbed-box.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemDetailComponent, TabbedBoxComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // Example product data
  product = {
    imageSrc: 'assets/OPVC-Pipe-Cluster-Image_Edit.png',
    title: 'CPVC PRO',
    subtitle: 'Hot & Cold Water Plumbing System',
    description: `In 1998, Poddar introduced CPVC pipes and fittings in India for the first time. Today, Poddar CPVC Pro pipes and fittings are produced using a unique CPVC Compound developed by Poddar in its state-of-the-art R&D facilities. These compounds are tested meticulously for various properties, including Dynamic Thermal Stability, Fusion, Torque, and other Rheological properties, ensuring exceptional processability and superior physical and mechanical characteristics. With a maximum service temperature of 93°C, our CPVC pipes and CPVC fittings surpass many international quality benchmarks and are known for`,
    features: [
      'The highest number of approvals NSF, UPC-1, and BIS',
      'Our CPVC Pipes and Fittings are ISI-certified',
      'A green product certified by GRIHA',
      'Meticulously formulated indigenous CPVC compound',
      'Widest product range of CPVC pipes and CPVC fittings',
      'State-of-the-art manufacturing plants'
    ],
    badgeText: '25 Year Warranty'
  };
  // Example tabs for tabbed-box
  productTabs = [
    {
      label: 'Features & Benefits',
      content: '<ul><li>High durability</li><li>Corrosion resistant</li><li>Easy installation</li></ul>'
    },
    {
      label: 'Standards & Specifications',
      content: '<p>Complies with IS 12345 and ASTM D1785. Suitable for potable water supply and industrial applications.</p>'
    },
    {
      label: 'FAQs',
      content: '<p><b>Q:</b> Is this product suitable for outdoor use?<br><b>A:</b> Yes, it is UV stabilized for outdoor installation.</p>'
    }
  ];

  onTabChanged(index: number) {
    // Optionally handle tab change event
    // console.log('Tab changed to:', index);
  }
}
