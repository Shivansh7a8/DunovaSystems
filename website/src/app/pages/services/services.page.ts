import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.css']
})
export class ServicesPage {

  buildServices: ServiceCard[] = [
    {
      icon: '/assets/b1(1).png',
      title: 'AI Automation Systems',
      description: 'AI-powered workflows that automate repetitive business processes, reduce manual effort, and improve operational efficiency.'
    },
    {
      icon: '/assets/b2.png',
      title: 'AI Agents & Digital Employees',
      description: 'Custom agents that perform business tasks including customer support, internal operations, research, reporting and decision assistance.'
    },
    {
      icon: '/assets/b3.png',
      title: 'AI Operating Systems',
      description: 'Centralized AI platforms that connect teams, data and applications into a unified intelligent workspace.'
    },
    {
      icon: '/assets/b4.png',
      title: 'Generative AI Applications',
      description: 'Secure chatbots, copilots, document assistants and knowledge systems built on modern LLMs.'
    },
    {
      icon: '/assets/b5.png',
      title: 'Custom AI Solutions',
      description: 'Tailor-made AI applications built around your workflows, compliance and business objectives.'
    },
    {
      icon: '/assets/b6.png',
      title: 'AI Product Development',
      description: 'From concept to deployment and continuous improvement of production-ready AI products.'
    }
  ];

  integrateServices: ServiceCard[] = [
    {
      icon: '/assets/r1.png',
      title: 'Enterprise AI Integration',
      description: 'Integrate ERP, CRM, HRMS, databases and APIs without disrupting operations.'
    },
    {
      icon: '/assets/r2.png',
      title: 'AI Infrastructure & Deployment',
      description: 'Cloud, hybrid and on-prem deployment with monitoring and governance.'
    },
    {
      icon: '/assets/r3.png',
      title: 'Workflow Intelligence',
      description: 'AI automation, analytics and real-time monitoring to optimize productivity.'
    },
    {
      icon: '/assets/r4.png',
      title: 'Managed AI Services',
      description: 'Continuous improvements, maintenance, governance and support.'
    }
  ];

  adviseServices: ServiceCard[] = [
    {
      icon: '/assets/c3.png',
      title: 'AI Consulting & Strategy',
      description: 'Identify opportunities, define roadmaps and execute enterprise AI transformation.'
    },
    {
      icon: '/assets/c4.png',
      title: 'AI Training & Adoption',
      description: 'Workshops, onboarding and change management to help teams adopt AI.'
    }
  ];
}