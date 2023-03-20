import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navItems: NavItem[] = [
    { label: 'Home', route: '' },
    { label: 'Solutions', route: '' },
    { label: 'Portfolio', route: '' },
    { label: 'Academy', route: '' },
    { label: 'Contact Us', route: '' },
  ];

  isActive(link: string) {
    return this.router.url === link;
  }

  onNavItemClick(navItem: NavItem){
    this.navItems.forEach(item => {
      item.isSelected = false;
    });
    navItem.isSelected = true;
  }
}
