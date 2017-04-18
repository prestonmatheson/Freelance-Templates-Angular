import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'https://static.pexels.com/photos/6415/apple-desk-office-working.jpg',
    },
    {
      title: 'My Second Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'https://static.pexels.com/photos/6415/apple-desk-office-working.jpg',
    },
    {
      title: 'My Last Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'https://static.pexels.com/photos/6415/apple-desk-office-working.jpg',
    }
  ]
}

