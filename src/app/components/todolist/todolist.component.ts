import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/Message';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  messages: Message[];

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  selectMsg(id: string): void {
    this.router.navigateByUrl('/edit/' + id);
  }

  getMessages(): void {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.messages.reverse();
    });
  }

  delete(msg: Message): void {
    this.messages = this.messages.filter(h => h !== msg);
    this.messageService.deleteMessage(msg).subscribe();
  }
}
