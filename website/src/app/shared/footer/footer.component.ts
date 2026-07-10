import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>

<div class="container">

<div class="footer-grid">

<div>
  <div class="row">
<img src="/assets/Dunova.png" alt="DUNOVA" height="50px" width="50px">
<h3 >DUNOVA</h3>
</div>
<p>

AI systems that work like digital employees.

A Dune Company.

</p>

</div>

<div>

<h4>Services</h4>

<a routerLink="/services">Build</a>

<a routerLink="/services">Integrate & Run</a>

<a routerLink="/services">Advise & Enable</a>

</div>

<div>

<h4>Company</h4>

<a routerLink="/about">About</a>

<a routerLink="/work">Work</a>

<a routerLink="/contact">Contact</a>

</div>

<div>

<h4>Start</h4>
<a  routerLink="/contact">
Book a Call</a>

<a routerLink="/services">

All Services

</a>

</div>

</div>

<hr class="divider">

<div class="bottom">

<span>

©2026 DUNOVA SYSTEMS

</span>

<span>

SYS STATUS  →  OPERATIONAL

</span>

</div>

</div>

</footer>
  `,
  styles: [
    `

    footer{

background:#050606;

padding:80px 0 30px;

}

.footer-grid{

display:grid;

grid-template-columns:2fr 1fr 1fr 1fr;

gap:50px;

font-family:'Sora',sans-serif;

font-size:18px;


}

.footer-grid h3{
  color:white;

margin-bottom:5px;
}

.footer-grid h4{

color:#6A6350;

margin-bottom:20px;
font-family:'Michroma',sans-serif;

font-size:18px;
}

.footer-grid p{

color:#6A6350;

line-height:28px;


}

.footer-grid a{

display:block;

margin:10px 0;

color:#9A9078;

text-decoration:none;

}

.footer-grid a:hover{

color:#d0a935;

}

.bottom{

display:flex;

justify-content:space-between;

margin-top:30px;

color:#6A6350;

font-size:15px;

}
.divider{
  border-color:rgba(199, 153, 14, 0.1);

}
.row{

    display:flex;

    grid-template-columns:1fr 1fr;

    gap:10px;

    align-items:center;

}

@media(max-width:768px){

.footer-grid{

grid-template-columns:1fr;

}

.bottom{

flex-direction:column;

gap:15px;

}

}

    @media (max-width: 900px) { .container { grid-template-columns: 1fr; } }
    
    `
  ]
})
export class FooterComponent {
  year = new Date().getFullYear();
}

