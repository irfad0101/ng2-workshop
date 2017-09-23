import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Room} from "../../models/room";

@Component({
  selector: 'room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {

  hotelID: number;
  rooms: Room[];
  selectedRooms: Room[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.hotelID = params['id'];
      if (this.hotelID) {
        this.dataService.getRooms(this.hotelID).subscribe(data => {
          this.rooms = data;
        });
      }
    });
  }

  onRoomSelect(event) {
    this.selectedRooms.push(event);
    console.log('selected-room:', this.selectedRooms);
  }

  onRoomRemove(event) {
    if (this.selectedRooms && this.selectedRooms.length > 0) {
      for (let i = 0; i < this.selectedRooms.length; i++) {
        if (this.selectedRooms[i].id === event) {
          this.selectedRooms.splice(i, 1);
        }
      }
    }

    console.log('after:', this.selectedRooms);
  }
}
