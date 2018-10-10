import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../model/Message';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private msgsUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.msgsUrl);
  }

  getMessage(id: number): Observable<Message> {
    var url = `${this.msgsUrl}/edit/${id}`;
    return this.http.get<Message>(url);
  }

  updateMessage(msg: Message): Observable<any> {
    var url = `${this.msgsUrl}/edit/${msg.id}`;
    return this.http.put(url, msg, httpOptions);
  }

  addMessage(msg: Message): Observable<Message> {
    var url = `${this.msgsUrl}/edit`;
    return this.http.post<Message>(url, msg, httpOptions);
  }

  deleteMessage(msg: Message): Observable<Message> {
    var url = `${this.msgsUrl}/${msg.id}`;
    return this.http.delete<Message>(url, httpOptions);
  }
}
