import './GridComponent.scss';
import './GridComponent.html';
import { GridComponentData } from './GridComponentData';

export default class GridComponent {

  constructor () {
    console.log('in GridComponent constructor');
  }

  onGridReady(event) {
    console.log('in ready event')
    this.gridCmp = event.detail.cmp
    this.gridCmp.setData(new GridComponentData(1).data)
  }

  renderer() {
   // console.log('in renderer')
    return '<span>hello</span>'

  //   return (

  //     <Grid title="Grid title" store={this.store}>





  //     <Column
  //       text="Fname"
  //       dataIndex="fName"
  //       flex={1}
  //     >
  //       <RendererCell renderer={this.renderer}/>
  //     </Column>

  // </Grid>

  //  )
  }


}
