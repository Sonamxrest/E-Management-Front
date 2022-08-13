import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-manageent-front';
  data
    = [];

  public constructor(private http: HttpClient) {

  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Walk Dog',
    'Stretch',
    'Code Stuff',
    'Drag Stuff',
    'Drop Stuff',
    'Run',
    'Walk'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  username = 'asd';
  password = 'asd';

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.data.push({
        balance: '$3,946.45',
        picture: 'http://placehold.it/32x32',
        age: 23,
        name: 'Bird Ramsey',
        gender: 'male',
        company: 'NIMON ' + i,
        email: 'birdramsey@nimon.com'
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  submit() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.http.post('http://localhost:8080/login', data , {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).subscribe((x) => {
      console.log(data);
    });
  }
}
