import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up-value-pipe',
  templateUrl: './key-up-value-pipe.component.html',
  styleUrls: ['./key-up-value-pipe.component.css']
})
export class KeyUpValuePipeComponent {

  breeds=
  {
    "corgi": ["cardigan"],
    "deerhound": ["scottish"],
    "bulldog": ["boston", "english", "french"],
    "mastiff": ["bull", "english", "tibetan"],
    "australian": ["shepherd"],
    "greyhound": ["italian"],
    "buhund": ["norwegian"],
    "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
    "bullterrier": ["staffordshire"],
  }
  
  orderClause = (a: KeyValue<number,[string]>, b: KeyValue<number,[string]>): number => {
    return a.value.length > b.value.length ? -1 : (a.value.length > b.value.length) ? 0 : 1  
  }
  
}
