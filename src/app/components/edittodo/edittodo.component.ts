import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from '../../model/Message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  msg: Message;
  addNewMessage: boolean = false;
  @ViewChild('title') title;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.paramMap.get('id') !== null) {
      this.getMessage();
      this.addNewMessage = false;
    } else {
      this.addNewMessage = true;
    }
  }

  back(): void {
    this.router.navigateByUrl('/');
  }

  getMessage(): void {
      var id: number = +this.activeRoute.snapshot.paramMap.get('id');
      this.messageService.getMessage(id).subscribe(msg => this.msg = msg);
  }

  edit(): void {
    this.messageService.updateMessage(this.msg).subscribe(() => this.back());
  }

  create(title, text): void {
    var message: Message = {
      title: title,
      message: text
    }

    this.messageService.addMessage(message).subscribe(() => this.back());
  }
}
