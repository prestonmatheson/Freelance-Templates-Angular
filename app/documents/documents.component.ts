import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'http://google.com',
    },
    {
      title: 'My Second Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'http://google.com',
    },
    {
      title: 'My Last Doc',
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://google.com',
      updated_at: '04/17/17',
      image_url: 'http://google.com',
    }
  ]
}

