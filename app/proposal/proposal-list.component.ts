import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.prestonmatheson.com', 'Ruby on Rails', 150, 120, 15, 'pmphoto123@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://portfolio.prestonmatheson.com', 'Ruby on Rails', 150, 120, 15, 'pmphoto123@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://portfolio.prestonmatheson.com', 'Ruby on Rails', 150, 120, 15, 'pmphoto123@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}