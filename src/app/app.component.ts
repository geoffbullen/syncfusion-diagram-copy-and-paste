import { Component, ViewChild } from '@angular/core';
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("diagram") 
  public diagram: DiagramComponent;

  title = 'syncfusion-diagram-copy-and-paste';

  public node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
    },
  };

  public created(args: Object): void {
    //Add Node
    this.diagram.add(this.node);
  }
}
