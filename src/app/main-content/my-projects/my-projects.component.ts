import { Component, Input } from '@angular/core';
import { ProjectData } from './../interfaces/projects.interface'


@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
@Input() projectData!: ProjectData;

selectedProjectId: number = 1; 

selectProject(id: number) {
  this.selectedProjectId = id;
}

}
