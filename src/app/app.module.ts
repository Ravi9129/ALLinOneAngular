import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterpolationComponent } from './Binding Components/interpolation/interpolation.component';
import { EventComponent } from './Binding Components/event/event.component';
import { TwowaybindComponent } from './Binding Components/twowaybind/twowaybind.component';
import { NgmodelchangeComponent } from './Binding Components/ngmodelchange/ngmodelchange.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TempConvertorPipe } from './AllPipes/temp-convertor.pipe';
import { CustomDirectiveComponent } from './AllDirectives/custom-directive/custom-directive.component';
import { NgClassDirectiveComponent } from './AllDirectives/ng-class-directive/ng-class-directive.component';
import { NgIfDirectiveComponent } from './AllDirectives/ng-if-directive/ng-if-directive.component';
import { NgStyleDirectiveComponent } from './AllDirectives/ng-style-directive/ng-style-directive.component';
import { NgforDirctComponent } from './AllDirectives/ngfor-dirct/ngfor-dirct.component';
import { NgforNestedArrayComponent } from './AllDirectives/ngfor-nested-array/ngfor-nested-array.component';
import { SwitchDirectiveComponent } from './AllDirectives/switch-directive/switch-directive.component';
import { TrackByNgForComponent } from './AllDirectives/track-by-ng-for/track-by-ng-for.component';
import { ReactiveformsComponent } from './AllForms/reactiveforms/reactiveforms.component';
import { TemplateDrivenFComponent } from './AllForms/template-driven-f/template-driven-f.component';
import { AsyncPipeComponent } from './AllPipes/async-pipe/async-pipe.component';
import { CustomPipeComponent } from './AllPipes/custom-pipe/custom-pipe.component';
import { DatePipeComponent } from './AllPipes/date-pipe/date-pipe.component';
import { KeyUpValuePipeComponent } from './AllPipes/key-up-value-pipe/key-up-value-pipe.component';
import { MainpipeComponent } from './AllPipes/mainpipe/mainpipe.component';
import { CustomerDetailComponent } from './ParentChildTransfer/customer-detail/customer-detail.component';
import { CustomerListComponent } from './ParentChildTransfer/customer-list/customer-list.component';
import { CustomerComponent } from './childNestedComponent/customer/customer.component';
import { AllbindingsssComponent } from './AllScreens/Bindings/allbindingsss/allbindingsss.component';
import { AllDirectivessComponent } from './AllScreens/Directives/all-directivess/all-directivess.component';
import { HomeeComponent } from './AllScreens/Home/homee/homee.component';
import { AllhookssComponent } from './AllScreens/Hooks/allhookss/allhookss.component';
import { ParentChildssComponent } from './AllScreens/ParentChild/parent-childss/parent-childss.component';
import { AllpipessComponent } from './AllScreens/Pipes/allpipess/allpipess.component';
import { Child5Component } from './LifeCycleHooks/DoCheck/child5/child5.component';
import { Parent5Component } from './LifeCycleHooks/DoCheck/parent5/parent5.component';
import { Child3Component } from './LifeCycleHooks/OnInitOnDestroy/child3/child3.component';
import { Parent3Component } from './LifeCycleHooks/OnInitOnDestroy/parent3/parent3.component';
import { Child4Component } from './LifeCycleHooks/Onchanges/child4/child4.component';
import { Parent4Component } from './LifeCycleHooks/Onchanges/parent4/parent4.component';
import { Child2Component } from './LifeCycleHooks/lifecycle/child2/child2.component';
import { GrandchildComponent } from './LifeCycleHooks/lifecycle/grandchild/grandchild.component';
import { Parent2Component } from './LifeCycleHooks/lifecycle/parent2/parent2.component';
import { Child1Component } from './ParentChildComponentComunication/ChildToParent/child1/child1.component';
import { Parent1Component } from './ParentChildComponentComunication/ChildToParent/parent1/parent1.component';
import { ChildComponent } from './ParentChildComponentComunication/ParentToChild/child/child.component';
import { ParentComponent } from './ParentChildComponentComunication/ParentToChild/parent/parent.component';
import { AllformmssComponent } from './AllScreens/Forms/allformmss/allformmss.component';
import { ParentchildtransprojectComponent } from './AllScreens/ChildParentTransfer/parentchildtransproject/parentchildtransproject.component';
import { FormbulderrrComponent } from './AllForms/formbulderrr/formbulderrr.component';




@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    EventComponent,
    TwowaybindComponent,
    NgmodelchangeComponent,
    CustomerComponent,
    NgforDirctComponent,
    NgforNestedArrayComponent,
    SwitchDirectiveComponent,
    NgIfDirectiveComponent,
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    TrackByNgForComponent,
    CustomDirectiveComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    MainpipeComponent,
    CustomPipeComponent,
    TempConvertorPipe,
    DatePipeComponent,
    AsyncPipeComponent,
    KeyUpValuePipeComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    GrandchildComponent,
    Parent3Component,
    Child3Component,
    Parent4Component,
    Child4Component,
    Parent5Component,
    Child5Component,
    AllDirectivessComponent,
    AllpipessComponent,
    AllbindingsssComponent,
    AllhookssComponent,
    ParentChildssComponent,
    HomeeComponent,
    TemplateDrivenFComponent,
    ReactiveformsComponent,
    AllformmssComponent,
    ParentchildtransprojectComponent,
    FormbulderrrComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
